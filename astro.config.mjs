import { defineConfig } from 'astro/config';
import getCoolifyURL from './utils';

import UI from '@studiocms/ui';

import db from '@astrojs/db';
import node from '@astrojs/node';
import studiocms from 'studiocms';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: getCoolifyURL(true) || 'https://new.studiocms.dev',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },
  integrations: [
    UI(),
    db(),
    studiocms()
  ],
  experimental: {
    svg: true
  },
  adapter: node({
    mode: 'standalone'
  })
});