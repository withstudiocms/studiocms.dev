import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
// import getCoolifyURL from './utils';

// https://astro.build/config
export default defineConfig({
	site: 'https://studiocms.dev',
	image: {
		remotePatterns: [
			{
				protocol: 'https',
			},
		],
	},
	integrations: [icon(), tailwind()],
	experimental: {
		contentIntellisense: true,
		svg: {
			mode: 'inline',
		},
	},
});
