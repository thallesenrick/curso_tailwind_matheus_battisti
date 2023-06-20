/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [{pattern: /^.*$/}],
  content: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': 'url(../img/bg_cidade.jpg)',
        'tailwind': 'url(../img/tailwind.png)'
      })
    },
  },
  plugins: [],         
}
