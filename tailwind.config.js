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
        ColorEnfrente: '#e4f9ff',
      },
      animation: {
        'slide-carousel': 'slide 20s infinite',
      },
      keyframes: {
        slide: {
          '14%': { transform: 'translateX(-100%)' },
          '28%': { transform: 'translateX(-200%)' },
          '42%': { transform: 'translateX(-300%)' },
          '57%': { transform: 'translateX(-400%)' },
          '71%': { transform: 'translateX(-500%)' },
          '85%': { transform: 'translateX(-600%)' },
          '100%': { transform: 'translateX(-700%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
