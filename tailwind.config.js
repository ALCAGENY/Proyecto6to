/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ColorFondo: '#cbf0fa',
        ColorEnfrente: '#e4f9ff'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
