import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters-nicko.netlify.app',
  output: 'hybrid',
  integrations: [react({
    include: ['./src/components/react/*']
  }), solid({
    include: ['./src/components/solid/*']
  })],
  adapter: netlify()
});