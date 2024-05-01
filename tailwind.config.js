/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50":"#f0fdf4",
          "100":"#dcfce7",
          "200":"#bbf7d0",
          "300":"#86efac",
          "400":"#4ade80",
          "500":"#22c55e",
          "600":"#16a34a",
          "700":"#15803d",
          "800":"#166534",
          "900":"#14532d",
          "950":"#052e16"},
        amber: {
          "50": "#FFF8E1",
          "100": "#FFECB3",
          "200": "#FFE082",
          "300": "#FFD54F",
          "400": "#FFCA28",
          "500": "#FFC107",
          "600": "#FFB300",
          "700": "#FFA000",
          "800": "#FF8F00",
          "900": "#FF6F00",
          "A100": "#FFE57F",
          "A200": "#FFD740",
          "A400": "#FFC400",
          "A700": "#FFAB00"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
