---
title: "3. Agents of Vengeance"
lang: "en"
difficulty: "impossible"
order: 3
faction: 1
assets: "cc"
audioDir: "cc"
description: "Gem and Gelu cross the Deyjan border to avenge the deaths of the AvLee lords and the Dragon Lords. Pits of rotting flesh, wraiths over the horizon and the shadow of Sandro's artifact lead the pair to Castle Crypthome, where Vidomina awaits them."
rounds: 12
bonusOptions:
  - "+2 Crystals"
  - "Artifact"
  - "Reinforce fighters"
goals:
  - "Vidomina's Army at the Dragon Utopia"
loseConditions:
  - "Lose control of your Faction Town"
  - "The Enemy Army at the Dragon Utopia is not defeated by the end of the 12th round"
additionalRules:
  - "Every time a Hero enters an Obelisk field, they trigger a story event"
  - "The Enemy Heroes move after the player"
  - "After defeating an Enemy Hero's Army, gain 2 crystals"
  - "The difficulty level of every Combat encounter on the Necropolis Map tiles is increased by one"
triggers:
  - id: 1
    text: "Hero on the Town field of the Necropolis Starting tile"
    event: 3
  - id: 2
    text: "Hero on the Dragon Utopia field"
    event: 4
  - id: 3
    text: "Charna's Army defeated"
    doneId: "charna"
  - id: 4
    text: "Galthran's Army defeated"
    doneId: "galthran"
goalTriggers:
  - goal: 0
    event: 5
mapSettings:
  starting: "1 x Necropolis(S1), 1 x Rampart(S4)"
  far: "2 x Rampart(F10 – F12), 2 x Necropolis(F1, F4, F7)"
  near: "2 x Necropolis(N1, N4), 2 x Rampart(N7, N8)"
  additional: "The Rampart Starting tile is already discovered, 1 x Central Map tile (VI-VII) with the Dragon Utopia (C1, C3)"
mainTown:
  buildings:
    - name: "Housing Estate"
      icon: "bronze"
    - name: "Spring upon Arches"
      icon: "silver"
    - name: "Citadel"
      icon: "citadel"
  production: "+5 0 0"
  startingResources: "14 8 3"
mainHero:
  army: "A Few Centaurs, a Few Dwarves, a Few Elves"
  handDeck:
    - "2 x Defense Statistic"
    - "1 x Power Statistic"
    - "2 x Knowledge Statistic"
    - "1 x First Aid Specialty"
    - "1 x First Aid Ability"
    - "2 x Magic Arrow Spell"
heroes:
  - name: "Gem"
    img: "cc/hero-gem.png"
    army: "A Few Centaurs, a Few Dwarves, a Few Elves"
    handDeck:
      - "2 x Defense Statistic"
      - "1 x Power Statistic"
      - "2 x Knowledge Statistic"
      - "1 x First Aid Specialty"
      - "1 x First Aid Ability"
      - "2 x Magic Arrow Spell"
  - name: "Gelu"
    img: "cc/hero-gelu.png"
    army: "A Few Centaurs, a Few Dwarves, a Few Elves"
    handDeck:
      - "1 x Attack Statistic"
      - "3 x Defense Statistic"
      - "1 x Power Statistic"
      - "1 x Knowledge Statistic"
      - "1 x Sharpshooters Specialty"
      - "1 x Archery Ability"
      - "1 x Magic Arrow Spell"
aiSettings:
  - name: "Charna"
    army: "Pack Zombies, Pack Wraiths, Pack Liches, Few Vampires"
    deck: "4 x Might cards"
    armyCards:
      - title: "Zombies"
        amount: "Pack"
      - title: "Wraiths"
        amount: "Pack"
      - title: "Liches"
        amount: "Pack"
      - title: "Vampires"
        amount: "Few"
  - name: "Galthran"
    army: "Pack Vampires, Pack Liches, Pack Zombies, Few Dread Knights"
    deck: "4 x Might cards"
    armyCards:
      - title: "Vampires"
        amount: "Pack"
      - title: "Liches"
        amount: "Pack"
      - title: "Zombies"
        amount: "Pack"
      - title: "Dread Knights"
        amount: "Few"
  - name: "Vidomina"
    army: "Pack Skeletons, Pack Dread Knights, Pack Ghost Dragons, Pack Liches"
    deck: "4 x Magic cards, 3 x Skill cards, 2 x Haste Spell, 2 x Cure Spell, Sorcery Ability, 2 x Sandro Specialty (I, VI)"
    armyCards:
      - title: "Skeletons"
        amount: "Pack"
      - title: "Dread Knights"
        amount: "Pack"
      - title: "Ghost Dragons"
        amount: "Pack"
      - title: "Liches"
        amount: "Pack"
events:
  - id: 1
    title: "DEYJAN LORDS MUST BE STOPPED"
    content: |
      Several days ago the AvLee Council of Elders commanded Gem and Gelu to avenge the deaths of Lord Falorel, Lord Fayette, the Dragon Lords and all the other victims of the Necromancers' raids, and although the two have had some dealings with the enemy, nothing prepared them for the horrors they encountered at the Deyjan border. Pits. Haphazardly dug pits filled with piles upon piles of bodies. No, not bodies. Leftover flesh, heaps of rotting flesh that became useless once the skeleton was ripped out of it.

      "This... is... horrific," stuttered Gelu, desperately trying to quell the nausea welling up his throat.

      Gem only stared, her eyes cold, unseeing. After some time she crouched and hid her face.

      "The doll got to me," she blurted. "It looked just like the one my sister had right before she died. I remember thinking she was the luckiest girl in the world to have a doll like that... Then the horde of skeletons killed everyone in my village..." Her voice trailed off.

      "You shouldn't look at this. It's not something for..."

      "I was the only survivor." She raised her head and looked directly into Gelu's eyes.

      "I'm GLAD the Council of Elders chose me as one of the pair to punish Deyja."

      There was no faltering in that look. Only fierce determination. Gelu turned away and gazed into the horizon. From the hilltop, they clearly saw the valleys of this strange, dying land stretching ahead. It looked as if autumn came early, painting leaves and bushes with browns and reds. Greenless grass gave way to dark dirt, and all the trees in sight were visibly struggling to survive, if not dead and dry already.

      "After learning that Sandro was behind the plot to kill Lord Falorel, I did some more investigating and discovered the Dragon Lords I destroyed were not bandits. They were real AvLee Border Lords. I felt I had to explain personally to the AvLee Council of Elders and accept their judgment for my mistake. The Council was skeptical, but after consulting with their Oracle, they said I could best make amends by participating in a punitive campaign against Deyja," seeing Gem getting up and walking up to him, Gelu paused. "I feel honor bound to accept their judgment, and I have taken a leave of absence from the Forest Guard," he concluded.

      Deathly silence sunk in as they weighed their choices.

      "The Deyjan lords must be destroyed before all of AvLee is harvested for their undead armies," decided Gelu.

      "All of them," followed Gem.

  - id: 2
    title: "WRAITHS OVER THE HORIZON"
    content: |
      A report from your scouts has just arrived. It seems that they encountered some Erathian irregulars today. They were part of a militia unit from the town of Clovergreen. They knew Gem. They also passed on interesting news: two Barbarians named Crag Hack and Yog are invading Deyja from Erathia.

      While thinking about what it could mean, you spot a messenger rushing through the troops. Having reached you, she collapses in exhaustion. Clearly delusional and burning with fever, she speaks gibberish, but you manage to make sense of at least some of it. One of her most persistent visions is that of dozens of pale wraiths tearing up settlements in their path. It is true that a whole swarm of those necromantic abominations has been spotted South from here. Still, in her current state, the messenger would need at least a couple of days to get any better. Should you leave her behind or wait for her recovery? In the end... it is just one person. Right?

  - id: 3
    title: "NECROMANCER REINFORCEMENTS"
    content: |
      Today you are supposed to meet with your partner in this operation. You are rushing to the rendezvous point, but roaming through enemy territory is no picnic. When you finally get there, it is long after dark. Tired and late, you slip into a tent. You can rest while talking.

      After hours of sharing information, Gem bursts with anger.

      "...I received a message from Ethric today. He said it had been decades since Sandro was his apprentice. He also said Sandro ran away and became a Necromancer!" she shouts, pacing back and forth.

      "This name also came up during the interrogation," adds Gelu calmly.

      "There were more ill tidings. Ethric said Sandro might be trying to construct a powerful artifact from all the artifacts I gathered for him. I was so furious, I screamed." "I can imagine," Gelu thinks to himself.

      "None of my troops came near me for an hour. I must pass these findings to the Council of Elders..."

      Suddenly, you hear a rustling and spot a shadowy silhouette on a tent wall. Almost instinctively you exchange glances to coordinate your actions and attack the figure. It turns out to be a vampire. With just a few magic words Gem illuminates the area, forcing several gloomy figures to wince and cover their eyes. More vampires. Apparently your encampment was raided by a small vanguard of these creatures, and some young recruits must have fallen victims to their fangs.

      Your experience, killer instincts, and cooperation make this fight an amazingly quick one. Maybe that is because there were so few of them, or maybe your resistance surprised them. On the other hand, this also means that you had lost the element of surprise, as whoever sent them must have been aware of your presence in Deyja.

      "Sandro might have built some powerful artifact from all the artifacts he gathered," you start thinking aloud. "I wonder if the dead AvLee Lords stumbled across this plan?"

  - id: 4
    title: "IS THAT ALL?"
    content: |
      You both arrive at one of the Necromancer castles. It looks abandoned. In haste. Not long ago.

      "You think they are so afraid of us?" wonders Gem.

      "Doubt it," replies Gelu, carefully eying the surroundings. "Even if they are aware of our movements, they should not be able to pinpoint our exact arrival. They ran from someone else."

      You ransack the castle, and after long and arduous search, in one of the fireplaces you find a half-burnt piece of paper. It is a map, showing a path to "Castle Crypthome". You continue to rummage through the keep but fail to find any relevant information. To your surprise, an hour later your Elven scouts escort in some Orc spies with a message for you. It is from a Barbarian hero named Yog.

      "Hmm, I met him once in Enroth," muses Gem upon hearing the news.

      "He's with another Barbarian named Crag Hack," adds the messenger.

      "I've heard of Crag too," she replies.

      "Yog and Crag Hack are upset with the Necromancers and Sandro especially. And..." The Orc's voice became so low that both of you instinctively moved closer.

      "What?! Crag collected artifacts for Sandro, which DID combine into a powerful artifact!"

  - id: 5
    title: "CASTLE CRYPTHOME"
    content: |
      Well hidden in abandoned buildings nearby, you are observing the castle. This time you are certain it is not deserted. Swarms of skeletons are going in and out, carrying boxes full of supplies.

      "...to express their displeasure with Sandro, the Barbarians decided to invade Deyja, but Yog wants to know what is really going on," mutters Gelu, thinking aloud.

      "Displeasure. How polite!" giggles Gem.

      "This is good timing for our own campaign. We are hitting Deyja from the North while they are attacking from the West."

      "The Erathians are going to have kittens when they hear about Yog and Crag. I want to talk to Yog. Where's that map?" asks Gem, while rummaging through her bag. "Hmm, we need to first take Castle Crypthome to secure this part of Deyja, but afterwards we'll ask Yog and Crag to meet us at a place called..." she pauses to unfold the map and track a path with her finger. "Blagden. Then..."

      She stops mid-sentence, as walls shatter and skeletons flood into the building. Behind the bony figures stands a pale Necromancer surrounded by sinister-looking knights and accompanied by ethereal vestiges of long dead dragons. Dead and equally deadly. The hair on Gem's skin tingle and rise as the Necromancer summons her magical energies. The sheer power is immense. The troops are already engaged, so you both rush into the fight. One is calling for a barrage of arrows from his sharpshooters, while the other is tapping into the magical forces of nature.

  - id: 6
    title: "FAR FROM OVER"
    content: |
      After the last of the enemy troops is dealt with, Gem rushes towards the enemy commander. Vidomina covers her face with her palm as if trying to shelter it from Gem's vengeful rage.

      "Plea..." she starts, but an arrow from Gelu's bow shatters the word and her head. Immediately, the rest of her body turns to dust and falls to the ground.

      "What...!"

      "A golem!" gasps Gem with a mix of surprise and frustration. Then she crouches and starts shifting the leftover dirt from the golem. "She must have already fled, sometime during the fight. There is nobody left around here."

      With a furious kick, Gelu sends a skull high into the air. "Don't worry. We'll get them," she finishes reassuringly.

      "All of them," he adds through clenched teeth. When his anger finally subsides, he starts to move toward the now-open Castle Crypthome.
---