// default styles: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js

import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'white',
        secondary: '#818cf8',
      },
      scale: {
        11: '1.1',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            h1: {
              color: '#818cf8',
            },
            h2: {
              color: '#818cf8',
            },
            h3: {
              color: '#818cf8',
            },
            a: {
              color: '#818cf8',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [typography],
}
