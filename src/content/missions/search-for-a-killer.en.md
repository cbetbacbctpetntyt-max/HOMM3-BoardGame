---
title: "1. Search for a Killer"
lang: "en"
slug: "search-for-a-killer"
difficulty: "impossible"
description: "When two AvLee lords are found dead, Gem and Gelu set out on their vengeful quest to seek justice. Their fates, however, unexpectedly lead them to find much more than they had hoped for. Will they manage to foil the sinister plot brewing on AvLee borders, or has the gruesome discovery come too late to stop the Necromancers' schemes?"

goals:
  - "You must defeat Aislinn's Army"
  - "You must defeat Galthran's Army"
  - "You must defeat Town Army"

loseConditions:
  - "You lose control of your Faction Town"
  - "You lose a fight with an Enemy Army"
  - "You fail to defeat all Enemy Armies before the end of the 11th round"

additionalRules:
  - "The Enemy Heroes move after the player"
  - "You can enter a blocked field if an Enemy Hero is in that field"
  - "After defeating an Enemy Hero's Army, gain 2 gold"
  - "The first time a Hero enters an Obelisk field, they trigger a story event. After that, when your Hero enters another Obelisk field for the first time, roll 2 Treasure dice and resolve one of them (your choice)"

mapSettings:
  starting: "1 x Necropolis(S1), 2 x Rampart(S4)"
  far: "2 x Rampart(F10 – F12)"
  near: "1 x Necropolis(N1, N4), 2 x Rampart(N7, N8)"
  additional: "1 x random Dungeon Far tile(F2, F5, F8), 1 x random Dungeon Near tile(N2, N5)"

mainTown:
  buildings: "Citadel, Housing Estate, Spring upon Arches"
  production: "15 0 0"
  startingResources: "14 4 0"

mainHero:
  army: "Few Centaurs, Few Dwarves, Few Elves"
  handDeck:
    - "1 x Attack Statistic"
    - "3 x Defense Statistic"
    - "1 x Power Statistic"
    - "1 x Knowledge Statistic"
    - "1 x Sharpshooters Specialty"
    - "1 x Archery Ability"
    - "1 x Magic Arrow Spell"

aiSettings:
  - name: "Galthran"
    army: "Pack Skeletons, Pack Zombies, Few Liches, Rogues"
  - name: "Aislinn"
    army: "Pack Zombies, Pack Vampires, Pack Liches, Mummies"
    deck: "4 x Might cards"
  - name: "Town"
    army: "Pack Zombies, Pack Vampires, Pack Liches, Pack Dread Knights, Few Black Dragons, Wall and Gate cards, Ballista War Machine"
    deck: "1 x Might cards, 3 x Magic cards, 1 x Magic Arrow Spell, 2 x Haste Spell"

events:
  - id: 1
    title: "MYSTERIOUS DEATH"
    content: |
      It was supposed to be a dull day. Reporting the Forest Guards' findings to your Lord had always been a day of excruciating drudgery. Yet, fate has its ways of surprising people, and that day it was your turn to find out about it.

      "Captain Gelu, praise be to the Elders!" A young city guard greeted you upon your arrival to Willowglen. "Something terrible has happened," he started shakily, but paused as if unsure how to proceed.

      "Speak up! I don't have all day!" Your voice lashed through the morning air.

      "Lord Falorel has been murdered!" The guard replied hastily. Then he drew a long breath, and you instantly knew his next words, "But… that's not all…"

      After that, he described the events of the past days. It would appear that Lord Falorel has been murdered by poison. Not the strangest way to kill a noble, but certainly a most unhonorable one. To make matters worse, an inspection of the body revealed that Lord Falorel was not an Elf at all! It seems he was merely posing as an Elf when, in reality, he was a Vampire!

      More and more guards gather around as you are listening to the horrible news, your stern gaze fixed upon the table in front of you. A sudden commotion announces the arrival of a messenger. As you listen to the word from the east the situation grows even grimmer. The report has it that necromancer forces overran the town of Soledare. Skeletons walk the streets, and the town has been completely compromised. The runner begs you to hurry to the East and liberate Soledare.

      The death of Lord Falorel and discovery that he really was a Vampire calls into question all of your past deeds. With all the fighting you performed under his command, you wonder which were actually in the name of justice. Were they still Lord Falorel's orders? Or the impostor's? The faces of all you slew recently flash before your eyes… and their screams…

      You'll probably never know what this imposter was really up to, but you do know he had enemies and they caught up to him. Something very odd is going on, and you must find out what! Regardless of the deception being played out here, you must locate and deal with the murderer for the sake of AvLee.

      **Flip one Rampart Near Tile on the map - it is already discovered for you.**

      **You have time till the end of the 4th round to arrive at an Obelisk. If you make it in time, read the "Saving Soledare" section. Otherwise, ignore this part.**

  - id: 2
    title: "SAVING SOLEDARE"
    content: |
      You approach Soledare - an isolated town to the East of your usual patrol routes. From your vantage point, it looks derelict. Or would have, were it not for the undead swarming all over the place. You reach for a spyglass to carefully assess the situation. Your heart skips a beat when you discover there is still some resistance! There is still hope, the town can be saved!

      You focus on the enemy. Amidst the walking dead, you spot a pale figure, their bony hand gesturing to the lifeless creatures. This must be the commander…

      A sudden ghastly screech makes you flinch, reminding you of all the screams of your victims. The screams of those you unjustly killed… they shall haunt you. In light of these events, you know you cannot just forget about it. Atonement must be performed to cleanse your soul, and freeing this place shall be a good starting point. It is imperative that the Erathian leaders know of these events. But at the same time, you fear they will not be pleased with your role in all this.

      You lower the spyglass and look for your troops. Your sharp eye quickly catches their sight far beneath your treetop position. Hidden in the bushes, they are waiting patiently. With a subtle nod, you give the order to attack.

      **When you enter the Obelisk field, you will fight Aislinn's Army.**

  - id: 3
    title: "THE RUINS OF SOLEDARE"
    content: |
      Today you have been paid a visit by a surprising guest - a lone survivor from Soledare. From his tale you have also learned about the horrors he witnessed while hiding with his family in the ruins, and about the brave and harsh journey he made with them to find your encampment. The least you can do is to share some food and water with him, which he greedily wolfs down as he speaks.

      "…Though it has been mostly destroyed, you will find a way to return Soledare to its former self." Desperate for hope, he raises his bright eyes directly at you.

      You ponder his words. Some things cannot be changed, no matter how much we wish for it.

      In light of recent events, the screams of those you unjustly killed shall haunt you. Atonement must be performed to cleanse your soul, and it is imperative that Erathian leaders know of these events. You fear they will not be pleased with your role in all this.

  - id: 4
    title: "A WAY FORWARD"
    content: |
      The survivors from Soledare provide you with valuable and interesting information. According to what they say, there is an extensive underground network of tunnels in this region that goes far below the river and allows access to a wide variety of places. If used properly, this tunnel system would allow for some dynamic assaults and surprise attacks. This is one idea definitely worth investigating because the enemy will surely be watching their shores closely.

  - id: 5
    title: "THE PATH ONE CHOOSES"
    content: |
      Out of nowhere, you find yourself in a forest. Running. Something's after you. You hear a myriad of voices shouting your name. You recognize the surroundings. You remember the place, you've been here as a child. Yet unlike your memories, with every step you take, it grows darker, more ominous. Suddenly, the path forks. One branch, basked in light, leads out of the forest, while the other goes deeper into the darkness. The choice is easy. You turn towards the exit, but then you feel a steadfast grip tightening around your legs. You look down. Pale, ghastly hands pull you down, dragging into the bowels of earth. The hands belong to faces, familiar faces buried in the ground, faces of all those you had killed. They were the ones screaming. Now they are even louder, their voices overlapping in your head:

      "There is no easy way out… Can you hear…? You did this… You cannot run! Captain… No atonement for you… Can you hear me, captain?"

      You wake up. Instinctively, you grab a dagger and face the voice. A frightened figure at the entrance to your tent repeats:

      "Can you hear me, captain?"

      You recognize the young recruit and lower the blade.

      "Report!" You order, and the soldier salutes.

      "According to the soothsayers, Lord Falorel's real name was Vayarad, and he was a vampire lord from northwestern Deyja. He had been seeding AvLee with his own brood, preparing for some sort of coup in Deyja. His armies were growing fairly slowly, but growing nonetheless. They also believe the real Lord Falorel was killed some time ago and replaced by this Vayarad. It is highly likely that Falorel was transformed into the undead and is currently serving in the Deyjan armies."

      "Serving? That's a rather long shot. What makes them think so?"

      "They are soothsayers…" he pauses, shrugging his shoulders. But seeing you frown, he quickly jumps to other news.

      "Besides this, we've noticed some movements of the necromancer's army, South from our current position. They seem to be heading directly here."

      You nod. It's to be expected they should send someone for you if you tread this path.

      "Also, a report from your Erathian commanders arrived!" He finishes almost radiantly, as he hands you a letter.

      "Now that the news of Lord Falorel's demise has reached the populace, word has spread quickly and the Elven nobility are fearful and suspicious. Find the identity of the killer. The Elves are checking their own to see if AvLee has been further compromised. We have received word of more Necromancer activity. Seek out a Druid named Gem who is also investigating similar events.

      On the matter of the actions you have taken under the command of this imposter, fear not! King Gryphonheart understands the situation and supports your current position."

      Reassuring words for sure, coming as if they answered the call from your restless night. So, why is your heart not settled? Can such guilt be absolved and responsibility waved at the whim of those higher in the hierarchy?

  - id: 6
    title: "HERDING"
    content: |
      You approach a deep and wide pit close to a nearby village. You have heard that by herding villagers into pens, the Necromancers can easily slaughter and raise them en masse into the undead armies. Suspecting what it might be, you look inside. Scouts' reports and rumors about these skeleton transformation rituals have warned that they are grisly to the extreme. But knowing and seeing are two different things… The details are gruesome and turn your stomach, threatening to make you retch. Fortunately, your training proves more than adequate to stave off such a display. You are outraged and vow to avenge these poor souls.

      You poke around the loathsome excavation to see if you can learn more. Judging by its size the need for troops must be getting to the Necromancers, so it just might work in your favor, as there is only one thing to do. You give your troops a ferocious look and a signal to charge the Necromancers' positions.

  - id: 7
    title: "ANSWERS THAT BREED MORE QUESTIONS"
    content: |
      A letter has arrived today from a Druid named Gem. She wants to meet with you when you are finished with your business in Lord Falorel's land and look further into the recent events with the Necromancers. She believes they are preparing for a strike deep into AvLee territory, and you couldn't agree more.

      "What are you going to do, captain?" Asks one of your officers.

      "…Once I am finished here… I will meet with her." You reply, pausing to give some thought to it.

      Dismissed with a nod, the officer salutes and leaves you gathering more information. You look around. The marks on the walls, broken furniture, cracked window, and blood stains on the walls of the burned cottage can tell a story… But surely not as interesting as the one you have just started to uncover. You locate a usable chair, drag it through the room and sit in front of a figure lying on the floor. Or more precisely, being pinned to it by your troops.

      "So, this Sandro was a rival to Vayarad and may be the one who ordered his poisoning, you say? Tell me more."
---
