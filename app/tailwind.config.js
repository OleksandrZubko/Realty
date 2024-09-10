/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    extend: {},
    container: {
      center: true
    }
  },
  plugins: []
}
