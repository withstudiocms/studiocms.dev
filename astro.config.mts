import { defineConfig } from 'astro/config';
import getCoolifyURL from './utils';

// https://astro.build/config
export default defineConfig({
	site: getCoolifyURL(true) || 'https://studiocms.dev',
	image: {
		remotePatterns: [
			{
				protocol: 'https',
			},
		],
	},
	integrations: [],
	experimental: {
		contentIntellisense: true,
		svg: true,
	},
});
