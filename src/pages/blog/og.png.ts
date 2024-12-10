import type { APIRoute } from 'astro';
import { SatoriEndpoint } from '../../data/ogBackgrounds';

export const GET: APIRoute = async () => {
	return await SatoriEndpoint(
		'green-accent',
		'StudioCMS Blog',
		'News and Updates related to StudioCMS'
	);
};
