import { defineConfig, envField } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrocourse.dev',
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  output: 'server',
  adapter: netlify(),
  experimental: {
    env: {
      schema: {
        PUBLIC_NEWSLETTER_ID: envField.number({
          context: 'client',
          access: 'public',
        }),
        PUBLIC_NEWSLETTER_SUBSCRIBE_URL: envField.string({
          context: 'client',
          access: 'public',
        }),
        XATA_BRANCH: envField.string({
          context: 'server',
          access: 'public',
        }),
        XATA_API_KEY: envField.string({
          context: 'server',
          access: 'secret',
        }),
      },
    },
  },
});
