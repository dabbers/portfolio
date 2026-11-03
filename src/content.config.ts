import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One folder per project under src/content/projects/<slug>/index.md, with the
// screenshot(s) sitting next to it so Astro can optimize them at build time.
const projects = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(["live", "building", "archived"]),
      // Free text, e.g. "2010 – 2013" or "2025 –". Absolute, never relative.
      years: z.string().optional(),
      stack: z.array(z.string()).default([]),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Lower numbers sort first within a status group.
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
