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
	console.log('Checking for COOLIFY_DOMAINNAME');

	const urlList = process.env.COOLIFY_DOMAINNAME;

	if (urlList === '$COOLIFY_FQDN') {
		console.error('COOLIFY_DOMAINNAME is set to $COOLIFY_FQDN');
		return undefined;
	}

	if (!urlList) {
		console.error('COOLIFY_DOMAINNAME is not set');
		return undefined;
	}

	console.log('COOLIFY_DOMAINNAME:', urlList);

	const url = splitListandSelectFirst(urlList);

	console.log('Main Selected COOLIFY_DOMAINNAME:', url);

	const strippedUrl = stripTrailingSlash(stripHTTPandHTTPS(url));

	if (returnHttps) {
		console.log('Returning HTTPS:', setHTTPS(strippedUrl));
		return setHTTPS(strippedUrl);
	}
	console.log('Returning HTTP:', setHTTP(strippedUrl));
	return setHTTP(strippedUrl);
};

export default getCoolifyURL;
