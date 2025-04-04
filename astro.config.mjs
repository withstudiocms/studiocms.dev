import { defineConfig } from 'astro/config';
import getCoolifyURL from './astro-config-utils';
import { astroCache } from './src/integrations/cache/index';

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
	integrations: [astroCache(), UI(), db(), studiocms()],
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
