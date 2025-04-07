import db from '@astrojs/db';
import node from '@astrojs/node';
import cFetch from '@studiocms/cfetch';
import UI from '@studiocms/ui';
import { defineConfig } from 'astro/config';
import studiocms from 'studiocms';
import getCoolifyURL from './astro-config-utils';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: getCoolifyURL(true) || 'https://studiocms.dev',
	image: {
		remotePatterns: [
			{
				protocol: 'https',
			},
		],
	},
	integrations: [cFetch({ lifetime: '1h' }), UI(), db(), studiocms()],
	experimental: {
		svg: true,
	},
	security: {
		checkOrigin: false,
	},
	adapter: node({
		mode: 'standalone',
	}),
});
