/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        telugu: ['Noto Serif Telugu', 'Noto Sans Telugu', 'serif'],
      },
      colors: {
        ivory: '#FFFFF0',
        cream: '#FFFDD0',
        beige: {
          50: '#faf9f6',
          100: '#f5f5dc',
          200: '#e8e5c0',
          300: '#dcd5a4',
          400: '#cfc488',
          500: '#c2b36c',
        },
        charcoal: {
          900: '#36454F',
          950: '#263038',
        },
        gold: {
          400: '#D4AF37',
          500: '#C5A017',
        },
        burgundy: '#800020'
      }
    },
  },
  plugins: [],
}
