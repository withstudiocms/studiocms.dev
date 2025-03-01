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
        }
    }
});
