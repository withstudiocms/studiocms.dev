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
export const getCoolifyURL = (returnHttps?: boolean) => {
	const urlList = process.env.COOLIFY_FQDN;
	if (!urlList) {
		return undefined;
	}
	const url = splitListAndSelectFirst(urlList);
	const strippedUrl = stripTrailingSlash(stripHTTPandHTTPS(url));
	if (returnHttps) {
		return setHTTPS(strippedUrl);
	}
	return setHTTP(strippedUrl);
};

export default getCoolifyURL;

/**
 * Get the number of stars on the StudioCMS GitHub repository
 *
 * @returns The number of stars on the StudioCMS GitHub repository
 */
export const getStudioCMSStars = async (): Promise<number> => {
	const response = await fetch('https://api.github.com/repos/withstudiocms/studiocms');
	try {
		const data = await response.json();
		return data.stargazers_count;
	} catch (error) {
		console.error('Error fetching StudioCMS stars:', error);
		return 0;
	}
};

/**
 * Fetches the number of downloads for an npm package over the past month.
 *
 * @param packageName - The name of the npm package to retrieve download statistics for.
 * @returns A promise that resolves to the number of downloads in the past month,
 *          or `null` if the fetch operation fails.
 *
 * @throws Will throw an error if the HTTP request fails with a non-OK status.
 *
 * @example
 * ```typescript
 * const downloads = await getNpmMonthlyDownloads("react");
 * console.log(`React was downloaded ${downloads} times last month.`);
 * ```
 */
export async function getNpmMonthlyDownloads(packageName: string) {
	const today = new Date();
	const lastMonth = new Date();
	lastMonth.setMonth(today.getMonth() - 1);

	const startDate = lastMonth.toISOString().split('T')[0];
	const endDate = today.toISOString().split('T')[0];

	const url = `https://api.npmjs.org/downloads/point/${startDate}:${endDate}/${packageName}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error fetching data: ${response.statusText}`);
		}
		const data: { downloads: number | string } = await response.json();
		console.log(`Package: ${packageName}, Monthly Downloads: ${data.downloads}`);
		return data.downloads;
	} catch (error) {
		console.error('Failed to fetch npm downloads:', error);
		return null;
	}
}
