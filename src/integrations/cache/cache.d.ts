declare module 'quick-astro:cache' {
	/**
	 * Retrieves the number of Discord members, utilizing a caching mechanism to reduce
	 * redundant API calls. If the cached data is stale or unavailable, it fetches fresh
	 * data and updates the cache.
	 *
	 * @returns {Promise<number>} A promise that resolves to the number of Discord members.
	 */
	export const getDiscordMembers: typeof import('./wrappers').getDiscordMembers;
	/**
	 * Retrieves the number of stars for the StudioCMS repository.
	 *
	 * This function checks a cache (`responseMap`) for the stored star count. If the cache is
	 * either empty or outdated (based on the `lifetime` threshold), it fetches the latest
	 * star count using the `githubStars` function and updates the cache.
	 *
	 * @returns {Promise<number>} A promise that resolves to the number of stars for the StudioCMS repository.
	 */
	export const getStudioCMSStars: typeof import('./wrappers').getStudioCMSStars;
	/**
	 * Retrieves the monthly download count for an npm package, utilizing a cache to reduce
	 * redundant API calls. If the cached data is outdated or unavailable, it fetches fresh data
	 * and updates the cache.
	 *
	 * @param packageName - The name of the npm package to retrieve download statistics for.
	 * @returns A promise that resolves to the number of monthly downloads for the package,
	 *          or `null` if the data could not be retrieved.
	 */
	export const getNpmMonthlyDownloads: typeof import('./wrappers').getNpmMonthlyDownloads;
}
