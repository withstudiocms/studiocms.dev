import { defineStudioCMSConfig } from 'studiocms/config';

export default defineStudioCMSConfig({
	dbStartPage: false,
	verbose: true,
	features: {
		authConfig: {
			providers: {
				usernameAndPasswordConfig: {
					allowUserRegistration: false,
				},
			},
		},
		dashboardConfig: {
			inject404Route: false,
		},
		pageTypeOptions: {
			markdown: {
				flavor: 'studiocms',
				autoLinkHeadings: false,
			},
		},
	},
	componentRegistry: {
		sponsorswithimages: './src/components/SponsorsWithImages.astro',
	},
	plugins: [],
});
