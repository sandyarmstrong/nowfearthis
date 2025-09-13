from argparse import ArgumentParser
import json
import re
from pypdf import PdfReader
from enum import Enum

parser = ArgumentParser()
parser.add_argument('inputPath', help="The PDF file to parse")
parser.add_argument('outputPath', help="File path to write importable JSON content to (or JS if --jsVar specified)")
parser.add_argument('--source', '-s', default="Custom")
parser.add_argument('--pages', '-p', default="1-", help="Optional pages pattern like: 2-4,8,10-")
parser.add_argument('--jsVar', '-j', help="Specify to output JS instead of JSON, storing the list of stat blocks directly in named variable")
parser.add_argument('--debug', '-d', action="store_true")
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

pdfUrl = args.inputPath
print("Loading stat blocks from", pdfUrl, "...")

pdfReader = PdfReader(pdfUrl)

# Horde type is usually of the form "Horde ({count}/HP)"
perHpRegex = re.compile(r"(.+)\s+\((\d+)/HP\)\s*")
tierTypeRegex = re.compile(r"^\s*Tier (\d+) (\S.+\S)\s*$")
motivesOrImpulsesRegex = re.compile(r"^\s*(Motives & Tactics|Impulses):\s*(.+)$")
# "Diffi\s*culty" is something that happens frequently in SRD
difficultyLineRegex = re.compile(r"^\s*Diffi\s*culty:\s*([^|]+)(?:[\s|]+Thresholds:\s*(\S+)[\s|]+HP:\s*(\d+)(?:-\d+)?[\s|]+Stress:\s*(\d+))?\s*$")
attackLineRegex = re.compile(r"^\s*ATK:\s*([^|]+)[\s|]+(.+)\:\s*([^|]+)[\s|]+([^|]+)$")
experienceLineRegex = re.compile(r"^\s*(?:Experience|Potential Adversaries):\s*(.+)\s*$")
# TODO: Split out feature type (action, reaction, or passive)?
#       This pattern enforces a dash in the feature "name", but
#       splitting could allow a more semantic representation...
featureLineRegex = re.compile(r"^([^\:]+-[^\:]+)\:\s*(.*)$")

def fixName(name):
    makeLowerCase = False
    fixedName = ""
    for c in name:
        if c.isspace() or c == '-':
            fixedName += c
            makeLowerCase = False
        elif not(makeLowerCase):
            fixedName += c
            makeLowerCase = True
        else:
            fixedName += c.lower()
    replacements = [
        (' Of ', ' of '),
        (' The ', ' the '),
        ('A V Arice', 'Avarice'),
        ('Adul T', 'Adult'),
        ('Ca Ve', 'Cave'),
        ('Cul T', 'Cult'),
        ('Dry Ad', 'Dryad'),
        ('Flickerfl Y', 'Flickerfly'),
        ('Mol Ten', 'Molten'),
        ('Roy Al', 'Royal'),
        ('Syl V An', 'Sylvan'),
        ('Ta Vern', 'Tavern'),
        ('V Ampire', 'Vampire'),
        ('V Aul T', 'Vault'),
    ]
    for r in replacements:
        fixedName = fixedName.replace(r[0], r[1])
    return fixedName

def deunicodeString(string):
    # Also to consider:
    # \u2014 - emdash
    # \u2018 - left single quote `
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
        ('/uni00A0', ' '),
        ('/period.tab', '.'),
        ('/hyphen.tab', '-'),
        ('/comma.tab', ','),
        ('/one.tnum', '1'),
        ('/two.tnum', '2'),
        ('/three.tnum', '3'),
        ('/four.tnum', '4'),
        ('/five.tnum', '5'),
        ('/six.tnum', '6'),
        ('/seven.tnum', '7'),
        ('/eight.tnum', '8'),
        ('/nine.tnum', '9'),
        ('/zero.tnum', '0'),
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
    if args.debug:
        print(pageText)
    lastLine = ""
    lastLastLine = ""
    lastLineIsFirstFeatureLine = False
    state = ParsingState.LookingForStatBlock
    currentItem = {}

    # Add an extra line with a single space so the real final line gets
    # processed correctly without any extra work.
    pageText += '\n '

    for line in pageText.splitlines():
        line = deunicodeString(line).strip()
        # Also get rid of weird extra spaces
        line = line.replace("   ", "").replace("  ", "")

        # Avoid appending SRD page number text (usually appears in the form "{pageNumber}\nDaggerheart SRD")
        if line == "Daggerheart SRD":
            lastLine = ""
            continue
        # Except the Sept 2025 update has single-line entries like "105104 Daggerheart SRD Daggerheart SRD" instead
        elif line.endswith("Daggerheart SRD"):
            continue

        features = currentItem.get('features', [])

        m = tierTypeRegex.match(line)
        if m:
            state = ParsingState.BuildingDescription
            # TODO: Better multi-line name detection...for now only do this for SRD
            if args.source == "SRD" and len(lastLastLine) > 0 and lastLastLine == lastLastLine.upper() and not(lastLastLine.endswith(')') or '|' in lastLastLine):
                name = lastLastLine + " " + lastLine
            else:
                name = lastLine
            name = fixName(name)

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
                'source': args.source,
                'tier': int(m.group(1)),
                'category': "Adversary",
                'type': entryType,
                'countPerHp': countPerHp,
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
                        del currentItem['countPerHp']
                    currentItem[key] = m.group(2).strip()
                    state = ParsingState.BuildingDifficulty
                else:
                    description = currentItem.get('description','')
                    if len(description) > 0:
                        description += " "
                    description += line
                    currentItem['description'] = description
            case ParsingState.BuildingDifficulty:
                m = difficultyLineRegex.match(line)
                if m:
                    difficulty = m.group(1).strip()
                    if difficulty.isdecimal():
                        difficulty = int(difficulty)
                    currentItem['difficulty'] = difficulty
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
                        currentItem['motivesAndTactics'] += " " + line
                    else:
                        currentItem['impulses'] += " " + line
            case ParsingState.BuildingAttack:
                m = attackLineRegex.match(line)
                if m:
                    currentItem['attackModifier'] = m.group(1).strip()
                    currentItem['attackDescription'] = m.group(2).strip()
                    currentItem['attackRange'] = m.group(3).strip()
                    currentItem['attackDamage'] = m.group(4).strip()
                    state = ParsingState.BuildingExperienceAndFeatures
            case ParsingState.BuildingExperienceAndFeatures:
                # Ensure adversaries have experience set, even to null,
                # for compat with old converter (not actually needed but helps with diffs)
                if currentItem['category'] == "Adversary":
                    currentItem['experience'] = currentItem.get('experience', None)
                if not(('experience' in currentItem and currentItem['experience']) or 'potentialAdversaries' in currentItem) and not('features' in currentItem):
                    m = experienceLineRegex.match(line)
                    if m:
                        if currentItem['category'] == "Adversary":
                            currentItem['experience'] = m.group(1).strip()
                        else:
                            currentItem['potentialAdversaries'] = m.group(1).strip()
                        continue

                features = currentItem.get('features', [])
                # TODO: Try to detect if a feature has intentional line breaks,
                #       e.g. bullet points. (For now, fixing up bullet points later)
                # TODO: Better support for feature names that are longer than a line
                if not(lastLineIsFirstFeatureLine) and len(features) > 0 and len(lastLine) > 0:
                    separator = " "
                    questionStarts = [
                        "Are ",
                        "Did ",
                        "Do ",
                        "Have ",
                        "How ",
                        "Is ",
                        "What ",
                        "Where ",
                        "Which ",
                        "Who ",
                        "Why ",
                        "Will ",
                    ]
                    for q in questionStarts:
                        if lastLine.startswith(q):
                            separator = "\n\n"
                            break
                    features[-1]['text'] = (features[-1]['text'] + separator + lastLine).strip()
                lastLineIsFirstFeatureLine = False
                m = featureLineRegex.match(line)
                if m and not(line[0] == '\u2022'):
                    features.append({
                        'name': m.group(1).strip(),
                        'text': m.group(2).strip(),
                    })
                    currentItem['features'] = features
                    lastLineIsFirstFeatureLine = True
                elif len(features) == 0 and ('experience' in currentItem or 'potentialAdversaries' in currentItem) and line != "FEATURES":
                    if currentItem['category'] == "Adversary":
                        experience = currentItem['experience']
                        if not experience:
                            experience = line
                        else:
                            experience += " " + line
                        currentItem['experience'] = experience
                    else:
                        currentItem['potentialAdversaries'] += " " + line

                # Stop reading feature lines in case of art titles
                if line != "FEATURES" and (line.upper() == line or line.startswith("Art by")):
                    state = ParsingState.LookingForStatBlock

        if len(line) == 0:
            state = ParsingState.LookingForStatBlock
        lastLastLine = lastLine
        lastLine = line

pageNum = 1
for page in pdfReader.pages:
    if pageRanges.contains(pageNum):
        loadPage(page.extract_text())
    pageNum += 1

items.sort(key=lambda statBlock: statBlock['name'])

def getJsonOutput(obj):
    # Easier to convert unicode bullets here
    # TODO: Yeah, except this doesn't help with knowing when
    #       the last bullet ends. The rest of the feature text
    #       may end up appended to the last bullet.
    replacements = [
        ('\\u2022', '\\n-'),
        ('T ', 'T'),
        ('Off- ', 'Off - '),
        ('offof', 'off of'),
        ('offthe', 'off the'),
        ('Offthe', 'Off the'),
        ('offtheir', 'off their'),
        ('offfrom', 'off from'),
        ('offheads', 'off heads'),
        ('offinterlopers', 'off interlopers'),
    ]
    output = json.dumps(obj, indent=2)
    for r in replacements:
        output = output.replace(r[0], r[1])
    return output

outputPath = args.outputPath
print("Saving output to", outputPath, "...")
with open(outputPath, 'w') as f:
    if args.jsVar:
        f.write("const " + args.jsVar + " = ")
        f.write(getJsonOutput(items))
        f.write(";")
    else:
        f.write(getJsonOutput({
            'custom' : {
                'statBlocks': items
                }
            }))