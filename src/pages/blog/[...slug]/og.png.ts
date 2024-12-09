import type { CollectionEntry } from 'astro:content';
import type { APIContext, APIRoute, GetStaticPaths } from 'astro';
import { html } from 'satori-html';
import parseVariant from '../../../data/ogBackgrounds';
import { getBlogCollection } from '../../../utils/collectionUtils';
import { satoriAstroOG } from '../../../utils/satori/satoriOG';

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

	const font = {
		400: await (
			await fetch('https://cdn.jsdelivr.net/fontsource/fonts/onest@latest/latin-400-normal.ttf')
		).arrayBuffer(),
		800: await (
			await fetch('https://cdn.jsdelivr.net/fontsource/fonts/onest@latest/latin-800-normal.ttf')
		).arrayBuffer(),
	};

	const variant = parseVariant(post.data.ogVariant);

	return await satoriAstroOG({
		template: html`
			<div style='width: 100%; height: 100%; position: relative; display:flex'>
				<img src=${variant} width="3840" height="2160" style='width: 100%; height: 100%; object-fit: cover; display: flex;' />
				<div style="left: 50%; top: 45%; transform: translate(-50%, -50%); position: absolute; color: white; font-size: 250px; font-family: Onest; font-weight: 800; word-wrap: break-word; display: flex; flex-direction: column; justify-items: center; align-items: center;">
					StudioCMS
					<p style="font-size: 100px; margin: 0; font-family: Onest; font-weight: 400;">${post.data.description}</p>
				</div>
			</div>`,
		width: 3840,
		height: 2160,
	}).toResponse({
		satori: {
			fonts: [
				{
					name: 'Onset',
					data: font[400],
					weight: 400,
					style: 'normal',
				},
				{
					name: 'Onset',
					data: font[800],
					weight: 800,
					style: 'normal',
				},
			],
		},
	});
};
