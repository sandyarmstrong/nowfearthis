// Courtesy of https://raw.githubusercontent.com/seansbox/daggerheart-srd/refs/heads/main/.build/json/adversaries.json
// and https://raw.githubusercontent.com/seansbox/daggerheart-srd/refs/heads/main/.build/json/environments.json
const srdStatBlocks = [
  {
    "name": "Abandoned Grove",
    "originalName": "Abandoned Grove",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "description": "A former druidic grove lying fallow and fully reclaimed by nature.",
    "difficulty": 11,
    "type": "Exploration",
    "impulses": "Draw in the curious, echo the past",
    "potentialAdversaries": "Beasts (Bear, Dire Wolf, Glass Snake), Grove Guardians (Minor Treant, Sylvan Soldier, Young Dryad)",
    "features": [
      {
        "name": "Overgrown Battlefield - Passive",
        "text": "There has been a battle here. A PC can make an Instinct Roll to identify evidence of that fight. On a success with Hope, learn all three pieces of information below. On a success with Fear, learn two. On a failure, a PC can mark 3 Stress to learn one and gain advantage on the next action roll to investigate this environment. A PC with an appropriate background or Experience can learn an additional detail and ask a follow-up question about the scene and get a truthful (if not always complete) answer.\n\n  - Traces of a battle (broken weapons and branches, gouges in the ground) litter the ground.\n  - A moss-covered tree trunk is actually the corpse of a treant.\n  - Still-standing trees are twisted in strange ways, as if by powerful magic."
      },
      {
        "name": "Barbed Vines - Action",
        "text": "Pick a point within the grove. All targets within Very Close range of that point must succeed on an Agility Reaction Roll or take 1d8+3 physical damage and become Restrained by barbed vines. Restrained lasts until they\u2019re freed with a successful Finesse or Strength roll or by dealing at least 6 damage to the vines."
      },
      {
        "name": "You Are Not Welcome Here - Action",
        "text": "A Young Dryad, two Sylvan Soldiers, and a number of Minor Treants equal to the number of PCs appear to confront the party for their intrusion."
      },
      {
        "name": "Defiler - Action",
        "text": "Spend a Fear to summon a Minor Chaos Adversary drawn to the echoes of violence and discord. They appear within Far range of a chosen PC and immediately take the spotlight."
      }
    ]
  },
  {
    "name": "Acid Burrower",
    "originalName": "Acid Burrower",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A horse-sized insect with digging claws and acidic blood.",
    "difficulty": 14,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Burrow, drag away, feed, reposition",
    "hp": 8,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 15,
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
        "text": "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP and you gain a Fear."
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
    "description": "A winged insect the size of a large house with iridescent scales and wings that move too fast to track.",
    "difficulty": 17,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Collect shiny things, hunt, nest, swoop",
    "hp": 12,
    "stress": 6,
    "majorThreshold": 20,
    "severeThreshold": 35,
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
        "text": "When the Flickerfly makes an attack, the target\u2019s Evasion is halved against the attack."
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
        "text": "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target\u2019s fears."
      },
      {
        "name": "Hallucinatory Breath - Action: Countdown (Loop 1d6)",
        "text": "When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must make an Instinct Reaction Roll or become overwhelmed by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail lose 2 Hope and take 3d8+3 direct magic damage."
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
    "description": "An ambush is set to catch an unsuspecting party off-guard.",
    "difficulty": "Special (see \u201cRelative Strength\u201d)",
    "type": "Event",
    "impulses": "Overwhelm, scatter, surround",
    "potentialAdversaries": "Any",
    "features": [
      {
        "name": "Relative Strength - Passive",
        "text": "The Difficulty of this environment equals that of the adversary with the highest Difficulty."
      },
      {
        "name": "Surprise! - Action",
        "text": "The ambushers reveal themselves to the party, you gain 2 Fear, and the spotlight immediately shifts to one of the ambushing adversaries."
      }
    ]
  },
  {
    "name": "Ambushers",
    "originalName": "Ambushers",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "description": "An ambush is set by the PCs to catch unsuspecting adversaries off-guard.",
    "difficulty": "Special (see \u201cRelative Strength\u201d)",
    "type": "Event",
    "impulses": "Escape, group up, protect the most vulnerable",
    "potentialAdversaries": "Any",
    "features": [
      {
        "name": "Relative Strength - Passive",
        "text": "The Difficulty of this environment equals that of the adversary with the highest Difficulty."
      },
      {
        "name": "Where Did They Come From? - Reaction",
        "text": "When a PC starts the ambush on unsuspecting adversaries, you lose 2 Fear and the first attack roll a PC makes has advantage."
      }
    ]
  },
  {
    "name": "Apprentice Assassin",
    "originalName": "Apprentice Assassin",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A young trainee eager to prove themselves.",
    "difficulty": 13,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Act reckless, kill, prove their worth, show off",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "A decaying mage adorned in dark, tattered robes.",
    "difficulty": 21,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Corrupt, decay, flee to fight another day, resurrect",
    "hp": 9,
    "stress": 8,
    "majorThreshold": 33,
    "severeThreshold": 66,
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
        "name": "Your Demise is Near - Reaction",
        "text": "Countdown (2d6). When the Necromancer has marked 6 or more of their HP, activate the countdown. When it triggers, deal 2d10+6 direct magic damage to a target within Close range. The Necromancer then clears a number of Stress or HP equal to the number of HP marked by the target from this attack."
      }
    ]
  },
  {
    "name": "Archer Guard",
    "originalName": "Archer Guard",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A tall guard bearing a longbow and quiver with arrows fletched in the settlement\u2019s colors.",
    "difficulty": 10,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Arrest, close gates, make it through the day, pin down",
    "hp": 3,
    "stress": 2,
    "majorThreshold": 4,
    "severeThreshold": 8,
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
    "description": "A group of trained archers bearing massive bows.",
    "difficulty": 13,
    "type": "Horde",
    "countPerHp": 2,
    "motivesAndTactics": "Stick together, survive, volley fire",
    "hp": 4,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 16,
    "attackModifier": "0",
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
    "description": "A cunning scoundrel skilled in both poisons and ambushing.",
    "difficulty": 14,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Anticipate, get paid, kill, taint food and water",
    "hp": 4,
    "stress": 4,
    "majorThreshold": 8,
    "severeThreshold": 16,
    "attackModifier": "+3",
    "attackDescription": "Poisoned Throwing Dagger",
    "attackRange": "Close",
    "attackDamage": "2d8+1 phy",
    "experience": "Intrusion +2",
    "features": [
      {
        "name": "Grindeloth Venom - Passive",
        "text": "Targets who mark HP from the Assassin\u2019s attacks are Vulnerable until they clear a HP."
      },
      {
        "name": "Out of Nowhere - Passive",
        "text": "The Assassin has advantage on attacks if they are Hidden."
      },
      {
        "name": "Fumigation - Action",
        "text": "Drop a smoke bomb that fills the air within Close range with smoke, Dizzilying all targets in this area. Dizzied targets have disadvantage on their next action roll, then clear the condition."
      }
    ]
  },
  {
    "name": "Battle Box",
    "originalName": "Battle Box",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A cube-shaped construct with a different rune on each of their six sides.",
    "difficulty": 15,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Change tactics, trample foes, wait in disguise",
    "hp": 8,
    "stress": 6,
    "majorThreshold": 10,
    "severeThreshold": 20,
    "attackModifier": "+2",
    "attackDescription": "Slam",
    "attackRange": "Melee",
    "attackDamage": "2d6+3 phy",
    "experience": "Camouflage +2",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Box can be spotlighted up to two times per turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Randomized Tactics - Action",
        "text": "Mark a Stress and roll a d6. The Box uses the corresponding move: 1. Mana Beam: The Box fires a searing beam. Make an attack against a target within Far range. On a success, deal 2d10+2 magic damage. 2. Fire Jets: The Box shoots into the air, spinning and releasing jets of flame. Make an attack against all targets within Close range. Targets the Box succeeds against take 2d8 physical damage. 3. Trample: The Box rockets around erratically. Make an attack against all PCs within Close range. Targets the Box succeeds against take 1d6+5 physical damage and are Vulnerable until their next roll with Hope. 4. Shocking Gas: The Box sprays out a silver gas sparking with lightning. All targets within Close range must succeed on a Finesse Reaction Roll or mark 3 Stress. 5. Stunning Clap: The Box leaps and their sides clap, creating a concussive boom. All targets within Very Close range must succeed on a Strength Reaction Roll or become Vulnerable until the cube is defeated. 6. Psonic Whine: The Box releases a cluster of mechanical bees whose buzz rattles mortal minds. All targets within Close range must succeed on a Presence Reaction Roll or take 2d4+9 direct magic damage."
      },
      {
        "name": "Overcharge - Reaction",
        "text": "Before rolling damage for the Box\u2019s attack, you can mark a Stress to add a d6 to the damage roll. Additionally, you gain a Fear."
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
    "description": "A large bear with thick fur and powerful claws.",
    "difficulty": 14,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Climb, defend territory, pummel, track",
    "hp": 7,
    "stress": 2,
    "majorThreshold": 9,
    "severeThreshold": 17,
    "attackModifier": "+1",
    "attackDescription": "Claws",
    "attackRange": "Melee",
    "attackDamage": "1d8+3 phy",
    "experience": "Ambusher +3, Keen Senses +2",
    "features": [
      {
        "name": "Overwhelming Force - Passive",
        "text": "Targets who mark HP from the Bear\u2019s standard attack are knocked back to Very Close range."
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
    "description": "An armored guard bearing a sword and shield painted in the settlement\u2019s colors.",
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
    ]
  },
  {
    "name": "Blank Adversary",
    "originalName": "Blank Adversary",
    "source": "Extra",
    "tier": 1,
    "category": "Adversary",
    "description": "",
    "difficulty": 10,
    "type": "Standard"
  },
  {
    "name": "Blank Environment",
    "originalName": "Blank Environment",
    "source": "Extra",
    "tier": 1,
    "category": "Environment",
    "description": "",
    "difficulty": 10,
    "type": "Event"
  },
  {
    "name": "Brawny Zombie",
    "originalName": "Brawny Zombie",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A large corpse, decay-bloated and angry.",
    "difficulty": 10,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Crush, destroy, hurl debris, slam",
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
        "text": "When you spotlight the Zombie and they don\u2019t have a token on their stat block, they can\u2019t act yet. Place a token on their stat block and describe what they\u2019re preparing to do. When you spotlight the Zombie and they have a token on their stat block, clear the token and they can act."
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
    "description": "Thick indigo ash fills the air around a towering moss-covered tree that burns eternally with flames a sickly shade of blue.",
    "difficulty": 16,
    "type": "Exploration",
    "impulses": "Beat out an uncanny rhythm for all to follow, corrupt the woods",
    "potentialAdversaries": "Beasts (Bear, Glass Snake), Elementals (Elemental Spark), Verdant Defenders (Dryad, Oak Treant, Stag Knight)",
    "features": [
      {
        "name": "Chaos Magic Locus - Passive",
        "text": "When a PC makes a Spellcast Roll, they must roll two Fear Dice and take the higher result.\n\n  *What does it feel like to work magic in this chaos-touched place? What do you fear will happen if you lose control of the spell?*"
      },
      {
        "name": "The Indigo Flame - Passive",
        "text": "PCs who approach the central tree can make a Knowledge Roll to try to identify the magic that consumed this environment.\n\n  - On a success: They learn three of the below details. On a success with Fear, they learn two.\n  - On a failure: They can mark a Stress to learn one and gain advantage on the next action roll to investigate this environment.\n  - Details: This is a result of Fallen magic. The corruption is spread through the ashen moss. It can be cleansed only by a ritual of nature magic with a Progress Countdown (8).\n\n  *What fell cult corrupted these woods? What have they already done with the cursed wood and sap from this tree?*"
      },
      {
        "name": "Grasping Vines - Action",
        "text": "Animate vines bristling with thorns whip out from the underbrush to ensnare the PCs. A target must succeed on an Agility Reaction Roll or become Restrained and Vulnerable until they break free, clearing both conditions, with a successful Finesse or Strength Roll or by dealing 10 damage to the vines. When the target makes a roll to escape, they take 1d8+4 physical damage and lose a Hope.\n\n  *What painful memories do the vines bring to the surface as they pierce flesh?*"
      },
      {
        "name": "Charcoal Constructs - Action",
        "text": "Warped animals wreathed in indigo flame trample through a point of your choice. All targets within Close range of that point must make an Agility Reaction Roll. Targets who fail take 3d12+3 physical damage. Targets who succeed take half damage instead.\n\n  *Are these real animals consumed by the flame or merely constructs of the corrupting magic?*"
      },
      {
        "name": "Choking Ash - Reaction",
        "text": "Countdown (Loop 6). When the PCs enter the Burning Heart of the Woods, activate the countdown. When it triggers, all characters must make a Strength or Instinct Reaction Roll. Targets who fail take 4d6+5 direct physical damage. Targets who succeed take half damage. Protective masks or clothes give advantage on the reaction roll.\n\n  *What hallucinations does the ash induce? What incongruous taste does it possess?*"
      }
    ]
  },
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
        "text": "A thief tries to steal something from a PC. The PC must succeed on an Instinct Roll to notice the thief or lose an item of the GM\u2019s choice as the thief escapes to a Close distance. To retrieve the stolen item, the PCs must complete a Progress Countdown (6) to chase down the thief before the thief completes a Consequence Countdown (4) and escapes to their hideout.\n\n  *What drove this person to pickpocketing? Where is the thief\u2019s hideout and how has it avoided notice?*"
      },
      {
        "name": "Crowd Control - Reaction",
        "text": "When one of the PCs splits from the group, the crowds shift and cut them off from the party.\n\n  *Where does the crowd\u2019s movement carry them? How do they feel about being alone but surrounded?*"
      }
    ]
  },
  {
    "name": "Castle Siege",
    "originalName": "Castle Siege",
    "source": "SRD",
    "tier": 3,
    "category": "Environment",
    "description": "An active siege with an attacking force fighting to gain entry to a fortified castle.",
    "difficulty": 17,
    "type": "Event",
    "impulses": "Bleed out the will to fight, breach the walls, build tension",
    "potentialAdversaries": "Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Noble Forces (Archer Squadron, Conscript, Elite Soldier, Knight of the Realm)",
    "features": [
      {
        "name": "Secret Entrance - Passive",
        "text": "A PC can find or recall a secret way into the castle with a successful Instinct or Knowledge Roll.\n\n  *How do they get in without revealing the pathway to the attackers? Are any of the defenders monitoring this path?*"
      },
      {
        "name": "Siege Weapons (Environment Change) - Action",
        "text": "Consequence Countdown (5). The attacking force deploys siege weapons to try to raze the defenders\u2019 fortifications. Activate the countdown when the siege begins (for a protracted siege, make this a long-term countdown instead). When it triggers, the defenders\u2019 fortifications have been breached and the attackers flood in. You gain 2 Fear, then shift to the Pitched Battle environment and spotlight it.\n\n  *What siege weapons are being deployed? Are they magical, mundane, or a mixture of both? What defenses must the characters overcome to storm the castle?*"
      },
      {
        "name": "Reinforcements - Action",
        "text": "Summon a Knight of the Realm, a number of Tier 3 Minions equal to the number of PCs, and two adversaries of your choice within Far range of a chosen PC as reinforcements. The Knight of the Realm immediately takes the spotlight.\n\n  *Who are they targeting first? What formation do they take?*"
      },
      {
        "name": "Collateral Damage - Reaction",
        "text": "When an adversary is defeated, you can spend a Fear to have a stray attack from a siege weapon hit a point on the battlefield. All targets within Very Close range of that point must make an Agility Reaction Roll.\n\n  - Targets who fail take 3d8+3 physical or magic damage and must mark a Stress.\n  - Targets who succeed must mark a Stress.\n\n  *What debris is scattered by the attack? What is broken by the strike that can\u2019t be easily mended?*"
      }
    ]
  },
  {
    "name": "Cave Ogre",
    "originalName": "Cave Ogre",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A massive humanoid who sees all sapient life as food.",
    "difficulty": 13,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Bite off heads, feast, rip limbs, stomp, throw enemies",
    "hp": 8,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 15,
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
        "text": "The Ogre\u2019s attacks deal direct damage."
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
    "description": "An otherworldly space where the laws of reality are unstable and dangerous.",
    "difficulty": 20,
    "type": "Traversal",
    "impulses": "Annihilate certainty, consume power, defy logic",
    "potentialAdversaries": "Outer Realms Monstrosities (Abomination, Corruptor, Thrall)",
    "features": [
      {
        "name": "Impossible Architecture - Passive",
        "text": "Up is down, down is right, right is a stairway. Gravity and directionality themselves are in flux, and any attempt to move through this realm is an odyssey unto itself, requiring a Progress Countdown (8). On a failure, a PC must mark a Stress in addition to the roll\u2019s other consequences.\n\n  *What does it feel like to move in a space so alien to the Mortal Realm? What landmark or point do you fixate on to maintain your balance? What bizarre landmarks do you traverse on your journey?*"
      },
      {
        "name": "Everything You Are This Place Will Take from You - Action",
        "text": "Countdown (Loop 14). Activate the countdown. When it triggers, all PCs must succeed on a Presence Reaction Roll or their highest trait is temporarily reduced by 1d4 unless they mark a number of Stress equal to its value. Any lost trait points are regained if the PC critically succeeds or escapes the Chaos Realm.\n\n  *How does this place try to steal from you that which makes you legendary? What does it feel like to have this power taken from you?*"
      },
      {
        "name": "Unmake - Action",
        "text": "On a failure, they take 4d10 direct magic damage. On a success, they must mark a Stress.\n\n  *What glimpse of other worlds do you catch while this place tries to unmake you? What core facet of your personality does the unmaking try to erase?*"
      },
      {
        "name": "Outer Realms Predators - Action",
        "text": "Spend a Fear to summon an Outer Realms Abomination, an Outer Realms Corruptor, and 2d6 Outer Realms Thralls, who appear at Close range of a chosen PC in defiance of logic and causality. Immediately spotlight one of these adversaries, and you can spend an additional Fear to automatically succeed on that adversary\u2019s standard attack.\n\n  *What half-consumed remnants of the shattered soul do these monstrosities cast aside in pursuit of living flesh? What jagged reflections of former personhood do you catch between moments of unquenching malice?*"
      },
      {
        "name": "Disorienting Reality - Reaction",
        "text": "On a result with Fear, you can ask the PC to describe which of their fears the Chaos Realm evokes as a vision of reality unmakes and reconstitutes itself to the PC. The PC loses a Hope. If it is their last Hope, you gain a Fear.\n\n  *What moment do they see? If it\u2019s a memory, how is it usurped by this place? How hard will it be to hold on to the real memory?*"
      }
    ]
  },
  {
    "name": "Chaos Skull",
    "originalName": "Chaos Skull",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A floating humanoid skull animated by scintillating magic.",
    "difficulty": 15,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Cackle, consume magic, serve creator",
    "hp": 5,
    "stress": 4,
    "majorThreshold": 8,
    "severeThreshold": 16,
    "attackModifier": "+2",
    "attackDescription": "Energy Blast",
    "attackRange": "Close",
    "attackDamage": "2d8+3 mag",
    "experience": null,
    "features": [
      {
        "name": "Levitation - Passive",
        "text": "The Skull levitates several feet off the ground and can\u2019t be Restrained."
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
    "description": "A steep, rocky cliffside tall enough to make traversal dangerous.",
    "difficulty": 12,
    "type": "Traversal",
    "impulses": "Cast the unwary down to a rocky doom, draw people in with promise of what lies at the top",
    "potentialAdversaries": "Construct, Deeproot Defender, Giant Scorpion, Glass Snake",
    "features": [
      {
        "name": "The Climb - Passive",
        "text": "Climbing up the cliffside uses a Progress Countdown (12). It ticks down according to the following criteria when the PCs make an action roll to climb:\n\n  - Critical Success: Tick down 3\n  - Success with Hope: Tick down 2\n  - Success with Fear: Tick down 1\n  - Failure with Hope: No advancement\n  - Failure with Fear: Tick up 1\n\n  When the countdown triggers, the party has made it to the top of the cliff.\n\n  *What strange formations are the stones arranged in? What ominous warnings did previous adventurers leave?*"
      },
      {
        "name": "Pitons Left Behind - Passive",
        "text": "Previous climbers left behind large metal rods that climbers can use to aid their ascent. If a PC using the pitons fails an action roll to climb, they can mark a Stress instead of ticking the countdown up.\n\n  *What do the shape and material of these pitons tell you about the previous climbers? How far apart are they from one another?*"
      },
      {
        "name": "Fall - Action",
        "text": "Spend a Fear to have a PC\u2019s handhold fail, plummeting them toward the ground. If they aren\u2019t saved on the next action, they must make a roll; tick up the countdown by 1, and they take 1d12 physical damage if the countdown is between 8 and 12, 2d12 between 4 and 7, and 3d12 at 3 or lower.\n\n  *How can you tell how many others have fallen here before? What lives in these walls that might try to scare adventurers into falling for an easy meal?*"
      }
    ]
  },
  {
    "name": "Conscript",
    "originalName": "Conscript",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A poorly trained civilian pressed into war.",
    "difficulty": 12,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Follow orders, gang up, survive",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
    "attackModifier": "0",
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
    "description": "A roughly humanoid being of stone and steel, assembled and animated by magic.",
    "difficulty": 13,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Destroy environment, serve creator, smash target, trample groups",
    "hp": 9,
    "stress": 4,
    "majorThreshold": 7,
    "severeThreshold": 15,
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
        "text": "Mark a Stress to make an attack against all targets in the Construct\u2019s path when they move. Targets the Construct succeeds against take 1d8 physical damage."
      },
      {
        "name": "Overload - Reaction",
        "text": "Before rolling damage for the Construct\u2019s attack, you can mark a Stress to gain a +10 bonus to the damage roll. The Construct can then take the spotlight again."
      },
      {
        "name": "Death Quake - Reaction",
        "text": "When the Construct marks their last HP, the magic powering them ruptures in an explosion of force. Make an attack with advantage against all targets within Very Close range. Targets the Construct succeeds against take 1d12+2 magic damage."
      }
    ]
  },
  {
    "name": "Countdowns",
    "originalName": "Countdowns",
    "source": "Extra",
    "tier": 1,
    "category": "Environment",
    "description": "Add countdowns here that are independent of any other adversary or environment. Countdown effects trigger at 0.",
    "difficulty": 10,
    "type": "Event",
    "features": [
      {
        "name": "Dynamic Advancement",
        "text": "Create a Progress countdown and a Consequence countdown. Have players make action rolls to determine results, following this table:\n\nFailure+Fear | Progress: 0 | Consequence: 3\nFailure+Hope | Progress: 0 | Consequence: 2\nSuccess+Fear | Progress: 1 | Consequence: 1\nSuccess+Hope | Progress: 2 | Consequence: 0\nCrit Success | Progress: 3 | Consequence: 0"
      }
    ]
  },
  {
    "name": "Courtesan",
    "originalName": "Courtesan",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "An accomplished manipulator and master of the social arts.",
    "difficulty": 13,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Entice, maneuver, secure patrons",
    "hp": 3,
    "stress": 4,
    "majorThreshold": 7,
    "severeThreshold": 13,
    "attackModifier": "-3",
    "attackDescription": "Dagger",
    "attackRange": "Melee",
    "attackDamage": "1d4+3 phy",
    "experience": "Manipulation +3, Socialite +3",
    "features": [
      {
        "name": "Searing Glance - Reaction",
        "text": "When a PC within Close range makes a Presence Roll, you can mark a Stress to cast a gaze toward the aftermath. On the target\u2019s failure, they must mark 2 Stress and are Vulnerable until the scene ends or they succeed on a social action against the Courtesan. On the target\u2019s success, they must mark a Stress."
      }
    ]
  },
  {
    "name": "Courtier",
    "originalName": "Courtier",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "An ambitious and ostentatiously dressed socialite.",
    "difficulty": 12,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Discreet, gain favor, maneuver, scheme",
    "hp": 3,
    "stress": 4,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "attackModifier": "-4",
    "attackDescription": "Daggers",
    "attackRange": "Melee",
    "attackDamage": "1d4+2 phy",
    "experience": "Socialize +3",
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
    "description": "An experienced mage wielding shadow and fear.",
    "difficulty": 14,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Curry favor, hinder foes, uncover knowledge",
    "hp": 4,
    "stress": 6,
    "majorThreshold": 9,
    "severeThreshold": 18,
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
    "description": "A professional killer-turned-cultist.",
    "difficulty": 15,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Capture sacrifices, isolate prey, rise in the ranks",
    "hp": 4,
    "stress": 4,
    "majorThreshold": 9,
    "severeThreshold": 17,
    "attackModifier": "+2",
    "attackDescription": "Long Knife",
    "attackRange": "Melee",
    "attackDamage": "2d8+4 phy",
    "experience": null,
    "features": [
      {
        "name": "Shadow\u2019s Embrace - Passive",
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
    "description": "A low-ranking cultist in simple robes, eager to gain power.",
    "difficulty": 13,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Follow orders, gain power, seek forbidden knowledge",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
    "attackModifier": "0",
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
    "description": "A fallen cult assembles around a sigil of the defeated gods and a bonfire that burns a sickly shade of green.",
    "difficulty": 14,
    "type": "Event",
    "impulses": "Profane the land, unite the Mortal Realm with the Circles Below",
    "potentialAdversaries": "Cult of the Fallen (Cult Adept, Cult Fang, Cult Initiate, Secret-Keeper)",
    "features": [
      {
        "name": "Desecrated Ground - Passive",
        "text": "Cultists dedicated this place to the Fallen Gods, and their foul influence seeps into it. Reduce the PCs\u2019 Hope Die to a d10 while in this environment. The desecration can be removed with a Progress Countdown (6).\n\n  *How do the PCs first notice that something is wrong about this place? What fears resurface while hope is kept at bay?*"
      },
      {
        "name": "Blasphemous Might - Action",
        "text": "A portion of the ritual\u2019s power is diverted into a cult member to fight off interlopers. Choose one adversary to become Imbued with terrible magic until the scene ends or they\u2019re defeated. An Imbued adversary immediately takes the spotlight and gains one of the following benefits, or all three if you spend a Fear:\n\n  - They gain advantage on all attacks.\n  - They deal an extra 1d10 damage on a successful attack.\n  - They gain the following feature:\n    Relentless (2) - Passive: This adversary can be spotlighted multiple times per GM turn. Spend Fear as usual to spotlight them.\n\n  *How does the enemy change in appearance? What fears do their blows bring to the surface?*"
      },
      {
        "name": "The Summoning - Reaction",
        "text": "Countdown (6). When the PCs enter the scene or the cult begins the ritual to summon a demon, activate the countdown. Designate one adversary to lead the ritual. The countdown ticks down when a PC rolls with Fear. When it triggers, summon a Minor Demon within Very Close range of the ritual\u2019s leader. If the leader is defeated, the countdown ends with no effect as the ritual fails.\n\n  *What will the cult do with this leashed demon if they succeed? What will they try to summon next?*"
      },
      {
        "name": "Complete the Ritual - Reaction",
        "text": "If the ritual\u2019s leader is targeted by an attack or spell, an ally within Very Close range of them can mark a Stress to be targeted by that attack or spell instead.\n\n  *What does it feel like to see such devotion turned to the pursuit of fear and domination?*"
      }
    ]
  },
  {
    "name": "Deeproot Defender",
    "originalName": "Deeproot Defender",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A burly vegetable-person with grasping vines.",
    "difficulty": 10,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Ambush, grab, protect, pummel",
    "hp": 7,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 14,
    "attackModifier": "+2",
    "attackDescription": "Vines",
    "attackRange": "Close",
    "attackDamage": "1d8+3 phy",
    "experience": "Huge +3",
    "features": [
      {
        "name": "Ground Slam - Action",
        "text": "Slam the ground, knocking all targets within Very Close range back to Far range. Each target knocked back by this must mark a Stress."
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
    "description": "A regal cloaked monstrosity with circular horns adorned with treasure.",
    "difficulty": 17,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Consume, fuel greed, sow dissent",
    "hp": 6,
    "stress": 5,
    "majorThreshold": 15,
    "severeThreshold": 29,
    "attackModifier": "+2",
    "attackDescription": "Hungry Maw",
    "attackRange": "Melee",
    "attackDamage": "3d6+5 mag",
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Money Talks - Passive",
        "text": "Attacks against the Demon are made with disadvantage unless the attacker spends a handful of gold. This Demon starts with a number of handfuls equal to the number of PCs. When a target marks HP from the Demon\u2019s standard attack, they can spend a handful of gold instead of marking HP (1 handful per HP). Add a handful of gold to the Demon for each handful of gold spent by PCs on this feature."
      },
      {
        "name": "Numbers Must Go Up - Passive",
        "text": "Add a bonus to the Demon\u2019s attack rolls equal to the number of handfuls of gold they have."
      },
      {
        "name": "Money is Time - Action",
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
    "description": "A cloaked one-creature with long limbs, seeping shadows.",
    "difficulty": 17,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Make fear contagious, stick to the shadows, undermine resolve",
    "hp": 6,
    "stress": 5,
    "majorThreshold": 18,
    "severeThreshold": 35,
    "attackModifier": "+3",
    "attackDescription": "Miasma Bolt",
    "attackRange": "Far",
    "attackDamage": "3d6+4 mag",
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
    "description": "A perfectly beautiful and infinitely cruel demon with a gleaming spear and elegant robes.",
    "difficulty": 19,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Condescend, declare premature victory, prove superiority",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 20,
    "severeThreshold": 36,
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
        "text": "Mark a Stress to deal the Demon\u2019s standard attack damage to a target within Close range."
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
    "description": "A fickle creature of spindly limbs and insatiable desires.",
    "difficulty": 17,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Join in on others\u2019 success, take what belongs to others, hold grudges",
    "hp": 6,
    "stress": 6,
    "majorThreshold": 17,
    "severeThreshold": 30,
    "attackModifier": "+4",
    "attackDescription": "Psychic Assault",
    "attackRange": "Far",
    "attackDamage": "3d8+3 mag",
    "experience": "Manipulation +3",
    "features": [
      {
        "name": "Unprotected Mind - Passive",
        "text": "The Demon\u2019s standard attack deals direct damage."
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
        "name": "What\u2019s Yours Is Mine - Reaction",
        "text": "When a PC takes severe damage within Very Close range of the Demon, you can spend a Fear to cause the target to make a Finesse Reaction Roll. On a failure, the Demon seizes one item or consumable of their choice from the target\u2019s inventory."
      }
    ]
  },
  {
    "name": "Demon of Wrath",
    "originalName": "Demon of Wrath",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "description": "A hulking demon with boulder-sized fists, driven by endless rage.",
    "difficulty": 17,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Fuel anger, impress rivals, wreak havoc",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 22,
    "severeThreshold": 40,
    "attackModifier": "+3",
    "attackDescription": "Fists",
    "attackRange": "Very Close",
    "attackDamage": "3d8+1 mag",
    "experience": "Intimidation +2",
    "features": [
      {
        "name": "Anger Unrelenting - Passive",
        "text": "The Demon\u2019s attacks deal direct damage."
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
        "name": "Blood and Souls - Reaction: Countdown (Loop 6)",
        "text": "Activate the first time an attack is made within sight of the Demon. It ticks down when a PC takes a violent action. When it triggers, summon 1d4 Minor Demons, who appear at Close range."
      }
    ]
  },
  {
    "name": "Demonic Hound Pack",
    "originalName": "Demonic Hound Pack",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "Unnatural hounds lit from within by hellfire.",
    "difficulty": 15,
    "type": "Horde",
    "countPerHp": 1,
    "motivesAndTactics": "Cause fear, consume flesh, please masters",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 11,
    "severeThreshold": 23,
    "attackModifier": "0",
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
    "description": "A winged pet endlessly loyal to their vampire owner.",
    "difficulty": 14,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Dive-bomb, hide, protect leader",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 16,
    "severeThreshold": 30,
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
    "description": "A large wolf with menacing teeth, seldom encountered alone.",
    "difficulty": 12,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Defend territory, harry, protect pack, surround, trail",
    "hp": 4,
    "stress": 3,
    "majorThreshold": 5,
    "severeThreshold": 9,
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
    "description": "A massive ritual designed to breach the gates of the Hallows Above and unseat the New Gods themselves.",
    "difficulty": 20,
    "type": "Event",
    "impulses": "Collect power, overawe, silence dissent",
    "potentialAdversaries": "Arch-Necromancer, Fallen Shock Troops, Mortal Hunter, Oracle of Doom, Perfected Zombie",
    "features": [
      {
        "name": "Final Preparations - Passive",
        "text": "When the environment first takes the spotlight, designate one adversary as the Usurper seeking to overthrow the gods. Activate a Long-Term Countdown (8) as the Usurper assembles what they need to conduct the ritual. When it triggers, spotlight this environment to use the \u201cBeginning of the End\u201d feature. While this environment remains in play, you can hold up to 15 Fear.\n\n  *What does the Usurper still require: The heart of a High Seraph? The last notes of an ancient vignette? The loyalty of two archenemies? The heartbroken tears of a pure soul?*"
      },
      {
        "name": "Divine Blessing - Passive",
        "text": "When a PC critically succeeds, they can spend 2 Hope to refresh an ability normally limited by uses (such as once per rest, once per session).\n\n  *What god favors you as you fight against this usurpation? How does your renewed power reflect their influence?*"
      },
      {
        "name": "Defiers Abound - Action",
        "text": "Spend 2 Fear to summon 1d4+2 Fallen Shock Troops that appear within Close range of the Usurper to assist their divine siege. Immediately spotlight the Shock Troops to use a \u201cGroup Attack\u201d action.\n\n  *Which High Fallen do these troops serve? Which god\u2019s flesh do they wish to feast upon?*"
      },
      {
        "name": "Godslayer - Action",
        "text": "If the Divine Siege Countdown (see \u201cBeginning of the End\u201d) has triggered, you can spend 3 Fear to describe the Usurper slaying one of the gods of the Hallows Above, feasting upon their power and growing stronger. The Usurper clears 2 HP. Increase their Difficulty, damage, attack modifier, or give them a new feature from the slain god.\n\n  *Which god meets their end? What are their last words? How does the Usurper\u2019s new stolen power manifest?*"
      },
      {
        "name": "Beginning of the End - Reaction",
        "text": "When the \u201cFinal Preparations\u201d long-term countdown triggers, the Usurper begins hammering on the gates of the Hallows themselves. Activate a Divine Siege Countdown (10). Spotlight the Usurper to describe the Usurper\u2019s assault and tick down this countdown by 1. If the Usurper takes Major or greater damage, tick up the countdown by 1. When it triggers, the Usurper shatters the barrier between the Mortal Realm and the Hallows Above to slay the gods and take their place. You gain a Fear for each unmarked HP the Usurper has. You can immediately use the \u201cGodslayer\u201d feature without spending Fear to make an additional GM move.\n\n  *How does the Mortal Realm writhe as the natural order is violated? What mortals witness this blasphemy from afar?*"
      },
      {
        "name": "Ritual Nexus - Reaction",
        "text": "On any failure with Fear against the Usurper, the PC must mark 1d4 Stress from the backlash of magical power.\n\n  *What visions of failures past torment you as your efforts fall short? How are these memories twisted by the Usurper?*"
      }
    ]
  },
  {
    "name": "Dryad",
    "originalName": "Dryad",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "description": "A nature spirit in the form of a humanoid tree.",
    "difficulty": 16,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Camouflage, drive out, preserve the forest",
    "hp": 8,
    "stress": 5,
    "majorThreshold": 24,
    "severeThreshold": 38,
    "attackModifier": "+4",
    "attackDescription": "Deadfall Shortbow",
    "attackRange": "Far",
    "attackDamage": "3d10+1 phy",
    "experience": "Forest Knowledge +4",
    "features": [
      {
        "name": "Bramble Patch - Action",
        "text": "Mark a Stress to target a point within Far range. Create a patch of thorns that covers an area within Close range of that point. All targets within that area take 2d6+2 physical damage when they act. A target must succeed on a Finesse Roll or take more than 20 damage to the Dryad with an attack to leave the area."
      },
      {
        "name": "Group Saplings - Action",
        "text": "Spend a Fear to grow three Treant Sapling Minions, who appear at Close range and immediately take the spotlight."
      },
      {
        "name": "We Are All One - Reaction",
        "text": "When an ally dies within Close range, you can spend a Fear to clear 2 HP and 2 Stress as the fallen ally\u2019s life force is returned to the forest."
      }
    ]
  },
  {
    "name": "Electric Eels",
    "originalName": "Electric Eels",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A swarm of eels that encircle and electrocute.",
    "difficulty": 14,
    "type": "Horde",
    "countPerHp": 2,
    "motivesAndTactics": "Avoid larger predators, shock prey, tear apart",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 10,
    "severeThreshold": 20,
    "attackModifier": "0",
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
    "description": "A blazing mote of elemental fire.",
    "difficulty": 15,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Blast, consume, gain mass",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
    "attackModifier": "+0",
    "attackDescription": "Burst of Fire",
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
    "description": "An armored squire or experienced commoner looking to advance.",
    "difficulty": 15,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Gain glory, keep order, make alliances",
    "hp": 4,
    "stress": 3,
    "majorThreshold": 9,
    "severeThreshold": 18,
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
        "name": "Vassal\u2019s Loyalty - Reaction",
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
    "description": "A magical necromantic experiment gone wrong, leaving them warped and ungainly.",
    "difficulty": 13,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Devour, hunt, track",
    "hp": 3,
    "stress": 3,
    "majorThreshold": 12,
    "severeThreshold": 23,
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
    "description": "A cursed soul bound to the Fallen\u2019s will.",
    "difficulty": 18,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Crush, dominate, earn relief, punish",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "Warped mage bound by the bargains they made in life.",
    "difficulty": 19,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Acquire, dishearten, dominate, torment",
    "hp": 6,
    "stress": 5,
    "majorThreshold": 26,
    "severeThreshold": 42,
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
    "description": "A fallen God, wreathed in rage and resentment, bearing millennia of experience in breaking heroes\u2019 spirits.",
    "difficulty": 20,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Corrupt, dominate, punish, break the weak",
    "hp": 8,
    "stress": 5,
    "majorThreshold": 36,
    "severeThreshold": 66,
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
    "description": "That which only the most feared have a chance to fear.",
    "difficulty": 18,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Dispatch merciless death, punish the defiant, secure victory at any cost",
    "hp": 11,
    "stress": 5,
    "majorThreshold": 35,
    "severeThreshold": 58,
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
        "name": "Doombringer - Reaction",
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
    "description": "A leather-clad warrior bearing a whip and massive bow.",
    "difficulty": 16,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Command, make a living, maneuver, pin down, protect companion animals",
    "hp": 6,
    "stress": 5,
    "majorThreshold": 12,
    "severeThreshold": 24,
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
        "text": "Twice per scene, summon a Bear, Dire Wolf, or similar Tier 1 animal adversary under the Beastmaster\u2019s control. The adversary appears at Close range and is immediately spotlighted."
      }
    ]
  },
  {
    "name": "Giant Brawler",
    "originalName": "Giant Brawler",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "An especially muscular giant wielding a warhammer larger than a human.",
    "difficulty": 15,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Make a living, overwhelm, slam, topple",
    "hp": 7,
    "stress": 4,
    "majorThreshold": 12,
    "severeThreshold": 28,
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
    "description": "A giant bird of prey with blood-stained talons.",
    "difficulty": 14,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Hunt prey, stay mobile, strike decisively",
    "hp": 4,
    "stress": 4,
    "majorThreshold": 8,
    "severeThreshold": 19,
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
        "text": "Make an attack against a target within Very Close range. On a success, deal 2d4+3 physical damage and the target must succeed on an Agility Reaction Roll or become temporarily Restrained within the Eagle\u2019s massive talons. If the target is Restrained, the Eagle immediately lifts them to the air to Very Far range above the battlefield while holding them."
      },
      {
        "name": "Deadly Drop - Action",
        "text": "While flying, the Eagle can drop a Restrained target they are holding. When dropped, the target is no longer Restrained but starts falling. If their fall isn\u2019t prevented during the PCs\u2019 next action, the target takes 2d20 physical damage when they land."
      }
    ]
  },
  {
    "name": "Giant Mosquitoes",
    "originalName": "Giant Mosquitoes",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "Dozens of fist-sized mosquitoes, flying together for protection.",
    "difficulty": 10,
    "type": "Horde",
    "countPerHp": 5,
    "motivesAndTactics": "Fly away, harass, steal blood",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 5,
    "severeThreshold": 9,
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
        "name": "Bloodseeker - Reaction",
        "text": "When the Mosquitoes\u2019 attack causes a target to mark HP, you can mark a Stress to force the target to mark an additional HP."
      }
    ]
  },
  {
    "name": "Giant Rat",
    "originalName": "Giant Rat",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A cat-sized rodent skilled at scavenging and survival.",
    "difficulty": 10,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Burrow, hunger, scavenge, wear down",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "A giant fighter undergoing borrowed armor.",
    "difficulty": 13,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Batter, make a living, overwhelm, terrify",
    "hp": 1,
    "stress": 2,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "A human-sized insect with tearing claws and a stinging tail.",
    "difficulty": 13,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Ambush, feed, grapple, poison",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 7,
    "severeThreshold": 13,
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
    "description": "A clear serpent with a massive head that leaves behind a glass shard trail wherever they go.",
    "difficulty": 14,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Climb, feed, keep distance, scare",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 6,
    "severeThreshold": 10,
    "attackModifier": "+2",
    "attackDescription": "Glass Fangs",
    "attackRange": "Very Close",
    "attackDamage": "1d8+2 phy",
    "experience": null,
    "features": [
      {
        "name": "Armor-Shredding Shards - Passive",
        "text": "On a successful attack within Melee range against the Snake, the attacker must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Spinning Serpent - Action",
        "text": "Mark a Stress to make an attack against all targets within Very Close range. Targets the Snake succeeds against take 1d6+1 physical damage."
      },
      {
        "name": "Spitter - Action",
        "text": "Spend a Fear to introduce a 6 Spitter Die. When the Snake is in the spotlight, roll this die. On a result of 5 or higher, all targets in front of the Snake within Far range must succeed on an Agility Reaction Roll or take 1d4 physical damage. The Snake can take the spotlight a second time this GM turn."
      }
    ]
  },
  {
    "name": "Gorgon",
    "originalName": "Gorgon",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A snake-headed, scaled humanoid with a gilded bow, enraged that their peace has been disturbed.",
    "difficulty": 15,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Corner, hit-and-run, petrify, seek vengeance",
    "hp": 9,
    "stress": 3,
    "majorThreshold": 13,
    "severeThreshold": 25,
    "attackModifier": "+4",
    "attackDescription": "Sinew Shortbow",
    "attackRange": "Far",
    "attackDamage": "2d20+3 mag",
    "experience": "Instinct +3",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Gorgon can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Suneater Arrows - Passive",
        "text": "When the Gorgon makes a successful standard attack, the target Glows until the end of the scene and can\u2019t become Hidden. Attack rolls made against a Glowing target have advantage."
      },
      {
        "name": "Crown of Serpents - Action",
        "text": "Make an attack roll against a target within Melee range using the Gorgon\u2019s protective snakes. On a success, mark Stress to deal 2d10+4 physical damage and the target must mark a Stress."
      },
      {
        "name": "Petrifying Gaze - Reaction",
        "text": "When the Gorgon takes damage from an attack within Close range, you can spend a Fear to force the attacker to make an Instinct Reaction Roll. On a failure, they begin to turn to stone, marking a HP and starting a Petrification Countdown (4). This countdown ticks down when the Gorgon is attacked. When it triggers, the target must make a death move. If the Gorgon is defeated, all petrification countdowns end."
      },
      {
        "name": "Death Glare - Reaction",
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
    "description": "A living landslide of boulders and dust, as large as a house.",
    "difficulty": 17,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Avalanche, knock over, pummel",
    "hp": 10,
    "stress": 4,
    "majorThreshold": 22,
    "severeThreshold": 40,
    "attackModifier": "+7",
    "attackDescription": "Boulder Fist",
    "attackRange": "Very Close",
    "attackDamage": "3d10+1 phy",
    "experience": null,
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Elemental and they don\u2019t have a token on their stat block, they can\u2019t act yet. Place a token on their stat block and describe what they\u2019re preparing to do. When you spotlight the Elemental and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Crushing Blows - Passive",
        "text": "When the Elemental makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Immovable Object - Passive",
        "text": "An attack that would move the Elemental moves them two fewer ranges (for example, Far becomes Very Close). When the Elemental takes physical damage, reduce it by 7."
      },
      {
        "name": "Rockslide - Action",
        "text": "Mark a Stress to create a rockslide that buries all the land in front of Elemental within Close range with rockfall. All targets in this area must make an Agility Reaction Roll (19). Targets who fail take 2d12+5 physical damage and become Vulnerable until their next roll with Hope. Targets who succeed take half damage."
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
    "description": "A huge living wave that crashes down upon enemies.",
    "difficulty": 17,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Deluge, disperse, drown",
    "hp": 5,
    "stress": 5,
    "majorThreshold": 17,
    "severeThreshold": 34,
    "attackModifier": "+3",
    "attackDescription": "Crashing Wave",
    "attackRange": "Very Close",
    "attackDamage": "3d4+1 mag",
    "experience": null,
    "features": [
      {
        "name": "Water Jet - Action",
        "text": "Mark a Stress to attack a target within Very Close range. On a success, deal 2d4+7 physical damage and the target\u2019s next action has disadvantage. On a failure, the target must mark a Stress."
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
    "description": "A moving mound of translucent green slime.",
    "difficulty": 8,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Camouflage, consume and multiply, creep up, envelop",
    "hp": 5,
    "stress": 2,
    "majorThreshold": 5,
    "severeThreshold": 10,
    "attackModifier": "+1",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "1d6+1 mag",
    "experience": "Camouflage +3",
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Ooze and they don\u2019t have a token on their stat block, they can\u2019t act. Place a token on their stat block and describe what they\u2019re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Acidic Form - Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Envelope - Action",
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
    "description": "Spirit soldiers with sanctified bows.",
    "difficulty": 19,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Focus fire, obey, retribution, volley",
    "hp": 3,
    "stress": 2,
    "majorThreshold": 25,
    "severeThreshold": 45,
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
    "description": "Souls of the faithful, lifted up with divine weaponry.",
    "difficulty": 18,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Obey, outmaneuver, punish, swarm",
    "hp": 1,
    "stress": 2,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "A bustling yet well-kept temple that provides healing and hosts regular services, overseen by a priest or seraph.",
    "difficulty": 13,
    "type": "Social",
    "impulses": "Connect the Mortal Realm with the Hallows Above, display the power of the divine, provide aid and succor to the faithful",
    "potentialAdversaries": "Guards (Archer Guard, Bladed Guard, Head Guard)",
    "features": [
      {
        "name": "A Place of Healing - Passive",
        "text": "A PC who takes a rest in the Hallowed Temple automatically clears all HP.\n\n  *What does the incense smell like? What kinds of songs do the acolytes sing?*"
      },
      {
        "name": "Divine Guidance - Passive",
        "text": "A PC who prays to a deity while in the Hallowed Temple can make an Instinct Roll to receive answers. If the god they beseech isn\u2019t welcome in this temple, roll this made with disadvantage.\n\n  - Critical Success: The PC gains clear information. Additionally, they gain 1d4 Hope, which can be distributed between the party if they share the vision and guidance they received.\n  - Success with Hope: The PC receives clear information.\n  - Success with Fear: The PC receives brief flashes of insight and an emotional impression conveying an answer.\n  - Any Failure: The PC receives only vague flashes. They can mark a Stress to receive one clear image without context.\n\n  *What does it feel like as you are touched by this vision? What feeling lingers after the images have passed?*"
      },
      {
        "name": "Restless Hope - Reaction",
        "text": "Once per scene, each PC can mark a Stress to turn a result with Fear into a result with Hope.\n\n  *What emotions or memories do you connect with when fear presses in?*"
      },
      {
        "name": "Divine Censure - Reaction",
        "text": "When the PCs have trespassed, blasphemed, or offended the clergy, you can spend a Fear to summon a High Seraph and 1d4 Bladed Guards within Close range of the senior priest to reinforce their will.\n\n  *What symbols or icons do they bear that signal they are anointed agents of the divinity? Who leads the group and what led them to this calling?*"
      }
    ]
  },
  {
    "name": "Harrier",
    "originalName": "Harrier",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A nimble fighter armed with javelins.",
    "difficulty": 12,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Flank, harry, kite, profit",
    "hp": 3,
    "stress": 3,
    "majorThreshold": 5,
    "severeThreshold": 9,
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
    "description": "An abandoned city populated by the restless spirits of eras past.",
    "difficulty": 14,
    "type": "Exploration",
    "impulses": "Misdirect and disorient, replay apocalypses both public and personal",
    "potentialAdversaries": "Ghosts (Spectral Archer, Spectral Captain, Spectral Guardian), (ghostly versions of other adversaries (see \u201cGhostly Form\u201d))",
    "features": [
      {
        "name": "Buried Knowledge - Passive",
        "text": "The city has countless mysteries to unfold. A PC who seeks knowledge about the fallen city can make an Instinct or Knowledge Roll to learn about this place and discover (potentially haunted) loot.\n\n  - Critical Success: Gain valuable information and a related useful item.\n  - Success with Hope: Gain valuable information.\n  - Success with Fear: Uncover vague or incomplete information.\n  - Any Failure: Mark a Stress to find a lead after an exhaustive search.\n\n  *What secret secrets does the city contain? Why have so many ghosts lingered here? What doomed adventurers have met a bad fate here already?*"
      },
      {
        "name": "Ghostly Form - Passive",
        "text": "Adversaries who appear here are of a ghostly form. They have resistance to physical damage and can mark a Stress to move up to Close range through solid objects.\n\n  *What injuries to their physical form speak to their cause of death? What unfulfilled purpose holds them in the Mortal Plane?*"
      },
      {
        "name": "Dead Ends - Action",
        "text": "The ghosts of an earlier era manifest scenes from the past, such as a street festival, a city council, or a heist. These hauntings change the layout of the city around the PCs, blocking the way behind them, forcing a detour, or presenting them with a challenge, such as mistaking them for rival thieves during the heist.\n\n  *What do the ghosts want from you? What do you need from them?*"
      },
      {
        "name": "Apocalypse Then - Action",
        "text": "Spend a Fear to manifest the echo of a past disaster that ravaged the city. Activate a Progress Countdown (5) as the disaster replays around the PCs. To complete the countdown and escape the catastrophe, the PCs must overcome threats such as rampaging fires, stampeding civilians, collapsing buildings, or crumbling streets, while recalling history and finding clues to escape the inevitable.\n\n  *Is this the disaster that led the city to be abandoned? What is known about this disaster, and how could that help the PCs escape?*"
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
    ]
  },
  {
    "name": "Head Vampire",
    "originalName": "Head Vampire",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "description": "A captivating undead dressed in aristocratic finery.",
    "difficulty": 17,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Create thralls, charm, command, fly, intimidate",
    "hp": 6,
    "stress": 6,
    "majorThreshold": 22,
    "severeThreshold": 42,
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
        "name": "Look Into My Eyes - Passive",
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
    "description": "A divine champion, head of a hallowed host of warriors who enforce their god\u2019s will.",
    "difficulty": 20,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Enforce dogma, fly, pronounce judgment, smite",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 37,
    "severeThreshold": 70,
    "attackModifier": "+8",
    "attackDescription": "Holy Sword",
    "attackRange": "Very Close",
    "attackDamage": "4d10+10 phy",
    "experience": "Divine Knowledge +3",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "The Seraph can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Divine Flight - Passive",
        "text": "While the Seraph is flying, spend a Fear to move up to Far range instead of Close range before taking an action."
      },
      {
        "name": "Judgment - Action",
        "text": "Spend a Fear to make a target Guilty in the eyes of the Seraph\u2019s god until the Seraph is defeated. While Guilty, the target doesn\u2019t gain Hope on a result with Hope. When the Seraph succeeds on a standard attack against a Guilty target, they deal Severe damage instead of their standard damage. The Seraph can only mark one target at a time."
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
    "description": "A translucent green mound of acid taller than most humans.",
    "difficulty": 15,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Camouflage, creep up, envelop, multiply",
    "hp": 7,
    "stress": 4,
    "majorThreshold": 15,
    "severeThreshold": 30,
    "attackModifier": "+3",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "3d8+1 mag",
    "experience": "Blend In +3",
    "features": [
      {
        "name": "Slow - Passive",
        "text": "When you spotlight the Ooze and they don\u2019t have a token on their stat block, they can\u2019t act yet. Place a token on their stat block and describe what they\u2019re preparing to do. When you spotlight the Ooze and they have a token on their stat block, clear the token and they can act."
      },
      {
        "name": "Acidic Form - Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP."
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
    "description": "A quadrupedal scaled beast with multiple long-necked heads, each filled with menacing fangs.",
    "difficulty": 18,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Devour, regenerate, terrify",
    "hp": 10,
    "stress": 5,
    "majorThreshold": 19,
    "severeThreshold": 35,
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
        "text": "The Hydra can be spotlighted X times per GM turn, where X is the Hydra\u2019s number of heads. Spend Fear as usual to spotlight them."
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
        "text": "When the Hydra takes magic damage, they become Dazed until the next roll with Fear. While Dazed, they can\u2019t use their Regeneration action but are immune to magic damage."
      }
    ]
  },
  {
    "name": "Imperial Court",
    "originalName": "Imperial Court",
    "source": "SRD",
    "tier": 4,
    "category": "Environment",
    "description": "The dazzling mansion of a powerful empire, lavishly appointed with stolen treasures.",
    "difficulty": 20,
    "type": "Social",
    "impulses": "Justify and perpetuate imperial rule, seduce rivals with promises of power and comfort",
    "potentialAdversaries": "Bladed Guard, Courtesan, Knight of the Realm, Monarch, Spy",
    "features": [
      {
        "name": "All Roads Lead Here - Passive",
        "text": "While in the Imperial Court, a PC has disadvantage on Presence Rolls made to take actions that don\u2019t fit the imperial way of life or support the empire\u2019s dominance.\n\n  *How does the way language is used make even discussing alternative ways of living difficult? What obvious benefits for loyalty create friction when you try to discuss alternatives?*"
      },
      {
        "name": "Rival Vassals - Passive",
        "text": "The PCs can find imperial subjects, vassals, and supplicants in the court, each vying for favor, seeking proximity to power, exchanging favors for loyalty, and elevating their status above others. Some might be desperate to undermine their rivals, while others might even be open to discussions that verge on sedition.\n\n  *How do they benefit from vassalage, and what has it cost them? What exploitation drives them to consider opposing the unstoppable?*"
      },
      {
        "name": "The Gravity of Empire - Action",
        "text": "Spend a Fear to present a PC with a golden opportunity or offer to satisfy a major goal in exchange for obeying or supporting the empire. The target must make a Presence Reaction Roll. On a failure, they must mark all their Stress or accept the offer. If they have already marked all their Stress, they must reduce their Stress track by 1d4. On a success, they must mark 1d4 Stress as they\u2019re taxed by temptation.\n\n  *What do the PCs want so desperately they might consider throwing in with this ruthless power? How did imperial agents learn the PC\u2019s greatest desires?*"
      },
      {
        "name": "Imperial Decree - Action",
        "text": "Spend a Fear to tick down a long-term countdown related to the empire\u2019s agenda by 1d4. If this triggers the countdown, a proclamation related to the agenda is announced at court as the plan is executed.\n\n  *What display of power or transfer of wealth was needed to expedite this plan? Whose lives were disrupted or upended to make this happen?*"
      },
      {
        "name": "Eyes Everywhere - Reaction",
        "text": "On a result with Fear, you can spend a Fear to have someone loyal to the empire overhear seditious talk within the court. A PC must succeed on an Instinct Reaction Roll to notice that the group has been overheard so they can try to intercept the witness before the PCs are exposed.\n\n  *How has the empire compromised this witness? Why is their first impulse to protect the empire, even if doesn\u2019t treat them well?*"
      }
    ]
  },
  {
    "name": "Jagged Knife Bandit",
    "originalName": "Jagged Knife Bandit",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A cunning criminal in a cloak bearing one of the gang\u2019s iconic knives.",
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
    ]
  },
  {
    "name": "Jagged Knife Hexer",
    "originalName": "Jagged Knife Hexer",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A staff-wielding bandit in a cloak adorned with magical paraphernalia, using curses to vex their foes.",
    "difficulty": 13,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Command, hex, profit",
    "hp": 4,
    "stress": 4,
    "majorThreshold": 5,
    "severeThreshold": 9,
    "attackModifier": "+2",
    "attackDescription": "Staff",
    "attackRange": "Far",
    "attackDamage": "1d6+2 mag",
    "experience": "Magical Knowledge +2",
    "features": [
      {
        "name": "Curse - Action",
        "text": "Choose a target within Far range and temporarily Curse them. While the target is Cursed, you can mark a Stress so that target rolls with Hope to make the roll be with Fear instead."
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
    "description": "An imposing brawler carrying a large club.",
    "difficulty": 12,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Grapple, intimidate, profit, steal",
    "hp": 7,
    "stress": 4,
    "majorThreshold": 7,
    "severeThreshold": 14,
    "attackModifier": "-3",
    "attackDescription": "Club",
    "attackRange": "Melee",
    "attackDamage": "1d4+6 phy",
    "experience": "Thief +2, Unveiled Threats +3",
    "features": [
      {
        "name": "I\u2019ve Got \u2018Em - Passive",
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
    "description": "A thief with simple clothes and small daggers, eager to prove themselves.",
    "difficulty": 9,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Escape, profit, throw smoke",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "A seasoned bandit in quality leathers with a strong voice and cunning eyes.",
    "difficulty": 13,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Bully, command, profit, reinforce",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 7,
    "severeThreshold": 14,
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
    "description": "A nimble scoundrel bearing a wicked knife and utilizing shadow magic to isolate targets.",
    "difficulty": 12,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Ambush, conceal, divide, profit",
    "hp": 3,
    "stress": 3,
    "majorThreshold": 4,
    "severeThreshold": 8,
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
        "text": "Become Hidden until after the Shadow\u2019s next attack. Attacks made while Hidden from this feature have advantage."
      }
    ]
  },
  {
    "name": "Jagged Knife Sniper",
    "originalName": "Jagged Knife Sniper",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A lanky bandit striking from cover with a shortbow.",
    "difficulty": 13,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Ambush, hide, profit, reposition",
    "hp": 3,
    "stress": 2,
    "majorThreshold": 4,
    "severeThreshold": 7,
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
    "description": "A horse-sized insect with iridescent scales and crystalline wings moving faster than the eye can see.",
    "difficulty": 14,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Collect shiny things, hunt, swoop",
    "hp": 10,
    "stress": 5,
    "majorThreshold": 13,
    "severeThreshold": 26,
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
        "text": "Before the Flickerfly makes an attack, roll a d6. On a result of 4 or higher, the target\u2019s Evasion is halved against this attack."
      },
      {
        "name": "Mind Dance - Action",
        "text": "Mark a Stress to create a magically dazzling display that grapples the minds of nearby foes. All targets within Close range must make an Instinct Reaction Roll. For each target who failed, you gain a Fear and the Flickerfly learns one of the target\u2019s fears."
      },
      {
        "name": "Hallucinatory Breath - Reaction: Countdown (Loop 1d6)",
        "text": "When the Flickerfly takes damage for the first time, activate the countdown. When it triggers, the Flickerfly breathes hallucinatory gas on all targets in front of them up to Far range. Targets must succeed on an Instinct Reaction Roll or be tormented by fearful hallucinations. Targets whose fears are known to the Flickerfly have disadvantage on this roll. Targets who fail must mark a Stress and lose a Hope."
      }
    ]
  },
  {
    "name": "Knight of the Realm",
    "originalName": "Knight of the Realm",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A decorated soldier with heavy armor and a powerful steed.",
    "difficulty": 15,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Run down, seek glory, show dominance",
    "hp": 6,
    "stress": 4,
    "majorThreshold": 13,
    "severeThreshold": 26,
    "attackModifier": "+4",
    "attackDescription": "Longsword",
    "attackRange": "Melee",
    "attackDamage": "2d10+4 phy",
    "experience": "Ancient Knowledge +3, High Society +2, Tactics +2",
    "features": [
      {
        "name": "Chevalier - Passive",
        "text": "While the Knight is on a mount, they gain a +2 bonus to their Difficulty. When they take Severe damage, they\u2019re knocked from their mount and lose this benefit until they\u2019re next spotlighted."
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
    "description": "A legendary beast of the sea, bigger than the largest galleon, with sucker-laden tentacles and a terrifying maw.",
    "difficulty": 20,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Consume, crush, drown, grapple",
    "hp": 11,
    "stress": 8,
    "majorThreshold": 35,
    "severeThreshold": 70,
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
    "description": "A lively tavern that serves as the social hub for its town.",
    "difficulty": 10,
    "type": "Social",
    "impulses": "Provide opportunities for adventurers, nurture community",
    "potentialAdversaries": "Guards (Bladed Guard, Head Guard), Mercenaries (Harrier, Sellsword, Spellblade, Weaponmaster), Merchant",
    "features": [
      {
        "name": "What\u2019s the Talk of the Town? - Passive",
        "text": "A PC can ask the bartender, staff, or patrons about local events, rumors, and potential work with a Presence Roll. On a success, they can pick two of the below details to learn\u2014or three if they critically succeed. On a failure, they can pick one and mark a Stress as the local carries on about something irrelevant.\n\n  - A fascinating rumor with a connection to a PC\u2019s background\n  - A promising job for the party involving a nearby threat or situation\n  - Local folklore that relates to something they\u2019ve seen\n  - Town gossip that hints at a community problem\n\n  *Who has what kind of information? What gossip do the locals start spreading about the PCs?*"
      },
      {
        "name": "Sing for Your Supper - Passive",
        "text": "A PC can perform one time for the guests by making a Presence Roll. On a success, they earn 1d4 handfuls of gold (2d4 if they critically succeed). On a failure, they mark a Stress.\n\n  *What piece do you perform? What does that piece mean to you? When\u2019s the last time you performed it for a crowd?*"
      },
      {
        "name": "Mysterious Stranger - Action",
        "text": "Reveal a stranger concealing their identity, lurking in a shaded booth.\n\n  *What do they want? What\u2019s their impression of the PCs? What mannerisms or accessories do they have?*"
      },
      {
        "name": "Someone Comes to Town - Action",
        "text": "Introduce a significant NPC who wants to hire the party for something or who relates to a PC\u2019s background.\n\n  *Did they know the PCs were here? What do they want in this town?*"
      },
      {
        "name": "Bar Fight - Action",
        "text": "Spend a Fear to have a bar fight erupt in the tavern. When a PC tries to move through the tavern while the fight persists, they must succeed on an Agility or Presence Roll or take 1d6+2 physical damage from a wild swing or thrown object. A PC can try to activate this feature by succeeding on an action roll that would provoke tavern patrons.\n\n  *Who started the fight? What will it take to stop it?*"
      }
    ]
  },
  {
    "name": "Masked Thief",
    "originalName": "Masked Thief",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A cunning thief with acrobatic skill and a flair for the dramatic.",
    "difficulty": 14,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Evade, hide, pilfer, profit",
    "hp": 4,
    "stress": 5,
    "majorThreshold": 8,
    "severeThreshold": 17,
    "attackModifier": "+3",
    "attackDescription": "Backsword",
    "attackRange": "Melee",
    "attackDamage": "2d8+3 phy",
    "experience": "Acrobatics +3",
    "features": [
      {
        "name": "Quick Hands - Action",
        "text": "Make an attack against a target within Melee range. On a success, deal 1d8+2 physical damage and the Thief steals one item or consumable from the target\u2019s inventory."
      },
      {
        "name": "Escape Plan - Action",
        "text": "Mark a Stress to reveal a snare trap set anywhere on the battlefield by the Thief. All targets within Very Close range of the trap must succeed on an Agility Reaction Roll (13) or be pulled off their feet and suspended upside down. The target is Restrained and Vulnerable until they break free, ending both conditions, with a successful Finesse or Strength Roll (13)."
      }
    ]
  },
  {
    "name": "Master Assassin",
    "originalName": "Master Assassin",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A seasoned killer with a threatening voice and a deadly blade.",
    "difficulty": 15,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Ambush, get out alive, kill, prepare for all scenarios",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 12,
    "severeThreshold": 25,
    "attackModifier": "+5",
    "attackDescription": "Serrated Dagger",
    "attackRange": "Close",
    "attackDamage": "2d10+2 phy",
    "experience": "Command +3, Intrusion +3",
    "features": [
      {
        "name": "Won\u2019t See It Coming - Passive",
        "text": "The Assassin deals direct damage while they\u2019re Hidden."
      },
      {
        "name": "Strike as One - Action",
        "text": "Mark a Stress to spotlight a number of other Assassins equal to the Assassin\u2019s unmarked Stress."
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
    ]
  },
  {
    "name": "Merchant Baron",
    "originalName": "Merchant Baron",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "An accomplished merchant with a large operation under their command.",
    "difficulty": 15,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Abusive power, gather resources, mobilize minions",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 9,
    "severeThreshold": 19,
    "attackModifier": "+2",
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
        "text": "Once per scene, mark a Stress to summon 1d4+1 Tier 1 adversaries, who appear at Far range, to enforce the Baron\u2019s will."
      }
    ]
  },
  {
    "name": "Minor Chaos Elemental",
    "originalName": "Minor Chaos Elemental",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A coruscating mass of uncontrollable magic.",
    "difficulty": 14,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Confound, destabilize, transmogrify",
    "hp": 7,
    "stress": 3,
    "majorThreshold": 7,
    "severeThreshold": 14,
    "attackModifier": "+3",
    "attackDescription": "Warp Blast",
    "attackRange": "Close",
    "attackDamage": "1d12+6 mag",
    "experience": null,
    "features": [
      {
        "name": "Arcane Master - Passive",
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
        "text": "When the Elemental takes damage from an attack within Close range, deal an amount of damage to the attacker equal to half of the damage they dealt."
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
    "description": "A crimson-hued creature from the Circles Below, consumed by rage against all mortals.",
    "difficulty": 14,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Act erratically, corral targets, relish pain, torment",
    "hp": 8,
    "stress": 4,
    "majorThreshold": 8,
    "severeThreshold": 15,
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
        "text": "Before rolling damage for the Demon\u2019s attack, you can mark a Stress to gain a bonus to the damage roll equal to the Demon\u2019s current number of marked HP."
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
    "description": "A living flame the size of a large bonfire.",
    "difficulty": 13,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Encircle enemies, grow in size, intimidate, start fires",
    "hp": 9,
    "stress": 3,
    "majorThreshold": 7,
    "severeThreshold": 15,
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
        "text": "Three times per scene, when the Elemental moves on objects that are highly flammable, consume them to clear a HP or a Stress."
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
    "description": "An ambulatory sapling rising up to defend their forest.",
    "difficulty": 10,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Crush, overwhelm, protect",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
    "attackModifier": "-2",
    "attackDescription": "Cleaved Branch",
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
    "description": "A massive bull-headed hybrid with a quick temper.",
    "difficulty": 16,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Consume, gore, navigate, overpower, pursue",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 14,
    "severeThreshold": 27,
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
        "text": "Mark a Stress to charge through a group within Close range and make an attack against all targets in the Minotaur\u2019s path. Targets the Minotaur succeeds against take 2d6+8 physical damage and are knocked back to Very Far range. If a target is knocked into a solid object or another creature, they take an extra 1d6 damage (combine their damage)."
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
    "description": "The sovereign ruler of a nation, unearthed in the privilege of tradition and wielding unmatched power in their domain.",
    "difficulty": 16,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Control vassals, destroy rivals, forge a legacy",
    "hp": 6,
    "stress": 5,
    "majorThreshold": 16,
    "severeThreshold": 32,
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
        "name": "Crossguard - Action",
        "text": "Once per scene, mark a Stress to summon Tier X Minions, who appear at Close range to enforce the Monarch\u2019s will."
      },
      {
        "name": "Census Bell - Reaction: Long-Term Countdown (8)",
        "text": "Spend a Fear to activate after the Monarch\u2019s desire for war is first revealed. When it triggers, the Monarch has a reason to rally the nation to war and the support to act on that reason. You gain 1d4 Fear."
      }
    ]
  },
  {
    "name": "Mortal Hunter",
    "originalName": "Mortal Hunter",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "An undead figure wearing a heavy leather coat, with searching eyes and a cruelly cut demeanor.",
    "difficulty": 16,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Devour, hunt, track",
    "hp": 6,
    "stress": 4,
    "majorThreshold": 15,
    "severeThreshold": 27,
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
    "description": "Stony peaks that pierce the clouds, with a twisting path winding its way up and over through many switchbacks.",
    "difficulty": 15,
    "type": "Traversal",
    "impulses": "Exact a chilling toll in supplies and stamina, reveal magical slumber, slow down travel",
    "potentialAdversaries": "Beasts (Bear, Giant Eagle, Glass Snake), Chaos Skull, Minotaur Wrecker, Mortal Hunter",
    "features": [
      {
        "name": "Engraved Sigils - Passive",
        "text": "Large markings and engravings have been made in the mountainside. A PC with a relevant background or Experience identifies them as weather magic increasing the power of the icy winds. A PC who succeeds on a Knowledge Roll can recall information about the sigils, potential information about their creators, and the knowledge of how to dispel them. If a PC critically succeeds, they recognize that the sigils are of a style created by highborne enchanters and they gain advantage on a roll to dispel the sigils.\n\n  *Who laid this enchantment? Are they nearby? Why did they want the weather to be more daunting?*"
      },
      {
        "name": "Avalanche - Action",
        "text": "Spend a Fear to carve the mountain with an icy torrent, causing an avalanche. All PCs in its path must succeed on an Agility or Strength Reaction Roll or be bowled over and carried down the mountain. A PC using rope, pitons, or other climbing gear gains advantage on this roll. Targets who fail are knocked down the mountain to Far range, take 2d20 physical damage, and must mark a Stress. Targets who succeed must mark a Stress.\n\n  *How do the PCs try to weather the avalanche? What approach do they take to avoid being buried or hurtling down the mountainside?*"
      },
      {
        "name": "Raptor Nest - Reaction",
        "text": "When the PCs enter the raptors\u2019 hunting grounds, two Giant Eagles appear at Very Far range of a chosen PC, identifying the PCs as likely prey.\n\n  *How long has it been since the eagles last found prey? Do they have eggs in their nest, or unfledged young?*"
      },
      {
        "name": "Icy Winds - Reaction",
        "text": "Countdown (Loop 4). When the PCs enter the mountain pass, activate the countdown. When it triggers, all characters traveling through the pass must succeed on a Strength Reaction Roll or mark a Stress. A PC wearing clothes appropriate for extreme cold gains advantage on these rolls.\n\n  *What parts of the PCs\u2019 bodies go numb first? How do they try to keep warm as they press forward?*"
      }
    ]
  },
  {
    "name": "Necromancer\u2019s Ossuary",
    "originalName": "Necromancer\u2019s Ossuary",
    "source": "SRD",
    "tier": 4,
    "category": "Environment",
    "description": "A dusty crypt with a library, twisting corridors, and abundant sarcophagi; spattered with the blood of ill-fated invaders.",
    "difficulty": 19,
    "type": "Exploration",
    "impulses": "Confound intruders, delve into secrets best left buried, manifest unlife, unleash a tide of undead",
    "potentialAdversaries": "Arch-Necromancer\u2019s Host (Perfected Zombie, Zombie Legion)",
    "features": [
      {
        "name": "No Place for the Living - Passive",
        "text": "A feature or action that clears HP requires spending a Hope to use. If it already costs Hope, a PC must spend an additional Hope.\n\n  *What does it feel like to try to heal in a place so antithetical to life?*"
      },
      {
        "name": "Centuries of Knowledge - Passive",
        "text": "A PC can investigate the library and laboratory and make a Knowledge Roll to learn information related to arcana, local history, and the Necromancer\u2019s plans.\n\n  *What are the names of the tomes? What project is the necromancer working on and what does it communicate about their plans?*"
      },
      {
        "name": "Skeletal Burst - Action",
        "text": "All targets within Close range of a point you choose in this environment must succeed on an Agility Reaction Roll or take 4d8+8 physical damage from bone shrapnel as part of the ossuary detonates around them.\n\n  *What ancient skeletal architecture is destroyed? What bones stick in your armor?*"
      },
      {
        "name": "Aura of Death - Action",
        "text": "Once per scene, roll a d4. Each undead within Far range of the Necromancer can clear HP and Stress equal to the result rolled. The undead can choose how that total number is divided between HP and Stress.\n\n  *How does the power manifest? Do the undead look more lifelike or, paradoxically, are they more decayed but vigorous?*"
      },
      {
        "name": "They Just Keep Coming! - Action",
        "text": "Spend a Fear to summon 1d6 Rotted Zombies, two Perfected Zombies, or a Zombie Legion, who appear at Close range of a chosen PC.\n\n  *Who were these people before they became the necromancer\u2019s pawns? What vestiges of those lives remain for the heroes to see?*"
      }
    ]
  },
  {
    "name": "Oak Treant",
    "originalName": "Oak Treant",
    "source": "SRD",
    "tier": 3,
    "category": "Adversary",
    "description": "A sturdy animated old-growth tree.",
    "difficulty": 17,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Hide in plain sight, preserve the forest, root down, swing branches",
    "hp": 7,
    "stress": 4,
    "majorThreshold": 22,
    "severeThreshold": 40,
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
    "description": "A towering immortal and incarnation of fate, cursed to only see bad outcomes.",
    "difficulty": 20,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Change environment, condemn, dishearten, toss aside",
    "hp": 11,
    "stress": 10,
    "majorThreshold": 38,
    "severeThreshold": 68,
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
        "text": "Spend a Fear to present a target within Far range with a vision of their personal nightmare. The target must make a Knowledge Reaction Roll. On a failure, they lose all Hope and take 2d10+4 direct magic damage. On a success, they take half damage and lose a Hope."
      },
      {
        "name": "Summon Tormentors - Action",
        "text": "Once per day, spend 2 Fear to summon 2d4 Tier 2 or below Minions relevant to one of the PC\u2019s personal nightmares. They appear at Close range relative to that PC."
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
    "description": "A chaotic mockery of life, constantly in flux.",
    "difficulty": 19,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Confuse, demolish, devour, undermine",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 35,
    "severeThreshold": 71,
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
        "name": "Fungal Form - Reaction",
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
    "description": "A shifting, formless mass seemingly made of chromatic light.",
    "difficulty": 19,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Confuse, distract, overwhelm",
    "hp": 4,
    "stress": 3,
    "majorThreshold": 27,
    "severeThreshold": 47,
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
    "description": "A vaguely humanoid form stripped of memory and identity.",
    "difficulty": 17,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Destroy, disgust, disorient, intimidate",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "A small town on the outskirts of a nation or region, close to a dungeon, tombs, or other adventuring destinations.",
    "difficulty": 12,
    "type": "Social",
    "impulses": "Drive the desperate to certain doom, profit off of ragged hope",
    "potentialAdversaries": "Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper), Masked Thief, Merchant",
    "features": [
      {
        "name": "Rumors Abound - Passive",
        "text": "Gossip is the fastest-traveling currency in the realm. A PC can inquire about major events by making a Presence Roll. What they learn depends on the outcome of their roll, based on the following criteria:\n\n  - Critical Success: Learn about two major events. The PC can ask one follow-up question about one of the rumors and get a truthful (if not always complete) answer.\n  - Success with Hope: Learn about two events, at least one of which is relevant to the character\u2019s background.\n  - Success with Fear: Learn an alarming rumor related to the character\u2019s background.\n  - Any Failure: The locals respond poorly to their inquiries. The PC must mark a Stress to learn one relevant rumor.\n\n  *What news do the PCs hear that they could pass along to curious travelers? What do the locals think about these events?*"
      },
      {
        "name": "Society of the Broken Compass - Passive",
        "text": "An adventuring society maintains a chapterhouse here, where heroes meet to exchange news and rumors, drink to their imagined successes, and scheme to undermine their rivals.\n\n  *What boasts do the adventurers here make, and which do you think are true?*"
      },
      {
        "name": "Rival Party - Passive",
        "text": "Another adventuring party is here, seeking the same treasure or leads as the PCs.\n\n  *Which PC has a connection to one of the rival party members? Do they approach the PC first or do they wait for the PC to move?*"
      },
      {
        "name": "It\u2019d Be a Shame If Something Happened to Your Store - Action",
        "text": "The PCs witness as agents of a local crime boss shake down a general goods store.\n\n  *What trouble does it cause if the PCs intervene?*"
      },
      {
        "name": "Wrong Place, Wrong Time - Reaction",
        "text": "At night, or when the party is alone in a back alley, you can spend a Fear to introduce a group of thieves who try to rob them. The thieves appear at Close range of a chosen PC and include a Jagged Knife Kneebreaker, as many Lackeys as there are PCs, and a Lieutenant. For a larger party, add 2 Hexer or Sniper.\n\n  *What details show the party that these people are desperate former adventurers?*"
      }
    ]
  },
  {
    "name": "Patchwork Zombie Hulk",
    "originalName": "Patchwork Zombie Hulk",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A towering gestalt of corpses moving as one, with torso-sized limbs and fists as large as a grown halfling.",
    "difficulty": 13,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Absorb corpses, flail, hunger, terrify",
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
    ]
  },
  {
    "name": "Perfected Zombie",
    "originalName": "Perfected Zombie",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "description": "A towering, muscular zombie with magically infused strength and skill.",
    "difficulty": 20,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Consume, hound, maim, terrify",
    "hp": 9,
    "stress": 4,
    "majorThreshold": 40,
    "severeThreshold": 70,
    "attackModifier": "+4",
    "attackDescription": "Greataxe",
    "attackRange": "Very Close",
    "attackDamage": "4d12+15 phy",
    "experience": null,
    "features": [
      {
        "name": "Terrifying - Passive",
        "text": "On successful attack, all PCs in Far range lose Hope and you gain Fear."
      },
      {
        "name": "Fearsome Presence - Passive",
        "text": "PCs can\u2019t spend Hope to use features against the Zombie."
      },
      {
        "name": "Perfect Strike - Action",
        "text": "Mark a Stress to attack all targets within Very Close range; on success, targets are Vulnerable until next rest."
      },
      {
        "name": "Skilled Opportunist - Reaction",
        "text": "When another adversary deals damage to target within Very Close range of Zombie, spend a Fear to add Zombie's standard attack damage to the damage roll."
      }
    ]
  },
  {
    "name": "Petty Noble",
    "originalName": "Petty Noble",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A richly dressed and adorned aristocrat brimming with hubris.",
    "difficulty": 14,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Abuse power, gather resources, mobilize minions",
    "hp": 3,
    "stress": 5,
    "majorThreshold": 6,
    "severeThreshold": 10,
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
        "text": "Once per scene, mark a Stress to summon 1d4 Bladed Guards, who appear at Far range to enforce the Noble\u2019s will."
      },
      {
        "name": "Exile - Action",
        "text": "Spend a Fear and target a PC. The Noble proclaims that the target and their allies are exiled from the noble\u2019s territory. While exiled, the target and their allies have disadvantage during social situations within the Noble\u2019s domain."
      }
    ]
  },
  {
    "name": "Pirate Captain",
    "originalName": "Pirate Captain",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A charismatic sea dog with an impressive hat, eager to raid and plunder.",
    "difficulty": 14,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Command, make 'em walk the plank, plunder, raid",
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
    ]
  },
  {
    "name": "Pirate Raiders",
    "originalName": "Pirate Raiders",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "Seafaring scoundrels moving in a ravaging pack.",
    "difficulty": 12,
    "type": "Horde",
    "countPerHp": 3,
    "motivesAndTactics": "Gang up, plunder, overwhelm",
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
    ]
  },
  {
    "name": "Pirate Tough",
    "originalName": "Pirate Tough",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A thickly muscled and tattooed pirate with melon-sized fists.",
    "difficulty": 13,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Plunder, raid, smash, terrorize",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 15,
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
    "description": "A massive combat between two large groups of armed combatants.",
    "difficulty": 17,
    "type": "Event",
    "impulses": "Seize people, land, and wealth, spill blood for greed and glory",
    "potentialAdversaries": "Mercenaries (Sellsword, Harrier, Spellblade, Weaponmaster), Noble Forces (Archer Squadron, Conscript, Elite Soldier, Knight of the Realm)",
    "features": [
      {
        "name": "Adrift on a Sea of Steel - Passive",
        "text": "Traversing a battlefield during an active combat is extremely dangerous. A PC must succeed on an Agility Roll to move at all, and can only go up to Close range on a success. If an adversary is within Melee range of them, they must mark a Stress to make an Agility Roll to move.\n\n  *Do the combatants mistake you for the enemy or consider you interlopers? Can you tell the difference between friend and foe in the fray?*"
      },
      {
        "name": "Raze and Pillage - Action",
        "text": "The attacking force raises the stakes by lighting a fire, stealing a valuable asset, kidnapping an important person, or killing the populace.\n\n  *What is valuable here? Who is most vulnerable?*"
      },
      {
        "name": "War Magic - Action",
        "text": "Spend a Fear as a mage from one side uses large-scale destructive magic. Pick a point on the battlefield within Very Far range of the mage. All targets within Close range of that point must make an Agility Reaction Roll. Targets who fail take 3d12+8 magic damage and must mark a Stress.\n\n  *What form does the attack take\u2014fireball, raining acid, a storm of blades? What tactical objective is this attack meant to accomplish, and what comes next?*"
      },
      {
        "name": "Reinforcements - Action",
        "text": "Summon a Knight of the Realm, a number of Tier 3 Minions equal to the number of PCs, and two adversaries of your choice within Far range of a chosen PC as reinforcements. The Knight of the Realm immediately takes the spotlight.\n\n  *Who are they targeting first? What formation do they take?*"
      }
    ]
  },
  {
    "name": "Raging River",
    "originalName": "Raging River",
    "source": "SRD",
    "tier": 1,
    "category": "Environment",
    "description": "A swift-moving river without a bridge crossing, deep enough to sweep away most people.",
    "difficulty": 10,
    "type": "Traversal",
    "impulses": "Bar crossing, carry away the unready, divide the land",
    "potentialAdversaries": "Beasts (Bear, Glass Snake), Jagged Knife Bandits (Hexer, Kneebreaker, Lackey, Lieutenant, Shadow, Sniper)",
    "features": [
      {
        "name": "Dangerous Crossing - Passive",
        "text": "Crossing the river requires the party to complete a Progress Countdown (4). A PC who rolls a failure with Fear is immediately targeted by the \u201cUndertow\u201d action without requiring a Fear to be spent on the feature.\n\n  *Have any of the PCs forded rivers like this before? Are any of them afraid of drowning?*"
      },
      {
        "name": "Undertow - Action",
        "text": "Spend a Fear to catch a PC in the undertow. They must make an Agility Reaction Roll. On a failure, they take 1d6+1 physical damage and are moved a Close distance down the river, becoming Vulnerable until they get out of the river. On a success, they must mark a Stress.\n\n  *What trinkets and baubles lie along the bottom of the riverbed? Do predators swim these rivers?*"
      },
      {
        "name": "Patient Hunter - Action",
        "text": "Spend a Fear to summon a Glass Snake within Close range of a chosen PC. The Snake appears in or near the river and immediately takes the spotlight to use their \u201cSpinning Serpent\u201d action.\n\n  *What treasures does the beast have in their burrow? What travelers have already fallen victim to this predator?*"
      }
    ]
  },
  {
    "name": "Red Ooze",
    "originalName": "Red Ooze",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A moving mound of translucent flaming red slime.",
    "difficulty": 10,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Camouflage, consume and multiply, ignite, start fires",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 6,
    "severeThreshold": 11,
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
        "text": "Make an attack against a target within Very Close range. On a success, the target takes 1d8 magic damage and is ignited until they\u2019re extinguished with a successful Finesse Roll (14). While ignited, the target takes 1d4 magic damage when they make an action roll."
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
    "description": "A decaying corpse ambling toward their prey.",
    "difficulty": 8,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Eat flesh, hunger, maul, surround",
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
    ]
  },
  {
    "name": "Royal Advisor",
    "originalName": "Royal Advisor",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A high-ranking courtier with the ear of the local nobility.",
    "difficulty": 14,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Curry favor, manufacture evidence, scheme",
    "hp": 3,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 15,
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
        "text": "Mark a Stress to influence an NPC within Melee range with whispered words. That target\u2019s opinion on one matter shifts toward the Advisor\u2019s preference unless it is in direct opposition to the target\u2019s motives."
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
    "description": "A clandestine leader with a direct channel to the Fallen Gods.",
    "difficulty": 16,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Amass great power, plot, take command",
    "hp": 7,
    "stress": 4,
    "majorThreshold": 13,
    "severeThreshold": 26,
    "attackModifier": "+3",
    "attackDescription": "Sigil-Laden Staff",
    "attackRange": "Far",
    "attackDamage": "2d12 mag",
    "experience": "Coercion +2, Fallen Lore +2",
    "features": [
      {
        "name": "Seize Your Moment - Action",
        "text": "Spend 2 Fear to spotlight 1d4 allies. Attacks they make while spotlighted in this way deal half damage."
      },
      {
        "name": "Our Master\u2019s Will - Reaction",
        "text": "When you spotlight an ally within Far range, mark a Stress to gain a Fear."
      },
      {
        "name": "Summoning Ritual - Reaction",
        "text": "Countdown (6). When the Secret-Keeper is in the spotlight for the first time, activate the countdown. When they mark HP, tick down this countdown by the number of HP marked. When it triggers, summon a Minor Demon who appears at Close range."
      },
      {
        "name": "Fallen Hounds - Reaction",
        "text": "Once per scene, when the Secret-Keeper marks 2 or more HP, you can mark a Stress to summon a Demonic Hound Pack, which appears at Close range and is immediately spotlighted."
      }
    ]
  },
  {
    "name": "Sellsword",
    "originalName": "Sellsword",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "An armed mercenary testing their luck.",
    "difficulty": 10,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Charge, lacerate, overwhelm, profit",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "An animated corpse that moves shakily, driven only by hunger.",
    "difficulty": 10,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Devour, hungry, mob enemy, shred flesh",
    "hp": 4,
    "stress": 1,
    "majorThreshold": 4,
    "severeThreshold": 6,
    "attackModifier": "0",
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
        "text": "Targets who mark HP from the Zombie\u2019s attacks must also mark a Stress."
      }
    ]
  },
  {
    "name": "Shark",
    "originalName": "Shark",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A large aquatic predator, always on the move.",
    "difficulty": 14,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Find the blood, isolate prey, target the weak",
    "hp": 7,
    "stress": 3,
    "majorThreshold": 14,
    "severeThreshold": 28,
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
        "text": "When the Shark makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP."
      },
      {
        "name": "Blood in the Water - Reaction",
        "text": "When a creature within Close range of the Shark marks HP from another creature\u2019s attack, you can mark a Stress to immediately spotlight the Shark, moving them into Melee range of the target and making a standard attack."
      }
    ]
  },
  {
    "name": "Siren",
    "originalName": "Siren",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A half fish person with shimmering scales and an irresistible voice.",
    "difficulty": 14,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Consume, lure prey, subdue with song",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 9,
    "severeThreshold": 18,
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
        "text": "Spend a Fear to sing a song that affects all targets within Close range. Targets must succeed on an Instinct Reaction Roll or become Entranced until they mark 2 Stress. Other Sirens within Close range of the target can mark a Stress to each add a +1 bonus to the Difficulty of the reaction roll. While Entranced, a target can\u2019t act and is Vulnerable."
      }
    ]
  },
  {
    "name": "Skeleton Archer",
    "originalName": "Skeleton Archer",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A fragile skeleton with a shortbow and arrows.",
    "difficulty": 9,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Perforate distracted targets, play dead, steal skin",
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
    ]
  },
  {
    "name": "Skeleton Dredge",
    "originalName": "Skeleton Dredge",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A clattering pile of bones.",
    "difficulty": 8,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Fall apart, overwhelm, play dead, steal skin",
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
    ]
  },
  {
    "name": "Skeleton Knight",
    "originalName": "Skeleton Knight",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A large armored skeleton with a huge blade.",
    "difficulty": 13,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Cut down the living, steal skin, wreak havoc",
    "hp": 5,
    "stress": 2,
    "majorThreshold": 7,
    "severeThreshold": 13,
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
        "text": "When the Knight is defeated, they make an attack against a target within Very Close range (prioritizing the creature who killed them). On a success, the target takes 1d8+4 physical damage and loses 1d4 Hope."
      }
    ]
  },
  {
    "name": "Skeleton Warrior",
    "originalName": "Skeleton Warrior",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A dirt-covered skeleton armed with a rusted blade.",
    "difficulty": 10,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Feign death, gang up, steal skin",
    "hp": 3,
    "stress": 2,
    "majorThreshold": 4,
    "severeThreshold": 8,
    "attackModifier": "0",
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
        "name": "Reform - Reaction",
        "text": "When the Warrior is defeated, roll a d6. On a result of 6, if there are other adversaries on the battlefield, the Warrior re-forms with no marked HP."
      }
    ]
  },
  {
    "name": "Spectral Archer",
    "originalName": "Spectral Archer",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A ghostly fighter with an ethereal bow, unable to move on while their charge is vulnerable.",
    "difficulty": 13,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Move through solid objects, stay out of the fray, rehash old battles",
    "hp": 3,
    "stress": 3,
    "majorThreshold": 6,
    "severeThreshold": 14,
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
        "text": "Spend a Fear to make an attack against a target within Very Close range of at least two other PCs. On a success, the target takes 2d8+12 physical damage."
      }
    ]
  },
  {
    "name": "Spectral Captain",
    "originalName": "Spectral Captain",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A ghostly commander leading their troops beyond death.",
    "difficulty": 16,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Move through solid objects, rally troops, rehash old battles",
    "hp": 6,
    "stress": 4,
    "majorThreshold": 13,
    "severeThreshold": 26,
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
        "text": "When the Captain\u2019s Spectral allies are forced to make a reaction roll, you can mark a Stress to give those allies a +2 bonus to the roll."
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
    "description": "A ghostly fighter with spears and swords, anchored by duty.",
    "difficulty": 15,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Move through solid objects, protect treasure, rehash old battles",
    "hp": 4,
    "stress": 3,
    "majorThreshold": 7,
    "severeThreshold": 15,
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
    "description": "A mercenary combining swordplay and magic to deadly effect.",
    "difficulty": 14,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Blast, command, endure",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 14,
    "attackModifier": "+3",
    "attackDescription": "Empowered Longsword",
    "attackRange": "Melee",
    "attackDamage": "1d8+4 phy/mag",
    "experience": "Magical Knowledge +2",
    "features": [
      {
        "name": "Arcane Steel - Passive",
        "text": "Damage dealt by the Spellblade\u2019s standard attack is considered both physical and magic."
      },
      {
        "name": "Suppressing Blast - Action",
        "text": "Mark a Stress and target a group within Far range. All targets must succeed on an Agility Reaction Roll or take 1d8+2 magic damage. You gain a Fear for each target who marked HP from this attack."
      },
      {
        "name": "Move as Unit - Action",
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
    "description": "A skilled espionage agent with a knack for being in the right place to overhear secrets.",
    "difficulty": 15,
    "type": "Social",
    "countPerHp": 1,
    "motivesAndTactics": "Cut and run, disguise appearance, eavesdrop",
    "hp": 4,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 17,
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
    "description": "A knight with huge, majestic antlers wearing armor made of dangerous thorns.",
    "difficulty": 17,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Isolate, maneuver, protect the forest, weed the unwelcome",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 19,
    "severeThreshold": 36,
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
    "description": "A prowling hunter, like a slinking mountain lion, with a slate-gray stone body.",
    "difficulty": 13,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Defend territory, isolate prey, stalk",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 11,
    "severeThreshold": 22,
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
    "description": "A skittering mass of ordinary rodents moving as one like a ravenous wave.",
    "difficulty": 10,
    "type": "Horde",
    "countPerHp": 10,
    "motivesAndTactics": "Consume, obscure, swarm",
    "hp": 6,
    "stress": 2,
    "majorThreshold": 6,
    "severeThreshold": 10,
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
    "description": "A faerie warrior adorned in armor made of leaves and bark.",
    "difficulty": 11,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Ambush, hide, overwhelm, protect, trail",
    "hp": 4,
    "stress": 2,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "attackModifier": "0",
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
        "text": "When the Soldier makes a successful attack, you can mark a Stress to become Hidden until the Soldier\u2019s next attack or a PC succeeds on an Instinct Roll (14) to find them."
      }
    ]
  },
  {
    "name": "Tangle Bramble",
    "originalName": "Tangle Bramble",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "An animate, blood-drinking tumbleweed.",
    "difficulty": 11,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Consume, drain, entangle",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
        "text": "When an attack from the Bramble causes a target to mark HP and there are three or more Tangle Bramble Minions within Close range, you can combine the Minions into a Tangle Bramble Swarm Horde. The Horde\u2019s HP is equal to the number of Minions combined."
      }
    ]
  },
  {
    "name": "Tangle Bramble Swarm",
    "originalName": "Tangle Bramble Swarm",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A cluster of animated, blood-drinking tumbleweeds, each the size of a large gourd.",
    "difficulty": 12,
    "type": "Horde",
    "countPerHp": 3,
    "motivesAndTactics": "Digest, entangle, immobilize",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "attackModifier": "0",
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
    "description": "A small moving mound of translucent green slime.",
    "difficulty": 14,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Camouflage, creep up",
    "hp": 2,
    "stress": 1,
    "majorThreshold": 4,
    "severeThreshold": null,
    "attackModifier": "-1",
    "attackDescription": "Ooze Appendage",
    "attackRange": "Melee",
    "attackDamage": "1d4+1 mag",
    "experience": null,
    "features": [
      {
        "name": "Acidic Form - Passive",
        "text": "When the Ooze makes a successful attack, the target must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can\u2019t mark an Armor Slot, they must mark an additional HP."
      }
    ]
  },
  {
    "name": "Tiny Red Ooze",
    "originalName": "Tiny Red Ooze",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A small moving mound of translucent flaming red slime.",
    "difficulty": 11,
    "type": "Skulk",
    "countPerHp": 1,
    "motivesAndTactics": "Blaze, camouflage",
    "hp": 2,
    "stress": 1,
    "majorThreshold": 5,
    "severeThreshold": null,
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
    "description": "A small, sentient tree sapling.",
    "difficulty": 14,
    "type": "Minion",
    "countPerHp": 1,
    "motivesAndTactics": "Blend in, preserve the forest, pummel, surround",
    "hp": 1,
    "stress": 1,
    "majorThreshold": null,
    "severeThreshold": null,
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
    "description": "An intelligent undead with blood-stained lips and a predator\u2019s smile.",
    "difficulty": 16,
    "type": "Standard",
    "countPerHp": 1,
    "motivesAndTactics": "Bite, charm, deceive, feed, intimidate",
    "hp": 5,
    "stress": 4,
    "majorThreshold": 18,
    "severeThreshold": 35,
    "attackModifier": "+3",
    "attackDescription": "Rapier",
    "attackRange": "Melee",
    "attackDamage": "3d8 phy",
    "experience": "Nocturnal Hunter +3",
    "features": [
      {
        "name": "Draining Bite - Action",
        "text": "Make an attack against a target within Melee range. On a success, deal 4d physical damage. A target who marks HP from this attack loses a Hope and must mark a Stress. The Vampire then clears a HP."
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
    "description": "A boxy, dust-covered construct with thick metallic swinging doors on their torso.",
    "difficulty": 16,
    "type": "Support",
    "countPerHp": 1,
    "motivesAndTactics": "Carry away, entrap, protect, pummel",
    "hp": 5,
    "stress": 3,
    "majorThreshold": 19,
    "severeThreshold": 33,
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
    "description": "A dust-covered golden construct with boxy limbs and a huge mace for a hand.",
    "difficulty": 17,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Destroy at any cost, expunge, protect",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 21,
    "severeThreshold": 40,
    "attackModifier": "+3",
    "attackDescription": "Charged Mace",
    "attackRange": "Very Close",
    "attackDamage": "2d12+1 phy",
    "experience": null,
    "features": [
      {
        "name": "Kinetic Slam - Passive",
        "text": "Targets who take damage from the Sentinel\u2019s standard attack are knocked back to Very Close range."
      },
      {
        "name": "Box In - Action",
        "text": "Mark a Stress to choose a target within Very Close range to focus on. That target has disadvantage on attack rolls when they\u2019re within Very Close range of the Sentinel. The Sentinel can only focus on one target at a time."
      },
      {
        "name": "Mana Bolt - Action",
        "text": "Spend a Fear to lob explosive magic at a point within Far range. All targets within Very Close range of that point must make an Agility Reaction Roll. Targets who fail take 8d20 magic damage and are knocked back to Close range. Targets who succeed take half damage and aren\u2019t knocked back."
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
    "description": "A massive hulking turret with reinforced armor and twelve piston-driven mechanical legs.",
    "difficulty": 16,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Concentrate fire, lock down, mark, protect",
    "hp": 5,
    "stress": 4,
    "majorThreshold": 20,
    "severeThreshold": 32,
    "attackModifier": "+3",
    "attackDescription": "Magitech Cannon",
    "attackRange": "Far",
    "attackDamage": "3d10+3 mag",
    "experience": null,
    "features": [
      {
        "name": "Slow Firing - Passive",
        "text": "When you spotlight the Turret and they don\u2019t have a token on their stat block, they can\u2019t make a standard attack. Place a token on their stat block and describe what they\u2019re preparing to do. When you spotlight the Turret and they have a token on their stat block, clear the token and they can attack."
      },
      {
        "name": "Mark Target - Action",
        "text": "Spend a Fear to Mark a target within Far range until the Turret is destroyed or the Marked target becomes Hidden. While the target is Marked, their Evasion is halved."
      },
      {
        "name": "Concentrate Fire - Reaction",
        "text": "When another adversary deals damage to a target within Far range of the Turret, you can mark a Stress to add the Turret\u2019s standard attack damage to the damage roll."
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
    "description": "A legendary, lava-hardened dragon. No enemy has ever had the insolence to wound the dragon so.",
    "difficulty": 18,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Choke, fly, intimidate, kill or be killed",
    "hp": 8,
    "stress": 5,
    "majorThreshold": 29,
    "severeThreshold": 55,
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
        "name": "Ashes to Ashes - Passive",
        "text": "When a PC rolls a failure while within Close range of the Ashen Tyrant, they lose a Hope and you gain a Fear. If the PC can\u2019t lose a Hope, they must mark a HP."
      },
      {
        "name": "Desperate Rampage - Action",
        "text": "Mark 3 Stress to make an attack against all targets within Close range. Targets the Ashen Tyrant succeeds against take 2d20+2 physical damage, are knocked back to Close range of where they were, and must mark a Stress."
      },
      {
        "name": "Ashen Cloud - Action",
        "text": "Spend a Fear to smash the ground beneath an adversary within Far range. While within the ash cloud, a target has disadvantage on action rolls. The ash cloud clears the next time an adversary is spotlighted."
      },
      {
        "name": "Apocalyptic Thrashing - Action",
        "text": "Countdown (1d12). Spend a Fear to activate it. It ticks down when a PC rolls with Fear. When it reaches 0, the Ashen Tyrant thrashes about, causing environmental damage (such as an earthquake, avalanche, or collapsing walls). All targets within Far range must make a Strength Reaction Roll. Targets who fail take 2d10+10 physical damage and are Restrained by the rubble until they break free with a successful Strength Roll. Targets who succeed take half damage. If the Ashen Tyrant is defeated while this countdown is active, trigger the countdown immediately as the destruction caused by their death throes."
      }
    ]
  },
  {
    "name": "Volcanic Dragon: Molten Scourge",
    "originalName": "Volcanic Dragon: Molten Scourge",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "description": "Engaged by their wounds, the dragon bursts into molten lava.",
    "difficulty": 20,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Douse with lava, incinerate, repel invaders, respawn",
    "hp": 7,
    "stress": 5,
    "majorThreshold": 30,
    "severeThreshold": 58,
    "attackModifier": "+9",
    "attackDescription": "Lava-Coated Claws",
    "attackRange": "Close",
    "attackDamage": "4d12+4 phy",
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (3) - Passive",
        "text": "Can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
      },
      {
        "name": "Cracked Scales - Passive",
        "text": "When the Molten Scourge takes damage, roll a number of d6s equal to HP marked. For each result of 4 or higher, you gain a Fear."
      },
      {
        "name": "Shattering Might - Action",
        "text": "Mark a Stress to make an attack against a target within Very Close range. On a success, target takes 4d8+14 physical damage, loses a Hope, and is knocked back to Close range. The Scourge clears a Stress."
      },
      {
        "name": "Eruption - Action",
        "text": "Spend a Fear to erupt lava from beneath the Scourge\u2019s scales, filling area within Very Close range with lava. All targets must make Agility Reaction Roll or take 4d6+6 physical damage and be knocked back to Close range. The area remains lava (6 HP damage on entry or action)."
      },
      {
        "name": "Volcanic Breath - Reaction",
        "text": "When the Scourge takes Major damage, roll d10. On 8+, erupt lava in Very Close range: Agility Reaction Roll or take 2d10+4 physical damage, mark 1d4 Stress, and are Vulnerable until clearing a Stress; success = half damage + mark a Stress.;Lava Splash - Reaction;When the Scourge takes Severe damage from attack within Very Close, molten blood deals 2d10+4 direct physical damage to attacker.;Ashen Vengeance (Phase Change) - Reaction;When the Scourge marks last HP, replace with Ashen Tyrant and immediately spotlight."
      }
    ]
  },
  {
    "name": "Volcanic Dragon: Obsidian Predator",
    "originalName": "Volcanic Dragon: Obsidian Predator",
    "source": "SRD",
    "tier": 4,
    "category": "Adversary",
    "description": "A massive winged creature with obsidian scales and impossibly sharp claws.",
    "difficulty": 19,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Defend lair, dive-bomb, fly, hunt, intimidate",
    "hp": 6,
    "stress": 5,
    "majorThreshold": 33,
    "severeThreshold": 65,
    "attackModifier": "+8",
    "attackDescription": "Obsidian Claws",
    "attackRange": "Close",
    "attackDamage": "4d10+4 phy",
    "experience": "Hunt from Above +5",
    "features": [
      {
        "name": "Relentless (2) - Passive",
        "text": "Can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight."
      },
      {
        "name": "Flying - Passive",
        "text": "While flying, gains +3 Difficulty."
      },
      {
        "name": "Obsidian Scales - Passive",
        "text": "Resistant to physical damage."
      },
      {
        "name": "Obsidian Tail - Action",
        "text": "Mark a Stress to make attack against all targets within Close range. Success: 4d6+4 physical damage, knocked to Far range and Vulnerable until next roll with Hope."
      },
      {
        "name": "Dive-Bomb - Action",
        "text": "If flying, mark a Stress to choose point within Far range, move there, attack all targets within Very Close range; on success, 2d10+6 physical, mark a Stress, lose a Hope."
      },
      {
        "name": "Erupting Rage (Phase Change) - Reaction",
        "text": "When marks last HP, replace with Molten Scourge and immediately spotlight."
      }
    ]
  },
  {
    "name": "War Wizard",
    "originalName": "War Wizard",
    "source": "SRD",
    "tier": 2,
    "category": "Adversary",
    "description": "A battle-hardened mage trained in destructive magic.",
    "difficulty": 16,
    "type": "Ranged",
    "countPerHp": 1,
    "motivesAndTactics": "Develop new spells, seek power, conquer",
    "hp": 5,
    "stress": 6,
    "majorThreshold": 11,
    "severeThreshold": 23,
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
        "text": "Mark a Stress to refresh the Wizard\u2019s \u201cWarding Sphere\u201d reaction."
      },
      {
        "name": "Eruption - Action",
        "text": "Spend a Fear and choose a point within Far range. A Very Close area around that point erupts into impassable terrain. All targets within that area must make an Agility Reaction Roll (14). Targets who fail take 2d10 physical damage and are thrown out of the area. Targets who succeed take half damage and aren\u2019t moved."
      },
      {
        "name": "Arcane Artillery - Action",
        "text": "Spend a Fear to unleash a precise hail of magical blasts. All targets in the scene must make an Agility Reaction Roll. Targets who fail take 2d12 magic damage. Targets who succeed take half damage."
      },
      {
        "name": "Warding Sphere - Reaction",
        "text": "When the Wizard takes damage from an attack within Close range, deal 2d6 magic damage to the attacker. This reaction can\u2019t be used again until the Wizard refreshes it with their \u201cRefresh Warding Sphere\u201d action."
      }
    ]
  },
  {
    "name": "Weaponmaster",
    "originalName": "Weaponmaster",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A master-at-arms wielding a sword twice their size.",
    "difficulty": 14,
    "type": "Bruiser",
    "countPerHp": 1,
    "motivesAndTactics": "Act first, aim for the weakest, intimidate",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 8,
    "severeThreshold": 15,
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
    "description": "An imperious tree-person leading their forest\u2019s defenses.",
    "difficulty": 11,
    "type": "Leader",
    "countPerHp": 1,
    "motivesAndTactics": "Command, nurture, prune the unwelcome",
    "hp": 6,
    "stress": 2,
    "majorThreshold": 6,
    "severeThreshold": 11,
    "attackModifier": "0",
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
        "text": "Spend a Fear to form a cage around a target within Very Close range and Restrain them until they\u2019re freed with a successful Strength Roll. When a creature makes an action roll against the cage, they must mark a Stress."
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
    "description": "A glacier-blue dragon with four powerful limbs and frost-tinged wings.",
    "difficulty": 18,
    "type": "Solo",
    "countPerHp": 1,
    "motivesAndTactics": "Avalanche, defend lair, fly, freeze, defend what is mine, maul",
    "hp": 10,
    "stress": 6,
    "majorThreshold": 21,
    "severeThreshold": 41,
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
        "text": "If a target damaged by the Dragon doesn\u2019t mark an Armor Slot to reduce the damage, they must mark a Stress."
      },
      {
        "name": "No Hope - Passive",
        "text": "When a PC rolls with Fear while within Far range of the Dragon, they lose a Hope."
      },
      {
        "name": "Blizzard Breath - Action",
        "text": "Spend 2 Fear to release an icy whirlwind in an area within Close range. All targets in this area must make an Agility Reaction Roll. Targets who fail take 4d6+5 magic damage and are Restrained by ice until they break free with a successful Strength Roll. Targets who succeed must mark 2 Stress or take half damage."
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
    "description": "A large pack of undead, still powerful despite their rotting flesh.",
    "difficulty": 17,
    "type": "Horde",
    "countPerHp": 3,
    "motivesAndTactics": "Consume brain, shred flesh, surround",
    "hp": 8,
    "stress": 5,
    "majorThreshold": 25,
    "severeThreshold": 45,
    "attackModifier": "+2",
    "attackDescription": "Tentacles",
    "attackRange": "Close",
    "attackDamage": "4d6+10 phy",
    "experience": null,
    "features": [
      {
        "name": "Horde (2d6+5) - Passive",
        "text": "When Legion has half or more HP marked, standard attack deals 2d6+5 physical damage instead."
      },
      {
        "name": "Unyielding - Passive",
        "text": "Legion has resistance to physical damage."
      },
      {
        "name": "Relentless (2) - Passive",
        "text": "Legion can be spotlighted up to two times per GM turn. Spend Fear as usual to spotlight."
      },
      {
        "name": "Overwhelm - Reaction",
        "text": "When Legion takes Minor damage from attack within Melee, mark a Stress to make standard attack with advantage against the attacker."
      }
    ]
  },
  {
    "name": "Zombie Pack",
    "originalName": "Zombie Pack",
    "source": "SRD",
    "tier": 1,
    "category": "Adversary",
    "description": "A group of shambling corpses instinctively moving together.",
    "difficulty": 8,
    "type": "Horde",
    "countPerHp": 2,
    "motivesAndTactics": "Consume flesh, hunger, maul",
    "hp": 6,
    "stress": 3,
    "majorThreshold": 6,
    "severeThreshold": 12,
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