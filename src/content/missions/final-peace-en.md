---
title: "2. Final Peace"
lang: "en"
difficulty: "impossible"
order: 2
faction: 1
assets: "fp"
audioDir: "fp"
description: "Gem crosses the border between AvLee and Deyja to fulfill her last duty to Lord Fayette: grant his soul peace by destroying the undead body chaining it to this world. But amid the fog of war, the druid will uncover a greater conspiracy — and old friends turned enemies."
rounds: 13
escalationOnEvent: 4
bonusOptions:
  - "+8 Gold"
  - "+4 Ore"
  - "2 Spells"
goals:
  - "Defeat Lord Fayette's Guards Army"
  - "Defeat Lord Fayette's Army"
loseConditions:
  - "Lose control of your Faction Town"
  - "Lose a fight with an Enemy Army"
  - "Fail to defeat all Enemy Armies before the end of the 13th round"
additionalRules:
  - "The Enemy Heroes move after the player."
  - "You can enter a blocked field if an Enemy Hero is in that field."
  - "After defeating an Enemy Hero's Army, gain 2 crystals."
  - "The first time a Hero enters an Obelisk field, they trigger a story event."

triggers:
  - id: 1
    text: "Gem on field N7"
    event: 2
  - id: 2
    text: "Gem on field S1"
    line: "- Entering the Town field of the Necropolis Starting tile, combat Lord Fayette's Guards Army (+3 walls, gate)."
    hideIf: "aislinn"
  - id: 3
    text: "Gem on field S2"
    line: "- Entering the Town field of the Dungeon Starting tile, combat Lord Fayette's Army (+3 walls, gate, arrow tower)."
    hideIf: "galthran"

goalTriggers:
  - goal: 0
    event: 3
  - goal: 1
    event: 4
mapSettings:
  starting: "1 x Necropolis(S1), 1 x Dungeon(S2), 1 x Rampart(S4)"
  far: "2 x Rampart(F10 – F12)"
  near: "2 x Dungeon(N2, N5), 2 x Necropolis(N1, N4), 2 x Rampart(N7, N8)"
  additional: "The Rampart Starting Map tile is already discovered"
mainTown:
  buildings:
    - name: "Citadel"
      icon: "citadel"
    - name: "Housing Estate"
      icon: "bronze"
    - name: "Spring upon Arches"
      icon: "silver"
  production: "+5 0 0"
  startingResources: "12 4 2"
mainHero:
  army: "A Few Centaurs, a Few Dwarves, a Few Elves"
  handDeck:
    - "2 x Defense Statistic"
    - "1 x Power Statistic"
    - "2 x Knowledge Statistic"
    - "1 x First Aid Specialty"
    - "1 x First Aid Ability"
    - "2 x Magic Arrow Spell"
aiSettings:
  - name: "Lord Fayette's Guards"
    army: "Pack Skeletons, Pack Vampires, Pack Zombies, Few Liches"
    deck: "5 x Might cards"
    armyCards:
      - title: "Skeletons"
        amount: "Pack"
      - title: "Vampires"
        amount: "Pack"
      - title: "Zombies"
        amount: "Pack"
      - title: "Liches"
        amount: "Few"
  - name: "Lord Fayette"
    army: "Pack Zombies, Pack Vampires, Pack Liches, Pack Dread Knights"
    deck: "3 x Might cards, 2 x Magic cards, 2 x Stone Skin Spell"
    armyCards:
      - title: "Zombies"
        amount: "Pack"
      - title: "Vampires"
        amount: "Pack"
      - title: "Liches"
        amount: "Pack"
      - title: "Dread Knights"
        amount: "Pack"

events:
  - id: 1
    title: "ONE LAST SERVICE"
    content: |
      You are sitting in your tent lit only by a dim magical light — being a druid, you would never waste your power for such frivolities as bright illumination. Power should be conserved for a greater cause. Your quill scratches the parchment, as you write another letter to Clancy, one of your ranger friends. Partly to inform him about all useful information. Partly to just gather your own thoughts.

      "When I went to tell Lord Fayette about Sandro tricking me, I learned that while I was away on a quest, he left on a mission into Deyja and had not yet returned. So I scried for him and discovered his mission had gone horribly wrong. He had been killed by the Necromancers and..."

      The trembling of your hand forces you to pause. In an attempt to control the agitation, you grip the quill stronger and press on with the sentence.

      "...and... resurrected as a Death Knight!" You put so much emphasis in the exclamation mark that you literally stab the letter, poking a hole in it. You take a deep breath... No matter.

      "Curse all Necromancers!" You vent your frustration a moment later.

      "There is one last service I can do for my lord. We have slipped over the border into a no man's land between AvLee and Deyja. From here we will build our forces and push into Deyja itself. I will grant his soul final peace by destroying the undead body chaining it to this world. I owe him that much."

      When you enter an Obelisk field on the Rampart Near tile, read the "One Scheme After Another" section below.
      When you enter the Town field on the Necropolis Starting tile, start a Combat with Lord Fayette's Guards Army. Add three Wall cards and one Gate card on the Enemy's side. After vanquishing this enemy, read the "Old Friends" section below.

  - id: 2
    title: "FOND MEMORIES"
    content: |
      From outside your tent you catch the calm crackling of campfires. The wind is whispering its nocturnal secrets and buzzing insects busy themselves with leftover food. Yet you are still in your tent. A quill hanging over a sheet of paper in one hand, and a letter in the other.

      A tear-stained letter. From the late Lord Fayette's wife.

      "I received a message from Lord Fayette's wife today," you start your report to Clancy. "She told me she had discovered the purpose of her husband's secret mission. Apparently, he was trying to discover information about what happened to his neighbor, Lord Falorel. Lord Falorel was found dead by a Ranger named Gelu, but the corpse was that of a vampire. It's unclear what happened. Had Falorel been replaced by the vampire? Was the real Falorel captured and turned into a vampire? Or was something else going on? And who killed the vampire?"

      While you are scribing, you hear some elven voices passing outside.

      "...these blue parts around her eyes must mean something."
      "But war paint? She doesn't strike me as a warrior."
      "You can never tell... there are all types... druids..."

      You catch the last fragments, as they walk away.

      "Maybe if times were different we could all laugh about it..." You whisper to yourself. "I would tell you how I magicked my face that way in a ceremony honoring something some small creature had done for me, which in my case was when raccoons washed my food in the water. Merely part of being a Druid. Would you laugh? Would you be disappointed? Then I would get angry at you and pout while saying how the raccoons' gesture may not have been a monumental gift, but I treasure the memory." The image summons a faint smile to your lips. You glance back at the report and hear yourself whispering again.

      "Hmm, one other question... Why was a Deyjan Border Lord willing to talk to Lord Fayette about this?"

  - id: 3
    title: "ONE SCHEME AFTER ANOTHER"
    content: |
      You meet up with Clancy, who went ahead to scout the area. After telling you the safest route he has found, he also mentions one of his people having seen a large army of necromancers going underground. They were clearly guarding someone but it was impossible to say who it was. It also turns out that even in Deyja there are a few residents who are not undead. Clancy's scouts made contact with some yesterday. They had some interesting news. The local Deyjan Border Lord was assassinated recently. He was apparently killed on the same day as Lord Fayette.

      "The interesting part is that the people questioned by the scouts believe another Deyjan Lord assassinated the Border Lord." He looks at you meaningfully.

      With all these new pieces of information it becomes obvious that you have barely scratched the surface of a much bigger scheme. Defeating Lord Fayette might not be enough to stop whatever is brewing...
 
  - id: 4
    title: "OLD FRIENDS"
    content: |
      You utter your last prayers as your men finish burying the last of vanquished dead.

      "Maybe now they can find some peace," you mutter to yourself, trying to shake off the dreadful feeling that has been haunting you since earlier during the battle.

      The enemy troops... They all used to be part of Lord Fayette's army. His personal guards. A few of them you even counted among your friends... Freeing their souls from under these foul necromantic spells brings you some consolation. Not much, though. Whoever did this, is still out there, free to commit more atrocities.

      "This must stop," you vow angrily, fixing your gaze at the horizon to the East.

  - id: 5
    title: "LAST DUTY"
    content: |
      You look at the motionless body of your Lord; his calm countenance strikingly contrasting the whirlwind of emotions raging within you. Great Lord Fayette. Your friend. Turning him into an undead was not right. Not fair. He still had so much ahead of him. So much to experience. So many stories to hear. And even more to tell. So much to...

      You shake your head angrily. This is not the time. Mourning has to wait. There will be a better moment for it, once you finish what you have started. Now you need to focus. You call Clancy to your side.

      "It is becoming increasingly obvious to me that Lord Fayette's death was a result of some larger plot." You close your eyes and turn away from the body. "But I'm not sure whether he was killed because he was a Border Lord or because he found out too much about what was going on."

      "I would say it was a plan to invade AvLee," he pauses for a moment to let the words sink in. "It is a rather obvious and straightforward strategy. In the confusion resulting from the death of two neighboring AvLee Border Lords..."

      "That would make sense," you interrupt him. "Except... except that the Deyjan Border Lord across from them was also killed. It would seem as if there is some plot larger than an invasion or there is more than one thing happening here." Clancy just nods to your thinking aloud.

      "I have decided to send what I know to the Druid High Council and ask them to forward the knowledge on to the AvLee Council of Elders. I'm sending a letter to Gelu telling him I think Falorel's and Fayette's deaths are related and..." sudden dryness in your mouth makes the words stuck. "...And asking him to meet with me after..." Voice fails you again. "After I lay Lord Fayette to r-rest." You take a few deep breaths before continuing.

      "I would like to learn what he knows about what is going on. I need to know."
---