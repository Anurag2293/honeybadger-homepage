/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif']
      },
      colors: {
        'light1': '#FEFF86',
        'light2': '#B0DAFF',
        'dark1': '#19A7CE',
        'dark2': '#146C94'
      },
      backgroundImage: {
        'about-hero': "url('/coding-1.avif')"
      }
    },
  },
  plugins: [],
});
