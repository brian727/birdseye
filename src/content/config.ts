import { z, defineCollection } from "astro:content";

const videos = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subhead: z.string(),
        tags: z.array(z.string()),
        youtube: z.string(),
        thumbnail: z.string(),
        pubDate: z.date().optional(),
    }),
});

export const collections = {
    'videos': videos,
}