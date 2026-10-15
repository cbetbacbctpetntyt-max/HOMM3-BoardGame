import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const missions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/missions" }),
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    difficulty: z.string(),
    description: z.string(),
    order: z.number().optional(),
    faction: z.number().optional(),
    rounds: z.number().optional(),
    assets: z.string().optional(),
    audioDir: z.string().optional(),
    escalation: z.number().optional(),
    escalationOnEvent: z.number().optional(),
    bonusOptions: z.array(z.string()).optional(),
    triggers: z.array(z.object({
      id: z.number(),
      text: z.string(),
      event: z.number().optional(),
      line: z.string().optional(),
      hideIf: z.string().optional(),
      doneId: z.string().optional(),
    })).optional(),
    goalTriggers: z.array(z.object({
      goal: z.number(),
      event: z.number(),
      line: z.string().optional(),
    })).optional(),
    goals: z.array(z.string()),
    loseConditions: z.array(z.string()),
    additionalRules: z.array(z.string()),
    mapSettings: z.object({
      starting: z.string(),
      far: z.string(),
      near: z.string(),
      additional: z.string(),
    }),
    mainTown: z.object({
      buildings: z.array(z.object({ name: z.string(), icon: z.string() })),
      production: z.string(),
      startingResources: z.string(),
    }),
    mainHero: z.object({
      army: z.string(),
      handDeck: z.array(z.string()),
    }),
    heroes: z.array(z.object({
      name: z.string(),
      img: z.string().optional(),
      army: z.string(),
      handDeck: z.array(z.string()),
    })).optional(),
    aiSettings: z.array(z.object({
      name: z.string(),
      army: z.string(),
      deck: z.string().optional(),
      img: z.string().optional(),
      armyCards: z.array(z.object({
        title: z.string().optional(),
        amount: z.string().optional(),
        img: z.string().optional(),
      })).optional(),
    })),
    events: z.array(z.object({
      id: z.number(),
      title: z.string(),
      content: z.string(),
    })),
  }),
});

export const collections = { missions };