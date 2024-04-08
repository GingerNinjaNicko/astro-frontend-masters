import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['./src/components/react/*'],
    }),
    solid({
      include: ['./src/components/solid/*'],
    }),
  ]
});