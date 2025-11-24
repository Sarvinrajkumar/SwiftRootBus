
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: cloudflare({
    includeFiles: ['dist/assets/**/*'], // <-- include all generated CSS/JS/images
  }),
  output: 'server',
  build: {
    assets: 'assets', // make sure Astro puts CSS/JS in 'dist/assets'
  },
});
