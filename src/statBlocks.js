const srdStatBlocks = [
  {
    "name": "Abandoned Grove",
    "originalName": "Abandoned Grove",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Exploration",
    "description": "A former druidic grove lying fallow and fully reclaimed by nature.",
    "impulses": "Draw in the curious, echo the past",
    "difficulty": 11,
    "potentialAdversaries": "Beasts (Bear, Dire Wolf, Glass Snake), Grove Guardians (Minor Treant, Sylvan Soldier, Young Dryad)",
    "features": [
      {
        "name": "Overgrown Battlefield - Passive",
        "text": "There has been a battle here. A PC can make an Instinct Roll to identify evidence of that fight. On a success with Hope, learn all three pieces of information below. On a success with Fear, learn two. On a failure, a PC can mark a Stress to learn one and gain advantage on the next action roll to investigate this environment. A PC with an appropriate background or Experience can learn an additional detail and ask a follow-up question about the scene and get a truthful (if not always complete) answer. \n- Traces of a battle (broken weapons and branches, gouges in the ground) litter the ground. \n- A moss-covered tree trunk is actually the corpse of a treant. \n- Still-standing trees are twisted in strange ways, as if by powerful magic.\n\nWhy did these groups come to blows? Why is the grove unused now?"
      },
      {
        "name": "Barbed Vines - Action",
        "text": "Pick a point within the grove. All targets within Very Close range of that point must succeed on an Agility Reaction Roll or take 1d8+3 physical damage and become Restrained by barbed vines. Restrained lasts until they're freed with a successful Finesse or Strength roll or by dealing at least 6 damage to the vines.\n\nHow many vines are there? Where do they grab you? Do they pull you down or lift you off the ground?"
      },
      {
        "name": "You Are Not Welcome Here - Action",
        "text": "A Young Dryad, two Sylvan Soldiers, and a number of Minor Treants equal to the number of PCs appear to confront the party for their intrusion.\n\nWhat are the grove guardians concealing? What threat to the forest could the PCs confront to appease the Dryad?"
      },
      {
        "name": "Defiler - Action",
        "text": "Spend a Fear to summon a Minor Chaos Elemental drawn to the echoes of violence and discord. They appear within Far range of a chosen PC and immediately take the spotlight.\n\nWhat color does the grass turn as the elemental appears? How does the chaos warp insects and small wildlife within the grove?"
      }
    ]
  },
  {
    "name": "Acid Burrower",
    "originalName": "Acid Burrower",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A horse-sized insect with digging claws and acidic blood.",
    "motivesAndTactics": "Burrow, drag away, feed, reposition",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 8,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Claws",
    "attackRange": "Very Close",
    "attackDamage": "1d12+2 phy",
    "experience": "Tremor Sense +2",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Earth Eruption - Action",
        "text": "Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act."
      },
      {
        "name": "Spit Acid - Action",
        "text": "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP and you gain a Fear."
      },
      {
        "name": "Acid Bath - Reaction",
        "text": "When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage."
      }
    ]
  },
  {
    "name": "Adult Flickerfly",
    "originalName": "Adult Flickerfly",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A winged insect the size of a large house with iridescent scales and wings that move too fast to track.",
    "motivesAndTactics": "Collect shiny things, hunt, nest, swoop",
    "difficulty": 17,
    "majorThreshold": 20,
    "severeThreshold": 35,
    "hp": 12,
    "stress": 6,
    "attackModifier": "+3",
    "attackDescription": "Wing Slash",
    "attackRange": "Very Close",
    "attackDamage": "3d20 phy",
    "experience": null,
    "features": [
      {
        "name": "Relentless (4) - Passive",
        "text": "The Flickerfly can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Never Misses - Passive",
        "text": "When the Flickerfly makes an attack, the target's Evasion is halved against the attack."
      },
      {
        "name": "Deadly Flight - Passive",
        "text": "While flying, the Flickerfly can move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Whirlwind - Action",
        "text": "Spend a Fear to whirl, making an attack against all targets within Very Close range. Targets the Flickerfly succeeds against take 3d8 direct physical damage."
      },
      {
        "name": "Mind Dance - Action",
        "text": "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target's fears."
      },
      {
        "name": "Hallucinatory Breath - Reaction",
        "text": "Countdown (Loop 1d6). When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must make an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail lose 2 Hope and take 3d8+3 direct magic damage."
      },
      {
        "name": "Uncanny Reflexes - Reaction",
        "text": "When the Flickerfly takes damage from an attack within Close range, you can mark a Stress to take half damage."
      }
    ]
  },
  {
    "name": "Ambushed",
    "originalName": "Ambushed",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Event",
    "description": "An ambush is set to catch an unsuspecting party off-guard.",
    "impulses": "Overwhelm, scatter, surround",
    "difficulty": "Special (see \"Relative Strength\")",
    "potentialAdversaries": "Any",
    "features": [
      {
        "name": "Relative Strength - Passive",
        "text": "The Difficulty of this environment equals that of the adversary with the highest Difficulty.\n\nWho cues the ambush? What makes it clear they're in charge?"
      },
      {
        "name": "Surprise! - Action",
        "text": "The ambushers reveal themselves to the party, you gain 2 Fear, and the spotlight immediately shifts to one of the ambushing adversaries.\n\nWhat do the ambushers want from the party? How do their tactics in the ambush reflect that?"
      }
    ]
  },
  {
    "name": "Ambushers",
    "originalName": "Ambushers",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Event",
    "description": "An ambush is set by the PCs to catch unsuspecting adversaries off-guard.",
    "impulses": "Escape, group up, protect the most vulnerable",
    "difficulty": "Special (see \"Relative Strength\")",
    "potentialAdversaries": "Any",
    "features": [
      {
        "name": "Relative Strength - Passive",
        "text": "The Difficulty of this environment equals that of the adversary with the highest Difficulty.\n\nWhich adversary is the least prepared? Which one is the most?"
      },
      {
        "name": "Where Did They Come From? - Reaction",
        "text": "When a PC starts the ambush on unsuspecting adversaries, you lose 2 Fear and the first attack roll a PC makes has advantage.\n\nWhat are the adversaries in the middle of doing when the ambush starts? How does this impact their approach to the fight?"
      }
    ]
  },
  {
    "name": "Apprentice Assassin",
    "originalName": "Apprentice Assassin",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A young trainee eager to prove themselves.",
    "motivesAndTactics": "Act reckless, kill, prove their worth, show off",
    "difficulty": 13,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "-1",
    "attackDescription": "Thrown Dagger",
    "attackRange": "Very Close",
    "attackDamage": "4 phy",
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Minion (6) - Passive",
        "text": "The Assassin is defeated when they take any damage. For every 6 damage a PC deals to the Assassin, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Apprentice Assassins within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Arch-Necromancer",
    "originalName": "Arch-Necromancer",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A decaying mage adorned in dark, tattered robes.",
    "motivesAndTactics": "Corrupt, decay, flee to fight another day, resurrect",
    "difficulty": 21,
    "majorThreshold": 33,
    "severeThreshold": 66,
    "hp": 9,
    "stress": 8,
    "attackModifier": "+6",
    "attackDescription": "Necrotic Blast",
    "attackRange": "Far",
    "attackDamage": "4d12+8 mag",
    "experience": "Forbidden Knowledge +3, Wisdom of Centuries +3",
    "features": [
      {
        "name": "Dance of Death - Action",
        "text": "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage, or full damage if you spend a Fear."
      },
      {
        "name": "Beam of Decay - Action",
        "text": "Mark 2 Stress to cause all targets within Far range to make a Strength Reaction Roll. Targets who fail take 2d20+12 magic damage and you gain a Fear. Targets who succeed take half damage. A target who marks 2 or more HP must also mark 2 Stress and becomes Vulnerable until they roll with Hope."
      },
      {
        "name": "Open the Gates of Death - Action",
        "text": "Spend a Fear to summon a Zombie Legion, which appears at Close range and immediately takes the spotlight."
      },
      {
        "name": "Not Today, My Dears - Reaction",
        "text": "When the Necromancer has marked 7 or more of their HP, you can spend a Fear to have them teleport away to a safe location to recover. A PC who succeeds on an Instinct Roll can trace the teleportation magic to their destination."
      },
      {
        "name": "Your Life Is Mine - Reaction",
        "text": "Countdown (Loop 2d6). When the Necromancer has marked 6 or more of their HP, activate the countdown. When it triggers, deal 2d10+6 direct magic damage to a target within Close range. The Necromancer then clears a number of Stress or HP equal to the number of HP marked by the target from this attack."
      }
    ]
  },
  {
    "name": "Archer Guard",
    "originalName": "Archer Guard",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A tall guard bearing a longbow and quiver with arrows fletched in the settlement's colors.",
    "motivesAndTactics": "Arrest, close gates, make it through the day, pin down",
    "difficulty": 10,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "hp": 3,
    "stress": 2,
    "attackModifier": "+1",
    "attackDescription": "Longbow",
    "attackRange": "Far",
    "attackDamage": "1d8+3 phy",
    "experience": "Local Knowledge +3",
    "features": [
      {
        "name": "Hobbling Shot - Action",
        "text": "Make an attack against a target within Far range. On a success, mark a Stress to deal 1d12+3 physical damage. If the target marks HP from this attack, they have disadvantage on Agility Rolls until they clear at least 1 HP."
      }
    ]
  },
  {
    "name": "Archer Squadron",
    "originalName": "Archer Squadron",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 2,
    "description": "A group of trained archers bearing massive bows.",
    "motivesAndTactics": "Stick together, survive, volley fire",
    "difficulty": 13,
    "majorThreshold": 8,
    "severeThreshold": 16,
    "hp": 4,
    "stress": 3,
    "attackModifier": "+0",
    "attackDescription": "Longbow",
    "attackRange": "Far",
    "attackDamage": "2d6+3 phy",
    "experience": null,
    "features": [
      {
        "name": "Horde (1d6+3) - Passive",
        "text": "When the Squadron has marked half or more of their HP, their standard attack deals 1d6+3 physical damage instead."
      },
      {
        "name": "Focused Volley - Action",
        "text": "Spend a Fear to target a point within Far range. Make an attack with advantage against all targets within Close range of that point. Targets the Squadron succeeds against take 1d10+4 physical damage."
      },
      {
        "name": "Suppressing Fire - Action",
        "text": "Mark a Stress to target a point within Far range. Until the next roll with Fear, a creature who moves within Close range of that point must make an Agility Reaction Roll. On a failure, they take 2d6+3 physical damage. On a success, they take half damage."
      }
    ]
  },
  {
    "name": "Assassin Poisoner",
    "originalName": "Assassin Poisoner",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A cunning scoundrel skilled in both poisons and ambushing.",
    "motivesAndTactics": "Anticipate, get paid, kill, taint food and water",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 16,
    "hp": 4,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Poisoned Throwing Dagger",
    "attackRange": "Close",
    "attackDamage": "2d8+1 phy",
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Grindletooth Venom - Passive",
        "text": "Targets who mark HP from the Assassin's attacks are Vulnerable until they clear a HP."
      },
      {
        "name": "Out of Nowhere - Passive",
        "text": "The Assassin has advantage on attacks if they are Hidden."
      },
      {
        "name": "Fumigation - Action",
        "text": "Drop a smoke bomb that fills the air within Close range with smoke, Dizzying all targets in this area. Dizzied targets have disadvantage on their next action roll, then clear the condition."
      }
    ]
  },
  {
    "name": "Battle Box",
    "originalName": "Battle Box",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A cube-shaped construct with a different rune on each of their six sides.",
    "motivesAndTactics": "Change tactics, trample foes, wait in disguise",
    "difficulty": 15,
    "majorThreshold": 10,
    "severeThreshold": 20,
    "hp": 8,
    "stress": 6,
    "attackModifier": "+2",
    "attackDescription": "Slam",
    "attackRange": "Melee",
    "attackDamage": "2d6+3 phy",
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Box can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Randomized Tactics - Action",
        "text": "Mark a Stress and roll a d6. The Box uses the corresponding move: 1. Mana Beam. The Box fires a searing beam. Make an attack against a target within Far range. On a success, deal 2d10+2 magic damage. 2. Fire Jets. The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within Close range. Targets the Box succeeds against take 2d8 physical damage. 3. Trample. The Box rockets around erratically. Make an attack against all PCs within Close range. Targets the Box succeeds against take 1d6+5 physical damage and are Vulnerable until their next roll with Hope. 4. Shocking Gas. The Box sprays out a silver gas sparking with lightning. All targets within Close range must succeed on a Finesse Reaction Roll or mark 3 Stress. 5. Stunning Clap. The Box leaps and their sides clap, creating a small sonic boom. All targets within Very Close range must succeed on a Strength Reaction Roll or become Vulnerable until the cube is defeated. 6. Psionic Whine. The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within Close range must succeed on a Presence Reaction Roll or take 2d4+9 direct magic damage."
      },
      {
        "name": "Overcharge - Reaction",
        "text": "Before rolling damage for the Box's attack, you can mark a Stress to add a d6 to the damage roll. Additionally, you gain a Fear."
      },
      {
        "name": "Death Quake - Reaction",
        "text": "When the Box marks their last HP, the magic powering them ruptures in an explosion of force. All targets within Close range must succeed on an Instinct Reaction Roll or take 2d8+1 magic damage."
      }
    ]
  },
  {
    "name": "Bear",
    "originalName": "Bear",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A large bear with thick fur and powerful claws.",
    "motivesAndTactics": "Climb, defend territory, pummel, track",
    "difficulty": 14,
    "majorThreshold": 9,
    "severeThreshold": 17,
    "hp": 7,
    "stress": 2,
    "attackModifier": "+1",
    "attackDescription": "Claws",
    "attackRange": "Melee",
    "attackDamage": "1d8+3 phy",
    "experience": "Ambusher +3, Keen Senses +2",
    "features": [
      {
        "name": "Overwhelming Force - Passive",
        "text": "Targets who mark HP from the Bear's standard attack are knocked back to Very Close range."
      },
      {
        "name": "Bite - Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 physical damage and the target is Restrained until they break free with a successful Strength Roll."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Bear makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Bladed Guard",
    "originalName": "Bladed Guard",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "An armored guard bearing a sword and shield painted in the settlement's colors.",
    "motivesAndTactics": "Arrest, close gates, make it through the day, pin down",
    "difficulty": 12,
    "majorThreshold": 5,
    "severeThreshold": 9,
    "hp": 5,
    "stress": 2,
    "attackModifier": "+1",
    "attackDescription": "Longsword",
    "attackRange": "Melee",
    "attackDamage": "1d6+1 phy",
    "experience": "Local Knowledge +3",
    "features": [
      {
        "name": "Shield Wall - Passive",
        "text": "A creature who tries to move within Very Close range of the Guard must succeed on an Agility Roll. If additional Bladed Guards are standing in a line alongside the first, and each is within Melee range of another guard in the line, the Difficulty increases by the total number of guards in that line."
      },
      {
        "name": "Detain - Action",
        "text": "Make an attack against a target within Very Close range. On a success, mark a Stress to Restrain the target until they break free with a successful attack, Finesse Roll, or Strength Roll."
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
    "motivesAndTactics": "Crush, destroy, hail debris, slam",
    "difficulty": 10,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 7,
    "stress": 4,
    "attackModifier": "+2",
    "attackDescription": "Slam",
    "attackRange": "Very Close",
    "attackDamage": "1d12+3 phy",
    "experience": "Collateral Damage +2, Throw +4",
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Zombie and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Rend Asunder - Action",
        "text": "Make a standard attack with advantage against a target the Zombie has Restrained. On a success, the attack deals direct damage."
      },
      {
        "name": "Rip and Tear - Reaction",
        "text": "When the Zombies makes a successful standard attack, you can mark a Stress to temporarily Restrain the target and force them to mark 2 Stress."
      }
    ]
  },
  {
    "name": "Burning Heart of the Woods",
    "originalName": "Burning Heart of the Woods",
    "source": "SRD",
    "tier": 3,
    "category": "Environment",
    "type": "Exploration",
    "description": "Thick indigo ash fills the air around a towering moss-covered tree that burns eternally with flames a sickly shade of blue.",
    "impulses": "Beat out an uncanny rhythm for all to follow, corrupt the woods",
    "difficulty": 16,
    "potentialAdversaries": "Beasts (Bear, Glass Snake), Elementals (Elemental Spark), Verdant Defenders (Dryad, Oak Treant, Stag Knight)",
    "features": [
      {
        "name": "Chaos Magic Locus - Passive",
        "text": "When a PC makes a Spellcast Roll, they must roll two Fear Dice and take the higher result.\n\nWhat does it feel like to work magic in this chaos-touched place?\n\nWhat do you fear will happen if you lose control of the spell?"
      },
      {
        "name": "The Indigo Flame - Passive",
        "text": "PCs who approach the central tree can make a Knowledge Roll to try to identify the magic that consumed this environment. \n- On a success: They learn three of the below details. On a success with Fear, they learn two. \n- On a failure: They can mark a Stress to learn one and gain advantage on the next action roll to investigate this environment. \n- Details: This is a result of Fallen magic. The corruption is spread through the ashen moss. It can be cleansed only by a ritual of nature magic with a Progress Countdown (8).\n\nWhat Fallen cult corrupted these woods? What have they already done with the cursed wood and sap from this tree?"
      },
      {
        "name": "Grasping Vines - Action",
        "text": "Animate vines bristling with thorns whip out from the underbrush to ensnare the PCs. A target must succeed on an Agility Reaction Roll or become Restrained and Vulnerable until they break free, clearing both conditions, with a successful Finesse or Strength Roll or by dealing 10 damage to the vines. When the target makes a roll to escape, they take 1d8+4 physical damage and lose a Hope.\n\nWhat painful memories do the vines bring to the surface as they pierce flesh?"
      },
      {
        "name": "Charcoal Constructs - Action",
        "text": "Warped animals wreathed in indigo flame trample through a point of your choice. All targets within Close range of that point must make an Agility Reaction Roll. Targets who fail take 3d12+3 physical damage. Targets who succeed take half damage instead.\n\nAre these real animals consumed by the flame or merely constructs of the corrupting magic?"
      },
      {
        "name": "Choking Ash - Reaction",
        "text": "Countdown (Loop 6). When the PCs enter the Burning Heart of the Woods, activate the countdown. When it triggers, all characters must make a Strength or Instinct Reaction Roll. Targets who fail take 4d6+5 direct physical damage. Targets who succeed take half damage. Protective masks or clothes give advantage on the reaction roll.\n\nWhat hallucinations does the ash induce? What incongruous taste does it possess?"
      }
    ]
  },
  {
    "name": "Bustling Marketplace",
    "originalName": "Bustling Marketplace",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Social",
    "description": "The economic heart of the settlement, with local artisans, traveling merchants, and patrons across social classes.",
    "impulses": "Buy low, and sell high, tempt and tantalize with wares from near and far",
    "difficulty": 10,
    "potentialAdversaries": "Guards (Bladed Guard, Head Guard), Masked Thief, Merchant",
    "features": [
      {
        "name": "Tip the Scales - Passive",
        "text": "PCs can gain advantage on a Presence Roll by offering a handful of gold as part of the interaction.\n\nWill any coin be accepted, or only local currency? How overt are the PCs in offering this bribe?"
      },
      {
        "name": "Unexpected Find - Action",
        "text": "Reveal to the PCs that one of the merchants has something they want or need, such as food from their home, a rare book, magical components, a dubious treasure map, or a magical key.\n\nWhat cost beyond gold will the merchant ask for in exchange for this rarity?"
      },
      {
        "name": "Sticky Fingers - Action",
        "text": "A thief tries to steal something from a PC. The PC must succeed on an Instinct Roll to notice the thief or lose an item of the GM's choice as the thief escapes to a Close distance. To retrieve the stolen item, the PCs must complete a Progress Countdown (6) to chase down the thief before the thief completes a Consequence Countdown (4) and escapes to their hideout.\n\nWhat drove this person to pickpocketing? Where is the thief's hideout and how has it avoided notice?"
      },
      {
        "name": "Crowd Closes In - Reaction",
        "text": "When one of the PCs splits from the group, the crowds shift and cut them off from the party.\n\nWhere does the crowd's movement carry them? How do they feel about being alone but surrounded?"
      }
    ]
  },
  {
    "name": "Castle Siege",
    "originalName": "Castle Siege",
    "source": "SRD",
    "tier": 3,
    "category": "Environment",
    "type": "Event",
    "description": "An active siege with an attacking force fighting to gain entry to a fortified castle.",
    "impulses": "Bleed out the will to fight, breach the walls, build tension",
    "difficulty": 17,
    "potentialAdversaries": "Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Noble Forces (Archer Squadron, Conscript, Elite Soldier, Knight of the Realm)",
    "features": [
      {
        "name": "Secret Entrance - Passive",
        "text": "A PC can find or recall a secret way into the castle with a successful Instinct or Knowledge Roll.\n\nHow do they get in without revealing the pathway to the attackers?\n\nAre any of the defenders monitoring this path?"
      },
      {
        "name": "Siege Weapons (Environment Change) - Action",
        "text": "Consequence Countdown (6). The attacking force deploys siege weapons to try to raze the defenders' fortifications. Activate the countdown when the siege begins (for a protracted siege, make this a long-term countdown instead). When it triggers, the defenders' fortifications have been breached and the attackers flood inside. You gain 2 Fear, then shift to the Pitched Battle environment and spotlight it.\n\nWhat siege weapons are being deployed? Are they magical, mundane, or a mixture of both? What defenses must the characters overcome to storm the castle?"
      },
      {
        "name": "Reinforcements! - Action",
        "text": "Summon a Knight of the Realm, a number of Tier 3 Minions equal to the number of PCs, and two adversaries of your choice within Far range of a chosen PC as reinforcements. The Knight of the Realm immediately takes the spotlight.\n\nWho are they targeting first? What formation do they take?"
      },
      {
        "name": "Collateral Damage - Reaction",
        "text": "When an adversary is defeated, you can spend a Fear to have a stray attack from a siege weapon hit a point on the battlefield. All targets within Very Close range of that point must make an Agility Reaction Roll. \n- Targets who fail take 3d8+3 physical or magic damage and must mark a Stress. \n- Targets who succeed must mark a Stress.\n\nWhat debris is scattered by the attack? What is broken by the strike that can't be easily mended?"
      }
    ]
  },
  {
    "name": "Cave Ogre",
    "originalName": "Cave Ogre",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A massive humanoid who sees all sapient life as food.",
    "motivesAndTactics": "Bite off heads, feast, rip limbs, stomp, throw enemies",
    "difficulty": 13,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 8,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Club",
    "attackRange": "Very Close",
    "attackDamage": "1d10+2 phy",
    "experience": "Throw +2",
    "features": [
      {
        "name": "Ramp Up - Passive",
        "text": "You must spend a Fear to spotlight the Ogre. While spotlighted, they can make their standard attack against all targets within range."
      },
      {
        "name": "Bone Breaker - Passive",
        "text": "The Ogre's attacks deal direct damage."
      },
      {
        "name": "Hail of Boulders - Action",
        "text": "Mark a Stress to pick up heavy objects and throw them at all targets in front of the Ogre within Far range. Make an attack against these targets. Targets the Ogre succeeds against take 1d10+2 physical damage. If they succeed against more than one target, you gain a Fear."
      },
      {
        "name": "Rampaging Fury - Reaction",
        "text": "When the Ogre marks 2 or more HP, they can rampage. Move the Ogre to a point within Close range and deal 2d6+3 direct physical damage to all targets in their path."
      }
    ]
  },
  {
    "name": "Chaos Realm",
    "originalName": "Chaos Realm",
    "source": "SRD",
    "tier": 4,
    "category": "Environment",
    "type": "Traversal",
    "description": "An otherworldly space where the laws of reality are unstable and dangerous.",
    "impulses": "Annihilate certainty, consume power, defy logic",
    "difficulty": 20,
    "potentialAdversaries": "Outer Realms Monstrosities (Abomination, Corruptor, Thrall)",
    "features": [
      {
        "name": "Impossible Architecture - Passive",
        "text": "Up is down, down is right, right is starward. Gravity and directionality themselves are in flux, and any attempt to move through this realm is an odyssey unto itself, requiring a Progress Countdown (8). On a failure, a PC must mark a Stress in addition to the roll's other consequences.\n\nWhat does it feel like to move in a space so alien to the Mortal Realm?\n\nWhat landmark or point do you fixate on to maintain your balance?\n\nWhat bizarre landmarks do you traverse on your journey?"
      },
      {
        "name": "Everything You Are This Place Will Take from You - Action",
        "text": "Countdown (Loop 1d4). Activate the countdown. When it triggers, all PCs must succeed on a Presence Reaction Roll or their highest trait is temporarily reduced by 1d4 unless they mark a number of Stress equal to its value. Any lost trait points are regained if the PC critically succeeds or escapes the Chaos Realm.\n\nHow does this place try to steal from you that which makes you legendary? What does it feel like to have this power taken from you?"
      },
      {
        "name": "Unmaking - Action",
        "text": "Spend a Fear to force a PC to make a Strength Reaction Roll. On a failure, they take 4d10 direct magic damage. On a success, they must mark a Stress.\n\nWhat glimpse of other worlds do you catch while this place tries to unmake you? What core facet of your personality does the unmaking try to erase?"
      },
      {
        "name": "Outer Realms Predators - Action",
        "text": "Spend a Fear to summon an Outer Realms Abomination, an Outer Realms Corruptor, and 2d6 Outer Realms Thralls, who appear at Close range of a chosen PC in defiance of logic and causality. Immediately spotlight one of these adversaries, and you can spend an additional Fear to automatically succeed on that adversary's standard attack.\n\nWhat half-consumed remnants of the shattered world do these monstrosities cast aside in pursuit of living flesh? What jagged reflections of former personhood do you catch between moments of unquestioning malice?"
      },
      {
        "name": "Disorienting Reality - Reaction",
        "text": "On a result with Fear, you can ask the PC to describe which of their fears the Chaos Realm evokes as a vision of reality unmakes and reconstitutes itself to the PC. The PC loses a Hope. If it is their last Hope, you gain a Fear.\n\nWhat moment do they see? If it's a memory, how is it warped by this place? How hard will it be to hold on to the real memory?"
      }
    ]
  },
  {
    "name": "Chaos Skull",
    "originalName": "Chaos Skull",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A floating humanoid skull animated by scintillating magic.",
    "motivesAndTactics": "Cackle, consume magic, serve creator",
    "difficulty": 15,
    "majorThreshold": 8,
    "severeThreshold": 16,
    "hp": 5,
    "stress": 4,
    "attackModifier": "+2",
    "attackDescription": "Energy Blast",
    "attackRange": "Close",
    "attackDamage": "2d8+3 mag",
    "experience": null,
    "features": [
      {
        "name": "Levitation - Passive",
        "text": "The Skull levitates several feet off the ground and can't be Restrained."
      },
      {
        "name": "Wards - Passive",
        "text": "The Skull is resistant to magic damage."
      },
      {
        "name": "Magic Burst - Action",
        "text": "Mark a Stress to make an attack against all targets within Close range. Targets the Skull succeeds against take 2d6+4 magic damage."
      },
      {
        "name": "Siphon Magic - Action",
        "text": "Spend a Fear to make an attack against a PC with a Spellcast trait within Very Close range. On a success, the target marks 1d4 Stress and the Skull clears that many Stress. Additionally, on a success, the Skull can immediately be spotlighted again."
      }
    ]
  },
  {
    "name": "Cliffside Ascent",
    "originalName": "Cliffside Ascent",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Traversal",
    "description": "A steep, rocky cliffside tall enough to make traversal dangerous.",
    "impulses": "Cast the unready down to a rocky doom, draw people in with promise of what lies at the top",
    "difficulty": 12,
    "potentialAdversaries": "Construct, Deeproot Defender, Giant Scorpion, Glass Snake",
    "features": [
      {
        "name": "The Climb - Passive",
        "text": "Climbing up the cliffside uses a Progress Countdown (12). It ticks down according to the following criteria when the PCs make an action roll to climb: \n- Critical Success: Tick down 3 \n- Success with Hope: Tick down 2 \n- Success with Fear: Tick down 1 \n- Failure with Hope: No advancement \n- Failure with Fear: Tick up 1 When the countdown triggers, the party has made it to the top of the cliff.\n\nWhat strange formations are the stones arranged in? What ominous warnings did previous adventurers leave?"
      },
      {
        "name": "Pitons Left Behind - Passive",
        "text": "Previous climbers left behind large metal rods that climbers can use to aid their ascent. If a PC using the pitons fails an action roll to climb, they can mark a Stress instead of ticking the countdown up.\n\nWhat do the shape and material of these pitons tell you about the previous climbers? How far apart are they from one another?"
      },
      {
        "name": "Fall - Action",
        "text": "Spend a Fear to have a PC's handhold fail, plummeting them toward the ground. If they aren't saved on the next action, they hit the ground and tick up the countdown by 2. The PC takes 1d12 physical damage if the countdown is between 8 and 12, 2d12 between 4 and 7, and 3d12 at 3 or lower.\n\nHow can you tell many others have fallen here before? What lives in these walls that might try to scare adventurers into falling for an easy meal?"
      }
    ]
  },
  {
    "name": "Conscript",
    "originalName": "Conscript",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A poorly trained civilian pressed into war.",
    "motivesAndTactics": "Follow orders, gang up, survive",
    "difficulty": 12,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+0",
    "attackDescription": "Spears",
    "attackRange": "Very Close",
    "attackDamage": "6 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (6) - Passive",
        "text": "The Conscript is defeated when they take any damage. For every 6 damage a PC deals to the Conscript, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Conscripts within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 6 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Construct",
    "originalName": "Construct",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A roughly humanoid being of stone and steel, assembled and animated by magic.",
    "motivesAndTactics": "Destroy environment, serve creator, smash target, trample groups",
    "difficulty": 13,
    "majorThreshold": 7,
    "severeThreshold": 15,
    "hp": 9,
    "stress": 4,
    "attackModifier": "+4",
    "attackDescription": "Fist Slam",
    "attackRange": "Melee",
    "attackDamage": "1d20 phy",
    "experience": null,
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Construct can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Weak Structure - Passive",
        "text": "When the Construct marks HP from physical damage, they must mark an additional HP."
      },
      {
        "name": "Trample - Action",
        "text": "Mark a Stress to make an attack against all targets in the Construct's path when they move. Targets the Construct succeeds against take 1d8 physical damage."
      },
      {
        "name": "Overload - Reaction",
        "text": "Before rolling damage for the Construct's attack, you can mark a Stress to gain a +10 bonus to the damage roll. The Construct can then take the spotlight again."
      },
      {
        "name": "Death Quake - Reaction",
        "text": "When the Construct marks their last HP, the magic powering them ruptures in an explosion of force. Make an attack with advantage against all targets within Very Close range. Targets the Construct succeeds against take 1d12+2 magic damage."
      }
    ]
  },
  {
    "name": "Courtesan",
    "originalName": "Courtesan",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "An accomplished manipulator and master of the social arts.",
    "motivesAndTactics": "Entice, maneuver, secure patrons",
    "difficulty": 13,
    "majorThreshold": 7,
    "severeThreshold": 13,
    "hp": 3,
    "stress": 4,
    "attackModifier": "-3",
    "attackDescription": "Dagger",
    "attackRange": "Melee",
    "attackDamage": "1d4+3 phy",
    "experience": "Manipulation +3, Socialite +3",
    "features": [
      {
        "name": "Searing Glance - Reaction",
        "text": "When a PC within Close range makes a Presence Roll, you can mark a Stress to cast a gaze toward the aftermath. On the target's failure, they must mark 2 Stress and are Vulnerable until the scene ends or they succeed on a social action against the Courtesan. On the target's success, they must mark a Stress."
      }
    ]
  },
  {
    "name": "Courtier",
    "originalName": "Courtier",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "An ambitious and ostentatiously dressed socialite.",
    "motivesAndTactics": "Discredit, gain favor, maneuver, scheme",
    "difficulty": 12,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "hp": 3,
    "stress": 4,
    "attackModifier": "-4",
    "attackDescription": "Daggers",
    "attackRange": "Melee",
    "attackDamage": "1d4+2 phy",
    "experience": "Socialite +3",
    "features": [
      {
        "name": "Mockery - Action",
        "text": "Mark a Stress to say something mocking and force a target within Close range to make a Presence Reaction Roll (14) to see if they can save face. On a failure, the target must mark 2 Stress and is Vulnerable until the scene ends."
      },
      {
        "name": "Scapegoat - Action",
        "text": "Spend a Fear and target a PC. The Courtier convinces a crowd or prominent individual that the target is the cause of their current conflict or misfortune."
      }
    ]
  },
  {
    "name": "Cult Adept",
    "originalName": "Cult Adept",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "An experienced mage wielding shadow and fear.",
    "motivesAndTactics": "Curry favor, hinder foes, uncover knowledge",
    "difficulty": 14,
    "majorThreshold": 9,
    "severeThreshold": 18,
    "hp": 4,
    "stress": 6,
    "attackModifier": "+2",
    "attackDescription": "Rune-Covered Rod",
    "attackRange": "Far",
    "attackDamage": "2d4+3 mag",
    "experience": "Fallen Lore +2, Rituals +2",
    "features": [
      {
        "name": "Enervating Blast - Action",
        "text": "Spend a Fear to make a standard attack against a target within range. On a success, the target must mark a Stress."
      },
      {
        "name": "Shroud of the Fallen - Action",
        "text": "Mark a Stress to wrap an ally within Close range in a shroud of Protection until the Adept marks their last HP. While Protected, the target has resistance to all damage."
      },
      {
        "name": "Shadow Shackles - Action",
        "text": "Spend a Fear and choose a point within Far range. All targets within Close range of that point are Restrained in smoky chains until they break free with a successful Strength or Instinct Roll. A target Restrained by this feature must spend a Hope to make an action roll."
      },
      {
        "name": "Fear Is Fuel - Reaction",
        "text": "Twice per scene, when a PC rolls a failure with Fear, clear a Stress."
      }
    ]
  },
  {
    "name": "Cult Fang",
    "originalName": "Cult Fang",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A professional killer-turned-cultist.",
    "motivesAndTactics": "Capture sacrifices, isolate prey, rise in the ranks",
    "difficulty": 15,
    "majorThreshold": 9,
    "severeThreshold": 17,
    "hp": 4,
    "stress": 4,
    "attackModifier": "+2",
    "attackDescription": "Long Knife",
    "attackRange": "Melee",
    "attackDamage": "2d8+4 phy",
    "experience": null,
    "features": [
      {
        "name": "Shadow's Embrace - Passive",
        "text": "The Fang can climb and walk on vertical surfaces. Mark a Stress to move from one shadow to another within Far range."
      },
      {
        "name": "Pick Off the Straggler - Action",
        "text": "Mark a Stress to cause a target within Melee range to make an Instinct Reaction Roll. On a failure, the target must mark 2 Stress and is teleported with the Fang to a shadow within Far range, making them temporarily Vulnerable. On a success, the target must mark a Stress."
      }
    ]
  },
  {
    "name": "Cult Initiate",
    "originalName": "Cult Initiate",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A low-ranking cultist in simple robes, eager to gain power.",
    "motivesAndTactics": "Follow orders, gain power, seek forbidden knowledge",
    "difficulty": 13,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+0",
    "attackDescription": "Ritual Dagger",
    "attackRange": "Melee",
    "attackDamage": "5 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (6) - Passive",
        "text": "The Initiate is defeated when they take any damage. For every 6 damage a PC deals to the Initiate, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Cult Initiates within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Cult Ritual",
    "originalName": "Cult Ritual",
    "source": "SRD",
    "tier": 2,
    "category": "Environment",
    "type": "Event",
    "description": "A Fallen cult assembles around a sigil of the defeated gods and a bonfire that burns a sickly shade of green.",
    "impulses": "Profane the land, unite the Mortal Realm with the Circles Below",
    "difficulty": 14,
    "potentialAdversaries": "Cult of the Fallen (Cult Adept, Cult Fang, Cult Initiate, Secret-Keeper)",
    "features": [
      {
        "name": "Desecrated Ground - Passive",
        "text": "Cultists dedicated this place to the Fallen Gods, and their foul influence seeps into it. Reduce the PCs' Hope Die to a d10 while in this environment. The desecration can be removed with a Progress Countdown (6).\n\nHow do the PCs first notice that something is wrong about this place?\n\nWhat fears resurface while hope is kept at bay?"
      },
      {
        "name": "Blasphemous Might - Action",
        "text": "A portion of the ritual's power is diverted into a cult member to fight off interlopers. Choose one adversary to become Imbued with terrible magic until the scene ends or they're defeated. An Imbued adversary immediately takes the spotlight and gains one of the following benefits, or all three if you spend a Fear: \n- They gain advantage on all attacks. \n- They deal an extra 1d10 damage on a successful attack. \n- They gain the following feature: Relentless (2) - Passive. This adversary can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them.\n\nHow does the enemy change in appearance? What fears do their blows bring to the surface?"
      },
      {
        "name": "The Summoning - Reaction",
        "text": "Countdown (6). When the PCs enter the scene or the cult begins the ritual to summon a demon, activate the countdown. Designate one adversary to lead the ritual. The countdown ticks down when a PC rolls with Fear. When it triggers, summon a Minor Demon within Very Close range of the ritual's leader. If the leader is defeated, the countdown ends with no effect as the ritual fails.\n\nWhat will the cult do with this leashed demon if they succeed? What will they try to summon next?"
      },
      {
        "name": "Complete the Ritual - Reaction",
        "text": "If the ritual's leader is targeted by an attack or spell, an ally within Very Close range of them can mark a Stress to be targeted by that attack or spell instead.\n\nWhat does it feel like to see such devotion turned to the pursuit of fear and domination?"
      }
    ]
  },
  {
    "name": "Deeproot Defender",
    "originalName": "Deeproot Defender",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A burly vegetable-person with grasping vines.",
    "motivesAndTactics": "Ambush, grab, protect, pummel",
    "difficulty": 10,
    "majorThreshold": 8,
    "severeThreshold": 14,
    "hp": 7,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Vines",
    "attackRange": "Close",
    "attackDamage": "1d8+3 phy",
    "experience": "Huge +3",
    "features": [
      {
        "name": "Ground Slam - Action",
        "text": "Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back this way must mark a Stress."
      },
      {
        "name": "Grab and Drag - Action",
        "text": "Make an attack against a target within Close range. On a success, spend a Fear to pull them into Melee range, deal 1d6+2 physical damage, and Restrain them until the Defender takes Severe damage."
      }
    ]
  },
  {
    "name": "Demon of Avarice",
    "originalName": "Demon of Avarice",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "A regal cloaked monstrosity with circular horns adorned with treasure.",
    "motivesAndTactics": "Consume, fuel greed, sow dissent",
    "difficulty": 17,
    "majorThreshold": 15,
    "severeThreshold": 29,
    "hp": 6,
    "stress": 5,
    "attackModifier": "+2",
    "attackDescription": "Hungry Maw",
    "attackRange": "Melee",
    "attackDamage": "3d6+5 mag",
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Money Talks - Passive",
        "text": "Attacks against the Demon are made with disadvantage unless the attacker spends a handful of gold. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks HP from the Demon's standard attack, they can spend a handful of gold instead of marking HP (1 handful per HP). Add a handful of gold to the Demon for each handful of gold spent by PCs on this feature."
      },
      {
        "name": "Numbers Must Go Up - Passive",
        "text": "Add a bonus to the Demon's attack rolls equal to the number of handfuls of gold they have."
      },
      {
        "name": "Money Is Time - Action",
        "text": "Spend 3 handfuls of gold (or a Fear) to spotlight 1d4+1 allies."
      }
    ]
  },
  {
    "name": "Demon of Despair",
    "originalName": "Demon of Despair",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A cloaked demon-creature with long limbs, seeping shadows.",
    "motivesAndTactics": "Make fear contagious, stick to the shadows, undermine resolve",
    "difficulty": 17,
    "majorThreshold": 18,
    "severeThreshold": 35,
    "hp": 6,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Miasma Bolt",
    "attackRange": "Far",
    "attackDamage": "3d6+1 mag",
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Depths of Despair - Passive",
        "text": "The Demon deals double damage to PCs with 0 Hope."
      },
      {
        "name": "Your Struggle Is Pointless - Action",
        "text": "Spend a Fear to weigh down the spirits of all PCs within Far range. All targets affected replace their Hope Die with a d8 until they roll a success with Hope or their next rest."
      },
      {
        "name": "Your Friends Will Fail You - Reaction",
        "text": "When a PC fails with Fear, you can mark a Stress to cause all other PCs within Close range to lose a Hope."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Demon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Demon of Hubris",
    "originalName": "Demon of Hubris",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A perfectly beautiful and infinitely cruel demon with a gleaming spear and elegant robes.",
    "motivesAndTactics": "Condescend, declare premature victory, prove superiority",
    "difficulty": 18,
    "majorThreshold": 18,
    "severeThreshold": 36,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+4",
    "attackDescription": "Perfect Spear",
    "attackRange": "Very Close",
    "attackDamage": "3d10 phy",
    "experience": "Manipulation +2",
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Demon makes a successful attack, all PCs within Far range must lose a Hope and you gain a Fear."
      },
      {
        "name": "Double or Nothing - Passive",
        "text": "When a PC within Far range fails a roll, they can choose to reroll their Fear Die and take the new result. If they still fail, they mark 2 Stress and the Demon clears a Stress."
      },
      {
        "name": "Unparalleled Skill - Action",
        "text": "Mark a Stress to deal the Demon's standard attack damage to a target within Close range."
      },
      {
        "name": "The Root of Villainy - Action",
        "text": "Spend a Fear to spotlight two other Demons within Far range."
      },
      {
        "name": "You Pale in Comparison - Reaction",
        "text": "When a PC fails a roll within Close range of the Demon, they must mark a Stress."
      }
    ]
  },
  {
    "name": "Demon of Jealousy",
    "originalName": "Demon of Jealousy",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A fickle creature of spindly limbs and insatiable desires.",
    "motivesAndTactics": "Join in on others' success, take what belongs to others, hold grudges",
    "difficulty": 17,
    "majorThreshold": 17,
    "severeThreshold": 30,
    "hp": 6,
    "stress": 6,
    "attackModifier": "+4",
    "attackDescription": "Psychic Assault",
    "attackRange": "Far",
    "attackDamage": "3d8+3 mag",
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Unprotected Mind - Passive",
        "text": "The Demon's standard attack deals direct damage."
      },
      {
        "name": "My Turn - Reaction",
        "text": "When the Demon marks HP from an attack, spend a number of Fear equal to the HP marked by the Demon to cause the attacker to mark the same number of HP."
      },
      {
        "name": "Rivalry - Reaction",
        "text": "When a creature within Close range takes damage from a different adversary, you can mark a Stress to add a d4 to the damage roll."
      },
      {
        "name": "What's Yours Is Mine - Reaction",
        "text": "When a PC takes Severe damage within Very Close range of the Demon, you can spend a Fear to cause the target to make a Finesse Reaction Roll. On a failure, the Demon seizes one item or consumable of their choice from the target's inventory."
      }
    ]
  },
  {
    "name": "Demon of Wrath",
    "originalName": "Demon of Wrath",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A hulking demon with boulder-sized fists, driven by endless rage.",
    "motivesAndTactics": "Fuel anger, impress rivals, wreak havoc",
    "difficulty": 17,
    "majorThreshold": 22,
    "severeThreshold": 40,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Fists",
    "attackRange": "Very Close",
    "attackDamage": "3d8+1 mag",
    "experience": "Intimidation +2",
    "features": [
      {
        "name": "Anger Unrelenting - Passive",
        "text": "The Demon's attacks deal direct damage."
      },
      {
        "name": "Battle Lust - Action",
        "text": "Spend a Fear to boil the blood of all PCs within Far range. They use a d20 as their Fear Die until the end of the scene."
      },
      {
        "name": "Retaliation - Reaction",
        "text": "When the Demon takes damage from an attack within Close range, you can mark a Stress to make a standard attack against the attacker."
      },
      {
        "name": "Blood and Souls - Reaction",
        "text": "Countdown (Loop 6). Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon 1d4 Minor Demons, who appear at Close range."
      }
    ]
  },
  {
    "name": "Demonic Hound Pack",
    "originalName": "Demonic Hound Pack",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 1,
    "description": "Unnatural hounds lit from within by hellfire.",
    "motivesAndTactics": "Cause fear, consume flesh, please masters",
    "difficulty": 15,
    "majorThreshold": 11,
    "severeThreshold": 23,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+0",
    "attackDescription": "Claws and Fangs",
    "attackRange": "Melee",
    "attackDamage": "2d8+2 phy",
    "experience": "Scent Tracking +3",
    "features": [
      {
        "name": "Horde (2d4+1) - Passive",
        "text": "When the Pack has marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        "name": "Dreadhowl - Action",
        "text": "Mark a Stress to make all targets within Very Close range lose a Hope. If a target is not able to lose a Hope, they must instead mark 2 Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Pack makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Dire Bat",
    "originalName": "Dire Bat",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A wide-winged pet endlessly loyal to their vampire owner.",
    "motivesAndTactics": "Dive-bomb, hide, protect leader",
    "difficulty": 14,
    "majorThreshold": 16,
    "severeThreshold": 30,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Claws and Teeth",
    "attackRange": "Melee",
    "attackDamage": "2d6+7 phy",
    "experience": "Bloodthirsty +3",
    "features": [
      {
        "name": "Flying - Passive",
        "text": "While flying, the Bat gains a +3 bonus to their Difficulty."
      },
      {
        "name": "Screech - Action",
        "text": "Mark a Stress to send a high-pitch screech out toward all targets in front of the Bat within Far range. Those targets must mark 1d4 Stress."
      },
      {
        "name": "Guardian - Reaction",
        "text": "When an allied Vampire marks HP, you can mark a Stress to fly into Melee range of the attacker and make an attack with advantage against them. On a success, deal 2d6+2 physical damage."
      }
    ]
  },
  {
    "name": "Dire Wolf",
    "originalName": "Dire Wolf",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A large wolf with menacing teeth, seldom encountered alone.",
    "motivesAndTactics": "Defend territory, harry, protect pack, surround, trail",
    "difficulty": 12,
    "majorThreshold": 5,
    "severeThreshold": 9,
    "hp": 4,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Claws",
    "attackRange": "Melee",
    "attackDamage": "1d6+2 phy",
    "experience": "Keen Senses +3",
    "features": [
      {
        "name": "Pack Tactics - Passive",
        "text": "If the Wolf makes a successful standard attack and another Dire Wolf is within Melee range of the target, deal 1d6+5 physical damage instead of their standard damage and you gain a Fear."
      },
      {
        "name": "Hobbling Strike - Action",
        "text": "Mark a Stress to make an attack against a target within Melee range. On a success, deal 3d4+10 direct physical damage and make them Vulnerable until they clear at least 1 HP."
      }
    ]
  },
  {
    "name": "Divine Usurpation",
    "originalName": "Divine Usurpation",
    "source": "SRD",
    "tier": 4,
    "category": "Environment",
    "type": "Event",
    "description": "A massive ritual designed to breach the gates of the Hallows Above and unseat the New Gods themselves.",
    "impulses": "Collect power, overawe, silence dissent",
    "difficulty": 20,
    "potentialAdversaries": "Arch-Necromancer, Fallen Shock Troops, Mortal Hunter, Oracle of Doom, Perfected Zombie",
    "features": [
      {
        "name": "Final Preparations - Passive",
        "text": "When the environment first takes the spotlight, designate one adversary as the Usurper seeking to overthrow the gods. Activate a Long-Term Countdown (8) as the Usurper assembles what they need to conduct the ritual. When it triggers, spotlight this environment to use the \"Beginning of the End\" feature. While this environment remains in play, you can hold up to 15 Fear.\n\nWhat does the Usurper still require: The heart of a High Seraph? The lodestone of an ancient waygate? The loyalty of two archenemies? The heartbroken tears of a pure soul?"
      },
      {
        "name": "Divine Blessing - Passive",
        "text": "When a PC critically succeeds, they can spend 2 Hope to refresh an ability normally limited by uses (such as once per rest, once per session).\n\nWhat god favors you as you fight against this usurpation? How does your renewed power reflect their influence?"
      },
      {
        "name": "Defilers Abound - Action",
        "text": "Spend 2 Fear to summon 1d4+2 Fallen Shock Troops that appear within Close range of the Usurper to assist their divine siege. Immediately spotlight the Shock Troops to use a \"Group Attack\" action.\n\nWhich High Fallen do these troops serve? Which god's flesh do they wish to feast upon?"
      },
      {
        "name": "Godslayer - Action",
        "text": "If the Divine Siege Countdown (see \"Beginning of the End\") has triggered, you can spend 3 Fear to describe the Usurper slaying one of the gods of the Hallows Above, feasting upon their power and growing stronger. The Usurper clears 2 HP. Increase their Difficulty, damage, attack modifier, or give them a new feature from the slain god.\n\nWhich god meets their end? What are their last words? How does the Usurper's new stolen power manifest?"
      },
      {
        "name": "Beginning of the End - Reaction",
        "text": "When the \"Final Preparations\" long-term countdown triggers, the Usurper begins hammering on the gates of the Hallows themselves. Activate a Divine Siege Countdown (10). Spotlight the Usurper to describe the Usurper's assault and tick down this countdown by 1. If the Usurper takes Major or greater damage, tick up the countdown by 1. When it triggers, the Usurper shatters the barrier between the Mortal Realm and the Hallows Above to slay the gods and take their place. You gain a Fear for each unmarked HP the Usurper has. You can immediately use the \"Godslayer\" feature without spending Fear to make an additional GM move.\n\nHow does the Mortal Realm writhe as the natural order is violated?\n\nWhat mortals witness this blasphemy from afar?"
      },
      {
        "name": "Ritual Nexus - Reaction",
        "text": "On any failure with Fear against the Usurper, the PC must mark 1d4 Stress from the backlash of magical power.\n\nWhat visions of failures past torment you as your efforts fall short?\n\nHow are these memories twisted by the Usurper?"
      }
    ]
  },
  {
    "name": "Dryad",
    "originalName": "Dryad",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A nature spirit in the form of a humanoid tree.",
    "motivesAndTactics": "Command, cultivate, drive out, preserve the forest",
    "difficulty": 16,
    "majorThreshold": 24,
    "severeThreshold": 38,
    "hp": 8,
    "stress": 5,
    "attackModifier": "+4",
    "attackDescription": "Deadfall Shortbow",
    "attackRange": "Far",
    "attackDamage": "3d10+1 phy",
    "experience": "Forest Knowledge +4",
    "features": [
      {
        "name": "Bramble Patch - Action",
        "text": "Mark a Stress to target a point within Far range. Create a patch of thorns that covers an area within Close range of that point. All targets within that area take 2d6+2 physical damage when they act. A target must succeed on a Finesse Roll or deal more than 20 damage to the Dryad with an attack to leave the area."
      },
      {
        "name": "Grow Saplings - Action",
        "text": "Spend a Fear to grow three Treant Sapling Minions, who appear at Close range and immediately take the spotlight."
      },
      {
        "name": "We Are All One - Reaction",
        "text": "When an ally dies within Close range, you can spend a Fear to clear 2 HP and 2 Stress as the fallen ally's life force is returned to the forest."
      }
    ]
  },
  {
    "name": "Electric Eels",
    "originalName": "Electric Eels",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 2,
    "description": "A swarm of eels that encircle and electrocute.",
    "motivesAndTactics": "Avoid larger predators, shock prey, tear apart",
    "difficulty": 14,
    "majorThreshold": 10,
    "severeThreshold": 20,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+0",
    "attackDescription": "Shocking Bite",
    "attackRange": "Melee",
    "attackDamage": "2d6+4 phy",
    "experience": null,
    "features": [
      {
        "name": "Horde (2d4+1) - Passive",
        "text": "When the Eels have marked half or more of their HP, their standard attack deals 2d4+1 physical damage instead."
      },
      {
        "name": "Paralyzing Shock - Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. You gain a Fear for each target that marks HP."
      }
    ]
  },
  {
    "name": "Elemental Spark",
    "originalName": "Elemental Spark",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A blazing mote of elemental fire.",
    "motivesAndTactics": "Blast, consume, gain mass",
    "difficulty": 15,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+0",
    "attackDescription": "Bursts of Fire",
    "attackRange": "Close",
    "attackDamage": "5 mag",
    "experience": null,
    "features": [
      {
        "name": "Minion (9) - Passive",
        "text": "The Elemental is defeated when they take any damage. For every 9 damage a PC deals to the Elemental, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Elemental Sparks within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Elite Soldier",
    "originalName": "Elite Soldier",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "An armored squire or experienced commoner looking to advance.",
    "motivesAndTactics": "Gain glory, keep order, make alliances",
    "difficulty": 15,
    "majorThreshold": 9,
    "severeThreshold": 18,
    "hp": 4,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Spear",
    "attackRange": "Very Close",
    "attackDamage": "2d8+4 phy",
    "experience": null,
    "features": [
      {
        "name": "Reinforce - Action",
        "text": "Mark a Stress to move into Melee range of an ally and make a standard attack against a target within Very Close range. On a success, deal 2d10+2 physical damage and the ally can clear a Stress."
      },
      {
        "name": "Vassal's Loyalty - Reaction",
        "text": "When the Soldier is within Very Close range of a knight or other noble who would take damage, you can mark a Stress to move into Melee range of them and take the damage instead."
      }
    ]
  },
  {
    "name": "Failed Experiment",
    "originalName": "Failed Experiment",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A magical necromantic experiment gone wrong, leaving them warped and ungainly.",
    "motivesAndTactics": "Devour, hunt, track",
    "difficulty": 13,
    "majorThreshold": 12,
    "severeThreshold": 23,
    "hp": 3,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Bite and Claw",
    "attackRange": "Melee",
    "attackDamage": "2d6+5 phy",
    "experience": "Copycat +3",
    "features": [
      {
        "name": "Warped Fortitude - Passive",
        "text": "The Experiment is resistant to physical damage."
      },
      {
        "name": "Overwhelm - Passive",
        "text": "When a target the Experiment attacks has other adversaries within Very Close range, the Experiment deals double damage."
      },
      {
        "name": "Lurching Lunge - Action",
        "text": "Mark a Stress to spotlight the Experiment as an additional GM move instead of spending Fear."
      }
    ]
  },
  {
    "name": "Fallen Shock Troop",
    "originalName": "Fallen Shock Troop",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A cursed soul bound to the Fallen's will.",
    "motivesAndTactics": "Crush, dominate, earn relief, punish",
    "difficulty": 18,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+2",
    "attackDescription": "Cursed Axe",
    "attackRange": "Very Close",
    "attackDamage": "12 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (12) - Passive",
        "text": "The Shock Troop is defeated when they take any damage. For every 12 damage a PC deals to the Shock Troop, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Aura of Doom - Passive",
        "text": "When a PC marks HP from an attack by the Shock Troop, they lose a Hope."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Fallen Shock Troops within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 12 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Fallen Sorcerer",
    "originalName": "Fallen Sorcerer",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "A powerful mage bound by the bargains they made in life.",
    "motivesAndTactics": "Acquire, dishearten, dominate, torment",
    "difficulty": 19,
    "majorThreshold": 26,
    "severeThreshold": 42,
    "hp": 6,
    "stress": 5,
    "attackModifier": "+4",
    "attackDescription": "Corrupted Staff",
    "attackRange": "Far",
    "attackDamage": "4d6+10 mag",
    "experience": "Ancient Knowledge +2",
    "features": [
      {
        "name": "Conflagration - Action",
        "text": "Spend a Fear to unleash an all-consuming firestorm and make an attack against all targets within Close range. Targets the Sorcerer succeeds against take 2d10+6 direct magic damage."
      },
      {
        "name": "Nightmare Tableau - Action",
        "text": "Mark a Stress to trap a target within Far range in a powerful illusion of their worst fears. While trapped, the target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Instinct Roll."
      },
      {
        "name": "Slippery - Reaction",
        "text": "When the Sorcerer takes damage from an attack, they can teleport up to Far range."
      },
      {
        "name": "Shackles of Guilt - Reaction",
        "text": "Countdown (Loop 2d6). When the Sorcerer is in the spotlight for the first time, activate the countdown. When it triggers, all targets within Far range become Vulnerable and must mark a Stress as they relive their greatest regrets. A target can break free from their regret with a successful Presence or Strength Roll. When a PC fails to break free, they lose a Hope."
      }
    ]
  },
  {
    "name": "Fallen Warlord: Realm-Breaker",
    "originalName": "Fallen Warlord: Realm-Breaker",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A Fallen God, wreathed in rage and resentment, bearing millennia of experience in breaking heroes' spirits.",
    "motivesAndTactics": "Corrupt, dominate, punish, break the weak",
    "difficulty": 20,
    "majorThreshold": 36,
    "severeThreshold": 66,
    "hp": 8,
    "stress": 5,
    "attackModifier": "+7",
    "attackDescription": "Barbed Whip",
    "attackRange": "Close",
    "attackDamage": "4d8+7 phy",
    "experience": "Conquest +3, History +2, Intimidation +3",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Realm-Breaker can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Firespite Plate Armor - Passive",
        "text": "When the Realm-Breaker takes damage, reduce it by 2d10."
      },
      {
        "name": "Tormenting Lash - Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. When a target uses armor to reduce damage from this attack, they must mark 2 Armor Slots."
      },
      {
        "name": "All-Consuming Rage - Reaction",
        "text": "Countdown (Decreasing 8). When the Realm-Breaker is in the spotlight for the first time, activate the countdown. When it triggers, create a torrent of incarnate rage that rends flesh from bone. All targets within Far range must make a Presence Reaction Roll. Targets who fail take 2d6+10 direct magic damage. Targets who succeed take half damage. For each HP marked from this damage, summon a Fallen Shock Troop within Very Close range of the target who marked that HP. If the countdown ever decreases its maximum value to 0, the Realm-Breaker marks their remaining HP and all targets within Far range must mark all remaining HP and make a death move."
      },
      {
        "name": "Doombringer - Reaction",
        "text": "When a target marks HP from an attack by the Realm-Breaker, all PCs within Far range of the target must lose a Hope."
      },
      {
        "name": "I Have Never Known Defeat (Phase Change) - Reaction",
        "text": "When the Realm-Breaker marks their last HP, replace them with the Undefeated Champion and immediately spotlight them."
      }
    ]
  },
  {
    "name": "Fallen Warlord: Undefeated Champion",
    "originalName": "Fallen Warlord: Undefeated Champion",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "That which only the most feared have a chance to fear.",
    "motivesAndTactics": "Dispatch merciless death, punish the defiant, secure victory at any cost",
    "difficulty": 18,
    "majorThreshold": 35,
    "severeThreshold": 58,
    "hp": 11,
    "stress": 5,
    "attackModifier": "+8",
    "attackDescription": "Heart-Shattering Sword",
    "attackRange": "Very Close",
    "attackDamage": "4d12+13 phy",
    "experience": "Conquest +3, History +2, Intimidation +3",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Undefeated Champion can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Faltering Armor - Passive",
        "text": "When the Undefeated Champion takes damage, reduce it by 1d10."
      },
      {
        "name": "Shattering Strike - Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. PCs the Champion succeeds against lose a number of Hope equal to the HP they marked from this attack."
      },
      {
        "name": "Endless Legions - Action",
        "text": "Spend a Fear to summon a number of Fallen Shock Troops equal to twice the number of PCs. The Shock Troops appear at Far range."
      },
      {
        "name": "Circle of Defilement - Reaction",
        "text": "Countdown (1d8). When the Undefeated Champion is in the spotlight for the first time, activate the countdown. When it triggers, activate a magical circle covering an area within Far range of the Champion. A target within that area is Vulnerable until they leave the circle. The circle can be removed by dealing Severe damage to the Undefeated Champion."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Undefeated Champion makes a successful attack against a PC, you gain a Fear."
      },
      {
        "name": "Doombringer - Reaction",
        "text": "When a target marks HP from an attack by the Undefeated Champion, all PCs within Far range of the target lose a Hope."
      }
    ]
  },
  {
    "name": "Giant Beastmaster",
    "originalName": "Giant Beastmaster",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A leather-clad warrior bearing a whip and massive bow.",
    "motivesAndTactics": "Command, make a living, maneuver, pin down, protect companion animals",
    "difficulty": 16,
    "majorThreshold": 12,
    "severeThreshold": 24,
    "hp": 6,
    "stress": 5,
    "attackModifier": "+2",
    "attackDescription": "Longbow",
    "attackRange": "Far",
    "attackDamage": "2d8+4 phy",
    "experience": "Animal Handling +3",
    "features": [
      {
        "name": "Two as One - Passive",
        "text": "When the Beastmaster is spotlighted, you can also spotlight a Tier 1 animal adversary currently under their control."
      },
      {
        "name": "Pinning Strike - Action",
        "text": "Make a standard attack against a target. On a success, you can mark a Stress to pin them to a nearby surface. The pinned target is Restrained until they break free with a successful Finesse or Strength Roll."
      },
      {
        "name": "Deadly Companion - Action",
        "text": "Twice per scene, summon a Bear, Dire Wolf, or similar Tier 1 animal adversary under the Beastmaster's control. The adversary appears at Close range and is immediately spotlighted."
      }
    ]
  },
  {
    "name": "Giant Brawler",
    "originalName": "Giant Brawler",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "An especially muscular giant wielding a warhammer larger than a human.",
    "motivesAndTactics": "Make a living, overwhelm, slam, topple",
    "difficulty": 15,
    "majorThreshold": 14,
    "severeThreshold": 28,
    "hp": 7,
    "stress": 4,
    "attackModifier": "+2",
    "attackDescription": "Warhammer",
    "attackRange": "Very Close",
    "attackDamage": "2d12+3 phy",
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Battering Ram - Action",
        "text": "Mark a Stress to have the Brawler charge at an inanimate object within Close range they could feasibly smash (such as a wall, cart, or market stand) and destroy it. All targets within Very Close range of the object must succeed on an Agility Reaction Roll or take 2d4+3 physical damage from the shrapnel."
      },
      {
        "name": "Bloody Reprisal - Reaction",
        "text": "When the Brawler marks 2 or more HP from an attack within Very Close range, you can make a standard attack against the attacker. On a success, the Brawler deals 2d6+15 physical damage instead of their standard damage."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Brawler makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Giant Eagle",
    "originalName": "Giant Eagle",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A giant bird of prey with blood-stained talons.",
    "motivesAndTactics": "Hunt prey, stay mobile, strike decisively",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 19,
    "hp": 4,
    "stress": 4,
    "attackModifier": "+1",
    "attackDescription": "Claws and Beak",
    "attackRange": "Very Close",
    "attackDamage": "2d6+3 phy",
    "experience": null,
    "features": [
      {
        "name": "Flight - Passive",
        "text": "While flying, the Eagle gains a +3 bonus to their Difficulty."
      },
      {
        "name": "Deadly Dive - Action",
        "text": "Mark a Stress to attack a target within Far range. On a success, deal 2d10+2 physical damage and knock the target over, making them Vulnerable until they next act."
      },
      {
        "name": "Take Off - Action",
        "text": "Make an attack against a target within Very Close range. On a success, deal 2d4+3 physical damage and the target must succeed on an Agility Reaction Roll or become temporarily Restrained within the Eagle's massive talons. If the target is Restrained, the Eagle immediately lifts into the air to Very Far range above the battlefield while holding them."
      },
      {
        "name": "Deadly Drop - Action",
        "text": "While flying, the Eagle can drop a Restrained target they are holding. When dropped, the target is no longer Restrained but starts falling. If their fall isn't prevented during the PCs' next action, the target takes 2d20 physical damage when they land."
      }
    ]
  },
  {
    "name": "Giant Mosquitoes",
    "originalName": "Giant Mosquitoes",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 5,
    "description": "Dozens of fist-sized mosquitoes, flying together for protection.",
    "motivesAndTactics": "Fly away, harass, steal blood",
    "difficulty": 10,
    "majorThreshold": 5,
    "severeThreshold": 9,
    "hp": 6,
    "stress": 3,
    "attackModifier": "-2",
    "attackDescription": "Proboscis",
    "attackRange": "Melee",
    "attackDamage": "1d8+3 phy",
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Horde (1d4+1) - Passive",
        "text": "When the Mosquitoes have marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "Flying - Passive",
        "text": "While flying, the Mosquitoes have a +2 bonus to their Difficulty."
      },
      {
        "name": "Bloodsucker - Reaction",
        "text": "When the Mosquitoes' attack causes a target to mark HP, you can mark a Stress to force the target to mark an additional HP."
      }
    ]
  },
  {
    "name": "Giant Rat",
    "originalName": "Giant Rat",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A cat-sized rodent skilled at scavenging and survival.",
    "motivesAndTactics": "Burrow, hunger, scavenge, wear down",
    "difficulty": 10,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "-4",
    "attackDescription": "Claws",
    "attackRange": "Melee",
    "attackDamage": "1 phy",
    "experience": "Keen Senses +3",
    "features": [
      {
        "name": "Minion (3) - Passive",
        "text": "The Rat is defeated when they take any damage. For every 3 damage a PC deals to the Rat, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Giant Rats within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 1 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Giant Recruit",
    "originalName": "Giant Recruit",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A giant fighter wearing borrowed armor.",
    "motivesAndTactics": "Batter, make a living, overwhelm, terrify",
    "difficulty": 13,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 2,
    "attackModifier": "+1",
    "attackDescription": "Warhammer",
    "attackRange": "Very Close",
    "attackDamage": "5 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (7) - Passive",
        "text": "The Recruit is defeated when they take any damage. For every 7 damage a PC deals to the Recruit, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Giant Recruits within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 5 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Giant Scorpion",
    "originalName": "Giant Scorpion",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A human-sized arachnid with tearing claws and a stinging tail.",
    "motivesAndTactics": "Ambush, feed, grapple, poison",
    "difficulty": 13,
    "majorThreshold": 7,
    "severeThreshold": 13,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Pincers",
    "attackRange": "Melee",
    "attackDamage": "1d12+2 phy",
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Double Strike - Action",
        "text": "Mark a Stress to make a standard attack against two targets within Melee range."
      },
      {
        "name": "Venomous Stinger - Action",
        "text": "Make an attack against a target within Very Close range. On a success, spend a Fear to deal 1d4+4 physical damage and Poison them until their next rest or they succeed on a Knowledge Roll (16). While Poisoned, the target must roll a d6 before they make an action roll. On a result of 4 or lower, they must mark a Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Scorpion makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Glass Snake",
    "originalName": "Glass Snake",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A clear serpent with a massive head that leaves behind a glass shard trail wherever they go.",
    "motivesAndTactics": "Climb, feed, keep distance, scare",
    "difficulty": 14,
    "majorThreshold": 6,
    "severeThreshold": 10,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Glass Fangs",
    "attackRange": "Very Close",
    "attackDamage": "1d8+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Armor-Shredding Shards - Passive",
        "text": "After a successful attack against the Snake within Melee range, the attacker must mark an Armor Slot. If they can't mark an Armor Slot, they must mark an HP."
      },
      {
        "name": "Spinning Serpent - Action",
        "text": "Mark a Stress to make an attack against all targets within Very Close range. Targets the Snake succeeds against take 1d6+1 physical damage."
      },
      {
        "name": "Spitter - Action",
        "text": "Spend a Fear to introduce a d6 Spitter Die. When the Snake is in the spotlight, roll this die. On a result of 5 or higher, all targets in front of the Snake within Far range must succeed on an Agility Reaction Roll or take 1d4 physical damage. The Snake can take the spotlight a second time this GM turn."
      }
    ]
  },
  {
    "name": "Gorgon",
    "originalName": "Gorgon",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A snake-headed, scaled humanoid with a gilded bow, enraged that their peace has been disturbed.",
    "motivesAndTactics": "Corner, hit-and-run, petrify, seek vengeance",
    "difficulty": 15,
    "majorThreshold": 13,
    "severeThreshold": 25,
    "hp": 9,
    "stress": 3,
    "attackModifier": "+4",
    "attackDescription": "Sunsear Shortbow",
    "attackRange": "Far",
    "attackDamage": "2d20+3 mag",
    "experience": "Stealth +3",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Gorgon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Sunsear Arrows - Passive",
        "text": "When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can't become Hidden. Attack rolls made against a Glowing target have advantage."
      },
      {
        "name": "Crown of Serpents - Action",
        "text": "Make an attack roll against a target within Melee range using the Gorgon's protective snakes. On a success, mark a Stress to deal 2d10+4 physical damage and the target must mark a Stress."
      },
      {
        "name": "Petrifying Gaze - Reaction",
        "text": "When the Gorgon takes damage from an attack within Close range, you can spend a Fear to force the attacker to make an Instinct Reaction Roll. On a failure, they begin to turn to stone, marking a HP and starting a Petrification Countdown (4). This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a death move. If the Gorgon is defeated, all petrification countdowns end."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Gorgon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Greater Earth Elemental",
    "originalName": "Greater Earth Elemental",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A living landslide of boulders and dust, as large as a house.",
    "motivesAndTactics": "Avalanche, knock over, pummel",
    "difficulty": 17,
    "majorThreshold": 22,
    "severeThreshold": 40,
    "hp": 10,
    "stress": 4,
    "attackModifier": "+7",
    "attackDescription": "Boulder Fist",
    "attackRange": "Very Close",
    "attackDamage": "3d10+1 phy",
    "experience": null,
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Elemental and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Elemental and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Crushing Blows - Passive",
        "text": "When the Elemental makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Immovable Object - Passive",
        "text": "An attack that would move the Elemental moves them two fewer ranges (for example, Far becomes Very Close). When the Elemental takes physical damage, reduce it by 7."
      },
      {
        "name": "Rockslide - Action",
        "text": "Mark a Stress to create a rockslide that buries the land in front of Elemental within Close range with rockfall. All targets in this area must make an Agility Reaction Roll (19). Targets who fail take 2d12+5 physical damage and become Vulnerable until their next roll with Hope. Targets who succeed take half damage."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Greater Water Elemental",
    "originalName": "Greater Water Elemental",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "A huge living wave that crashes down upon enemies.",
    "motivesAndTactics": "Deluge, disperse, drown",
    "difficulty": 17,
    "majorThreshold": 17,
    "severeThreshold": 34,
    "hp": 5,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Crashing Wave",
    "attackRange": "Very Close",
    "attackDamage": "3d4+1 mag",
    "experience": null,
    "features": [
      {
        "name": "Water Jet - Action",
        "text": "Mark a Stress to attack a target within Very Close range. On a success, deal 2d4+7 physical damage and the target's next action has disadvantage. On a failure, the target must mark a Stress."
      },
      {
        "name": "Drowning Embrace - Action",
        "text": "Spend a Fear to make an attack against all targets within Very Close range. Targets the Elemental succeeds against become Restrained and Vulnerable as they begin drowning. A target can break free, ending both conditions, with a successful Strength or Instinct Roll."
      },
      {
        "name": "High Tide - Reaction",
        "text": "When the Elemental makes a successful standard attack, you can mark a Stress to knock the target back to Close range."
      }
    ]
  },
  {
    "name": "Green Ooze",
    "originalName": "Green Ooze",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A moving mound of translucent green slime.",
    "motivesAndTactics": "Camouflage, consume and multiply, creep up, envelop",
    "difficulty": 8,
    "majorThreshold": 5,
    "severeThreshold": 10,
    "hp": 5,
    "stress": 2,
    "attackModifier": "+1",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "1d6+1 mag",
    "experience": "Camouflage +3",
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Ooze and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Acidic Form - Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Envelop - Action",
        "text": "Make a standard attack against a target within Melee range. On a success, the Ooze envelops them and the target must mark 2 Stress. The target must mark an additional Stress when they make an action roll. If the Ooze takes Severe damage, the target is freed."
      },
      {
        "name": "Split - Reaction",
        "text": "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ]
  },
  {
    "name": "Hallowed Archer",
    "originalName": "Hallowed Archer",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "Spirit soldiers with sanctified bows.",
    "motivesAndTactics": "Focus fire, obey, reposition, volley",
    "difficulty": 19,
    "majorThreshold": 25,
    "severeThreshold": 45,
    "hp": 3,
    "stress": 2,
    "attackModifier": "+4",
    "attackDescription": "Sanctified Longbow",
    "attackRange": "Far",
    "attackDamage": "4d8+8 phy",
    "experience": null,
    "features": [
      {
        "name": "Punish the Guilty - Passive",
        "text": "The Archer deals double damage to targets marked Guilty by a High Seraph."
      },
      {
        "name": "Divine Volley - Action",
        "text": "Mark a Stress to make a standard attack against up to three targets."
      }
    ]
  },
  {
    "name": "Hallowed Soldier",
    "originalName": "Hallowed Soldier",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "Souls of the faithful, lifted up with divine weaponry.",
    "motivesAndTactics": "Obey, outmaneuver, punish, swarm",
    "difficulty": 18,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 2,
    "attackModifier": "+2",
    "attackDescription": "Sword and Shield",
    "attackRange": "Melee",
    "attackDamage": "10 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (13) - Passive",
        "text": "The Soldier is defeated when they take any damage. For every 13 damage a PC deals to the Soldier, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Divine Flight - Passive",
        "text": "While the Soldier is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Hallowed Soldiers within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 10 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Hallowed Temple",
    "originalName": "Hallowed Temple",
    "source": "SRD",
    "tier": 2,
    "category": "Environment",
    "type": "Social",
    "description": "A bustling but well-kept temple that provides healing and hosts regular services, overseen by a priest or seraph.",
    "impulses": "Connect the Mortal Realm with the Hallows Above, display the power of the divine, provide aid and succor to the faithful",
    "difficulty": 13,
    "potentialAdversaries": "Guards (Archer Guard, Bladed Guard, Head Guard)",
    "features": [
      {
        "name": "A Place of Healing - Passive",
        "text": "A PC who takes a rest in the Hallowed Temple automatically clears all HP.\n\nWhat does the incense smell like? What kinds of songs do the acolytes sing?"
      },
      {
        "name": "Divine Guidance - Passive",
        "text": "A PC who prays to a deity while in the Hallowed Temple can make an Instinct Roll to receive answers. If the god they beseech isn't welcome in this temple, the roll is made with disadvantage. \n- Critical Success: The PC gains clear information. Additionally, they gain 1d4 Hope, which can be distributed between the party if they share the vision and guidance they received. \n- Success with Hope: The PC receives clear information. \n- Success with Fear: The PC receives brief flashes of insight and an emotional impression conveying an answer. \n- Any Failure: The PC receives only vague flashes. They can mark a Stress to receive one clear image without context.\n\nWhat does it feel like as you are touched by this vision? What feeling lingers after the images have passed?"
      },
      {
        "name": "Relentless Hope - Reaction",
        "text": "Once per scene, each PC can mark a Stress to turn a result with Fear into a result with Hope.\n\nWhat emotions or memories do you connect with when fear presses in?"
      },
      {
        "name": "Divine Censure - Reaction",
        "text": "When the PCs have trespassed, blasphemed, or offended the clergy, you can spend a Fear to summon a High Seraph and 1d4 Bladed Guards within Close range of the senior priest to reinforce their will.\n\nWhat symbols or icons do they bear that signal they are anointed agents of the divinity? Who leads the group and what led them to this calling?"
      }
    ]
  },
  {
    "name": "Harrier",
    "originalName": "Harrier",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A nimble fighter armed with javelins.",
    "motivesAndTactics": "Flank, harry, kite, profit",
    "difficulty": 12,
    "majorThreshold": 5,
    "severeThreshold": 9,
    "hp": 3,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Javelin",
    "attackRange": "Close",
    "attackDamage": "1d6+2 phy",
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Maintain Distance - Passive",
        "text": "After making a standard attack, the Harrier can move anywhere within Far range."
      },
      {
        "name": "Fall Back - Reaction",
        "text": "When a creature moves into Melee range to make an attack, you can mark a Stress before the attack roll to move anywhere within Close range and make an attack against that creature. On a success, deal 1d10+2 physical damage."
      }
    ]
  },
  {
    "name": "Haunted City",
    "originalName": "Haunted City",
    "source": "SRD",
    "tier": 2,
    "category": "Environment",
    "type": "Exploration",
    "description": "An abandoned city populated by the restless spirits of eras past.",
    "impulses": "Misdirect and disorient, replay apocalypses both public and personal",
    "difficulty": 14,
    "potentialAdversaries": "Ghosts (Spectral Archer, Spectral Captain, Spectral Guardian), ghostly versions of other adversaries (see \"Ghostly Form\")",
    "features": [
      {
        "name": "Buried Knowledge - Passive",
        "text": "The city has countless mysteries to unfold. A PC who seeks knowledge about the fallen city can make an Instinct or Knowledge Roll to learn about this place and discover (potentially haunted) loot. \n- Critical Success: Gain valuable information and a related useful item. \n- Success with Hope: Gain valuable information. \n- Success with Fear: Uncover vague or incomplete information. \n- Any Failure: Mark a Stress to find a lead after an exhaustive search.\n\nWhat greater secrets does the city contain? Why have so many ghosts lingered here? What doomed adventurers have met a bad fate here already?"
      },
      {
        "name": "Ghostly Form - Passive",
        "text": "Adversaries who appear here are of a ghostly form. They have resistance to physical damage and can mark a Stress to move up to Close range through solid objects.\n\nWhat injuries to their physical form speak to their cause of death?\n\nWhat unfulfilled purpose holds them in the Mortal Plane?"
      },
      {
        "name": "Dead Ends - Action",
        "text": "The ghosts of an earlier era manifest scenes from their bygone era, such as a street festival, a revolution, or a heist. These hauntings change the layout of the city around the PCs, blocking the way behind them, forcing a detour, or presenting them with a challenge, such as mistaking them for rival thieves during the heist.\n\nWhat do the ghosts want from you? What do you need from them?"
      },
      {
        "name": "Apocalypse Then - Action",
        "text": "Spend a Fear to manifest the echo of a past disaster that ravaged the city. Activate a Progress Countdown (5) as the disaster replays around the PCs. To complete the countdown and escape the catastrophe, the PCs must overcome threats such as rampaging fires, stampeding civilians, collapsing buildings, or crumbling streets, while recalling history and finding clues to escape the inevitable.\n\nIs this the disaster that led the city to be abandoned? What is known about this disaster, and how could that help the PCs escape?"
      }
    ]
  },
  {
    "name": "Head Guard",
    "originalName": "Head Guard",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A seasoned guard with a mace, a whistle, and a bellowing voice.",
    "motivesAndTactics": "Arrest, close gates, pin down, seek glory",
    "difficulty": 15,
    "majorThreshold": 7,
    "severeThreshold": 13,
    "hp": 7,
    "stress": 3,
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
    ]
  },
  {
    "name": "Head Vampire",
    "originalName": "Head Vampire",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A captivating undead dressed in aristocratic finery.",
    "motivesAndTactics": "Create thralls, charm, command, fly, intimidate",
    "difficulty": 17,
    "majorThreshold": 22,
    "severeThreshold": 42,
    "hp": 6,
    "stress": 6,
    "attackModifier": "+5",
    "attackDescription": "Rapier",
    "attackRange": "Melee",
    "attackDamage": "2d20+4 phy",
    "experience": "Aristocrat +3",
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Vampire makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Look into My Eyes - Passive",
        "text": "A creature who moves into Melee range of the Vampire must make an Instinct Reaction Roll. On a failure, you gain 1d4 Fear."
      },
      {
        "name": "Feed on Followers - Action",
        "text": "When the Vampire is within Melee range of an ally, they can cause the ally to mark a HP. The Vampire then clears a HP."
      },
      {
        "name": "The Hunt Is On - Action",
        "text": "Spend 2 Fear to summon 1d4 Vampires, who appear at Far range and immediately take the spotlight."
      },
      {
        "name": "Lifesuck - Reaction",
        "text": "When the Vampire is spotlighted, roll a d8. On a result of 6 or higher, all targets within Very Close range must mark a HP."
      }
    ]
  },
  {
    "name": "High Seraph",
    "originalName": "High Seraph",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A divine champion, head of a hallowed host of warriors who enforce their god's will.",
    "motivesAndTactics": "Enforce dogma, fly, pronounce judgment, smite",
    "difficulty": 20,
    "majorThreshold": 37,
    "severeThreshold": 70,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+8",
    "attackDescription": "Holy Sword",
    "attackRange": "Very Close",
    "attackDamage": "4d10+10 phy",
    "experience": "Divine Knowledge +3",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Seraph can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Divine Flight - Passive",
        "text": "While the Seraph is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Judgment - Action",
        "text": "Spend a Fear to make a target Guilty in the eyes of the Seraph's god until the Seraph is defeated. While Guilty, the target doesn't gain Hope on a result with Hope. When the Seraph succeeds on a standard attack against a Guilty target, they deal Severe damage instead of their standard damage. The Seraph can only mark one target at a time."
      },
      {
        "name": "God Rays - Action",
        "text": "Mark a Stress to reflect a sliver of divinity as a searing beam of light that hits up to twenty targets within Very Far range. Targets must make a Presence Reaction Roll, with disadvantage if they are marked Guilty. Targets who fail take 4d6+12 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "We Are One - Action",
        "text": "Once per scene, spend a Fear to spotlight all other adversaries within Far range. Attacks they make while spotlighted in this way deal half damage."
      }
    ]
  },
  {
    "name": "Huge Green Ooze",
    "originalName": "Huge Green Ooze",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A translucent green mound of acid taller than most humans.",
    "motivesAndTactics": "Camouflage, creep up, envelop, multiply",
    "difficulty": 15,
    "majorThreshold": 15,
    "severeThreshold": 30,
    "hp": 7,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "3d8+1 mag",
    "experience": "Blend In +3",
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Ooze and they don't have a token on their stat block, they can't act yet. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Acidic Form - Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Envelop - Action",
        "text": "Make an attack against a target within Melee range. On a success, the Ooze Envelops them and the target must mark 2 Stress. While Enveloped, the target must mark an additional Stress every time they make an action roll. When the Ooze takes Severe damage, all Enveloped targets are freed and the condition is cleared."
      },
      {
        "name": "Split - Reaction",
        "text": "When the Ooze has 4 or more HP marked, you can spend a Fear to split them into two Green Oozes (with no marked HP or Stress). Immediately spotlight both of them."
      }
    ]
  },
  {
    "name": "Hydra",
    "originalName": "Hydra",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A quadrupedal scaled beast with multiple long-necked heads, each filled with menacing fangs.",
    "motivesAndTactics": "Devour, regenerate, terrify",
    "difficulty": 18,
    "majorThreshold": 19,
    "severeThreshold": 35,
    "hp": 10,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Bite",
    "attackRange": "Close",
    "attackDamage": "2d12+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Many-Headed Menace - Passive",
        "text": "The Hydra begins with three heads and can have up to five. When the Hydra takes Major or greater damage, they lose a head."
      },
      {
        "name": "Relentless (X) - Passive",
        "text": "The Hydra can be spotlighted X times per GM turn, where X is the Hydra's number of heads. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Regeneration - Action",
        "text": "If the Hydra has any marked HP, spend a Fear to clear a HP and grow two heads."
      },
      {
        "name": "Terrifying Chorus - Action",
        "text": "All PCs within Far range lose 2 Hope."
      },
      {
        "name": "Magical Weakness - Reaction",
        "text": "When the Hydra takes magic damage, they become Dazed until the next roll with Fear. While Dazed, they can't use their Regeneration action but are immune to magic damage."
      }
    ]
  },
  {
    "name": "Imperial Court",
    "originalName": "Imperial Court",
    "source": "SRD",
    "tier": 4,
    "category": "Environment",
    "type": "Social",
    "description": "The majestic domain of a powerful empire, lavishly appointed with stolen treasures.",
    "impulses": "Justify and perpetuate imperial rule, seduce rivals with promises of power and comfort",
    "difficulty": 20,
    "potentialAdversaries": "Bladed Guard, Courtesan, Knight of the Realm, Monarch, Spy",
    "features": [
      {
        "name": "All Roads Lead Here - Passive",
        "text": "While in the Imperial Court, a PC has disadvantage on Presence Rolls made to take actions that don't fit the imperial way of life or support the empire's dominance.\n\nHow does the way language is used make even discussing alternative ways of living difficult? What obvious benefits for loyalty create friction when you try to discuss alternatives?"
      },
      {
        "name": "Rival Vassals - Passive",
        "text": "The PCs can find imperial subjects, vassals, and supplicants in the court, each vying for favor, seeking proximity to power, exchanging favors for loyalty, and elevating their status above others'. Some might be desperate to undermine their rivals, while others might even be open to discussions that verge on sedition.\n\nHow do they benefit from vassalage, and what has it cost them?\n\nWhat exploitation drives them to consider opposing the unstoppable?"
      },
      {
        "name": "The Gravity of Empire - Action",
        "text": "Spend a Fear to present a PC with a golden opportunity or offer to satisfy a major goal in exchange for obeying or supporting the empire. The target must make a Presence Reaction Roll. On a failure, they must mark all their Stress or accept the offer. If they have already marked all their Stress, they must accept the offer or exile themselves from the empire. On a success, they must mark 1d4 Stress as they're taxed by temptation.\n\nWhat do the PCs want so desperately they might consider throwing in with this ruthless power? How did imperial agents learn the PC's greatest desires?"
      },
      {
        "name": "Imperial Decree - Action",
        "text": "Spend a Fear to tick down a long-term countdown related to the empire's agenda by 1d4. If this triggers the countdown, a proclamation related to the agenda is announced at court as the plan is executed.\n\nWhat display of power or transfer of wealth was needed to expedite this plan? Whose lives were disrupted or upended to make this happen?"
      },
      {
        "name": "Eyes Everywhere - Reaction",
        "text": "On a result with Fear, you can spend a Fear to have someone loyal to the empire overhear seditious talk within the court. A PC must succeed on an Instinct Reaction Roll to notice that the group has been overheard so they can try to intercept the witness before the PCs are exposed.\n\nHow has the empire compromised this witness? Why is their first impulse to protect the empire, even if doesn't treat them well?"
      }
    ]
  },
  {
    "name": "Jagged Knife Bandit",
    "originalName": "Jagged Knife Bandit",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A cunning criminal in a cloak bearing one of the gang's iconic knives.",
    "motivesAndTactics": "Escape, profit, steal, throw smoke",
    "difficulty": 12,
    "majorThreshold": 8,
    "severeThreshold": 14,
    "hp": 5,
    "stress": 3,
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
    ]
  },
  {
    "name": "Jagged Knife Hexer",
    "originalName": "Jagged Knife Hexer",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "A staff-wielding bandit in a cloak adorned with magical paraphernalia, using curses to vex their foes.",
    "motivesAndTactics": "Command, hex, profit",
    "difficulty": 13,
    "majorThreshold": 5,
    "severeThreshold": 9,
    "hp": 4,
    "stress": 4,
    "attackModifier": "+2",
    "attackDescription": "Staff",
    "attackRange": "Far",
    "attackDamage": "1d6+2 mag",
    "experience": "Magical Knowledge +2",
    "features": [
      {
        "name": "Curse - Action",
        "text": "Choose a target within Far range and temporarily Curse them. While the target is Cursed, you can mark a Stress when that target rolls with Hope to make the roll be with Fear instead."
      },
      {
        "name": "Chaotic Flux - Action",
        "text": "Make an attack against up to three targets within Very Close range. Mark a Stress to deal 2d6+3 magic damage to targets the Hexer succeeded against."
      }
    ]
  },
  {
    "name": "Jagged Knife Kneebreaker",
    "originalName": "Jagged Knife Kneebreaker",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "An imposing brawler carrying a large club.",
    "motivesAndTactics": "Grapple, intimidate, profit, steal",
    "difficulty": 12,
    "majorThreshold": 7,
    "severeThreshold": 14,
    "hp": 7,
    "stress": 4,
    "attackModifier": "-3",
    "attackDescription": "Club",
    "attackRange": "Melee",
    "attackDamage": "1d4+6 phy",
    "experience": "Thief +2, Unveiled Threats +3",
    "features": [
      {
        "name": "I've Got 'Em - Passive",
        "text": "Creatures Restrained by the Kneebreaker take double damage from attacks by other adversaries."
      },
      {
        "name": "Hold Them Down - Action",
        "text": "Make an attack against a target within Melee range. On a success, the target takes no damage but is Restrained and Vulnerable. The target can break free, clearing both conditions, with a successful Strength Roll or is freed automatically if the Kneebreaker takes Major or greater damage."
      }
    ]
  },
  {
    "name": "Jagged Knife Lackey",
    "originalName": "Jagged Knife Lackey",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A thief with simple clothes and small daggers, eager to prove themselves.",
    "motivesAndTactics": "Escape, profit, throw smoke",
    "difficulty": 9,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "-2",
    "attackDescription": "Daggers",
    "attackRange": "Melee",
    "attackDamage": "2 phy",
    "experience": "Thief +2",
    "features": [
      {
        "name": "Minion (3) - Passive",
        "text": "The Lackey is defeated when they take any damage. For every 3 damage a PC deals to the Lackey, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Jagged Knife Lackeys within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Jagged Knife Lieutenant",
    "originalName": "Jagged Knife Lieutenant",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A seasoned bandit in quality leathers with a strong voice and cunning eyes.",
    "motivesAndTactics": "Bully, command, profit, reinforce",
    "difficulty": 13,
    "majorThreshold": 7,
    "severeThreshold": 14,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Javelin",
    "attackRange": "Close",
    "attackDamage": "1d8+3 phy",
    "experience": "Local Knowledge +2",
    "features": [
      {
        "name": "Tactician - Action",
        "text": "When you spotlight the Lieutenant, mark a Stress to also spotlight two allies within Close range."
      },
      {
        "name": "More Where That Came From - Action",
        "text": "Summon three Jagged Knife Lackeys, who appear at Far range."
      },
      {
        "name": "Coup de Grace - Action",
        "text": "Spend a Fear to make an attack against a Vulnerable target within Close range. On a success, deal 2d6+12 physical damage and the target must mark a Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Lieutenant makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Jagged Knife Shadow",
    "originalName": "Jagged Knife Shadow",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A nimble scoundrel bearing a wicked knife and utilizing shadow magic to isolate targets.",
    "motivesAndTactics": "Ambush, conceal, divide, profit",
    "difficulty": 12,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "hp": 3,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Daggers",
    "attackRange": "Melee",
    "attackDamage": "1d4+4 phy",
    "experience": "Intrusion +3",
    "features": [
      {
        "name": "Backstab - Passive",
        "text": "When the Shadow succeeds on a standard attack that has advantage, they deal 1d6+6 physical damage instead of their standard damage."
      },
      {
        "name": "Cloaked - Action",
        "text": "Become Hidden until after the Shadow's next attack. Attacks made while Hidden from this feature have advantage."
      }
    ]
  },
  {
    "name": "Jagged Knife Sniper",
    "originalName": "Jagged Knife Sniper",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A lanky bandit striking from cover with a shortbow.",
    "motivesAndTactics": "Ambush, hide, profit, reposition",
    "difficulty": 13,
    "majorThreshold": 4,
    "severeThreshold": 7,
    "hp": 3,
    "stress": 2,
    "attackModifier": "-1",
    "attackDescription": "Shortbow",
    "attackRange": "Far",
    "attackDamage": "1d10+2 phy",
    "experience": "Stealth +2",
    "features": [
      {
        "name": "Unseen Strike - Passive",
        "text": "If the Sniper is Hidden when they make a successful standard attack against a target, they deal 1d10+4 physical damage instead of their standard damage."
      }
    ]
  },
  {
    "name": "Juvenile Flickerfly",
    "originalName": "Juvenile Flickerfly",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A horse-sized insect with iridescent scales and crystalline wings moving faster than the eye can see.",
    "motivesAndTactics": "Collect shiny things, hunt, swoop",
    "difficulty": 14,
    "majorThreshold": 13,
    "severeThreshold": 26,
    "hp": 10,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Wing Slash",
    "attackRange": "Very Close",
    "attackDamage": "2d10+4 phy",
    "experience": null,
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Flickerfly can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Peerless Accuracy - Passive",
        "text": "Before the Flickerfly makes an attack, roll a d6. On a result of 4 or higher, the target's Evasion is halved against this attack."
      },
      {
        "name": "Mind Dance - Action",
        "text": "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target's fears."
      },
      {
        "name": "Hallucinatory Breath - Reaction",
        "text": "Countdown (Loop 1d6). When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must succeed on an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail must mark a Stress and lose a Hope."
      }
    ]
  },
  {
    "name": "Knight of the Realm",
    "originalName": "Knight of the Realm",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A decorated soldier with heavy armor and a powerful steed.",
    "motivesAndTactics": "Run down, seek glory, show dominance",
    "difficulty": 15,
    "majorThreshold": 13,
    "severeThreshold": 26,
    "hp": 6,
    "stress": 4,
    "attackModifier": "+4",
    "attackDescription": "Longsword",
    "attackRange": "Melee",
    "attackDamage": "2d10+4 phy",
    "experience": "Ancient Knowledge +3, High Society +2, Tactics +2",
    "features": [
      {
        "name": "Chevalier - Passive",
        "text": "While the Knight is on a mount, they gain a +2 bonus to their Difficulty. When they take Severe damage, they're knocked from their mount and lose this benefit until they're next spotlighted."
      },
      {
        "name": "Heavily Armored - Passive",
        "text": "When the Knight takes physical damage, reduce it by 3."
      },
      {
        "name": "Cavalry Charge - Action",
        "text": "If the Knight is mounted, move up to Far range and make a standard attack against a target. On a success, deal 2d8+4 physical damage and the target must mark a Stress."
      },
      {
        "name": "For the Realm! - Action",
        "text": "Mark a Stress to spotlight 1d4+1 allies. Attacks they make while spotlighted in this way deal half damage."
      }
    ]
  },
  {
    "name": "Kraken",
    "originalName": "Kraken",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A legendary beast of the sea, bigger than the largest galleon, with sucker-laden tentacles and a terrifying maw.",
    "motivesAndTactics": "Consume, crush, drown, grapple",
    "difficulty": 20,
    "majorThreshold": 35,
    "severeThreshold": 70,
    "hp": 11,
    "stress": 8,
    "attackModifier": "+7",
    "attackDescription": "Tentacles",
    "attackRange": "Close",
    "attackDamage": "4d12+10 phy",
    "experience": "Swimming +3",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Kraken can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Many Tentacles - Passive",
        "text": "While the Kraken has 7 or fewer marked HP, they can make their standard attack against two targets within range."
      },
      {
        "name": "Grapple and Drown - Action",
        "text": "Make an attack roll against a target within Close range. On a success, mark a Stress to grab them with a tentacle and drag them beneath the water. The target is Restrained and Vulnerable until they break free with a successful Strength Roll or the Kraken takes Major or greater damage. While Restrained and Vulnerable in this way, a target must mark a Stress when they make an action roll."
      },
      {
        "name": "Boiling Blast - Action",
        "text": "Spend a Fear to spew a line of boiling water at any number of targets in a line up to Far range. All targets must succeed on an Agility Reaction Roll or take 4d6+9 physical damage. If a target marks an Armor Slot to reduce the damage, they must also mark a Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Kraken makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Local Tavern",
    "originalName": "Local Tavern",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Social",
    "description": "A lively tavern that serves as the social hub for its town.",
    "impulses": "Provide opportunities for adventurers, nurture community",
    "difficulty": 10,
    "potentialAdversaries": "Guards (Bladed Guard, Head Guard), Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Merchant",
    "features": [
      {
        "name": "What's the Talk of the Town? - Passive",
        "text": "A PC can ask the bartender, staff, or patrons about local events, rumors, and potential work with a Presence Roll. On a success, they can pick two of the below details to learn\u2014or three if they critically succeed. On a failure, they can pick one and mark a Stress as the local carries on about something irrelevant. \n- A fascinating rumor with a connection to a PC's background \n- A promising job for the party involving a nearby threat or situation \n- Local folklore that relates to something they've seen \n- Town gossip that hints at a community problem\n\nWho has what kind of information? What gossip do the locals start spreading about the PCs?"
      },
      {
        "name": "Sing For Your Supper - Passive",
        "text": "A PC can perform one time for the guests by making a Presence Roll. On a success, they earn 1d4 handfuls of gold (2d4 if they critically succeed). On a failure, they mark a Stress.\n\nWhat piece do you perform? What does that piece mean to you? When's the last time you performed it for a crowd?"
      },
      {
        "name": "Mysterious Stranger - Action",
        "text": "Reveal a stranger concealing their identity, lurking in a shaded booth.\n\nWhat do they want? What's their impression of the PCs? What mannerisms or accessories do they have?"
      },
      {
        "name": "Someone Comes to Town - Action",
        "text": "Introduce a significant NPC who wants to hire the party for something or who relates to a PC's background.\n\nDid they know the PCs were here? What do they want in this town?"
      },
      {
        "name": "Bar Fight! - Action",
        "text": "Spend a Fear to have a bar fight erupt in the tavern. When a PC tries to move through the tavern while the fight persists, they must succeed on an Agility or Presence Roll or take 1d6+2 physical damage from a wild swing or thrown object. A PC can try to activate this feature by succeeding on an action roll that would provoke tavern patrons.\n\nWho started the fight? What will it take to stop it?"
      }
    ]
  },
  {
    "name": "Masked Thief",
    "originalName": "Masked Thief",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A cunning thief with acrobatic skill and a flair for the dramatic.",
    "motivesAndTactics": "Evade, hide, pilfer, profit",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 17,
    "hp": 4,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Backsword",
    "attackRange": "Melee",
    "attackDamage": "2d8+3 phy",
    "experience": "Acrobatics +3",
    "features": [
      {
        "name": "Quick Hands - Action",
        "text": "Make an attack against a target within Melee range. On a success, deal 1d8+2 physical damage and the Thief steals one item or consumable from the target's inventory."
      },
      {
        "name": "Escape Plan - Action",
        "text": "Mark a Stress to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within Very Close range of the trap must succeed on an Agility Reaction Roll (13) or be pulled off their feet and suspended upside down. A target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Finesse or Strength Roll (13)."
      }
    ]
  },
  {
    "name": "Master Assassin",
    "originalName": "Master Assassin",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A seasoned killer with a threatening voice and a deadly blade.",
    "motivesAndTactics": "Ambush, get out alive, kill, prepare for all scenarios",
    "difficulty": 15,
    "majorThreshold": 12,
    "severeThreshold": 25,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+5",
    "attackDescription": "Serrated Dagger",
    "attackRange": "Close",
    "attackDamage": "2d10+2 phy",
    "experience": "Command +3, Intrusion +3",
    "features": [
      {
        "name": "Won't See It Coming - Passive",
        "text": "The Assassin deals direct damage while they're Hidden."
      },
      {
        "name": "Strike as One - Action",
        "text": "Mark a Stress to spotlight a number of other Assassins equal to the Assassin's unmarked Stress."
      },
      {
        "name": "The Subtle Blade - Reaction",
        "text": "When the Assassin successfully makes a standard attack against a Vulnerable target, you can spend a Fear to deal Severe damage instead of their standard damage."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Assassin makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Merchant",
    "originalName": "Merchant",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "A finely dressed trader with a keen eye for financial gain.",
    "motivesAndTactics": "Buy low and sell high, create demand, inflate prices, seek profit",
    "difficulty": 12,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "hp": 3,
    "stress": 3,
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
    ]
  },
  {
    "name": "Merchant Baron",
    "originalName": "Merchant Baron",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "An accomplished merchant with a large operation under their command.",
    "motivesAndTactics": "Abuse power, gather resources, mobilize minions",
    "difficulty": 15,
    "majorThreshold": 9,
    "severeThreshold": 19,
    "hp": 5,
    "stress": 3,
    "attackModifier": "-2",
    "attackDescription": "Rapier",
    "attackRange": "Melee",
    "attackDamage": "1d6+2 phy",
    "experience": "Nobility +2, Trade +2",
    "features": [
      {
        "name": "Everyone Has a Price - Action",
        "text": "Spend a Fear to offer a target a dangerous bargain for something they want or need. If used on a PC, they must make a Presence Reaction Roll (17). On a failure, they must mark 2 Stress or take the deal."
      },
      {
        "name": "The Best Muscle Money Can Buy - Action",
        "text": "Once per scene, mark a Stress to summon 1d4+1 Tier 1 adversaries, who appear at Far range, to enforce the Baron's will."
      }
    ]
  },
  {
    "name": "Minor Chaos Elemental",
    "originalName": "Minor Chaos Elemental",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A coruscating mass of uncontrollable magic.",
    "motivesAndTactics": "Confound, destabilize, transmogrify",
    "difficulty": 14,
    "majorThreshold": 7,
    "severeThreshold": 14,
    "hp": 7,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Warp Blast",
    "attackRange": "Close",
    "attackDamage": "1d12+6 mag",
    "experience": null,
    "features": [
      {
        "name": "Arcane Form - Passive",
        "text": "The Elemental is resistant to magic damage."
      },
      {
        "name": "Sickening Flux - Action",
        "text": "Mark a HP to force all targets within Close range to mark a Stress and become Vulnerable until their next rest or they clear a HP."
      },
      {
        "name": "Remake Reality - Action",
        "text": "Spend a Fear to transform the area within Very Close range into a different biome. All targets within this area take 2d6+3 direct magic damage."
      },
      {
        "name": "Magical Reflection - Reaction",
        "text": "When the Elemental takes damage from an attack within Close range, deal an amount of damage to the attacker equal to half the damage they dealt."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Minor Demon",
    "originalName": "Minor Demon",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A crimson-hued creature from the Circles Below, consumed by rage against all mortals.",
    "motivesAndTactics": "Act erratically, corral targets, relish pain, torment",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 8,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Claws",
    "attackRange": "Melee",
    "attackDamage": "1d8+6 phy",
    "experience": null,
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Demon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "All Must Fall - Passive",
        "text": "When a PC rolls a failure with Fear while within Close range of the Demon, they lose a Hope."
      },
      {
        "name": "Hellfire - Action",
        "text": "Spend a Fear to rain down hellfire within Far range. All targets within the area must make an Agility Reaction Roll. Targets who fail take 1d20+3 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "Reaper - Reaction",
        "text": "Before rolling damage for the Demon's attack, you can mark a Stress to gain a bonus to the damage roll equal to the Demon's current number of marked HP."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Demon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Minor Fire Elemental",
    "originalName": "Minor Fire Elemental",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A living flame the size of a large bonfire.",
    "motivesAndTactics": "Encircle enemies, grow in size, intimidate, start fires",
    "difficulty": 13,
    "majorThreshold": 7,
    "severeThreshold": 15,
    "hp": 9,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Elemental Blast",
    "attackRange": "Far",
    "attackDamage": "1d10+4 mag",
    "experience": null,
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
        "text": "Three times per scene, when the Elemental moves onto objects that are highly flammable, consume them to clear a HP or a Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Elemental makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Minor Treant",
    "originalName": "Minor Treant",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "An ambulatory sapling rising up to defend their forest.",
    "motivesAndTactics": "Crush, overwhelm, protect",
    "difficulty": 10,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "-2",
    "attackDescription": "Clawed Branch",
    "attackRange": "Melee",
    "attackDamage": "4 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (5) - Passive",
        "text": "The Treant is defeated when they take any damage. For every 5 damage a PC deals to the Treant, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Minor Treants within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 4 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Minotaur Wrecker",
    "originalName": "Minotaur Wrecker",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A massive bull-headed firbolg with a quick temper.",
    "motivesAndTactics": "Consume, gore, navigate, overpower, pursue",
    "difficulty": 16,
    "majorThreshold": 14,
    "severeThreshold": 27,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+2",
    "attackDescription": "Battleaxe",
    "attackRange": "Very Close",
    "attackDamage": "2d8+5 phy",
    "experience": "Navigation +2",
    "features": [
      {
        "name": "Ramp Up - Passive",
        "text": "You must spend a Fear to spotlight the Minotaur. While spotlighted, they can make their standard attack against all targets within range."
      },
      {
        "name": "Charging Bull - Action",
        "text": "Mark a Stress to charge through a group within Close range and make an attack against all targets in the Minotaur's path. Targets the Minotaur succeeds against take 2d6+8 physical damage and are knocked back to Very Far range. If a target is knocked into a solid object or another creature, they take an extra 1d6 damage (combine the damage)."
      },
      {
        "name": "Gore - Action",
        "text": "Make an attack against a target within Very Close range, moving the Minotaur into Melee range of them. On a success, deal 2d8 direct physical damage."
      }
    ]
  },
  {
    "name": "Monarch",
    "originalName": "Monarch",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "The sovereign ruler of a nation, wreathed in the privilege of tradition and wielding unmatched power in their domain.",
    "motivesAndTactics": "Control vassals, destroy rivals, forge a legacy",
    "difficulty": 16,
    "majorThreshold": 16,
    "severeThreshold": 32,
    "hp": 6,
    "stress": 5,
    "attackModifier": "+0",
    "attackDescription": "Warhammer",
    "attackRange": "Melee",
    "attackDamage": "3d6+3 phy",
    "experience": "History +3, Nobility +3",
    "features": [
      {
        "name": "Execute Them! - Action",
        "text": "Spend a Fear per PC in the party to have the group condemned for crimes real or imagined. A PC who succeeds on a Presence Roll can demand trial by combat or another special form of trial."
      },
      {
        "name": "Crownsguard - Action",
        "text": "Once per scene, mark a Stress to summon six Tier 3 Minions, who appear at Close range to enforce the Monarch's will."
      },
      {
        "name": "Casus Belli - Reaction",
        "text": "Long-Term Countdown (8). Spend a Fear to activate after the Monarch's desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain 1d4 Fear."
      }
    ]
  },
  {
    "name": "Mortal Hunter",
    "originalName": "Mortal Hunter",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "An undead figure wearing a heavy leather coat, with searching eyes and a casually cruel demeanor.",
    "motivesAndTactics": "Devour, hunt, track",
    "difficulty": 16,
    "majorThreshold": 15,
    "severeThreshold": 27,
    "hp": 6,
    "stress": 4,
    "attackModifier": "+5",
    "attackDescription": "Tear at Flesh",
    "attackRange": "Very Close",
    "attackDamage": "2d12+1 phy",
    "experience": "Bloodhound +3",
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Hunter makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Deathlock - Action",
        "text": "Spend a Fear to curse a target within Very Close range with a necrotic Deathlock until the end of the scene. Attacks made by the Hunter against a Deathlocked target deal direct damage. The Hunter can only maintain one Deathlock at a time."
      },
      {
        "name": "Inevitable Death - Action",
        "text": "Mark a Stress to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        "name": "Rampage - Reaction",
        "text": "Countdown (Loop 1d6). When the Hunter is in the spotlight for the first time, activate the countdown. When it triggers, move the Hunter in a straight line to a point within Far range and make an attack against all targets in their path. Targets the Hunter succeeds against take 2d8+2 physical damage."
      }
    ]
  },
  {
    "name": "Mountain Pass",
    "originalName": "Mountain Pass",
    "source": "SRD",
    "tier": 2,
    "category": "Environment",
    "type": "Traversal",
    "description": "Stony peaks that pierce the clouds, with a twisting path winding its way up and over through many switchbacks.",
    "impulses": "Exact a chilling toll in supplies and stamina, reveal magical tampering, slow down travel",
    "difficulty": 15,
    "potentialAdversaries": "Beasts (Bear, Giant Eagle, Glass Snake), Chaos Skull, Minotaur Wrecker, Mortal Hunter",
    "features": [
      {
        "name": "Engraved Sigils - Passive",
        "text": "Large markings and engravings have been made in the mountainside. A PC with a relevant background or Experience identifies them as weather magic increasing the power of the icy winds. A PC who succeeds on a Knowledge Roll can recall information about the sigils, potential information about their creators, and the knowledge of how to dispel them. If a PC critically succeeds, they recognize that the sigils are of a style created by ridgeborne enchanters and they gain advantage on a roll to dispel the sigils.\n\nWho laid this enchantment? Are they nearby? Why did they want the weather to be more daunting?"
      },
      {
        "name": "Avalanche - Action",
        "text": "Spend a Fear to carve the mountain with an icy torrent, causing an avalanche. All PCs in its path must succeed on an Agility or Strength Reaction Roll or be bowled over and carried down the mountain. A PC using rope, pitons, or other climbing gear gains advantage on this roll. Targets who fail are knocked down the mountain to Far range, take 2d20 physical damage, and must mark a Stress. Targets who succeed must mark a Stress.\n\nHow do the PCs try to weather the avalanche? What approach do the characters take to find one another when their companions go hurtling down the mountainside?"
      },
      {
        "name": "Raptor Nest - Reaction",
        "text": "When the PCs enter the raptors' hunting grounds, two Giant Eagles appear at Very Far range of a chosen PC, identifying the PCs as likely prey.\n\nHow long has it been since the eagles last found prey? Do they have eggs in their nest, or unfledged young?"
      },
      {
        "name": "Icy Winds - Reaction",
        "text": "Countdown (Loop 4). When the PCs enter the mountain pass, activate the countdown. When it triggers, all characters traveling through the pass must succeed on a Strength Reaction Roll or mark a Stress. A PC wearing clothes appropriate for extreme cold gains advantage on these rolls.\n\nWhat parts of the PC's bodies go numb first? How do they try to keep warm as they press forward?"
      }
    ]
  },
  {
    "name": "Necromancer's Ossuary",
    "originalName": "Necromancer's Ossuary",
    "source": "SRD",
    "tier": 4,
    "category": "Environment",
    "type": "Exploration",
    "description": "A dusty crypt with a library, twisting corridors, and abundant sarcophagi, spattered with the blood of ill-fated invaders.",
    "impulses": "Confound intruders, delve into secrets best left buried, manifest unlife, unleash a tide of undead",
    "difficulty": 19,
    "potentialAdversaries": "Arch-Necromancer's Host (Perfected Zombie, Zombie Legion)",
    "features": [
      {
        "name": "No Place for the Living - Passive",
        "text": "A feature or action that clears HP requires spending a Hope to use. If it already costs Hope, a PC must spend an additional Hope.\n\nWhat does it feel like to try to heal in a place so antithetical to life?"
      },
      {
        "name": "Centuries of Knowledge - Passive",
        "text": "A PC can investigate the library and laboratory and make a Knowledge Roll to learn information related to arcana, local history, and the Necromancer's plans.\n\nWhat are the names of the tomes? What project is the necromancer working on and what does it communicate about their plans?"
      },
      {
        "name": "Skeletal Burst - Action",
        "text": "All targets within Close range of a point you choose in this environment must succeed on an Agility Reaction Roll or take 4d8+8 physical damage from skeletal shrapnel as part of the ossuary detonates around them.\n\nWhat ancient skeletal architecture is destroyed? What bones stick in your armor?"
      },
      {
        "name": "Aura of Death - Action",
        "text": "Once per scene, roll a d4. Each undead within Far range of the Necromancer can clear HP and Stress equal to the result rolled. The undead can choose how that number is divided between HP and Stress.\n\nHow does their renewed vigor manifest? Do they look more lifelike or, paradoxically, are they more decayed but vigorous?"
      },
      {
        "name": "They Just Keep Coming! - Action",
        "text": "Spend a Fear to summon 1d6 Rotted Zombies, two Perfected Zombies, or a Zombie Legion, who appear at Close range of a chosen PC.\n\nWho were these people before they became the necromancer's pawns?\n\nWhat vestiges of those lives remain for the heroes to see?"
      }
    ]
  },
  {
    "name": "Oak Treant",
    "originalName": "Oak Treant",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A sturdy animate old-growth tree.",
    "motivesAndTactics": "Hide in plain sight, preserve the forest, root down, swing branches",
    "difficulty": 17,
    "majorThreshold": 22,
    "severeThreshold": 40,
    "hp": 7,
    "stress": 4,
    "attackModifier": "+2",
    "attackDescription": "Branch",
    "attackRange": "Very Close",
    "attackDamage": "3d8+2 phy",
    "experience": "Forest Knowledge +3",
    "features": [
      {
        "name": "Just a Tree - Passive",
        "text": "Before they make their first attack in a fight or after they become Hidden, the Treant is indistinguishable from other trees until they next act or a PC succeeds on an Instinct Roll to identify them."
      },
      {
        "name": "Seed Barrage - Action",
        "text": "Mark a Stress and make an attack against up to three targets within Close range, pummeling them with giant acorns. Targets the Treant succeeds against take 2d10+5 physical damage."
      },
      {
        "name": "Take Root - Action",
        "text": "Mark a Stress to Root the Treant in place. The Treant is Restrained while Rooted, and can end this effect instead of moving while they are spotlighted. While Rooted, the Treant has resistance to physical damage."
      }
    ]
  },
  {
    "name": "Oracle of Doom",
    "originalName": "Oracle of Doom",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A towering immortal and incarnation of fate, cursed to only see bad outcomes.",
    "motivesAndTactics": "Change environment, condemn, dishearten, toss aside",
    "difficulty": 20,
    "majorThreshold": 38,
    "severeThreshold": 68,
    "hp": 11,
    "stress": 10,
    "attackModifier": "+8",
    "attackDescription": "Psychic Attack",
    "attackRange": "Far",
    "attackDamage": "4d8+9 mag",
    "experience": "Boundless Knowledge +4",
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Oracle makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Walls Closing In - Passive",
        "text": "When a creature rolls a failure while within Very Far range of the Oracle, they must mark a Stress."
      },
      {
        "name": "Pronounce Fate - Action",
        "text": "Spend a Fear to present a target within Far range with a vision of their personal nightmare. The target must make a Knowledge Reaction Roll. On a failure, they lose all Hope and take 2d20+4 direct magic damage. On a success, they take half damage and lose a Hope."
      },
      {
        "name": "Summon Tormentors - Action",
        "text": "Once per day, spend 2 Fear to summon 2d4 Tier 2 or below Minions relevant to one of the PC's personal nightmares. They appear at Close range relative to that PC."
      },
      {
        "name": "Ominous Knowledge - Reaction",
        "text": "When the Oracle sees a mortal creature, they instantly know one of their personal nightmares."
      },
      {
        "name": "Vengeful Fate - Reaction",
        "text": "When the Oracle marks HP from an attack within Very Close range, you can mark a Stress to knock the attacker back to Far range and deal 2d10+4 physical damage."
      }
    ]
  },
  {
    "name": "Outer Realms Abomination",
    "originalName": "Outer Realms Abomination",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A chaotic mockery of life, constantly in flux.",
    "motivesAndTactics": "Demolish, devour, undermine",
    "difficulty": 19,
    "majorThreshold": 35,
    "severeThreshold": 71,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+2d4",
    "attackDescription": "Massive Pseudopod",
    "attackRange": "Very Close",
    "attackDamage": "4d6+13 mag",
    "experience": null,
    "features": [
      {
        "name": "Chaotic Form - Passive",
        "text": "When the Abomination attacks, roll 2d4 and use the result as their attack modifier."
      },
      {
        "name": "Disorienting Presence - Passive",
        "text": "When a target takes damage from the Abomination, they must make an Instinct Reaction Roll. On a failure, they gain disadvantage on their next action roll and you gain a Fear."
      },
      {
        "name": "Reality Quake - Action",
        "text": "Spend a Fear to rattle the edges of reality within Far range of the Abomination. All targets within that area must succeed on a Knowledge Reaction Roll or become Unstuck from reality until the end of the scene. When an Unstuck target spends Hope or marks Armor Slots, HP, or Stress, they must double the amount spent or marked."
      },
      {
        "name": "Unreal Form - Reaction",
        "text": "When the Abomination takes damage, reduce it by 1d20. If the Abomination marks 1 or fewer Hit Points from a successful attack against them, you gain a Fear."
      }
    ]
  },
  {
    "name": "Outer Realms Corrupter",
    "originalName": "Outer Realms Corrupter",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "A shifting, formless mass seemingly made of chromatic light.",
    "motivesAndTactics": "Confuse, distract, overwhelm",
    "difficulty": 19,
    "majorThreshold": 27,
    "severeThreshold": 47,
    "hp": 4,
    "stress": 3,
    "attackModifier": "+7",
    "attackDescription": "Corroding Pseudopod",
    "attackRange": "Very Close",
    "attackDamage": "4d8+5 mag",
    "experience": null,
    "features": [
      {
        "name": "Will-Shattering Touch - Passive",
        "text": "When a PC takes damage from the Corrupter, they lose a Hope."
      },
      {
        "name": "Disgorge Reality Flotsam - Action",
        "text": "Mark a Stress to spew partially digested portions of consumed realities at all targets within Close range. Targets must succeed on a Knowledge Reaction Roll or mark 2 Stress."
      }
    ]
  },
  {
    "name": "Outer Realms Thrall",
    "originalName": "Outer Realms Thrall",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A vaguely humanoid form stripped of memory and identity.",
    "motivesAndTactics": "Destroy, disgust, disorient, intimidate",
    "difficulty": 17,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+3",
    "attackDescription": "Claws and Teeth",
    "attackRange": "Very Close",
    "attackDamage": "11 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (13) - Passive",
        "text": "The Thrall is defeated when they take any damage. For every 13 damage a PC deals to the Thrall, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Outer Realm Thralls within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 11 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Outpost Town",
    "originalName": "Outpost Town",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Social",
    "description": "A small town on the outskirts of a nation or region, close to a dungeon, tombs, or other adventuring destinations.",
    "impulses": "Drive the desperate to certain doom, profit off of ragged hope",
    "difficulty": 12,
    "potentialAdversaries": "Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper), Masked Thief, Merchant",
    "features": [
      {
        "name": "Rumors Abound - Passive",
        "text": "Gossip is the fastest-traveling currency in the realm. A PC can inquire about major events by making a Presence Roll. What they learn depends on the outcome of their roll, based on the following criteria: \n- Critical Success: Learn about two major events. The PC can ask one follow-up question about one of the rumors and get a truthful (if not always complete) answer. \n- Success with Hope: Learn about two events, at least one of which is relevant to the character's background. \n- Success with Fear: Learn an alarming rumor related to the character's background. \n- Any Failure: The locals respond poorly to their inquiries. The PC must mark a Stress to learn one relevant rumor.\n\nWhat news do the PCs have that they could pass along to curious travelers? What do the locals think about these events?"
      },
      {
        "name": "Society of the Broken Compass - Passive",
        "text": "An adventuring society maintains a chapterhouse here, where heroes trade boasts and rumors, drink to their imagined successes, and scheme to undermine their rivals.\n\nWhat boasts do the adventurers here make, and which do you think are true?"
      },
      {
        "name": "Rival Party - Passive",
        "text": "Another adventuring party is here, seeking the same treasure or leads as the PCs.\n\nWhich PC has a connection to one of the rival party members? Do they approach the PC first or do they wait for the PC to move?"
      },
      {
        "name": "It'd Be a Shame If Something Happened to Your Store - Action",
        "text": "The PCs witness as agents of a local crime boss shake down a general goods store.\n\nWhat trouble does it cause if the PCs intervene?"
      },
      {
        "name": "Wrong Place, Wrong Time - Reaction",
        "text": "At night, or when the party is alone in a back alley, you can spend a Fear to introduce a group of thieves who try to rob them. The thieves appear at Close range of a chosen PC and include a Jagged Knife Kneebreaker, as many Lackeys as there are PCs, and a Lieutenant. For a larger party, add a Hexer or Sniper.\n\nWhat details show the party that these people are desperate former adventurers?"
      }
    ]
  },
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
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 10,
    "stress": 3,
    "attackModifier": "+4",
    "attackDescription": "Too Many Arms",
    "attackRange": "Very Close",
    "attackDamage": "1d20 phy",
    "experience": "Intimidation +2, Tear Things Apart +2",
    "features": [
      {
        "name": "Destructible - Passive",
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
    ]
  },
  {
    "name": "Perfected Zombie",
    "originalName": "Perfected Zombie",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A towering, muscular zombie with magically infused strength and skill.",
    "motivesAndTactics": "Consume, hound, maim, terrify",
    "difficulty": 20,
    "majorThreshold": 40,
    "severeThreshold": 70,
    "hp": 9,
    "stress": 4,
    "attackModifier": "+4",
    "attackDescription": "Greataxe",
    "attackRange": "Very Close",
    "attackDamage": "4d12+15 phy",
    "experience": null,
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Zombie makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Fearsome Presence - Passive",
        "text": "PCs can't spend Hope to use features against the Zombie."
      },
      {
        "name": "Perfect Strike - Action",
        "text": "Mark a Stress to make a standard attack against all targets within Very Close range. Targets the Zombie succeeds against are Vulnerable until their next rest."
      },
      {
        "name": "Skilled Opportunist - Reaction",
        "text": "When another adversary deals damage to a target within Very Close range of the Zombie, you can spend a Fear to add the Zombie's standard attack damage to the damage roll."
      }
    ]
  },
  {
    "name": "Petty Noble",
    "originalName": "Petty Noble",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "A richly dressed and adorned aristocrat brimming with hubris.",
    "motivesAndTactics": "Abuse power, gather resources, mobilize minions",
    "difficulty": 14,
    "majorThreshold": 6,
    "severeThreshold": 10,
    "hp": 3,
    "stress": 5,
    "attackModifier": "-3",
    "attackDescription": "Rapier",
    "attackRange": "Melee",
    "attackDamage": "1d6+1 phy",
    "experience": "Aristocrat +3",
    "features": [
      {
        "name": "My Land, My Rules - Passive",
        "text": "All social actions made against the Noble on their land have disadvantage."
      },
      {
        "name": "Guards, Seize Them! - Action",
        "text": "Once per scene, mark a Stress to summon 1d4 Bladed Guards, who appear at Far range to enforce the Noble's will."
      },
      {
        "name": "Exile - Action",
        "text": "Spend a Fear and target a PC. The Noble proclaims that the target and their allies are exiled from the noble's territory. While exiled, the target and their allies have disadvantage during social situations within the Noble's domain."
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
    "majorThreshold": 7,
    "severeThreshold": 14,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+4",
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
    "motivesAndTactics": "Gang up, plunder, raid",
    "difficulty": 12,
    "majorThreshold": 5,
    "severeThreshold": 11,
    "hp": 4,
    "stress": 3,
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
    ]
  },
  {
    "name": "Pirate Tough",
    "originalName": "Pirate Tough",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A thickly muscled and tattooed pirate with melon-sized fists.",
    "motivesAndTactics": "Plunder, raid, smash, terrorize",
    "difficulty": 13,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Massive Fists",
    "attackRange": "Melee",
    "attackDamage": "2d6 phy",
    "experience": "Sailor +2",
    "features": [
      {
        "name": "Swashbuckler - Passive",
        "text": "When the Tough marks 2 or fewer HP from an attack within Melee range, the attacker must mark a Stress."
      },
      {
        "name": "Clear the Decks - Action",
        "text": "Make an attack against a target within Very Close range. On a success, mark a Stress to move into Melee range of the target, dealing 3d4 physical damage and knocking the target back to Close range."
      }
    ]
  },
  {
    "name": "Pitched Battle",
    "originalName": "Pitched Battle",
    "source": "SRD",
    "tier": 3,
    "category": "Environment",
    "type": "Event",
    "description": "A massive combat between two large groups of armed combatants.",
    "impulses": "Seize people, land, and wealth, spill blood for greed and glory",
    "difficulty": 17,
    "potentialAdversaries": "Mercenaries (Sellsword, Harrier, Spellblade, Weaponmaster), Noble Forces (Archer Squadron, Conscript, Elite Soldier, Knight of the Realm)",
    "features": [
      {
        "name": "Adrift on a Sea of Steel - Passive",
        "text": "Traversing a battlefield during an active combat is extremely dangerous. A PC must succeed on an Agility Roll to move at all, and can only go up to Close range on a success. If an adversary is within Melee range of them, they must mark a Stress to make an Agility Roll to move.\n\nDo the combatants mistake you for the enemy or consider you interlopers? Can you tell the difference between friend and foe in the fray?"
      },
      {
        "name": "Raze and Pillage - Action",
        "text": "The attacking force raises the stakes by lighting a fire, stealing a valuable asset, kidnapping an important person, or killing the populace.\n\nWhat is valuable here? Who is most vulnerable?"
      },
      {
        "name": "War Magic - Action",
        "text": "Spend a Fear as a mage from one side uses large-scale destructive magic. Pick a point on the battlefield within Very Far range of the mage. All targets within Close range of that point must make an Agility Reaction Roll. Targets who fail take 3d12+8 magic damage and must mark a Stress.\n\nWhat form does the attack take\u2014fireball, raining acid, a storm of blades? What tactical objective is this attack meant to accomplish, and what comes next?"
      },
      {
        "name": "Reinforcements! - Action",
        "text": "Summon a Knight of the Realm, a number of Tier 3 Minions equal to the number of PCs, and two adversaries of your choice within Far range of a chosen PC as reinforcements. The Knight of the Realm immediately takes the spotlight.\n\nWho are they targeting first? What formation do they take?"
      }
    ]
  },
  {
    "name": "Raging River",
    "originalName": "Raging River",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "type": "Traversal",
    "description": "A swift-moving river without a bridge crossing, deep enough to sweep away most people.",
    "impulses": "Bar crossing, carry away the unready, divide the land",
    "difficulty": 10,
    "potentialAdversaries": "Beasts (Bear, Glass Snake), Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper)",
    "features": [
      {
        "name": "Dangerous Crossing - Passive",
        "text": "Crossing the river requires the party to complete a Progress Countdown (4). A PC who rolls a failure with Fear is immediately targeted by the \"Undertow\" action without requiring a Fear to be spent on the feature.\n\nHave any of the PCs forded rivers like this before? Are any of them afraid of drowning?"
      },
      {
        "name": "Undertow - Action",
        "text": "Spend a Fear to catch a PC in the undertow. They must make an Agility Reaction Roll. On a failure, they take 1d6+1 physical damage and are moved a Close distance down the river, becoming Vulnerable until they get out of the river. On a success, they must mark a Stress.\n\nWhat trinkets and baubles lie along the bottom of the riverbed? Do predators swim these rivers?"
      },
      {
        "name": "Patient Hunter - Action",
        "text": "Spend a Fear to summon a Glass Snake within Close range of a chosen PC. The Snake appears in or near the river and immediately takes the spotlight to use their \"Spinning Serpent\" action.\n\nWhat treasures does the beast have in their burrow? What travelers have already fallen victim to this predator?"
      }
    ]
  },
  {
    "name": "Red Ooze",
    "originalName": "Red Ooze",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A moving mound of translucent flaming red slime.",
    "motivesAndTactics": "Camouflage, consume and multiply, ignite, start fires",
    "difficulty": 10,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "1d8+3 mag",
    "experience": "Camouflage +3",
    "features": [
      {
        "name": "Creeping Fire - Passive",
        "text": "The Ooze can only move within Very Close range as their normal movement. They light any flammable object they touch on fire."
      },
      {
        "name": "Ignite - Action",
        "text": "Make an attack against a target within Very Close range. On a success, the target takes 1d8 magic damage and is Ignited until they're extinguished with a successful Finesse Roll (14). While Ignited, the target takes 1d4 magic damage when they make an action roll."
      },
      {
        "name": "Split - Reaction",
        "text": "When the Ooze has 3 or more HP marked, you can spend a Fear to split them into two Tiny Red Oozes (with no marked HP or Stress). Immediately spotlight both of them."
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
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
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
    ]
  },
  {
    "name": "Royal Advisor",
    "originalName": "Royal Advisor",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "A high-ranking courtier with the ear of the local nobility.",
    "motivesAndTactics": "Curry favor, manufacture evidence, scheme",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 3,
    "stress": 3,
    "attackModifier": "-3",
    "attackDescription": "Wand",
    "attackRange": "Far",
    "attackDamage": "1d4+3 phy",
    "experience": "Administration +3, Courtier +3",
    "features": [
      {
        "name": "Devastating Retort - Passive",
        "text": "A PC who rolls less than 17 on an action roll targeting the Advisor must mark a Stress."
      },
      {
        "name": "Bend Ears - Action",
        "text": "Mark a Stress to influence an NPC within Melee range with whispered words. That target's opinion on one matter shifts toward the Advisor's preference unless it is in direct opposition to the target's motives."
      },
      {
        "name": "Scapegoat - Action",
        "text": "Spend a Fear to convince a crowd or notable individual that one person or group is responsible for some problem facing the target. The target becomes hostile to the scapegoat until convinced of their innocence with a successful Presence Roll (17)."
      }
    ]
  },
  {
    "name": "Secret-Keeper",
    "originalName": "Secret-Keeper",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A clandestine leader with a direct channel to the Fallen Gods.",
    "motivesAndTactics": "Amass great power, plot, take command",
    "difficulty": 16,
    "majorThreshold": 13,
    "severeThreshold": 26,
    "hp": 7,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Sigil-laden Staff",
    "attackRange": "Far",
    "attackDamage": "2d12 mag",
    "experience": "Coercion +2, Fallen Lore +2",
    "features": [
      {
        "name": "Seize Your Moment - Action",
        "text": "Spend 2 Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        "name": "Our Master's Will - Reaction",
        "text": "When you spotlight an ally within Far range, mark a Stress to gain a Fear."
      },
      {
        "name": "Summoning Ritual - Reaction",
        "text": "Countdown (6). When the Secret-Keeper is in the spotlight for the first time, activate the countdown. When they mark HP, tick down this countdown by the number of HP marked. When it triggers, summon a Minor Demon who appears at Close range."
      },
      {
        "name": "Fallen Hounds - Reaction",
        "text": "Once per scene, when the Secret- Keeper marks 2 or more HP, you can mark a Stress to summon a Demonic Hound Pack, which appears at Close range and is immediately spotlighted."
      }
    ]
  },
  {
    "name": "Sellsword",
    "originalName": "Sellsword",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "An armed mercenary testing their luck.",
    "motivesAndTactics": "Charge, lacerate, overwhelm, profit",
    "difficulty": 10,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+3",
    "attackDescription": "Longsword",
    "attackRange": "Melee",
    "attackDamage": "3 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (4) - Passive",
        "text": "The Sellsword is defeated when they take any damage. For every 4 damage a PC deals to the Sellsword, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Sellswords within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 3 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Shambling Zombie",
    "originalName": "Shambling Zombie",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "An animated corpse that moves shakily, driven only by hunger.",
    "motivesAndTactics": "Devour, hungry, mob enemy, shred flesh",
    "difficulty": 10,
    "majorThreshold": 4,
    "severeThreshold": 6,
    "hp": 4,
    "stress": 1,
    "attackModifier": "+0",
    "attackDescription": "Bite",
    "attackRange": "Melee",
    "attackDamage": "1d6+1 phy",
    "experience": null,
    "features": [
      {
        "name": "Too Many to Handle - Passive",
        "text": "When the Zombie is within Melee range of a creature and at least one other Zombie is within Close range, all attacks against that creature have advantage."
      },
      {
        "name": "Horrifying - Passive",
        "text": "Targets who mark HP from the Zombie's attacks must also mark a Stress."
      }
    ]
  },
  {
    "name": "Shark",
    "originalName": "Shark",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A large aquatic predator, always on the move.",
    "motivesAndTactics": "Find the blood, isolate prey, target the weak",
    "difficulty": 14,
    "majorThreshold": 14,
    "severeThreshold": 28,
    "hp": 7,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Toothy Maw",
    "attackRange": "Very Close",
    "attackDamage": "2d12+1 phy",
    "experience": "Sense of Smell +3",
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Shark makes a successful attack, all PCs within Far range lose a Hope and you gain a Fear."
      },
      {
        "name": "Rending Bite - Passive",
        "text": "When the Shark makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Blood in the Water - Reaction",
        "text": "When a creature within Close range of the Shark marks HP from another creature's attack, you can mark a Stress to immediately spotlight the Shark, moving them into Melee range of the target and making a standard attack."
      }
    ]
  },
  {
    "name": "Siren",
    "originalName": "Siren",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A half-fish person with shimmering scales and an irresistible voice.",
    "motivesAndTactics": "Consume, lure prey, subdue with song",
    "difficulty": 14,
    "majorThreshold": 9,
    "severeThreshold": 18,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Distended Jaw Bite",
    "attackRange": "Melee",
    "attackDamage": "2d6+3 phy",
    "experience": "Song Repertoire +3",
    "features": [
      {
        "name": "Captive Audience - Passive",
        "text": "If the Siren makes a standard attack against a target Entranced by their song, the attack deals 2d10+1 damage instead of their standard damage."
      },
      {
        "name": "Enchanting Song - Action",
        "text": "Spend a Fear to sing a song that affects all targets within Close range. Targets must succeed on an Instinct Reaction Roll or become Entranced until they mark 2 Stress. Other Sirens within Close range of the target can mark a Stress to each add a +1 bonus to the Difficulty of the reaction roll. While Entranced, a target can't act and is Vulnerable."
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
    "majorThreshold": 4,
    "severeThreshold": 7,
    "hp": 3,
    "stress": 2,
    "attackModifier": "+2",
    "attackDescription": "Shortbow",
    "attackRange": "Far",
    "attackDamage": "1d8+1 phy",
    "experience": null,
    "features": [
      {
        "name": "Opportunist - Passive",
        "text": "When two or more adversaries are within Very Close range of a creature, all damage the Archer deals to that creature is doubled."
      },
      {
        "name": "Deadly Shot - Action",
        "text": "Make an attack against a Vulnerable target within Far range. On a success, mark a Stress to deal 3d4+8 physical damage."
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
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
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
    ]
  },
  {
    "name": "Skeleton Knight",
    "originalName": "Skeleton Knight",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A large armored skeleton with a huge blade.",
    "motivesAndTactics": "Cut down the living, steal skin, wreak havoc",
    "difficulty": 13,
    "majorThreshold": 7,
    "severeThreshold": 13,
    "hp": 5,
    "stress": 2,
    "attackModifier": "+2",
    "attackDescription": "Rusty Greatsword",
    "attackRange": "Melee",
    "attackDamage": "1d10+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "When the Knight makes a successful attack, all PCs within Close range lose a Hope and you gain a Fear."
      },
      {
        "name": "Cut to the Bone - Action",
        "text": "Mark a Stress to make an attack against all targets within Very Close range. Targets the Knight succeeds against take 1d8+2 physical damage and must mark a Stress."
      },
      {
        "name": "Dig Two Graves - Reaction",
        "text": "When the Knight is defeated, they make an attack against a target within Very Close range (prioritizing the creature who killed them). On a success, the target takes 1d4+8 physical damage and loses 1d4 Hope."
      }
    ]
  },
  {
    "name": "Skeleton Warrior",
    "originalName": "Skeleton Warrior",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A dirt-covered skeleton armed with a rusted blade.",
    "motivesAndTactics": "Feign death, gang up, steal skin",
    "difficulty": 10,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "hp": 3,
    "stress": 2,
    "attackModifier": "+0",
    "attackDescription": "Sword",
    "attackRange": "Melee",
    "attackDamage": "1d6+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Only Bones - Passive",
        "text": "The Warrior is resistant to physical damage."
      },
      {
        "name": "Won't Stay Dead - Reaction",
        "text": "When the Warrior is defeated, you can spotlight them and roll a d6. On a result of 6, if there are other adversaries on the battlefield, the Warrior re-forms with no marked HP."
      }
    ]
  },
  {
    "name": "Spectral Archer",
    "originalName": "Spectral Archer",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A ghostly fighter with an ethereal bow, unable to move on while their charge is vulnerable.",
    "motivesAndTactics": "Move through solid objects, stay out of the fray, rehash old battles",
    "difficulty": 13,
    "majorThreshold": 6,
    "severeThreshold": 14,
    "hp": 3,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Longbow",
    "attackRange": "Far",
    "attackDamage": "2d10+2 phy",
    "experience": "Ancient Knowledge +2",
    "features": [
      {
        "name": "Ghost - Passive",
        "text": "The Archer has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Pick Your Target - Action",
        "text": "Spend a Fear to make an attack within Far range against a PC who is within Very Close range of at least two other PCs. On a success, the target takes 2d8+12 physical damage."
      }
    ]
  },
  {
    "name": "Spectral Captain",
    "originalName": "Spectral Captain",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A ghostly commander leading their troops beyond death.",
    "motivesAndTactics": "Move through solid objects, rally troops, rehash old battles",
    "difficulty": 16,
    "majorThreshold": 13,
    "severeThreshold": 26,
    "hp": 6,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Longbow",
    "attackRange": "Far",
    "attackDamage": "2d10+3 phy",
    "experience": "Ancient Knowledge +3",
    "features": [
      {
        "name": "Ghost - Passive",
        "text": "The Captain has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Unending Battle - Action",
        "text": "Spend 2 Fear to return up to 1d4+1 defeated Spectral allies to the battle at the points where they first appeared (with no marked HP or Stress)."
      },
      {
        "name": "Hold Fast - Reaction",
        "text": "When the Captain's Spectral allies are forced to make a reaction roll, you can mark a Stress to give those allies a +2 bonus to the roll."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Captain makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Spectral Guardian",
    "originalName": "Spectral Guardian",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A ghostly fighter with spears and swords, anchored by duty.",
    "motivesAndTactics": "Move through solid objects, protect treasure, rehash old battles",
    "difficulty": 15,
    "majorThreshold": 7,
    "severeThreshold": 15,
    "hp": 4,
    "stress": 3,
    "attackModifier": "+1",
    "attackDescription": "Spear",
    "attackRange": "Very Close",
    "attackDamage": "2d8+1 phy",
    "experience": "Ancient Knowledge +2",
    "features": [
      {
        "name": "Ghost - Passive",
        "text": "The Guardian has resistance to physical damage. Mark a Stress to move up to Close range through solid objects."
      },
      {
        "name": "Grave Blade - Action",
        "text": "Spend a Fear to make an attack against a target within Very Close range. On a success, deal 2d10+6 physical damage and the target must mark a Stress."
      }
    ]
  },
  {
    "name": "Spellblade",
    "originalName": "Spellblade",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "A mercenary combining swordplay and magic to deadly effect.",
    "motivesAndTactics": "Blast, command, endure",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 14,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Empowered Longsword",
    "attackRange": "Melee",
    "attackDamage": "1d8+4 phy/mag",
    "experience": "Magical Knowledge +2",
    "features": [
      {
        "name": "Arcane Steel - Passive",
        "text": "Damage dealt by the Spellblade's standard attack is considered both physical and magic."
      },
      {
        "name": "Suppressing Blast - Action",
        "text": "Mark a Stress and target a group within Far range. All targets must succeed on an Agility Reaction Roll or take 1d8+2 magic damage. You gain a Fear for each target who marked HP from this attack."
      },
      {
        "name": "Move as a Unit - Action",
        "text": "Spend 2 Fear to spotlight up to five allies within Far range."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Spellblade makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Spy",
    "originalName": "Spy",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Social",
    "countPerHp": 1,
    "description": "A skilled espionage agent with a knack for being in the right place to overhear secrets.",
    "motivesAndTactics": "Cut and run, disguise appearance, eavesdrop",
    "difficulty": 15,
    "majorThreshold": 8,
    "severeThreshold": 17,
    "hp": 4,
    "stress": 3,
    "attackModifier": "-2",
    "attackDescription": "Dagger",
    "attackRange": "Melee",
    "attackDamage": "2d6+3 phy",
    "experience": "Espionage +3",
    "features": [
      {
        "name": "Gathering Secrets - Action",
        "text": "Spend a Fear to describe how the Spy knows a secret about a PC in the scene."
      },
      {
        "name": "Fly on the Wall - Reaction",
        "text": "When a PC or group is discussing something sensitive, you can mark a Stress to reveal that the Spy is present in the scene, observing them. If the Spy escapes the scene to report their findings, you gain 1d4 Fear."
      }
    ]
  },
  {
    "name": "Stag Knight",
    "originalName": "Stag Knight",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A knight with huge, majestic antlers wearing armor made of dangerous thorns.",
    "motivesAndTactics": "Isolate, maneuver, protect the forest, weed the unwelcome",
    "difficulty": 17,
    "majorThreshold": 19,
    "severeThreshold": 36,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+3",
    "attackDescription": "Bramble Sword",
    "attackRange": "Melee",
    "attackDamage": "3d8+3 phy",
    "experience": "Forest Knowledge +3",
    "features": [
      {
        "name": "From Above - Passive",
        "text": "When the Knight succeeds on a standard attack from above a target, they deal 3d12+3 physical damage instead of their standard damage."
      },
      {
        "name": "Blade of the Forest - Action",
        "text": "Spend a Fear to make an attack against all targets within Very Close range. Targets the Knight succeeds against take physical damage equal to 3d4 + the target's Major threshold."
      },
      {
        "name": "Thorny Armor - Reaction",
        "text": "When the Knight takes damage from an attack within Melee range, you can mark a Stress to deal 1d10+5 physical damage to the attacker."
      }
    ]
  },
  {
    "name": "Stonewraith",
    "originalName": "Stonewraith",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A prowling hunter, like a slinking mountain lion, with a slate-gray stone body.",
    "motivesAndTactics": "Defend territory, isolate prey, stalk",
    "difficulty": 13,
    "majorThreshold": 11,
    "severeThreshold": 22,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Bite and Claws",
    "attackRange": "Melee",
    "attackDamage": "2d8+6 phy",
    "experience": "Stonesense +3",
    "features": [
      {
        "name": "Stonestrider - Passive",
        "text": "The Stonewraith can move through stone and earth as easily as air. While within stone or earth, they are Hidden and immune to all damage."
      },
      {
        "name": "Rocky Ambush - Action",
        "text": "While Hidden, mark a Stress to leap into Melee range with a target within Very Close range. The target must succeed on an Agility or Instinct Reaction Roll (15) or take 2d8 physical damage and become temporarily Restrained."
      },
      {
        "name": "Avalanche Roar - Action",
        "text": "Spend a Fear to roar while within a cave and cause a cave-in. All targets within Close range must succeed on an Agility Reaction Roll (14) or take 2d10 physical damage. The rubble can be cleared with a Progress Countdown (8)."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Stonewraith makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Swarm of Rats",
    "originalName": "Swarm of Rats",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 10,
    "description": "A skittering mass of ordinary rodents moving as one like a ravenous wave.",
    "motivesAndTactics": "Consume, obscure, swarm",
    "difficulty": 10,
    "majorThreshold": 6,
    "severeThreshold": 10,
    "hp": 6,
    "stress": 2,
    "attackModifier": "-3",
    "attackDescription": "Claws",
    "attackRange": "Melee",
    "attackDamage": "1d8+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Horde (1d4+1) - Passive",
        "text": "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+1 physical damage instead."
      },
      {
        "name": "In Your Face - Passive",
        "text": "All targets within Melee range have disadvantage on attacks against targets other than the Swarm."
      }
    ]
  },
  {
    "name": "Sylvan Soldier",
    "originalName": "Sylvan Soldier",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "A faerie warrior adorned in armor made of leaves and bark.",
    "motivesAndTactics": "Ambush, hide, overwhelm, protect, trail",
    "difficulty": 11,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "hp": 4,
    "stress": 2,
    "attackModifier": "+0",
    "attackDescription": "Scythe",
    "attackRange": "Melee",
    "attackDamage": "1d8+1 phy",
    "experience": "Tracker +2",
    "features": [
      {
        "name": "Pack Tactics - Passive",
        "text": "If the Soldier makes a standard attack and another Sylvan Soldier is within Melee range of the target, deal 1d8+5 physical damage instead of their standard damage."
      },
      {
        "name": "Forest Control - Action",
        "text": "Spend a Fear to pull down a tree within Close range. A creature hit by the tree must succeed on an Agility Reaction Roll (15) or take 1d10 physical damage."
      },
      {
        "name": "Blend In - Reaction",
        "text": "When the Soldier makes a successful attack, you can mark a Stress to become Hidden until the Soldier's next attack or a PC succeeds on an Instinct Roll (14) to find them."
      }
    ]
  },
  {
    "name": "Tangle Bramble",
    "originalName": "Tangle Bramble",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "An animate, blood-drinking tumbleweed.",
    "motivesAndTactics": "Combine, drain, entangle",
    "difficulty": 11,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "-1",
    "attackDescription": "Thorns",
    "attackRange": "Melee",
    "attackDamage": "2 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (4) - Passive",
        "text": "The Bramble is defeated when they take any damage. For every 4 damage a PC deals to the Tangle Bramble, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Tangle Brambles within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 2 physical damage each. Combine this damage."
      },
      {
        "name": "Drain and Multiply - Reaction",
        "text": "When an attack from the Bramble causes a target to mark HP and there are three or more Tangle Bramble Minions within Close range, you can combine the Minions into a Tangle Bramble Swarm Horde. The Horde's HP is equal to the number of Minions combined."
      }
    ]
  },
  {
    "name": "Tangle Bramble Swarm",
    "originalName": "Tangle Bramble Swarm",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 3,
    "description": "A cluster of animate, blood-drinking tumbleweeds, each the size of a large gourd.",
    "motivesAndTactics": "Digest, entangle, immobilize",
    "difficulty": 12,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+0",
    "attackDescription": "Thorns",
    "attackRange": "Melee",
    "attackDamage": "1d6+3 phy",
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Horde (1d4+2) - Passive",
        "text": "When the Swarm has marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        "name": "Crush - Action",
        "text": "Mark a Stress to deal 2d6+8 direct physical damage to a target with 3 or more bramble tokens."
      },
      {
        "name": "Encumber - Reaction",
        "text": "When the Swarm succeeds on an attack, give the target a bramble token. If a target has any bramble tokens, they are Restrained. If a target has 3 or more bramble tokens, they are also Vulnerable. All bramble tokens can be removed by succeeding on a Finesse Roll (12 + the number of bramble tokens) or dealing Major or greater damage to the Swarm. If bramble tokens are removed from a target using a Finesse Roll, a number of Tangle Bramble Minions spawn within Melee range equal to the number of tokens removed."
      }
    ]
  },
  {
    "name": "Tiny Green Ooze",
    "originalName": "Tiny Green Ooze",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A small moving mound of translucent green slime.",
    "motivesAndTactics": "Camouflage, creep up",
    "difficulty": 14,
    "majorThreshold": 4,
    "severeThreshold": null,
    "hp": 2,
    "stress": 1,
    "attackModifier": "-1",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "1d4+1 mag",
    "experience": null,
    "features": [
      {
        "name": "Acidic Form - Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can't mark an Armor Slot, they must mark an additional HP."
      }
    ]
  },
  {
    "name": "Tiny Red Ooze",
    "originalName": "Tiny Red Ooze",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Skulk",
    "countPerHp": 1,
    "description": "A small moving mound of translucent flaming red slime",
    "motivesAndTactics": "Blaze, camouflage",
    "difficulty": 11,
    "majorThreshold": 5,
    "severeThreshold": null,
    "hp": 2,
    "stress": 1,
    "attackModifier": "-1",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "1d4+2 mag",
    "experience": null,
    "features": [
      {
        "name": "Burning - Reaction",
        "text": "When a creature within Melee range deals damage to the Ooze, they take 1d6 direct magic damage."
      }
    ]
  },
  {
    "name": "Treant Sapling",
    "originalName": "Treant Sapling",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Minion",
    "countPerHp": 1,
    "description": "A small, sentient tree sapling.",
    "motivesAndTactics": "Blend in, preserve the forest, pummel, surround",
    "difficulty": 14,
    "majorThreshold": null,
    "severeThreshold": null,
    "hp": 1,
    "stress": 1,
    "attackModifier": "+0",
    "attackDescription": "Branches",
    "attackRange": "Melee",
    "attackDamage": "8 phy",
    "experience": null,
    "features": [
      {
        "name": "Minion (6) - Passive",
        "text": "The Sapling is defeated when they take any damage. For every 6 damage a PC deals to the Sapling, defeat an additional Minion within range the attack would succeed against."
      },
      {
        "name": "Group Attack - Action",
        "text": "Spend a Fear to choose a target and spotlight all Treant Saplings within Close range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal 8 physical damage each. Combine this damage."
      }
    ]
  },
  {
    "name": "Vampire",
    "originalName": "Vampire",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Standard",
    "countPerHp": 1,
    "description": "An intelligent undead with blood-stained lips and a predator's smile.",
    "motivesAndTactics": "Bite, charm, deceive, feed, intimidate",
    "difficulty": 16,
    "majorThreshold": 18,
    "severeThreshold": 35,
    "hp": 5,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Rapier",
    "attackRange": "Melee",
    "attackDamage": "3d8 phy",
    "experience": "Nocturnal Hunter +3",
    "features": [
      {
        "name": "Draining Bite - Action",
        "text": "Make an attack against a target within Melee range. On a success, deal 5d4 physical damage. A target who marks HP from this attack loses a Hope and must mark a Stress. The Vampire then clears a HP."
      },
      {
        "name": "Mistform - Reaction",
        "text": "When the Vampire takes physical damage, you can spend a Fear to take half damage."
      }
    ]
  },
  {
    "name": "Vault Guardian Gaoler",
    "originalName": "Vault Guardian Gaoler",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Support",
    "countPerHp": 1,
    "description": "A boxy, dust-covered construct with thick metallic swinging doors on their torso.",
    "motivesAndTactics": "Carry away, entrap, protect, pummel",
    "difficulty": 16,
    "majorThreshold": 19,
    "severeThreshold": 33,
    "hp": 5,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Body Bash",
    "attackRange": "Very Close",
    "attackDamage": "3d6+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Blocking Shield - Passive",
        "text": "Creatures within Melee range of the Gaoler have disadvantage on attack rolls against them. Creatures trapped inside the Gaoler are immune to this feature."
      },
      {
        "name": "Lock Up - Action",
        "text": "Mark a Stress to make an attack against a target within Very Close range. On a success, the target is Restrained within the Gaoler until freed with a successful Strength Roll (18). While Restrained, the target can only attack the Gaoler."
      }
    ]
  },
  {
    "name": "Vault Guardian Sentinel",
    "originalName": "Vault Guardian Sentinel",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A dust-covered golden construct with boxy limbs and a huge mace for a hand.",
    "motivesAndTactics": "Destroy at any cost, expunge, protect",
    "difficulty": 17,
    "majorThreshold": 21,
    "severeThreshold": 40,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+3",
    "attackDescription": "Charged Mace",
    "attackRange": "Very Close",
    "attackDamage": "2d12+1 phy",
    "experience": null,
    "features": [
      {
        "name": "Kinetic Slam - Passive",
        "text": "Targets who take damage from the Sentinel's standard attack are knocked back to Very Close range."
      },
      {
        "name": "Box In - Action",
        "text": "Mark a Stress to choose a target within Very Close range to focus on. That target has disadvantage on attack rolls when they're within Very Close range of the Sentinel. The Sentinel can only focus on one target at a time."
      },
      {
        "name": "Mana Bolt - Action",
        "text": "Spend a Fear to lob explosive magic at a point within Far range. All targets within Very Close range of that point must make an Agility Reaction Roll. Targets who fail take 2d8+20 magic damage and are knocked back to Close range. Targets who succeed take half damage and aren't knocked back."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Sentinel makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Vault Guardian Turret",
    "originalName": "Vault Guardian Turret",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A massive living turret with reinforced armor and twelve piston- driven mechanical legs.",
    "motivesAndTactics": "Concentrate fire, lock down, mark, protect",
    "difficulty": 16,
    "majorThreshold": 20,
    "severeThreshold": 32,
    "hp": 5,
    "stress": 4,
    "attackModifier": "+3",
    "attackDescription": "Magitech Cannon",
    "attackRange": "Far",
    "attackDamage": "3d10+3 mag",
    "experience": null,
    "features": [
      {
        "name": "Slow Firing - Passive",
        "text": "When you spotlight the Turret and they don't have a token on their stat block, they can't make a standard attack. Place a token on their stat block and describe what they're preparing to do. When you spotlight the Turret and they have a token on their stat block, clear the token and they can attack."
      },
      {
        "name": "Mark Target - Action",
        "text": "Spend a Fear to Mark a target within Far range until the Turret is destroyed or the Marked target becomes Hidden. While the target is Marked, their Evasion is halved."
      },
      {
        "name": "Concentrate Fire - Reaction",
        "text": "When another adversary deals damage to a target within Far range of the Turret, you can mark a Stress to add the Turret's standard attack damage to the damage roll."
      },
      {
        "name": "Detonation - Reaction",
        "text": "When the Turret is destroyed, they explode. All targets within Close range must make an Agility Reaction Roll. Targets who fail take 3d20 physical damage. Targets who succeed take half damage."
      }
    ]
  },
  {
    "name": "Volcanic Dragon: Ashen Tyrant",
    "originalName": "Volcanic Dragon: Ashen Tyrant",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "No enemy has ever had the insolence to wound the dragon so. As the lava settles, it's ground to ash like the dragon's past foes.",
    "motivesAndTactics": "Choke, fly, intimidate, kill or be killed",
    "difficulty": 18,
    "majorThreshold": 29,
    "severeThreshold": 55,
    "hp": 8,
    "stress": 5,
    "attackModifier": "+10",
    "attackDescription": "Claws and Teeth",
    "attackRange": "Close",
    "attackDamage": "4d12+15 phy",
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (4) - Passive",
        "text": "The Ashen Tyrant can be spotlighted up to four times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Cornered - Passive",
        "text": "Mark a Stress instead of spending a Fear to spotlight the Ashen Tyrant."
      },
      {
        "name": "Injured Wings - Passive",
        "text": "While flying, the Ashen Tyrant gains a +1 bonus to their Difficulty."
      },
      {
        "name": "Ashes to Ashes - Passive",
        "text": "When a PC rolls a failure while within Close range of the Ashen Tyrant, they lose a Hope and you gain a Fear. If the PC can't lose a Hope, they must mark a HP."
      },
      {
        "name": "Desperate Rampage - Action",
        "text": "Mark a Stress to make an attack against all targets within Close range. Targets the Ashen Tyrant succeeds against take 2d20+2 physical damage, are knocked back to Close range of where they were, and must mark a Stress."
      },
      {
        "name": "Ashen Cloud - Action",
        "text": "Spend a Fear to smash the ground and kick up ash within Far range. While within the ash cloud, a target has disadvantage on action rolls. The ash cloud clears the next time an adversary is spotlighted."
      },
      {
        "name": "Apocalyptic Thrashing - Action",
        "text": "Countdown (1d12). Spend a Fear to activate. It ticks down when a PC rolls with Fear. When it triggers, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within Far range must make a Strength Reaction Roll. Targets who fail take 2d10+10 physical damage and are Restrained by the rubble until they break free with a successful Strength Roll. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes."
      }
    ]
  },
  {
    "name": "Volcanic Dragon: Molten Scourge",
    "originalName": "Volcanic Dragon: Molten Scourge",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "Enraged by their wounds, the dragon bursts into molten lava.",
    "motivesAndTactics": "Douse with lava, incinerate, repel Invaders, reposition",
    "difficulty": 20,
    "majorThreshold": 30,
    "severeThreshold": 58,
    "hp": 7,
    "stress": 5,
    "attackModifier": "+9",
    "attackDescription": "Lava-Coated Claws",
    "attackRange": "Close",
    "attackDamage": "4d12+4 phy",
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Molten Scourge can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Cracked Scales - Passive",
        "text": "When the Molten Scourge takes damage, roll a number of d6s equal to HP marked. For each result of 4 or higher, you gain a Fear."
      },
      {
        "name": "Shattering Might - Action",
        "text": "Mark a Stress to make an attack against a target within Very Close range. On a success, the target takes 4d8+1 physical damage, loses a Hope, and is knocked back to Close range. The Molten Scourge clears a Stress."
      },
      {
        "name": "Eruption - Action",
        "text": "Spend a Fear to erupt lava from beneath the Molten Scourge's scales, filling the area within Very Close range with molten lava. All targets in that area must succeed on an Agility Reaction Roll or take 4d6+6 physical damage and be knocked back to Close range. This area remains lava. When a creature other than the Molten Scourge enters that area or acts while inside of it, they must mark 6 HP."
      },
      {
        "name": "Volcanic Breath - Reaction",
        "text": "When the Molten Scourge takes Major damage, roll a d10. On a result of 8 or higher, the Molten Scourge breathes a flow of lava in front of them within Far range. All targets in that area must make an Agility Reaction Roll. Targets who fail take 2d10+4 physical damage, mark 1d4 Stress, and are Vulnerable until they clear a Stress. Targets who succeed take half damage and must mark a Stress."
      },
      {
        "name": "Lava Splash - Reaction",
        "text": "When the Molten Scourge takes Severe damage from an attack within Very Close range, molten blood gushes from the wound and deals 2d10+4 direct physical damage to the attacker."
      },
      {
        "name": "Ashen Vengeance (Phase Change) - Reaction",
        "text": "When the Molten Scourge marks their last HP, replace them with the Ashen Tyrant and immediately spotlight them."
      }
    ]
  },
  {
    "name": "Volcanic Dragon: Obsidian Predator",
    "originalName": "Volcanic Dragon: Obsidian Predator",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A massive winged creature with obsidian scales and impossibly sharp claws.",
    "motivesAndTactics": "Defend lair, dive-bomb, fly, hunt, intimidate",
    "difficulty": 19,
    "majorThreshold": 33,
    "severeThreshold": 65,
    "hp": 6,
    "stress": 5,
    "attackModifier": "+8",
    "attackDescription": "Obsidian Claws",
    "attackRange": "Close",
    "attackDamage": "4d10+4 phy",
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Obsidian Predator can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Flying - Passive",
        "text": "While flying, the Obsidian Predator gains a +3 bonus to their Difficulty."
      },
      {
        "name": "Obsidian Scales - Passive",
        "text": "The Obsidian Predator is resistant to physical damage."
      },
      {
        "name": "Avalanche Tail - Action",
        "text": "Mark a Stress to make an attack against all targets within Close range. Targets the Obsidian Predator succeeds against take 4d6+4 physical damage and are knocked back to Far range and Vulnerable until their next roll with Hope."
      },
      {
        "name": "Dive-Bomb - Action",
        "text": "If the Obsidian Predator is flying, mark a Stress to choose a point within Far range. Move to that point and make an attack against all targets within Very Close range. Targets the Obsidian Predator succeeds against take 2d10+6 physical damage and must mark a Stress and lose a Hope."
      },
      {
        "name": "Erupting Rage (Phase Change) - Reaction",
        "text": "When the Obsidian Predator marks their last HP, replace them with the Molten Scourge and immediately spotlight them."
      }
    ]
  },
  {
    "name": "War Wizard",
    "originalName": "War Wizard",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "type": "Ranged",
    "countPerHp": 1,
    "description": "A battle-hardened mage trained in destructive magic.",
    "motivesAndTactics": "Develop new spells, seek power, shatter formations",
    "difficulty": 16,
    "majorThreshold": 11,
    "severeThreshold": 23,
    "hp": 5,
    "stress": 6,
    "attackModifier": "+4",
    "attackDescription": "Staff",
    "attackRange": "Far",
    "attackDamage": "2d10+4 mag",
    "experience": "Magical Knowledge +2, Strategize +2",
    "features": [
      {
        "name": "Battle Teleport - Passive",
        "text": "Before or after making a standard attack, you can mark a Stress to teleport to a location within Far range."
      },
      {
        "name": "Refresh Warding Sphere - Action",
        "text": "Mark a Stress to refresh the Wizard's \"Warding Sphere\" reaction."
      },
      {
        "name": "Eruption - Action",
        "text": "Spend a Fear and choose a point within Far range. A Very Close area around that point erupts into impassable terrain. All targets within that area must make an Agility Reaction Roll (14). Targets who fail take 2d10 physical damage and are thrown out of the area. Targets who succeed take half damage and aren't moved."
      },
      {
        "name": "Arcane Artillery - Action",
        "text": "Spend a Fear to unleash a precise hail of magical blasts. All targets in the scene must make an Agility Reaction Roll. Targets who fail take 2d12 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "Warding Sphere - Reaction",
        "text": "When the Wizard takes damage from an attack within Close range, deal 2d6 magic damage to the attacker. This reaction can't be used again until the Wizard refreshes it with their \"Refresh Warding Sphere\" action."
      }
    ]
  },
  {
    "name": "Weaponmaster",
    "originalName": "Weaponmaster",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Bruiser",
    "countPerHp": 1,
    "description": "A master-at-arms wielding a sword twice their size.",
    "motivesAndTactics": "Act first, aim for the weakest, intimidate",
    "difficulty": 14,
    "majorThreshold": 8,
    "severeThreshold": 15,
    "hp": 6,
    "stress": 3,
    "attackModifier": "+2",
    "attackDescription": "Claymore",
    "attackRange": "Very Close",
    "attackDamage": "1d12+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Goading Strike - Action",
        "text": "Make a standard attack against a target. On a success, mark a Stress to Taunt the target until their next successful attack. The next time the Taunted target attacks, they have disadvantage against targets other than the Weaponmaster."
      },
      {
        "name": "Adrenaline Burst - Action",
        "text": "Once per scene, spend a Fear to clear 2 HP and 2 Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Weaponmaster makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Young Dryad",
    "originalName": "Young Dryad",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Leader",
    "countPerHp": 1,
    "description": "An imperious tree-person leading their forest's defenses.",
    "motivesAndTactics": "Command, nurture, prune the unwelcome",
    "difficulty": 11,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "hp": 6,
    "stress": 2,
    "attackModifier": "+0",
    "attackDescription": "Scythe",
    "attackRange": "Melee",
    "attackDamage": "1d8+5 phy",
    "experience": "Leadership +3",
    "features": [
      {
        "name": "Voice of the Forest - Action",
        "text": "Mark a Stress to spotlight 1d4 allies within range of a target they can attack without moving. On a success, their attacks deal half damage."
      },
      {
        "name": "Thorny Cage - Action",
        "text": "Spend a Fear to form a cage around a target within Very Close range and Restrain them until they're freed with a successful Strength Roll. When a creature makes an action roll against the cage, they must mark a Stress."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Dryad makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Young Ice Dragon",
    "originalName": "Young Ice Dragon",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "type": "Solo",
    "countPerHp": 1,
    "description": "A glacier-blue dragon with four powerful limbs and frost-tinged wings.",
    "motivesAndTactics": "Avalanche, defend lair, fly, freeze, defend what is mine, maul",
    "difficulty": 18,
    "majorThreshold": 21,
    "severeThreshold": 41,
    "hp": 10,
    "stress": 6,
    "attackModifier": "+7",
    "attackDescription": "Bite and Claws",
    "attackRange": "Close",
    "attackDamage": "4d10 phy",
    "experience": "Protect What Is Mine +3",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "The Dragon can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Rend and Crush - Passive",
        "text": "If a target damaged by the Dragon doesn't mark an Armor Slot to reduce the damage, they must mark a Stress."
      },
      {
        "name": "No Hope - Passive",
        "text": "When a PC rolls with Fear while within Far range of the Dragon, they lose a Hope."
      },
      {
        "name": "Blizzard Breath - Action",
        "text": "Spend 2 Fear to release an icy whorl in front of the Dragon within Close range. All targets in this area must make an Agility Reaction Roll. Targets who fail take 4d6+5 magic damage and are Restrained by ice until they break free with a successful Strength Roll. Targets who succeed must mark 2 Stress or take half damage."
      },
      {
        "name": "Avalanche - Action",
        "text": "Spend a Fear to have the Dragon unleash a huge downfall of snow and ice, covering all other creatures within Far range. All targets within this area must succeed on an Instinct Reaction Roll or be buried in snow and rocks, becoming Vulnerable until they dig themselves out from the debris. For each PC that fails the reaction roll, you gain a Fear."
      },
      {
        "name": "Frozen Scales - Reaction",
        "text": "When a creature makes a successful attack against the Dragon from within Very Close range, they must mark a Stress and become Chilled until their next rest or they clear a Stress. While they are Chilled, they have disadvantage on attack rolls."
      },
      {
        "name": "Momentum - Reaction",
        "text": "When the Dragon makes a successful attack against a PC, you gain a Fear."
      }
    ]
  },
  {
    "name": "Zombie Legion",
    "originalName": "Zombie Legion",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 3,
    "description": "A large pack of undead, still powerful despite their rotting flesh.",
    "motivesAndTactics": "Consume brain, shred flesh, surround",
    "difficulty": 17,
    "majorThreshold": 25,
    "severeThreshold": 45,
    "hp": 8,
    "stress": 5,
    "attackModifier": "+2",
    "attackDescription": "Undead Hands",
    "attackRange": "Close",
    "attackDamage": "4d6+10 phy",
    "experience": null,
    "features": [
      {
        "name": "Horde (2d6+5) - Passive",
        "text": "When the Legion has marked half or more of their HP, their standard attack deals 2d6+5 physical damage instead."
      },
      {
        "name": "Unyielding - Passive",
        "text": "The Legion has resistance to physical damage."
      },
      {
        "name": "Relentless (2) - Passive",
        "text": "The Legion can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Overwhelm - Reaction",
        "text": "When the Legion takes Minor damage from an attack within Melee range, you can mark a Stress to make a standard attack with advantage against the attacker."
      }
    ]
  },
  {
    "name": "Zombie Pack",
    "originalName": "Zombie Pack",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "type": "Horde",
    "countPerHp": 2,
    "description": "A group of shambling corpses instinctively moving together.",
    "motivesAndTactics": "Consume flesh, hunger, maul",
    "difficulty": 8,
    "majorThreshold": 6,
    "severeThreshold": 12,
    "hp": 6,
    "stress": 3,
    "attackModifier": "-1",
    "attackDescription": "Bite",
    "attackRange": "Melee",
    "attackDamage": "1d10+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Horde (1d4+2) - Passive",
        "text": "When the Zombies have marked half or more of their HP, their standard attack deals 1d4+2 physical damage instead."
      },
      {
        "name": "Overwhelm - Reaction",
        "text": "When the Zombies mark HP from an attack within Melee range, you can mark a Stress to make a standard attack against the attacker."
      }
    ]
  }
];