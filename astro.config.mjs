import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  
  site: "https://Warmachine13.github.io",
  base: "/",
  integrations: [react(), tailwind()],
  vite: {
    
  }
});