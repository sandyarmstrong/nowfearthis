from argparse import ArgumentParser
import json
import re
from pypdf import PdfReader
from enum import Enum

parser = ArgumentParser()
parser.add_argument('inputPDFPath')
parser.add_argument('outputJSONPath')
parser.add_argument('--pages', '-p', default="1-", help="Optional pages pattern like: 2-4,8,10-")
args = parser.parse_args()

class PageRanges:
    ranges = []
    def contains(self, pageNumber):
        for range in self.ranges:
            if pageNumber >= range[0] and (range[1] is None or pageNumber <= range[1]):
                return True
        return False
    def __init__(self, pattern):
        currentRange = None
        buildingStart = False
        buildingEnd = False
        count = 0
        for c in pattern:
            count += 1
            if c.isspace():
                raise ValueError("Spaces are not allowed in page range patterns")
            if c.isdigit():
                if currentRange is None:
                    page = int(c)
                    currentRange = (page, page)
                    buildingStart = True
                elif buildingStart:
                    page = currentRange[0]*10 + int(c)
                    currentRange = (page, page)
                elif buildingEnd:
                    currentEnd = 0 if currentRange[1] is None else currentRange[1]
                    currentRange = (currentRange[0], currentEnd*10 + int(c))
            elif c == ',':
                if currentRange and currentRange[1] is None:
                    raise ValueError("Unterminated ranges must be the last range in the pattern" + str(count))
                elif currentRange is None:
                    raise ValueError("Commas are only allowed following ranges")
                else:
                    self.ranges.append(currentRange)
                    currentRange = None
                    buildingStart = False
                    buildingEnd = False
            elif c == '-':
                if not(buildingStart):
                    raise ValueError("Dashes are only allowed after range start")
                buildingStart = False
                buildingEnd = True
                currentRange = (currentRange[0], None)
        if currentRange:
            self.ranges.append(currentRange)

pageRanges = PageRanges(args.pages)

pdfUrl = args.inputPDFPath
print("Loading adversaries from", pdfUrl, "...")

pdfReader = PdfReader(pdfUrl)

# Horde type is usually of the form "Horde ({count}/HP)"
perHpRegex = re.compile(r"(.+)\s+\((\d+)/HP\)\s*")
tierTypeRegex = re.compile(r"^\s*Tier (\d+) (\S.+\S)\s*$")
motivesOrImpulsesRegex = re.compile(r"^\s*(Motives & Tactics|Impulses):\s*(.+)$")
difficultyLineRegex = re.compile(r"^\s*Diffi\s*culty:\s*(\d+)(?:[\s|]+Thresholds:\s*(\S+)[\s|]+HP:\s*(\d+)(?:-\d+)?[\s|]+Stress:\s*(\d+))?\s*$")
attackLineRegex = re.compile(r"^\s*ATK:\s*([^|]+)[\s|]+(.+)\:\s*([^|]+)[\s|]+([^|]+)$")
experienceLineRegex = re.compile(r"^\s*(?:Experience|Potential Adversaries):\s*(.+)\s*$")
featureLineRegex = re.compile(r"^([^\:]+)\:\s*(.+)$")

def fixNameCase(name):
    makeLowerCase = False
    fixedName = ""
    for c in name:
        if c.isspace():
            fixedName += c
            makeLowerCase = False
        elif not(makeLowerCase):
            fixedName += c
            makeLowerCase = True
        else:
            fixedName += c.lower()
    return fixedName

def deunicodeString(string):
    # Also to consider:
    # \u2014 - emdash
    # \u2022 - bullet
    replacements = [
        ('\u00a0', ' '),
        ('\u2019', '\''),
        ('\u201c', '"'),
        ('\u201d', '"'),
        ('\u2212', '-'),
        ('\ue53f', '0'),
        ('\ue541', '1'),
        ('\ue542', '2'),
        ('\ue543', '3'),
        ('\ue544', '4'),
        ('\ue545', '5'),
        ('\ue546', '6'),
        ('\ue547', '7'),
        ('\ue548', '8'),
        ('\ue549', '9'),
        ('\ufb00', 'ff'),
        ('\ufb01', 'fi'),
        ('\ufb02', 'fl'),
        ('\ufb03', 'ffi'),
    ]
    for pair in replacements:
        string = string.replace(pair[0], pair[1])
    return string

class ParsingState(Enum):
    LookingForStatBlock = 1
    BuildingDescription = 2
    BuildingDifficulty = 3
    BuildingAttack = 4
    BuildingExperienceAndFeatures = 5

items = []

def loadPage(pageText):
    lastLine = ""
    lastLineIsFirstFeatureLine = False
    state = ParsingState.LookingForStatBlock
    currentItem = {}

    # Add an extra line with a single space so the real final line gets
    # processed correctly without any extra work.
    pageText += '\n '

    for line in pageText.splitlines():
        line = deunicodeString(line)
        features = currentItem.get('features', [])

        m = tierTypeRegex.match(line)
        if m:
            pendingFeatureTextLine = ""
            state = ParsingState.BuildingDescription
            name = fixNameCase(lastLine.strip())

            # Extract countPerHp if it's set. The SRD only uses
            # this for Hordes, but support for all types here just in case.
            entryType = m.group(2)
            countPerHp = 1
            m2 = perHpRegex.match(entryType)
            if m2:
                entryType = m2.group(1)
                countPerHp = int(m2.group(2))

            currentItem = {
                'name': name,
                'originalName': name,
                'source': "Custom",
                'tier': int(m.group(1)),
                'type': entryType,
                'countPerHp': countPerHp,
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
                # TODO: Try to detect if a feature has intentional line breaks,
                #       e.g. bullet points.
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

pageNum = 1
for page in pdfReader.pages:
    if pageRanges.contains(pageNum):
        loadPage(page.extract_text())
    pageNum += 1

items.sort(key=lambda statBlock: statBlock['name'])

customContainer = {
    'custom' : {
        'statBlocks': items,
    },
}

# thisFileDirectory = os.path.dirname(os.path.realpath(__file__))
# outputPath = os.path.join(thisFileDirectory, '..', 'src', 'pdfStatBlocks.json')
outputPath = args.outputJSONPath

with open(outputPath, 'w') as f:
    f.write(json.dumps(customContainer, indent=2))