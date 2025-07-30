// TODO: Regenerate once format shuffling is done
const sampleEncounters ={
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
                            "stressMarked": 2
                        }
                    ]
                },
                {
                    "name": "Pirate Captain",
                    "originalName": "Pirate Captain",
                    "source": "SRD",
                    "tier": 1,
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
                            "name": "Pirate Captain #1",
                            "hpMarked": 4,
                            "stressMarked": 1
                        }
                    ]
                },
                {
                    "name": "Pirate Raiders",
                    "originalName": "Pirate Raiders",
                    "source": "SRD",
                    "tier": 1,
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
                            "name": "Pirate Raiders #1",
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
        }
    ]
}