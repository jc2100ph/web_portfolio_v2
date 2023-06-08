/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first_page_background': "url('./src/picture/first_page/first_page_background_enhance_webp.webp')"
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}