/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: '#00CE84',
        brandSecondary: '#FFECCA',
        brandTertiary: '#DAF0FF',
        text: {
          900: '#000000',
          600: '#24272D',
        }
      }
    },
    fontFamily: {
      serif: ['"Source Serif 4"', "serif"]
    }
  },
  plugins: [],
}

