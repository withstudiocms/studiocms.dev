import rss from '@astrojs/rss';
import type { APIContext, APIRoute } from 'astro';
import { getBlogCollection } from '../utils/collectionUtils';

export const GET: APIRoute = async ({ site }: APIContext) => {
	// Get the blog collection
	const blog = await getBlogCollection();

	return rss({
		title: 'StudioCMS',
		description:
			'A dedicated CMS for Astro and Astro DB. Built from the ground up by the Astro community.',
		site: site,
		stylesheet: '/styles/rss.xsl',
		items: blog.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			categories: post.data.tags,
			author: post.data.author.link,
			link: `${site}blog/${post.id}`,
			commentsUrl: `https://bsky.app/profile/${post.data.blueSky.profile}/post/${post.data.blueSky.postId}`,
		})),
	});
};
