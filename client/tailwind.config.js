/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'nav': '#514A80',
      
      'side-nav': '#797E89',
      'side-nav-text-active': '#FFFFFF',
      'side-nav-text-inactive': '#000000',

      'content': '#F9FBFF',
      'content-highlight': '#FFFFFF',

      'dashboard': '#E6E2FF',

      'mobile-nav-highlight': '#a89bff',
      'mobile-nav-hover': '#665CA4',

      'text-primary': '#000000',
      'text-clickable': '#2B14CE',
      'text-inactive': '#A0A0A0',

      'past-highlight': '#DFDDDD',
      'booked-highlight': '#BEBDFF',
      'available-highlight': "#B2FDAC",

    },
    extend: {},
  },
  plugins: []
}

