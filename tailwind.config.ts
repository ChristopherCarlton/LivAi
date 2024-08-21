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
        // primary:"#1A3677", // Navy Blue
        // secondary: "#ffffff", // White
        // accent: "#00BFFF", // Deep Sky Blue

        // primary: "#39FF14", // Neon Green
        // secondary: "#0A0A0A", // Charcoal Black

        // primary: "#d9b99b", //Beije
        // secondary: "#0A0A0A", // Charcoal Black

        // primary: "#424242", //Gray
        // secondary: "#0A0A0A", //Charcoal Black

        // primary: "#616161", // Dark Gray
        // secondary: "#FAFAFA", // Off White

        // primary: "#004D40", // Dark Green
        // secondary: "#B2DFDB", // Pale Green

        // primary: "#00796B", // Teal
        // secondary: "#E0F7FA", // Light Cyan

        // primary: "#1E88E5", // Blue
        // secondary: "#E3F2FD", // Light Blue

        // primary: "#3949AB", // Indigo
        // secondary: "#ffffff", // White

//         primary: "#D1C4E9", // Light Lavender
// secondary: "#FFFFFF", // White

primary: "#7E57C2", // Dark Lavender
secondary: "#FFFFFF", // White

// primary: "#B39DDB", // Medium Lavender
// secondary: "#FFFFFF", // White



        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        chunkfive: ['ChunkFive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
