import json
import os
import re
import sys
import urllib.request

# TODO: Support environments too
if len(sys.argv) != 2:
    sys.exit("Usage: convertSRD.py {adversariesJsonUrl}")

srdAdversariesUrl = sys.argv[1]
print("Loading adversaries from", srdAdversariesUrl, "...")

with urllib.request.urlopen(srdAdversariesUrl) as url:
    srdAdversaries = json.load(url)

# Horde type is usually of the form "Horde ({count}/HP)"
perHpRegex = re.compile("(.+)\s+\((\d+)/HP\)\s*")

adversaries = []

for srdAdversary in srdAdversaries:
    print('Loading', srdAdversary.get('name'))

    # Most thresholds are in a form like '6/11', but
    # minions have 'None', and some adversaries like
    # tiny oozes have '4/none'.
    thresholds = [None, None]
    srdThresholds = srdAdversary.get('thresholds')
    if "/" in srdThresholds:
        splitThresholds = srdThresholds.split('/')
        for i in range(2):
            if splitThresholds[i].isdecimal():
                thresholds[i] = int(splitThresholds[i])

    # Extract countPerHp if it's set. The SRD only uses
    # this for Hordes, but support for all types here just in case.
    countPerHp = 1
    adversaryType = srdAdversary.get('type')
    m = perHpRegex.match(adversaryType)
    if m:
        adversaryType = m.group(1)
        countPerHp = int(m.group(2))

    adversaries.append({
        'name': srdAdversary.get('name'),
        'originalName': srdAdversary.get('name'), # TODO: Keep this?
        'source': "SRD",
        'tier': int(srdAdversary.get('tier')),
        'type': adversaryType,
        'countPerHp': countPerHp,
        'description': srdAdversary.get('description'),
        'motivesAndTactics': srdAdversary.get('motives_and_tactics'),
        'difficulty': int(srdAdversary.get('difficulty')),
        'hp': int(srdAdversary.get('hp')),
        'stress': int(srdAdversary.get('stress')),
        'majorThreshold': thresholds[0],
        'severeThreshold': thresholds[1],
        'attackModifier': srdAdversary.get('atk'),
        'attackDescription': srdAdversary.get('attack'),
        'attackRange': srdAdversary.get('range'),
        'attackDamage': srdAdversary.get('damage'),
        'experience': srdAdversary.get('experience', None),
        'features': srdAdversary.get('feats')
    })

thisFileDirectory = os.path.dirname(os.path.realpath(__file__))
adversariesOutputPath = os.path.join(thisFileDirectory, '..', 'src', 'adversaries.js')

with open(adversariesOutputPath, 'w') as f:
    f.write("// Courtesy of ")
    f.write(srdAdversariesUrl)
    f.write("\n")
    f.write("const srdAdversaries = ")
    f.write(json.dumps(adversaries, indent=2))
    f.write(";")