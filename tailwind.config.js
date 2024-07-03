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
        'light-blue': '#7da8d2',
        'gray-6E': '#6E6E82',
        'gray-9F': '#9FA6B2',
        'gray-F1': '#F1F1F5',
        'gray-35': '#353542',
        'gray-25': '#252530',
      }
    },
  },
  plugins: [],
}