/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first_page_background': "url('./src/picture/first_page/first_page_background_enhance_webp.webp')",
        'second_page_background': "url('./src/picture/second_page/second_page_background-enhance_webp.webp')",
        'fifth_page_background': "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/picture/fifth_page/fifth_page_background-enhance_webp.webp')",
        'last_page_background': "url('./src/picture/last_page/last_page_background.webp')",
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'neutraFaceBold': ['Neutraface-Bold', 'sans-serif'],
        'neutraFaceBook': ['Neutraface-Book', 'sans-serif']
      },
    },
  },
  plugins: [],
}