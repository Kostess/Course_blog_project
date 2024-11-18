/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#1E2A38",
        "main-green": "#4CAF50",
        "main-dark-green": "#2e6c31",
      },
      fontFamily: {
        'mainFontFamily': 'Roboto',
      },
      keyframes: {
        blink: {
          '0%': {opacity: 1},
          '50%': {opacity: 0},
          '100%': {opacity: 1},
        }
      },
      animation: {
        'blink': 'blink 0.7s infinite'
      }
    },
  },
  plugins: [],
}