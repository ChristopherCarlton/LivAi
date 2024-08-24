import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7E57C2", // Dark Lavender
        secondary: "#FFFFFF", // White
      },
      fontFamily: {
        craftgothic: ['Craft Gothic', 'sans-serif'], // Craft Gothic Black
        craftgothiclight: ['Craft Gothic Light', 'sans-serif'], // Craft Gothic Light
        craftgothiclightcondensed: ['Craft Gothic Light Condensed', 'sans-serif'], // Craft Gothic Light Condensed
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
