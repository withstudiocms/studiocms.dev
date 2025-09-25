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
 * Requires the COOLIFY_DOMAIN environment variable to be set as per the coolify docs:
 *
 * @see https://coolify.io/docs/knowledge-base/environment-variables#predefined-variables
 */
export const getCoolifyURL = () => {
	const urlList = process.env.COOLIFY_DOMAIN; // should be a comma-separated list of URLs www.studiocms.dev,studiocms.dev
	if (!urlList) {
		return undefined;
	}
	const url = splitListAndSelectFirst(urlList);
	const strippedUrl = url;
	return setHTTPS(strippedUrl);
};

export default getCoolifyURL;
