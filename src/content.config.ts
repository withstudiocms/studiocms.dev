import { reference, z } from 'astro:content';
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';

const authors = defineCollection({
	loader: glob({ pattern: '*.json', base: 'src/data/authors' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			avatar: image(),
			link: z.string().url(),
		}),
});

const blog = defineCollection({
	loader: glob({ pattern: '*.md', base: 'src/data/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().refine((value) => value.length < 50, {
				message: 'Description must be less than 50 characters',
			}),
			publishDate: z.date(),
			blueSky: z
				.object({
					postId: z.string(),
					profile: z.string().optional().default('studiocms.dev'),
				})
				.optional(),
			hero: z
				.object({
					image: image(),
					alt: z.string(),
				})
				.optional(),
			ogVariant: z
				.union([
					z.literal('accent'),
					z.literal('blue-purple'),
					z.literal('blue-yellow'),
					z.literal('fall'),
					z.literal('green-accent'),
					z.literal('red'),
					z.literal('spring'),
					z.literal('summer'),
					z.literal('winter'),
				])
				.optional(),
			author: reference('authors'),
			tags: z.array(z.string()).optional(),
		}),
});

const features = defineCollection({
	loader: file('src/features.json'),
	schema: z.object({
		feature: z.string(),
		description: z.string(),
		icon: z.string(),
	}),
});

export const collections = { authors, blog, features };
