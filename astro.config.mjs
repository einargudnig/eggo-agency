import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from "@astrojs/vercel";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://eggo.is",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
