import type { CollectionEntry } from 'astro:content';
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

export default parseVariant;
