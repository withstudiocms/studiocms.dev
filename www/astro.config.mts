import db from '@astrojs/db';
import node from '@astrojs/node';
import cFetch from '@studiocms/cfetch';
import { defineConfig } from 'astro/config';
import studiocms from 'studiocms';

function setHTTPS(url: string) {
	return `https://${url}`;
}

function splitListAndSelectFirst(list: string) {
	if (list.indexOf(',') === -1) return list;
	return list.split(',')[0];
}

/**
 * Get the Domain of the Coolify URL from the coolify runtime environment
 *
 * Requires the COOLIFY_FQDN environment variable to be set as per the coolify docs:
 *
 * @see https://coolify.io/docs/knowledge-base/environment-variables#predefined-variables
 */
export const getCoolifyURL = () => {
	const urlList = process.env.COOLIFY_FQDN; // should be a comma-separated list of URLs www.studiocms.dev,studiocms.dev
	if (!urlList) {
		return undefined;
	}
	const url = splitListAndSelectFirst(urlList);
	const strippedUrl = url;
	const newUrl = setHTTPS(strippedUrl);

	console.log('--------------------------------')
	console.log('Coolify ENV URL: ', newUrl);
	console.log('--------------------------------')
	return newUrl;
};

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: getCoolifyURL(),
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
