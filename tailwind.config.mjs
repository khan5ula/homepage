// default styles: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'antiquewhite',
        secondary: '#ffd000',
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
            code: {
              color: '#f6c177',
            },
            h1: {
              color: '#ffd000',
            },
            h2: {
              color: 'antiquewhite',
            },
            a: {
              color: '#ffd000',
              '&:hover': {
                textDecorationThickness: '1px',
              },
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
  plugins: [require('@tailwindcss/typography')],
}
