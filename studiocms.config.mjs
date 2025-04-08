import { defineStudioCMSConfig } from 'studiocms/config';
import socialPoster from '@studiocms/socialposter';

export default defineStudioCMSConfig({
	dbStartPage: false,
	verbose: true,
	dashboardConfig: {
		AuthConfig: {
			providers: {
				usernameAndPasswordConfig: {
					allowUserRegistration: false,
				},
			},
		},
		inject404Route: false,
	},
	pageTypeOptions: {
		markdown: {
			flavor: 'studiocms',
			autoLinkHeadings: false,
		},
	},
	componentRegistry: {
		sponsorswithimages: './src/components/SponsorsWithImages.astro',
	},
	plugins: [
		socialPoster({
			bluesky: true,
			twitter: true,
		}),
	],
});
