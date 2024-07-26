/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'index.html',
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: '#f0f8ff',
        test: 'pink',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
