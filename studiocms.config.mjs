import { defineStudioCMSConfig } from "studiocms/config";

export default defineStudioCMSConfig({
    dbStartPage: false,
    dashboardConfig: {
        AuthConfig: {
            providers: {
                usernameAndPasswordConfig: {
                    allowUserRegistration: false,
                }
            }
        },
        inject404Route: false,
    },
    pageTypeOptions: {
        markdown: {
            flavor: "astro",
            autoLinkHeadings: false,
        }
    }
});
