/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
              color: 'inherit',
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
