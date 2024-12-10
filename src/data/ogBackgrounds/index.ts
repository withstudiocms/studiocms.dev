import type { CollectionEntry } from 'astro:content';
import { html } from 'satori-html';
import { satoriAstroOG } from '../../utils/satori/satoriOG';
import Accent from './accent.txt?raw';
import BluePurple from './blue-purple.txt?raw';
import BlueYellow from './blue-yellow.txt?raw';
import Fall from './fall.txt?raw';
import GreenAccent from './green-accent.txt?raw';
import Red from './red.txt?raw';
import Spring from './spring.txt?raw';
import Summer from './summer.txt?raw';
import Winter from './winter.txt?raw';

function parseVariant(variant: CollectionEntry<'blog'>['data']['ogVariant']) {
	switch (variant) {
		case 'accent':
			return Accent;
		case 'blue-purple':
			return BluePurple;
		case 'blue-yellow':
			return BlueYellow;
		case 'fall':
			return Fall;
		case 'green-accent':
			return GreenAccent;
		case 'red':
			return Red;
		case 'spring':
			return Spring;
		case 'summer':
			return Summer;
		case 'winter':
			return Winter;
		default:
			return Accent;
	}
}

export const SatoriEndpoint = async (
	variant: CollectionEntry<'blog'>['data']['ogVariant'],
	title: string,
	description: string
) => {
	const font = {
		400: await (
			await fetch('https://cdn.jsdelivr.net/fontsource/fonts/onest@latest/latin-400-normal.ttf')
		).arrayBuffer(),
		800: await (
			await fetch('https://cdn.jsdelivr.net/fontsource/fonts/onest@latest/latin-800-normal.ttf')
		).arrayBuffer(),
	};

	return await satoriAstroOG({
		template: html`
<div style='width: 100%; height: 100%; position: relative; display:flex'>
	<img src=${parseVariant(variant)} width="3840" height="2160" style='width: 100%; height: 100%; object-fit: cover; display: flex;' />
	<div style="left: 50%; top: 45%; transform: translate(-50%, -50%); position: absolute; color: white; font-size: 250px; font-family: Onest; font-weight: 800; word-wrap: break-word; display: flex; flex-direction: column; justify-items: center; align-items: center;">
	${title}
		<p style="font-size: 100px; margin: 0; font-family: Onest; font-weight: 400;">${description}</p>
	</div>
</div>
`,
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
