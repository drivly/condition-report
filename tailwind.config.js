/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-1': '#FAF9FD',
        'gray-2': '#E3E1E3',
        'gray-3': '#E3E1E3',
        'gray-4': '#888888',
        'gray-5': '#535658',
        'gray-6': '#8a8f98',
        'green-accent': '#00CAB9',
        'dirty-yellow': '#CDC50A',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
        'dark-1': '#060611',
        'dark-2': '#2D2E36',
        'dark-3': '#24252D',
        'black-1': '#2D2E36',
        'black-2': '#1B1A21',
        'black-3': '#2A2D3A',
        'black-4': '#24252D',
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      monty: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
