import { getImage } from 'astro:assets';
import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

export async function getBlogCollection() {
	const blog = await getCollection('blog');
	const authors = await getCollection('authors');

	const blogSorted = blog.sort((a, b) => {
		return b.data.publishDate.getTime() - a.data.publishDate.getTime();
	});

	return blogSorted.map((post) => {
		const {
			author: { id: authorID },
			blueSky,
			description,
			hero,
			ogVariant,
			publishDate,
			tags,
			title,
		} = post.data;

		const { data: authorData } = authors.find((author) => {
			return authorID === author.id;
		});

		return {
			id: post.id,
			data: {
				title,
				description,
				publishDate,
				tags,
				blueSky,
				hero,
				ogVariant,
				author: authorData,
			},
			render: post,
		};
	});
}

export async function processPost(post: CollectionEntry<'blog'>) {
	return {
		imageProps: {
			src: post.data.hero
				? (await getImage({ src: post.data.hero.image as ImageMetadata, format: 'webp' })).src
				: `/blog/${post.id}/og.png`,
			alt: post.data.hero ? post.data.hero.alt : post.data.description,
			width: 800,
			height: 450,
		},
		title: post.data.title,
		description: post.data.description,
		link: `/blog/${post.id}`,
		author: (await getEntry(post.data.author)).data,
		publishDate: post.data.publishDate.toLocaleDateString('en-US', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		}),
	};
}

export async function getFeatureCollection() {
	const features = await getCollection('features');
	return features.sort((a, b) => {
		return Number(a.id) - Number(b.id);
	});
}
