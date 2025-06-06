/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#04233d',
        'secondary': '#046ec9',
        'Error': '#ff0000',
        'Success': '#01732b',
        'Alert': '#ffbb00',
        'Information': '#7c7c7d',
        'Secondary-DarkSoft': '#0981e8',
        'Secondary-Dark': '#02549c',
        'Primary-DarkSoft': '#0a4b82',
        'Primary-Dark': '#001526',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}