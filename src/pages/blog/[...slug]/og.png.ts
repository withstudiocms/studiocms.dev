import type { CollectionEntry } from 'astro:content';
import type { APIContext, APIRoute, GetStaticPaths } from 'astro';
import { SatoriEndpoint } from '../../../data/ogBackgrounds';
import { getBlogCollection } from '../../../utils/collectionUtils';

export const getStaticPaths = (async () => {
	const blogPosts = await getBlogCollection();

	return blogPosts.map((post) => ({
		params: {
			slug: post.id,
		},
		props: {
			post,
		},
	}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }: APIContext) => {
	const post: CollectionEntry<'blog'> = props.post;

	return await SatoriEndpoint(post.data.ogVariant, 'StudioCMS', post.data.description);
};
