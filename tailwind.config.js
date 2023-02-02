/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      colors: {
        toast: {
          '50': '#FFF6DF',
          '100': '#fdf7f1',
          '200': '#F8EEDB',
          '300': '#ebbf99',
          '400': '#dea373',
          '500': '#ce864f',
          '600': '#A1724E',
          '700': '#8c501c',
          '800': '#5c340f',
          '900': '#482307',
        },
      },
      container: {
        center: true,
      },
      skeletonScreen: {
        DEFAULT: {
          baseColor: '#3f3f46',
          movingColor: 'linear-gradient(to right, transparent 0%, #52525b 50%, transparent 100%)',
          duration: '1s',
          timing: 'linear',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('preline/plugin'),
    require('@gradin/tailwindcss-skeleton-screen'),
  ],
}
