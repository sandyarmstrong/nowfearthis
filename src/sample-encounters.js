const sampleState = {
    "encounters": [
        {
            "name": "Escaping Corruption",
            "playerTier": 1,
            "playerCount": 3,
            "targetBattlePoints": 11,
            "statBlocks": [
                {
                    "name": "Winged Salamander",
                    "originalName": "Minor Fire Elemental",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Solo",
                    "countPerHp": 1,
                    "description": "A living flame the size of a large bonfire.",
                    "motivesAndTactics": "Encircle enemies, grow in size, intimidate, start fires",
                    "difficulty": 13,
                    "hp": 9,
                    "stress": 3,
                    "majorThreshold": 7,
                    "severeThreshold": 15,
                    "attackModifier": "+3",
                    "attackDescription": "Elemental Blast",
                    "attackRange": "Far",
                    "attackDamage": "1d10+4 mag",
                    "experience": "",
                    "features": [
                        {
                            "name": "Relentless (2) - Passive",
                            "text": "The Elemental can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
                        },
                        {
                            "name": "Scorched Earth - Action",
                            "text": "Mark a Stress to choose a point within Far range. The ground within Very Close range of that point immediately bursts into flames. All creatures within this area must make an Agility Reaction Roll. Targets who fail take 2d8 magic damage from the flames. Targets who succeed take half damage."
                        },
                        {
                            "name": "Explosion - Action",
                            "text": "Spend a Fear to erupt in a fiery explosion. Make an attack against all targets within Close range. Targets the Elemental succeeds against take 1d8 magic damage and are knocked back to Far range."
                        },
                        {
                            "name": "Consume Kindling - Reaction",
                            "text": "Three times per scene, when the Elemental moves on objects that are highly flammable, consume them to clear a HP or a Stress."
                        },
                        {
                            "name": "Momentum - Reaction",
                            "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Winged Salamander #1",
                            "hpMarked": 6,
                            "stressMarked": 2,
                            "conditions": [
                                "Vulnerable"
                            ]
                        }
                    ]
                },
                {
                    "name": "Pirate Captain",
                    "originalName": "Pirate Captain",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Leader",
                    "countPerHp": 1,
                    "description": "A charismatic sea dog with an impressive hat, eager to raid and plunder.",
                    "motivesAndTactics": "Command, make 'em walk the plank, plunder, raid",
                    "difficulty": 14,
                    "hp": 7,
                    "stress": 5,
                    "majorThreshold": 7,
                    "severeThreshold": 14,
                    "attackModifier": "+1",
                    "attackDescription": "Cutlass",
                    "attackRange": "Melee",
                    "attackDamage": "1d12+2 phy",
                    "experience": "Commander +2, Sailor +3",
                    "features": [
                        {
                            "name": "Swashbuckler - Passive",
                            "text": "When the Captain marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
                        },
                        {
                            "name": "Reinforcements - Action",
                            "text": "Once per scene, mark a Stress to summon a Pirate Raiders Horde, which appears at Far range."
                        },
                        {
                            "name": "No Quarter - Action",
                            "text": "Spend a Fear to choose a target who has three or more Pirates within Melee range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a Presence Reaction Roll. On a failure, the target marks 1d4+1 Stress. On a success, they must mark a Stress."
                        },
                        {
                            "name": "Momentum - Reaction",
                            "text": "When the Captain makes a successful attack against a PC, you gain a Fear."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Corrupted Captain #1",
                            "hpMarked": 4,
                            "stressMarked": 1,
                            "conditions": [
                                "Restrained"
                            ]
                        }
                    ]
                },
                {
                    "name": "Pirate Raiders",
                    "originalName": "Pirate Raiders",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Horde",
                    "countPerHp": 3,
                    "description": "Seafaring scoundrels moving in a ravaging pack.",
                    "motivesAndTactics": "Gang up, plunder, overwhelm",
                    "difficulty": 12,
                    "hp": 4,
                    "stress": 3,
                    "majorThreshold": 5,
                    "severeThreshold": 11,
                    "attackModifier": "+1",
                    "attackDescription": "Cutlass",
                    "attackRange": "Melee",
                    "attackDamage": "1d8+2 phy",
                    "experience": "Sailor +3",
                    "features": [
                        {
                            "name": "Horde (1d4+1) - Passive",
                            "text": "When the Raiders have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
                        },
                        {
                            "name": "Swashbuckler - Passive",
                            "text": "When the Raiders mark 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Corrupted Raiders #1",
                            "hpMarked": 3,
                            "stressMarked": 0
                        }
                    ]
                },
                {
                    "name": "Skeleton Archer",
                    "originalName": "Skeleton Archer",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Ranged",
                    "countPerHp": 1,
                    "description": "A fragile skeleton with a shortbow and arrows.",
                    "motivesAndTactics": "Perforate distracted targets, play dead, steal skin",
                    "difficulty": 9,
                    "hp": 3,
                    "stress": 2,
                    "majorThreshold": 4,
                    "severeThreshold": 7,
                    "attackModifier": "+2",
                    "attackDescription": "Shortbow",
                    "attackRange": "Far",
                    "attackDamage": "1d8+1 phy",
                    "experience": null,
                    "features": [
                        {
                            "name": "Opportunist - Passive",
                            "text": "When two or more adversaries are within Very Close range of a creature, all damage they each deal to that creature is doubled."
                        },
                        {
                            "name": "Deadly Shot - Action",
                            "text": "Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Skeleton Archer #1",
                            "hpMarked": 3,
                            "stressMarked": 0
                        }
                    ]
                },
                {
                    "name": "Skeleton Dredge",
                    "originalName": "Skeleton Dredge",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Minion",
                    "countPerHp": 1,
                    "description": "A clattering pile of bones.",
                    "motivesAndTactics": "Fall apart, overwhelm, play dead, steal skin",
                    "difficulty": 8,
                    "hp": 1,
                    "stress": 1,
                    "majorThreshold": null,
                    "severeThreshold": null,
                    "attackModifier": "-1",
                    "attackDescription": "Bone Claws",
                    "attackRange": "Melee",
                    "attackDamage": "1 phy",
                    "experience": null,
                    "features": [
                        {
                            "name": "Minion (4) - Passive",
                            "text": "The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional Minion within range the attack would succeed against."
                        },
                        {
                            "name": "Group Attack - Action",
                            "text": "Spend a Fear to choose a target and spotlight all Dredges within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Skeleton Dredge #1",
                            "hpMarked": 1,
                            "stressMarked": 0
                        },
                        {
                            "name": "Skeleton Dredge #2",
                            "hpMarked": 1,
                            "stressMarked": 0
                        },
                        {
                            "name": "Skeleton Dredge #3",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                }
            ],
            "currentFear": 4
        },
        {
            "name": "Into the Mine",
            "playerTier": 1,
            "playerCount": 3,
            "targetBattlePoints": 11,
            "statBlocks": [
                {
                    "name": "Patchwork Zombie Hulk",
                    "originalName": "Patchwork Zombie Hulk",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Solo",
                    "countPerHp": 1,
                    "description": "A towering gestalt of corpses moving as one, with torso-sized limbs and fists as large as a grown halfling.",
                    "motivesAndTactics": "Absorb corpses, flail, hunger, terrify",
                    "difficulty": 13,
                    "hp": 10,
                    "stress": 3,
                    "majorThreshold": 8,
                    "severeThreshold": 15,
                    "attackModifier": "+4",
                    "attackDescription": "Too Many Arms",
                    "attackRange": "Very Close",
                    "attackDamage": "1d20 phy",
                    "experience": "Intimidation +2, Tear Things Apart +2",
                    "features": [
                        {
                            "name": "Destructive - Passive",
                            "text": "When the Zombie takes Major or greater damage, they mark an additional HP."
                        },
                        {
                            "name": "Flailing Limbs - Passive",
                            "text": "When the Zombie makes a standard attack, they can attack all targets within Very Close range."
                        },
                        {
                            "name": "Another for the Pile - Action",
                            "text": "When the Zombie is within Very Close range of a corpse, they can incorporate it into themselves, clearing a HP and a Stress."
                        },
                        {
                            "name": "Tormented Screams - Action",
                            "text": "Mark a Stress to cause all PCs within Far range to make a Presence Reaction Roll (13). Targets who fail lose a Hope and you gain a Fear for each. Targets who succeed must mark a Stress."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Patchwork Zombie Hulk #1",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                },
                {
                    "name": "Brawny Zombie",
                    "originalName": "Brawny Zombie",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Bruiser",
                    "countPerHp": 1,
                    "description": "A large corpse, decay-bloated and angry.",
                    "motivesAndTactics": "Crush, destroy, hurl debris, slam",
                    "difficulty": 10,
                    "hp": 7,
                    "stress": 4,
                    "majorThreshold": 8,
                    "severeThreshold": 15,
                    "attackModifier": "+2",
                    "attackDescription": "Slam",
                    "attackRange": "Very Close",
                    "attackDamage": "1d12+3 phy",
                    "experience": "Collateral Damage +2, Throw +4",
                    "features": [
                        {
                            "name": "Slow - Passive",
                            "text": "When you spotlight the Zombie and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act."
                        },
                        {
                            "name": "Rend Asunder - Action",
                            "text": "Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage."
                        },
                        {
                            "name": "Rip and Tear - Reaction",
                            "text": "When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Brawny Zombie #1",
                            "hpMarked": 5,
                            "stressMarked": 1
                        }
                    ]
                },
                {
                    "name": "Rotted Zombie",
                    "originalName": "Rotted Zombie",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "type": "Minion",
                    "countPerHp": 1,
                    "description": "A decaying corpse ambling toward their prey.",
                    "motivesAndTactics": "Eat flesh, hunger, maul, surround",
                    "difficulty": 8,
                    "hp": 1,
                    "stress": 1,
                    "majorThreshold": null,
                    "severeThreshold": null,
                    "attackModifier": "-3",
                    "attackDescription": "Bite",
                    "attackRange": "Melee",
                    "attackDamage": "2 phy",
                    "experience": null,
                    "features": [
                        {
                            "name": "Minion (3) - Passive",
                            "text": "The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional Minion within range the attack would succeed against."
                        },
                        {
                            "name": "Group Attack - Action",
                            "text": "Spend a Fear to choose a target and spotlight all Rotted Zombies within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Rotted Zombie #1",
                            "hpMarked": 1,
                            "stressMarked": 0
                        },
                        {
                            "name": "Rotted Zombie #2",
                            "hpMarked": 1,
                            "stressMarked": 0
                        },
                        {
                            "name": "Rotted Zombie #3",
                            "hpMarked": 0,
                            "stressMarked": 0
                        },
                        {
                            "name": "Rotted Zombie #4",
                            "hpMarked": 1,
                            "stressMarked": 0
                        },
                        {
                            "name": "Rotted Zombie #5",
                            "hpMarked": 1,
                            "stressMarked": 0
                        },
                        {
                            "name": "Rotted Zombie #6",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                }
            ],
            "currentFear": 10
        },
        {
            "name": "Robbing a Thief",
            "playerTier": 1,
            "playerCount": 4,
            "targetBattlePoints": 14,
            "statBlocks": [
                {
                    "name": "Bustling Marketplace",
                    "originalName": "Bustling Marketplace",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Environment",
                    "description": "The economic heart of the settlement, with local artisans, traveling merchants, and patrons across social classes.",
                    "difficulty": 10,
                    "type": "Social",
                    "impulses": "Buy low, sell high, tempt and tantalize with wares from near and far",
                    "potentialAdversaries": "Guards (Bladed Guard, Head Guard), Masked Thief, Merchant",
                    "features": [
                        {
                            "name": "Tip the Scales - Passive",
                            "text": "PCs can gain advantage on a Presence Roll by offering a handful of gold as part of the interaction.\n\n  *Will any coin be accepted, or only local currency? How overt are the PCs in offering this bribe?*"
                        },
                        {
                            "name": "Unexpected Find - Action",
                            "text": "Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key.\n\n  *What cost beyond gold will the merchant ask for in exchange for this rarity?*"
                        },
                        {
                            "name": "Sticky Fingers - Action",
                            "text": "A thief tries to steal something from a PC. The PC must succeed on an Instinct Roll to notice the thief or lose an item of the GM’s choice as the thief escapes to a Close distance. To retrieve the stolen item, the PCs must complete a Progress Countdown (6) to chase down the thief before the thief completes a Consequence Countdown (4) and escapes to their hideout.\n\n  *What drove this person to pickpocketing? Where is the thief’s hideout and how has it avoided notice?*"
                        },
                        {
                            "name": "Crowd Control - Reaction",
                            "text": "When one of the PCs splits from the group, the crowds shift and cut them off from the party.\n\n  *Where does the crowd’s movement carry them? How do they feel about being alone but surrounded?*"
                        }
                    ]
                },
                {
                    "name": "Merchant",
                    "originalName": "Merchant",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "description": "A finely dressed trader with a keen eye for financial gain.",
                    "difficulty": 12,
                    "type": "Social",
                    "countPerHp": 1,
                    "motivesAndTactics": "Buy low and sell high, create demand, inflate prices, seek profit",
                    "hp": 3,
                    "stress": 3,
                    "majorThreshold": 4,
                    "severeThreshold": 8,
                    "attackModifier": "-4",
                    "attackDescription": "Club",
                    "attackRange": "Melee",
                    "attackDamage": "1d4+1 phy",
                    "experience": "Shrewd Negotiator +3",
                    "features": [
                        {
                            "name": "Preferential Treatment - Passive",
                            "text": "A PC who succeeds on a Presence Roll against the Merchant gains a discount on purchases. A PC who fails on a Presence Roll against the Merchant must pay more and has disadvantage on future Presence Rolls against the Merchant."
                        },
                        {
                            "name": "The Runaround - Passive",
                            "text": "When a PC rolls a 14 or lower on a Presence Roll made against the Merchant, they must mark a Stress."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Merchant #1",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                },
                {
                    "name": "Head Guard",
                    "originalName": "Head Guard",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "description": "A seasoned guard with a mace, a whistle, and a bellowing voice.",
                    "difficulty": 15,
                    "type": "Leader",
                    "countPerHp": 1,
                    "motivesAndTactics": "Arrest, close gates, pin down, seek glory",
                    "hp": 7,
                    "stress": 3,
                    "majorThreshold": 7,
                    "severeThreshold": 13,
                    "attackModifier": "+4",
                    "attackDescription": "Mace",
                    "attackRange": "Melee",
                    "attackDamage": "1d10+4 phy",
                    "experience": "Commander +2, Local Knowledge +2",
                    "features": [
                        {
                            "name": "Rally Guards - Action",
                            "text": "Spend 2 Fear to spotlight the Head Guard and up to 2d4 allies within Far range."
                        },
                        {
                            "name": "On My Signal - Reaction",
                            "text": "Countdown (5). When the Head Guard is in the spotlight for the first time, activate the countdown. It ticks down when a PC makes an attack roll. When it triggers, all Archer Guards within Far range make a standard attack with advantage against the nearest target within their range. If any attacks succeed on the same target, combine their damage."
                        },
                        {
                            "name": "Momentum - Reaction",
                            "text": "When the Head Guard makes a successful attack against a PC, you gain a Fear."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Head Guard #1",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                },
                {
                    "name": "Bladed Guard",
                    "originalName": "Bladed Guard",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "description": "An armored guard bearing a sword and shield painted in the settlement’s colors.",
                    "difficulty": 12,
                    "type": "Standard",
                    "countPerHp": 1,
                    "motivesAndTactics": "Arrest, close gates, make it through the day, pin down",
                    "hp": 5,
                    "stress": 2,
                    "majorThreshold": 5,
                    "severeThreshold": 9,
                    "attackModifier": "+1",
                    "attackDescription": "Longsword",
                    "attackRange": "Melee",
                    "attackDamage": "1d6+1 phy",
                    "experience": "Local Knowledge +3",
                    "features": [
                        {
                            "name": "Shield Wall - Passive",
                            "text": "A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the first, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in the line."
                        },
                        {
                            "name": "Detain - Action",
                            "text": "Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Bladed Guard #1",
                            "hpMarked": 0,
                            "stressMarked": 0
                        },
                        {
                            "name": "Bladed Guard #2",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                },
                {
                    "name": "Jagged Knife Bandit",
                    "originalName": "Jagged Knife Bandit",
                    "source": "SRD",
                    "tier": 1,
                    "category": "Adversary",
                    "description": "A cunning criminal in a cloak bearing one of the gang’s iconic knives.",
                    "difficulty": 12,
                    "type": "Standard",
                    "countPerHp": 1,
                    "motivesAndTactics": "Escape, profit, steal, throw smoke",
                    "hp": 5,
                    "stress": 3,
                    "majorThreshold": 8,
                    "severeThreshold": 14,
                    "attackModifier": "+1",
                    "attackDescription": "Daggers",
                    "attackRange": "Melee",
                    "attackDamage": "1d8+1 phy",
                    "experience": "Thief +2",
                    "features": [
                        {
                            "name": "Climber - Passive",
                            "text": "The Bandit climbs just as easily as they run."
                        },
                        {
                            "name": "From Above - Passive",
                            "text": "When the Bandit succeeds on a standard attack from above a target, they deal 1d10+1 physical damage instead of their standard damage."
                        }
                    ],
                    "instances": [
                        {
                            "name": "Jagged Knife Bandit #1",
                            "hpMarked": 0,
                            "stressMarked": 0
                        }
                    ]
                }
            ],
            "currentFear": 0
        }
    ]
};

const sampleCampaignsState = {
    "campaigns": [
        {
            "name": "", // The default campaign...but how to display if a named campaign appears? "(default)" or something?
            "currentFear": 0,
            "encounters": [
                {
                    "name": "Escaping Corruption",
                    "playerTier": 1,
                    "playerCount": 3,
                    "targetBattlePoints": 11,
                    "statBlocks": [
                        {
                            "name": "Winged Salamander",
                            "originalName": "Minor Fire Elemental",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Solo",
                            "countPerHp": 1,
                            "description": "A living flame the size of a large bonfire.",
                            "motivesAndTactics": "Encircle enemies, grow in size, intimidate, start fires",
                            "difficulty": 13,
                            "hp": 9,
                            "stress": 3,
                            "majorThreshold": 7,
                            "severeThreshold": 15,
                            "attackModifier": "+3",
                            "attackDescription": "Elemental Blast",
                            "attackRange": "Far",
                            "attackDamage": "1d10+4 mag",
                            "experience": "",
                            "features": [
                                {
                                    "name": "Relentless (2) - Passive",
                                    "text": "The Elemental can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
                                },
                                {
                                    "name": "Scorched Earth - Action",
                                    "text": "Mark a Stress to choose a point within Far range. The ground within Very Close range of that point immediately bursts into flames. All creatures within this area must make an Agility Reaction Roll. Targets who fail take 2d8 magic damage from the flames. Targets who succeed take half damage."
                                },
                                {
                                    "name": "Explosion - Action",
                                    "text": "Spend a Fear to erupt in a fiery explosion. Make an attack against all targets within Close range. Targets the Elemental succeeds against take 1d8 magic damage and are knocked back to Far range."
                                },
                                {
                                    "name": "Consume Kindling - Reaction",
                                    "text": "Three times per scene, when the Elemental moves on objects that are highly flammable, consume them to clear a HP or a Stress."
                                },
                                {
                                    "name": "Momentum - Reaction",
                                    "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Winged Salamander #1",
                                    "hpMarked": 6,
                                    "stressMarked": 2,
                                    "conditions": [
                                        "Vulnerable"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Pirate Captain",
                            "originalName": "Pirate Captain",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Leader",
                            "countPerHp": 1,
                            "description": "A charismatic sea dog with an impressive hat, eager to raid and plunder.",
                            "motivesAndTactics": "Command, make 'em walk the plank, plunder, raid",
                            "difficulty": 14,
                            "hp": 7,
                            "stress": 5,
                            "majorThreshold": 7,
                            "severeThreshold": 14,
                            "attackModifier": "+1",
                            "attackDescription": "Cutlass",
                            "attackRange": "Melee",
                            "attackDamage": "1d12+2 phy",
                            "experience": "Commander +2, Sailor +3",
                            "features": [
                                {
                                    "name": "Swashbuckler - Passive",
                                    "text": "When the Captain marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
                                },
                                {
                                    "name": "Reinforcements - Action",
                                    "text": "Once per scene, mark a Stress to summon a Pirate Raiders Horde, which appears at Far range."
                                },
                                {
                                    "name": "No Quarter - Action",
                                    "text": "Spend a Fear to choose a target who has three or more Pirates within Melee range of them. The Captain leads the Pirates in hurling threats and promises of a watery grave. The target must make a Presence Reaction Roll. On a failure, the target marks 1d4+1 Stress. On a success, they must mark a Stress."
                                },
                                {
                                    "name": "Momentum - Reaction",
                                    "text": "When the Captain makes a successful attack against a PC, you gain a Fear."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Corrupted Captain #1",
                                    "hpMarked": 4,
                                    "stressMarked": 1,
                                    "conditions": [
                                        "Restrained"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Pirate Raiders",
                            "originalName": "Pirate Raiders",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Horde",
                            "countPerHp": 3,
                            "description": "Seafaring scoundrels moving in a ravaging pack.",
                            "motivesAndTactics": "Gang up, plunder, overwhelm",
                            "difficulty": 12,
                            "hp": 4,
                            "stress": 3,
                            "majorThreshold": 5,
                            "severeThreshold": 11,
                            "attackModifier": "+1",
                            "attackDescription": "Cutlass",
                            "attackRange": "Melee",
                            "attackDamage": "1d8+2 phy",
                            "experience": "Sailor +3",
                            "features": [
                                {
                                    "name": "Horde (1d4+1) - Passive",
                                    "text": "When the Raiders have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
                                },
                                {
                                    "name": "Swashbuckler - Passive",
                                    "text": "When the Raiders mark 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Corrupted Raiders #1",
                                    "hpMarked": 3,
                                    "stressMarked": 0
                                }
                            ]
                        },
                        {
                            "name": "Skeleton Archer",
                            "originalName": "Skeleton Archer",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Ranged",
                            "countPerHp": 1,
                            "description": "A fragile skeleton with a shortbow and arrows.",
                            "motivesAndTactics": "Perforate distracted targets, play dead, steal skin",
                            "difficulty": 9,
                            "hp": 3,
                            "stress": 2,
                            "majorThreshold": 4,
                            "severeThreshold": 7,
                            "attackModifier": "+2",
                            "attackDescription": "Shortbow",
                            "attackRange": "Far",
                            "attackDamage": "1d8+1 phy",
                            "experience": null,
                            "features": [
                                {
                                    "name": "Opportunist - Passive",
                                    "text": "When two or more adversaries are within Very Close range of a creature, all damage they each deal to that creature is doubled."
                                },
                                {
                                    "name": "Deadly Shot - Action",
                                    "text": "Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Skeleton Archer #1",
                                    "hpMarked": 3,
                                    "stressMarked": 0
                                }
                            ]
                        },
                        {
                            "name": "Skeleton Dredge",
                            "originalName": "Skeleton Dredge",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Minion",
                            "countPerHp": 1,
                            "description": "A clattering pile of bones.",
                            "motivesAndTactics": "Fall apart, overwhelm, play dead, steal skin",
                            "difficulty": 8,
                            "hp": 1,
                            "stress": 1,
                            "majorThreshold": null,
                            "severeThreshold": null,
                            "attackModifier": "-1",
                            "attackDescription": "Bone Claws",
                            "attackRange": "Melee",
                            "attackDamage": "1 phy",
                            "experience": null,
                            "features": [
                                {
                                    "name": "Minion (4) - Passive",
                                    "text": "The Dredge is defeated when they take any damage. For every 4 damage a PC deals to the Dredge, defeat an additional Minion within range the attack would succeed against."
                                },
                                {
                                    "name": "Group Attack - Action",
                                    "text": "Spend a Fear to choose a target and spotlight all Dredges within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Skeleton Dredge #1",
                                    "hpMarked": 1,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Skeleton Dredge #2",
                                    "hpMarked": 1,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Skeleton Dredge #3",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        }
                    ],
                },
                {
                    "name": "Into the Mine",
                    "playerTier": 1,
                    "playerCount": 3,
                    "targetBattlePoints": 11,
                    "statBlocks": [
                        {
                            "name": "Patchwork Zombie Hulk",
                            "originalName": "Patchwork Zombie Hulk",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Solo",
                            "countPerHp": 1,
                            "description": "A towering gestalt of corpses moving as one, with torso-sized limbs and fists as large as a grown halfling.",
                            "motivesAndTactics": "Absorb corpses, flail, hunger, terrify",
                            "difficulty": 13,
                            "hp": 10,
                            "stress": 3,
                            "majorThreshold": 8,
                            "severeThreshold": 15,
                            "attackModifier": "+4",
                            "attackDescription": "Too Many Arms",
                            "attackRange": "Very Close",
                            "attackDamage": "1d20 phy",
                            "experience": "Intimidation +2, Tear Things Apart +2",
                            "features": [
                                {
                                    "name": "Destructive - Passive",
                                    "text": "When the Zombie takes Major or greater damage, they mark an additional HP."
                                },
                                {
                                    "name": "Flailing Limbs - Passive",
                                    "text": "When the Zombie makes a standard attack, they can attack all targets within Very Close range."
                                },
                                {
                                    "name": "Another for the Pile - Action",
                                    "text": "When the Zombie is within Very Close range of a corpse, they can incorporate it into themselves, clearing a HP and a Stress."
                                },
                                {
                                    "name": "Tormented Screams - Action",
                                    "text": "Mark a Stress to cause all PCs within Far range to make a Presence Reaction Roll (13). Targets who fail lose a Hope and you gain a Fear for each. Targets who succeed must mark a Stress."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Patchwork Zombie Hulk #1",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        },
                        {
                            "name": "Brawny Zombie",
                            "originalName": "Brawny Zombie",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Bruiser",
                            "countPerHp": 1,
                            "description": "A large corpse, decay-bloated and angry.",
                            "motivesAndTactics": "Crush, destroy, hurl debris, slam",
                            "difficulty": 10,
                            "hp": 7,
                            "stress": 4,
                            "majorThreshold": 8,
                            "severeThreshold": 15,
                            "attackModifier": "+2",
                            "attackDescription": "Slam",
                            "attackRange": "Very Close",
                            "attackDamage": "1d12+3 phy",
                            "experience": "Collateral Damage +2, Throw +4",
                            "features": [
                                {
                                    "name": "Slow - Passive",
                                    "text": "When you spotlight the Zombie and they don’t have a token on their stat block, they can’t act yet. Place a token on their stat block and describe what they’re preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act."
                                },
                                {
                                    "name": "Rend Asunder - Action",
                                    "text": "Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage."
                                },
                                {
                                    "name": "Rip and Tear - Reaction",
                                    "text": "When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Brawny Zombie #1",
                                    "hpMarked": 5,
                                    "stressMarked": 1
                                }
                            ]
                        },
                        {
                            "name": "Rotted Zombie",
                            "originalName": "Rotted Zombie",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "type": "Minion",
                            "countPerHp": 1,
                            "description": "A decaying corpse ambling toward their prey.",
                            "motivesAndTactics": "Eat flesh, hunger, maul, surround",
                            "difficulty": 8,
                            "hp": 1,
                            "stress": 1,
                            "majorThreshold": null,
                            "severeThreshold": null,
                            "attackModifier": "-3",
                            "attackDescription": "Bite",
                            "attackRange": "Melee",
                            "attackDamage": "2 phy",
                            "experience": null,
                            "features": [
                                {
                                    "name": "Minion (3) - Passive",
                                    "text": "The Zombie is defeated when they take any damage. For every 3 damage a PC deals to the Zombie, defeat an additional Minion within range the attack would succeed against."
                                },
                                {
                                    "name": "Group Attack - Action",
                                    "text": "Spend a Fear to choose a target and spotlight all Rotted Zombies within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Rotted Zombie #1",
                                    "hpMarked": 1,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Rotted Zombie #2",
                                    "hpMarked": 1,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Rotted Zombie #3",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Rotted Zombie #4",
                                    "hpMarked": 1,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Rotted Zombie #5",
                                    "hpMarked": 1,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Rotted Zombie #6",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        }
                    ],
                },
                {
                    "name": "Robbing a Thief",
                    "playerTier": 1,
                    "playerCount": 4,
                    "targetBattlePoints": 14,
                    "statBlocks": [
                        {
                            "name": "Bustling Marketplace",
                            "originalName": "Bustling Marketplace",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Environment",
                            "description": "The economic heart of the settlement, with local artisans, traveling merchants, and patrons across social classes.",
                            "difficulty": 10,
                            "type": "Social",
                            "impulses": "Buy low, sell high, tempt and tantalize with wares from near and far",
                            "potentialAdversaries": "Guards (Bladed Guard, Head Guard), Masked Thief, Merchant",
                            "features": [
                                {
                                    "name": "Tip the Scales - Passive",
                                    "text": "PCs can gain advantage on a Presence Roll by offering a handful of gold as part of the interaction.\n\n  *Will any coin be accepted, or only local currency? How overt are the PCs in offering this bribe?*"
                                },
                                {
                                    "name": "Unexpected Find - Action",
                                    "text": "Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key.\n\n  *What cost beyond gold will the merchant ask for in exchange for this rarity?*"
                                },
                                {
                                    "name": "Sticky Fingers - Action",
                                    "text": "A thief tries to steal something from a PC. The PC must succeed on an Instinct Roll to notice the thief or lose an item of the GM’s choice as the thief escapes to a Close distance. To retrieve the stolen item, the PCs must complete a Progress Countdown (6) to chase down the thief before the thief completes a Consequence Countdown (4) and escapes to their hideout.\n\n  *What drove this person to pickpocketing? Where is the thief’s hideout and how has it avoided notice?*"
                                },
                                {
                                    "name": "Crowd Control - Reaction",
                                    "text": "When one of the PCs splits from the group, the crowds shift and cut them off from the party.\n\n  *Where does the crowd’s movement carry them? How do they feel about being alone but surrounded?*"
                                }
                            ]
                        },
                        {
                            "name": "Merchant",
                            "originalName": "Merchant",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "description": "A finely dressed trader with a keen eye for financial gain.",
                            "difficulty": 12,
                            "type": "Social",
                            "countPerHp": 1,
                            "motivesAndTactics": "Buy low and sell high, create demand, inflate prices, seek profit",
                            "hp": 3,
                            "stress": 3,
                            "majorThreshold": 4,
                            "severeThreshold": 8,
                            "attackModifier": "-4",
                            "attackDescription": "Club",
                            "attackRange": "Melee",
                            "attackDamage": "1d4+1 phy",
                            "experience": "Shrewd Negotiator +3",
                            "features": [
                                {
                                    "name": "Preferential Treatment - Passive",
                                    "text": "A PC who succeeds on a Presence Roll against the Merchant gains a discount on purchases. A PC who fails on a Presence Roll against the Merchant must pay more and has disadvantage on future Presence Rolls against the Merchant."
                                },
                                {
                                    "name": "The Runaround - Passive",
                                    "text": "When a PC rolls a 14 or lower on a Presence Roll made against the Merchant, they must mark a Stress."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Merchant #1",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        },
                        {
                            "name": "Head Guard",
                            "originalName": "Head Guard",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "description": "A seasoned guard with a mace, a whistle, and a bellowing voice.",
                            "difficulty": 15,
                            "type": "Leader",
                            "countPerHp": 1,
                            "motivesAndTactics": "Arrest, close gates, pin down, seek glory",
                            "hp": 7,
                            "stress": 3,
                            "majorThreshold": 7,
                            "severeThreshold": 13,
                            "attackModifier": "+4",
                            "attackDescription": "Mace",
                            "attackRange": "Melee",
                            "attackDamage": "1d10+4 phy",
                            "experience": "Commander +2, Local Knowledge +2",
                            "features": [
                                {
                                    "name": "Rally Guards - Action",
                                    "text": "Spend 2 Fear to spotlight the Head Guard and up to 2d4 allies within Far range."
                                },
                                {
                                    "name": "On My Signal - Reaction",
                                    "text": "Countdown (5). When the Head Guard is in the spotlight for the first time, activate the countdown. It ticks down when a PC makes an attack roll. When it triggers, all Archer Guards within Far range make a standard attack with advantage against the nearest target within their range. If any attacks succeed on the same target, combine their damage."
                                },
                                {
                                    "name": "Momentum - Reaction",
                                    "text": "When the Head Guard makes a successful attack against a PC, you gain a Fear."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Head Guard #1",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        },
                        {
                            "name": "Bladed Guard",
                            "originalName": "Bladed Guard",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "description": "An armored guard bearing a sword and shield painted in the settlement’s colors.",
                            "difficulty": 12,
                            "type": "Standard",
                            "countPerHp": 1,
                            "motivesAndTactics": "Arrest, close gates, make it through the day, pin down",
                            "hp": 5,
                            "stress": 2,
                            "majorThreshold": 5,
                            "severeThreshold": 9,
                            "attackModifier": "+1",
                            "attackDescription": "Longsword",
                            "attackRange": "Melee",
                            "attackDamage": "1d6+1 phy",
                            "experience": "Local Knowledge +3",
                            "features": [
                                {
                                    "name": "Shield Wall - Passive",
                                    "text": "A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the first, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in the line."
                                },
                                {
                                    "name": "Detain - Action",
                                    "text": "Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Bladed Guard #1",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                },
                                {
                                    "name": "Bladed Guard #2",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        },
                        {
                            "name": "Jagged Knife Bandit",
                            "originalName": "Jagged Knife Bandit",
                            "source": "SRD",
                            "tier": 1,
                            "category": "Adversary",
                            "description": "A cunning criminal in a cloak bearing one of the gang’s iconic knives.",
                            "difficulty": 12,
                            "type": "Standard",
                            "countPerHp": 1,
                            "motivesAndTactics": "Escape, profit, steal, throw smoke",
                            "hp": 5,
                            "stress": 3,
                            "majorThreshold": 8,
                            "severeThreshold": 14,
                            "attackModifier": "+1",
                            "attackDescription": "Daggers",
                            "attackRange": "Melee",
                            "attackDamage": "1d8+1 phy",
                            "experience": "Thief +2",
                            "features": [
                                {
                                    "name": "Climber - Passive",
                                    "text": "The Bandit climbs just as easily as they run."
                                },
                                {
                                    "name": "From Above - Passive",
                                    "text": "When the Bandit succeeds on a standard attack from above a target, they deal 1d10+1 physical damage instead of their standard damage."
                                }
                            ],
                            "instances": [
                                {
                                    "name": "Jagged Knife Bandit #1",
                                    "hpMarked": 0,
                                    "stressMarked": 0
                                }
                            ]
                        }
                    ],
                }
            ]
        }
    ]
    // custom stat blocks are still global, not per-campaign
}