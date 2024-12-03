import { getCollection, getEntry } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext, APIRoute } from 'astro';

import { experimental_AstroContainer as AstroContainer } from 'astro/container';

export const GET: APIRoute = async ({ site }: APIContext) => {
	// Get the blog collection
	const blog = await getCollection('blog');

	// Create an Astro container to render the blog post content
	const container = await AstroContainer.create();

	return rss({
		title: 'StudioCMS',
		description:
			'A dedicated CMS for Astro and Astro DB. Built from the ground up by the Astro community.',
		site: site,
		trailingSlash: false,
		stylesheet: '/styles/rss.xsl',
		items: await Promise.all(
			blog
				.sort(
					// Sort the blog posts by publish date from newest to oldest
					({ data: { publishDate: a } }, { data: { publishDate: b } }) => b.getTime() - a.getTime()
				)
				.map(async ({ render, slug, data: { title, description, tags, publishDate, author } }) => ({
					title: title,
					description: description,
					pubDate: publishDate,
					categories: tags,
					author: (await getEntry(author.collection, author.id)).data.link,
					link: `${site}blog/${slug}`,
					content: await container.renderToString((await render()).Content),
				}))
		),
	});
};
