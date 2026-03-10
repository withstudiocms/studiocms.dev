import md from '@studiocms/md';
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
		// api: {
		// 	apiDocs: false
		// },
	},
	componentRegistry: {
		sponsorswithimages: './src/components/SponsorsWithImages.astro',
	},
	plugins: [
		md({
			autoLinkHeadings: false,
			callouts: 'obsidian',
			discordSubtext: true,
		}),
	],
});
