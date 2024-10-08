/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Рядок для пошуку класів у всіх JS/JSX/TSX файлах.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}