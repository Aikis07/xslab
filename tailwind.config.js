/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '675': '675px',
        '270': '270px',
        '206': '206px'
      },
      colors: {
        'black-footer': '#0B0B0B',
        'black-button': '#191919'
      }
    },
  },
  plugins: [],
}
