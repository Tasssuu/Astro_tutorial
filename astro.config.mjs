// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://coruscating-pothos-00bfc1.netlify.app/",
  integrations: [preact()]
});