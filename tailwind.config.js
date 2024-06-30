/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pre: ['Pretendard', "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        'main-blue': '#4586c6',
        'light-blue': '#7da8d2'
      }
    },
  },
  plugins: [],
}