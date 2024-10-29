import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
// https://shiki.style/themes
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'material-theme-ocean',
    },
  },
  integrations: [tailwind()],
})
