import { defineCollection, z } from 'astro:content';

const missions = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    slug: z.string(),
    description: z.string(),
    difficulty: z.enum(['easy', 'medium', 'hard', 'impossible']),
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
    })),
    events: z.array(z.object({
      id: z.number(),
      title: z.string(),
      content: z.string(),
    })),
  }),
});

export const collections = { missions };
