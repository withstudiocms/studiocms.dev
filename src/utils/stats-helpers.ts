import { cFetch } from 'c:fetch';

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
		const response = await cFetch(url);
		if (!response.ok) {
			throw new Error(`Error fetching data: ${response.statusText}`);
		}
		const data: { downloads: string } = await response.json();
		return Number.parseInt(`${data.downloads}`);
	} catch (error) {
		console.error('Failed to fetch npm downloads:', error);
		return null;
	}
}

/**
 * Get the number of stars on the StudioCMS GitHub repository
 *
 * @returns The number of stars on the StudioCMS GitHub repository
 */
export const getStudioCMSStars = async (): Promise<number> => {
	try {
		const response = await cFetch('https://api.github.com/repos/withstudiocms/studiocms', {
			headers: {
				Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
				Accept: 'application/vnd.github.v3+json',
			},
		});

		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status}`);
		}

		const data = await response.json();
		return Number.parseInt(`${data.stargazers_count}`);
	} catch (error) {
		console.error('Error fetching StudioCMS stars:', error);
		return 0;
	}
};

/**
 * Fetches the number of members in the Discord server.
 * @returns - The number of members in the Discord server.
 */
export async function getDiscordMembers() {
	try {
		const response = await cFetch('https://apollo.studiocms.dev/api/members/1309279407743172608');
		const data = await response.json();
		return Number.parseInt(`${data.members}`);
	} catch (error) {
		return 0;
	}
}
