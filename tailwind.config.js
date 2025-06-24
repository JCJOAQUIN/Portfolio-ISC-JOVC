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
        'LightBg': '#F4F4F5',
        'Primary': '#27588A',
        'Secondary': '#8A2774',
        'PrimaryLow': '#245381',
        'PrimaryBlack': '#1B3D5F',
        'SecondaryLow': '#81246D',
        'SecondaryBlack': '#5F1B50',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}