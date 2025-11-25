
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: cloudflare({
    format: 'service-worker', // <-- key for Worker deploy
    assets: 'dist/client',    // <-- serve static assets
  }),
});
