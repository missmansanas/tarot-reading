/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'cat': `url('./assets/cat-cursor.cur'), pointer`,
      }
    },
  },
  plugins: [],
}