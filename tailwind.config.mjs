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
              color: 'theme("colors.secondary")',
            },
            h2: {
              color: 'theme("colors.primary")',
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
      fontFamily: {
        mono: ['Roboto'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
