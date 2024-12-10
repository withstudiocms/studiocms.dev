function stripHTTPandHTTPS(url: string) {
	return url.replace('http://', '').replace('https://', '');
}

function stripTrailingSlash(url: string) {
	return url.replace(/\/$/, '');
}

function setHTTP(url: string) {
	return `http://${url}`;
}

function setHTTPS(url: string) {
	return `https://${url}`;
}

function splitListandSelectFirst(list: string) {
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
export const getCoolifyURL = (returnHttps?: boolean) => {
	console.log('Checking for COOLIFY_FQDN');

	const urlList = process.env.COOLIFY_FQDN;
	if (!urlList) {
		console.error('COOLIFY_FQDN is not set');
		return undefined;
	}

	console.log('COOLIFY_FQDN:', urlList);

	const url = splitListandSelectFirst(urlList);

	console.log('Main Selected COOLIFY_FQDN:', url);

	const strippedUrl = stripTrailingSlash(stripHTTPandHTTPS(url));

	if (returnHttps) {
		console.log('Returning HTTPS:', setHTTPS(strippedUrl));
		return setHTTPS(strippedUrl);
	}
	console.log('Returning HTTP:', setHTTP(strippedUrl));
	return setHTTP(strippedUrl);
};

export default getCoolifyURL;
