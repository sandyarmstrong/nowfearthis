import json
import os
import re
import sys
import urllib.request

# TODO: Support environments too
if len(sys.argv) != 3:
    sys.exit("Usage: convertSRD.py {adversariesJsonUrl} {environmentsJsonUrl}")

srdAdversariesUrl = sys.argv[1]
print("Loading adversaries from", srdAdversariesUrl, "...")

with urllib.request.urlopen(srdAdversariesUrl) as url:
    srdAdversaries = json.load(url)

srdEnvironmentsUrl = sys.argv[2]
print("Loading adversaries from", srdEnvironmentsUrl, "...")

with urllib.request.urlopen(srdEnvironmentsUrl) as url:
    srdEnvironments = json.load(url)

# Horde type is usually of the form "Horde ({count}/HP)"
perHpRegex = re.compile("(.+)\s+\((\d+)/HP\)\s*")

items = []

def loadEntry(entry, category):
    print('Loading', entry.get('name'))

    entryType = entry.get('type')

    # Difficulty is not always a number, see 'Special' in some environments
    difficulty = entry.get('difficulty')
    if difficulty.isdecimal():
        difficulty = int(difficulty)

    # Initial common fields
    item = {
        'name': entry.get('name'),
        'originalName': entry.get('name'), # TODO: Keep this?
        'source': "SRD",
        'tier': int(entry.get('tier')),
        'category': category,
        'description': entry.get('description'),
        'difficulty': difficulty,
        'type': entryType, # Put 'type' last so 'countPerHp' can follow
    }

    # Category-specific fields
    if category == 'Adversary':
        # Most thresholds are in a form like '6/11', but
        # minions have 'None', and some adversaries like
        # tiny oozes have '4/none'.
        thresholds = [None, None]
        srdThresholds = entry.get('thresholds')
        if "/" in srdThresholds:
            splitThresholds = srdThresholds.split('/')
            for i in range(2):
                if splitThresholds[i].isdecimal():
                    thresholds[i] = int(splitThresholds[i])

        # Extract countPerHp if it's set. The SRD only uses
        # this for Hordes, but support for all types here just in case.
        countPerHp = 1
        m = perHpRegex.match(entryType)
        if m:
            entryType = m.group(1)
            countPerHp = int(m.group(2))

        item['countPerHp'] = countPerHp
        item['motivesAndTactics'] = entry.get('motives_and_tactics')
        item['hp'] = int(entry.get('hp'))
        item['stress'] = int(entry.get('stress'))
        item['majorThreshold'] = thresholds[0]
        item['severeThreshold'] = thresholds[1]
        item['attackModifier'] = entry.get('atk')
        item['attackDescription'] = entry.get('attack')
        item['attackRange'] = entry.get('range')
        item['attackDamage'] = entry.get('damage')
        item['experience'] = entry.get('experience', None)
        item['features'] = entry.get('feats')
    elif category == "Environment":
        item['impulses'] = entry.get('impulses')
        # Could be 'Any' or various abbreviations instead of exact name matches
        item['potential_adversaries'] = entry.get('potential_adversaries')

    # Final common fields
    # TODO: ? Env feats may have questions at the end that could be extracted and styled differently. JSON wraps them in `*`.
    item['features'] = entry.get('feats')

    items.append(item)


for srdAdversary in srdAdversaries:
    loadEntry(srdAdversary, "Adversary")

for srdEnvironment in srdEnvironments:
    loadEntry(srdEnvironment, "Environment")

thisFileDirectory = os.path.dirname(os.path.realpath(__file__))
adversariesOutputPath = os.path.join(thisFileDirectory, '..', 'src', 'adversaries.js')

with open(adversariesOutputPath, 'w') as f:
    f.write("// Courtesy of ")
    f.write(srdAdversariesUrl)
    f.write("\n")
    f.write("const srdAdversaries = ")
    f.write(json.dumps(items, indent=2))
    f.write(";")