import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    // Цена в имперских кредитах (₡)
    price: z.number().positive(),
    // 1 — можно детям, 5 — эвакуируйте сектор
    hazardLevel: z.number().int().min(1).max(5),
    category: z.enum(['slime', 'biotech', 'gear', 'food', 'souvenir', 'synthetic']),
    // Пиктограмма вместо фото: на складе фотографировать запрещено
    glyph: z.string(),
    tagline: z.string(),
    inStock: z.boolean().default(true),
    warnings: z.array(z.string()).default([]),
  }),
});

export const collections = { products };
