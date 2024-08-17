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
        primary: "#39FF14", // Neon Green
        // primary: "#7B7973",
        secondary: "#0A0A0A", // Charcoal Black
        accent: "#00BFFF", // Deep Sky Blue
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
