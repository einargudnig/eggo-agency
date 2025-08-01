import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://eggo.is",
  integrations: [tailwind(), react()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    functionPerRoute: false, // Add this line
  }),
  output: "server",
});
