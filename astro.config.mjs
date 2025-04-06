import { defineConfig } from 'astro/config';
import getCoolifyURL from './astro-config-utils';
import cFetch from '@studiocms/cfetch';

import UI from '@studiocms/ui';

import db from '@astrojs/db';
import node from '@astrojs/node';
import studiocms from 'studiocms';

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
