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
      },
      colors: {
        'primary': '#0C9A61',
        'primaryTransparent': 'rgba(12, 154, 97, 0.1)',
        'bg': '#FBFBFB',
        'text-primary': '#242424',
        'text-secondary': '#9C9C9C',
      },
      borderWidth: {
        DEFAULT: '1px',
      }
    },
  },
  plugins: [],
}
