/** @type {import('tailwindcss').Config} */
import { createGlobPatternsForDependencies } from "@nrwl/react/tailwind";
import { join } from "path";
export const content = [
  join(
    __dirname,
    "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
  ),
  ...createGlobPatternsForDependencies(__dirname),
];
export const theme = {
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "1024px",
    // => @media (min-width: 1090px) { ... }
    xl: "1440px",
    // => @media (min-width: 1440px) { ... }
  },

  extend: {
    backgroundImage: {
      Element: "url('/assets/images/yellow-waves.png')",
      Background: "url('/assets/images/background.svg')",
      Work: "url('/assets/images/yellow-underline-design.svg')",
      Whitewaves: "url('/assets/images/white-waves.svg')",
    },
    colors: {
      "dark-blue-500": "#0C2746",
      "dark-blue-100": "#143051",
      "light-blue": "#3880FF",
      color1:
        "conic-gradient(from 39.6deg at 50% 50%, rgba(142, 164, 79, 0) 0deg, #FDC7C7 14.26deg, rgba(231, 146, 209, 0.505208) 32.07deg, rgba(142, 164, 79, 0) 360deg)",
    },
  },
};
export const plugins = [];
