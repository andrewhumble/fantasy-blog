import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { THEME_CONFIG } from "./src/theme.config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkMermaid from 'remark-mermaid';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/fantasy-forecast/',
  site: THEME_CONFIG.website,
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: [],
      wrap: true,
    },
    // remarkPlugins: [remarkMermaid],
  },
  integrations: [
    UnoCSS({
      injectReset: true
    }),
    robotsTxt(),
    sitemap(),
    mdx(),
    react()
  ]
});
