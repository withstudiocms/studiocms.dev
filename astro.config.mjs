import { defineConfig } from 'astro/config';
import getCoolifyURL from './utils';

import UI from '@studiocms/ui';

// https://astro.build/config
export default defineConfig({
  site: getCoolifyURL(true) || 'https://studiocms.dev',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },
  integrations: [UI()],
  experimental: {
    svg: true
  }
});