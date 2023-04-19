import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import svelte from '@astrojs/svelte';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrocourse.dev',
  integrations: [mdx(), sitemap(), tailwind(), image(), svelte()],
  output: 'server',
  adapter: netlify(),
});
