/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1090px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      backgroundImage: {
        Element: "url('../public/assets/images/yellow-waves.png')",
        Background: "url('../public/assets/images/background.svg')",
        Work: "url('../public/assets/images/yellow-underline-design.svg')",
        Whitewaves: "url('../public/assets/images/white-waves.svg')",
      },
      colors: {
        'dark-blue-500': '#0C2746',
        'dark-blue-100': '#143051',
        'light-blue': '#3880FF',
        color1:
          'conic-gradient(from 39.6deg at 50% 50%, rgba(142, 164, 79, 0) 0deg, #FDC7C7 14.26deg, rgba(231, 146, 209, 0.505208) 32.07deg, rgba(142, 164, 79, 0) 360deg)',
      },
    },
  },
  plugins: [],
};
