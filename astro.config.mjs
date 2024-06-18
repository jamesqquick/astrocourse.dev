import { defineConfig, envField } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrocourse.dev',
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  output: 'server',
  adapter: netlify(),
  env: {
    schema: {
      PUBLIC_NEWSLETTER_ID: envField.number({
        context: 'client',
        access: 'public',
      }),
      PUBLIC_NEWSLETTER_SUBSCRIBE_URL: envField.string({
        context: 'client',
        access: 'public',
        default: false,
      }),
      XATA_BRANCH: envField.string({
        context: 'server',
        access: 'public',
        default: 'DEV',
      }),
      XATA_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
});

//
// PUBLIC_NEWSLETTER_SUBSCRIBE_URL;
// XATA_BRANCH;
// XATA_API_KEY;
