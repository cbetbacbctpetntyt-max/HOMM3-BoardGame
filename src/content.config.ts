import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const missions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/missions" }),
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    difficulty: z.string(),
    description: z.string(),
    goals: z.array(z.string()),
    loseConditions: z.array(z.string()),
    escalation: z.number().optional(),
    additionalRules: z.array(z.string()),
    mapSettings: z.object({
      starting: z.string(),
      far: z.string(),
      near: z.string(),
      additional: z.string(),
    }),
    mainTown: z.object({
      buildings: z.string(),
      production: z.string(),
      startingResources: z.string(),
    }),
    mainHero: z.object({
      army: z.string(),
      handDeck: z.array(z.string()),
    }),
        aiSettings: z.array(z.object({
      name: z.string(),
      army: z.string(),
      deck: z.string().optional(),
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