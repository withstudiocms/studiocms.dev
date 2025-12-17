import node from '@astrojs/node';
import cFetch from '@studiocms/cfetch';
import { defineConfig } from 'astro/config';
import studiocms from 'studiocms';

const site = process.env.DOKPLOY_DEPLOY_URL
	? `https://${process.env.DOKPLOY_DEPLOY_URL}`
	: 'https://studiocms.dev/';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site,
	image: {
		remotePatterns: [
			{
				protocol: 'https',
			},
		],
	},
	integrations: [cFetch({ lifetime: '1h' }), studiocms()],
	security: {
		checkOrigin: false,
	},
	adapter: node({
		mode: 'standalone',
	}),
});
