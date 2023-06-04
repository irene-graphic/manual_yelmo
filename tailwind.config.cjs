/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.sass", "./assets/**/*.scss",  "./app/*.{js,json}"],
  theme: {
    extend: {
      colors: {
        primary: '#FB3429', // red- yelmo
        primary_hover: '#B9241B', // red- oscuro
        black: '#1D1D1B',     
        dark_gray: '#171717', // nav-lateral-bg
        mid_gray: '#8C8C8C', // tamaño descargable
        light_gray: '#DADADA', // normal a - nav lateral
        light_gray_2: '#F4F4F4', // bg descargables
        white: '#FFFFFF',
      },
      fontSize: {
        base: "1rem"
      },
      dropShadow: {
        'cards': '0 0 11px rgba(22,40,244,.2)',
      }
    },
  },
  plugins: [],
};
