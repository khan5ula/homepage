// default styles: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        secondary: '#ffd000',
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
              color: 'theme("colors.secondary")',
            },
            h2: {
              color: 'antiquewhite',
            },
            a: {
              color: 'theme("colors.secondary")',
              '&:hover': {
                textDecorationThickness: '1px',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
