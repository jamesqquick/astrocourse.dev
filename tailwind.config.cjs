/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0e153f',
        'seconday-purple': '#b644ec',
        'secondary-blue': '#3345ff',
        'dark-purple': '#5c2377',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /self-(start|center|end)/,
    },
  ],
};
