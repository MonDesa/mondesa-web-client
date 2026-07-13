// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mondesa.com.br',
  // Fully static: every route is prerendered to HTML and served from Cloudflare
  // static assets. The cloudflare adapter is kept for platform integration.
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()],

  // Legacy camelCase project slug -> canonical lower kebab-case.
  redirects: {
    '/projects/fireRiskPredictor': '/projects/fire-risk-predictor',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
