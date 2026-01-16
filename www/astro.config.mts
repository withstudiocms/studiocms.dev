import node from '@astrojs/node';
import cFetch from '@studiocms/cfetch';
import { defineConfig } from 'astro/config';
import studiocms from 'studiocms';

const site =
	process.env.NODE_ENV === 'production'
		? process.env.DOKPLOY_DEPLOY_URL
			? `https://${process.env.DOKPLOY_DEPLOY_URL}`
			: 'https://studiocms.dev/'
		: 'http://localhost:4321';

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
	integrations: [cFetch({ lifetime: '1 hour' }), studiocms()],
	security: {
		checkOrigin: false,
	},
	adapter: node({
		mode: 'standalone',
	}),
});
