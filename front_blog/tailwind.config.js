/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark-blue": "#1E2A38",
        "main-blue": "#4F5B66",
        "main-light-blue": "#7991a1",
        "main-green": "#4CAF50",
        "main-dark-green": "#2e6c31",
        "main-gray": "#D9D9D9",
        "main-dark-gray": "#A9A9A9",
      },
      fontFamily: {
        'mainFontFamily': 'Roboto',
      },
      keyframes: {
        blink: {
          '0%': {opacity: 1},
          '50%': {opacity: 0},
          '100%': {opacity: 1},
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blink': 'blink 0.7s infinite',
        'fade-in': 'fade-in 0.3s ease-out',
      }
    },
  },
  plugins: [],
}