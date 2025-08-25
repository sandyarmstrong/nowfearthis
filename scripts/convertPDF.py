import json
import os
import re
import sys
import urllib.request
from pypdf import PdfReader
from enum import Enum

if len(sys.argv) != 2:
    sys.exit("Usage: convertPDF.py {pathToPDF}")

pdfUrl = sys.argv[1]
print("Loading adversaries from", pdfUrl, "...")

pdfReader = PdfReader(pdfUrl)

# Horde type is usually of the form "Horde ({count}/HP)"
perHpRegex = re.compile(r"(.+)\s+\((\d+)/HP\)\s*")
tierTypeRegex = re.compile(r"^\s*Tier (\d+) (\S+)\s*$")
motivesOrImpulsesRegex = re.compile(r"^\s*(Motives & Tactics|Impulses):\s*(.+)$")
difficultyLineRegex = re.compile(r"^\s*Difficulty:\s*(\d+)(?:[\s|]+Thresholds:\s*(\S+)[\s|]+HP:\s*(\d+)(?:-\d+)?[\s|]+Stress:\s*(\d+))?$")
attackLineRegex = re.compile(r"^\s*ATK:\s*([^|]+)[\s|]+(.+)\:\s*([^|]+)[\s|]+([^|]+)$")
experienceLineRegex = re.compile(r"^\s*(?:Experience|Potential Adversaries):\s*(.+)\s*$")
featureLineRegex = re.compile(r"^([^\:]+)\:\s*(.+)$")

items = []

class ParsingState(Enum):
    LookingForStatBlock = 1
    BuildingDescription = 2
    BuildingDifficulty = 3
    BuildingAttack = 4
    BuildingExperienceAndFeatures = 5

def loadPage(pageText):
    lastLine = ""
    lastLineIsFirstFeatureLine = False
    state = ParsingState.LookingForStatBlock
    currentItem = {}

    for line in pageText.splitlines():
        features = currentItem.get('features', [])

        m = tierTypeRegex.match(line)
        if m:
            pendingFeatureTextLine = ""
            state = ParsingState.BuildingDescription
            name = lastLine.strip()
            currentItem = {
                'name': name,
                'originalName': name,
                'source': "Custom",
                'tier': int(m.group(1)),
                'type': m.group(2),
                'category': "Adversary",
            }
            items.append(currentItem)
            continue

        match state:
            case ParsingState.BuildingDescription:
                m = motivesOrImpulsesRegex.match(line)
                if m:
                    key = 'motivesAndTactics'
                    if m.group(1) == 'Impulses':
                        key = 'impulses'
                        currentItem['category'] = "Environment"
                    currentItem[key] = m.group(2).strip()
                    state = ParsingState.BuildingDifficulty
                else:
                    description = currentItem.get('description','')
                    if len(description) > 0:
                        description += " "
                    description += line.strip()
                    currentItem['description'] = description
            case ParsingState.BuildingDifficulty:
                m = difficultyLineRegex.match(line)
                if m:
                    currentItem['difficulty'] = int(m.group(1))
                    if currentItem['category'] == "Adversary":
                        # Most thresholds are in a form like '6/11', but
                        # minions have 'None', and some adversaries like
                        # tiny oozes have '4/none'.
                        thresholds = [None, None]
                        pdfThresholds = m.group(2)
                        if "/" in pdfThresholds:
                            splitThresholds = pdfThresholds.split('/')
                            for i in range(2):
                                if splitThresholds[i].isdecimal():
                                    thresholds[i] = int(splitThresholds[i])
                        currentItem['majorThreshold'] = thresholds[0]
                        currentItem['severeThreshold'] = thresholds[1]

                        currentItem['hp'] = int(m.group(3))
                        currentItem['stress'] = int(m.group(4))
                        state = ParsingState.BuildingAttack
                    else:
                        state = ParsingState.BuildingExperienceAndFeatures
                else:
                    if currentItem['category'] == "Adversary":
                        currentItem['motivesAndTactics'] += " " + line.strip()
                    else:
                        currentItem['impulses'] += " " + line.strip()
            case ParsingState.BuildingAttack:
                m = attackLineRegex.match(line)
                if m:
                    currentItem['attackModifier'] = m.group(1).strip()
                    currentItem['attackDescription'] = m.group(2).strip()
                    currentItem['attackRange'] = m.group(3).strip()
                    currentItem['attackDamage'] = m.group(4).strip()
                    state = ParsingState.BuildingExperienceAndFeatures
            case ParsingState.BuildingExperienceAndFeatures:
                if not('experience' in currentItem or 'potentialAdversaries' in currentItem) and not('features' in currentItem):
                    m = experienceLineRegex.match(line)
                    if m:
                        if currentItem['category'] == "Adversary":
                            currentItem['experience'] = m.group(1).strip()
                        else:
                            currentItem['potentialAdversaries'] = m.group(1).strip()
                        continue

                features = currentItem.get('features', [])
                if not(lastLineIsFirstFeatureLine) and len(features) > 0:
                    features[-1]['text'] += " " + lastLine.strip()
                lastLineIsFirstFeatureLine = False
                m = featureLineRegex.match(line)
                if m:
                    features.append({
                        'name': m.group(1).strip(),
                        'text': m.group(2).strip(),
                    })
                    currentItem['features'] = features
                    lastLineIsFirstFeatureLine = True
                elif len(features) == 0 and ('experience' in currentItem or 'potentialAdversaries' in currentItem) and line.strip() != "FEATURES":
                    if currentItem['category'] == "Adversary":
                        currentItem['experience'] += " " + line.strip()
                    else:
                        currentItem['potentialAdversaries'] += " " + line.strip()

        lastLine = line

for page in pdfReader.pages:
    loadPage(page.extract_text())

items.sort(key=lambda statBlock: statBlock['name'])

customContainer = {
    'custom' : {
        'statBlocks': items,
    },
}

thisFileDirectory = os.path.dirname(os.path.realpath(__file__))
outputPath = os.path.join(thisFileDirectory, '..', 'src', 'pdfStatBlocks.json')

with open(outputPath, 'w') as f:
    f.write(json.dumps(customContainer, indent=2))