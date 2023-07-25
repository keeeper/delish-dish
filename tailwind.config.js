/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif']
      },
      colors: {
        'theme-primary-clr': '#0C9A61',
        'theme-primaryTransparent-clr': 'rgba(12, 154, 97, 0.1)',
        'bg-clr': '#FBFBFB',
        'text-clr-primary': '#242424',
        'text-clr-secondary': '#9C9C9C',
      },
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  plugins: [],
}
