import {
	getDiscordMembers as discordMembers,
	getNpmMonthlyDownloads as npmDownloads,
	getStudioCMSStars as githubStars,
} from '../../utils/stats-helpers';

const responseMap = new Map<string, { lastCheck: Date; data: unknown }>();
const NPM_KEY = 'npm-downloads';
const lifetime = 3600;

/**
 * Retrieves the monthly download count for an npm package, utilizing a cache to reduce
 * redundant API calls. If the cached data is outdated or unavailable, it fetches fresh data
 * and updates the cache.
 *
 * @param packageName - The name of the npm package to retrieve download statistics for.
 * @returns A promise that resolves to the number of monthly downloads for the package,
 *          or `null` if the data could not be retrieved.
 */
export async function getNpmMonthlyDownloads(packageName: string): Promise<number | null> {
	const mapKey = NPM_KEY + packageName;

	const cacheData = responseMap.get(mapKey);

	if (
		!cacheData ||
		new Date(cacheData.lastCheck).getTime() < new Date(Date.now() - lifetime).getTime()
	) {
		const newData = await npmDownloads(packageName);

		responseMap.set(mapKey, { lastCheck: new Date(), data: newData });

		return newData;
	}
	return cacheData.data as number | null;
}

/**
 * Retrieves the number of stars for the StudioCMS repository.
 *
 * This function checks a cache (`responseMap`) for the stored star count. If the cache is
 * either empty or outdated (based on the `lifetime` threshold), it fetches the latest
 * star count using the `githubStars` function and updates the cache.
 *
 * @returns {Promise<number>} A promise that resolves to the number of stars for the StudioCMS repository.
 */
export async function getStudioCMSStars(): Promise<number> {
	const mapKey = 'stars';

	const cacheData = responseMap.get(mapKey);

	if (
		!cacheData ||
		new Date(cacheData.lastCheck).getTime() < new Date(Date.now() - lifetime).getTime()
	) {
		const newData = await githubStars();

		responseMap.set(mapKey, { lastCheck: new Date(), data: newData });

		return newData;
	}
	return cacheData.data as number;
}

/**
 * Retrieves the number of Discord members, utilizing a caching mechanism to reduce
 * redundant API calls. If the cached data is stale or unavailable, it fetches fresh
 * data and updates the cache.
 *
 * @returns {Promise<number>} A promise that resolves to the number of Discord members.
 */
export async function getDiscordMembers(): Promise<number> {
	const mapKey = 'discord-members';

	const cacheData = responseMap.get(mapKey);

	if (
		!cacheData ||
		new Date(cacheData.lastCheck).getTime() < new Date(Date.now() - lifetime).getTime()
	) {
		const newData = await discordMembers();

		responseMap.set(mapKey, { lastCheck: new Date(), data: newData });

		return newData;
	}
	return cacheData.data as number;
}
