/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.jsx",
    "./src/*.js",
  ],
  theme: {
    extend: {},
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    }
  },
  plugins: [],
}
