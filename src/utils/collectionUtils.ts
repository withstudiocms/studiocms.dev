import { getCollection } from 'astro:content';

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

export async function getFeatureCollection() {
	const features = await getCollection('features');
	return features.sort((a, b) => {
		return Number(a.id) - Number(b.id);
	});
}
