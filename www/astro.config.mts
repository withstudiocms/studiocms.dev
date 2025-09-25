import db from '@astrojs/db';
import node from '@astrojs/node';
import cFetch from '@studiocms/cfetch';
import getCoolifyURL from './astro-config-utils';
import { defineConfig } from 'astro/config';
import studiocms from 'studiocms';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: getCoolifyURL() || 'https://studiocms.dev',
	image: {
		remotePatterns: [
			{
				protocol: 'https',
			},
		],
	},
	integrations: [cFetch({ lifetime: '1h' }), db(), studiocms()],
	security: {
		checkOrigin: false,
	},
	adapter: node({
		mode: 'standalone',
	}),
});
