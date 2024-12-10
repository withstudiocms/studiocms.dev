import { Icon } from '@studiocms/ui/utils/index.js';
import AstroLogo from '../assets/astro.svg';
import MarkdownLogo from '../assets/markdown.svg';

const CustomIcons = {
	astro: AstroLogo,
	markdown: MarkdownLogo,
};

export function processFeatureIcon(icon: string) {
	if (icon.startsWith('heroicons:')) {
		return {
			Component: Icon,
			name: icon.replace('heroicons:', ''),
		};
	}

	if (icon in CustomIcons) {
		return {
			Component: CustomIcons[icon],
			name: undefined,
		};
	}

	return {
		Component: Icon,
		name: 'question-mark-circle',
	};
}
