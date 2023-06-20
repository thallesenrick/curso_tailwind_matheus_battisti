const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [{pattern: /^.*$/}],
  content: [],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C7A'
      },
      gray: {
        ...colors.gray,
        '900': '#999',
      },
      spacing: {
        '50': '20rem'
      },
    },
  },
  plugins: [],
}
