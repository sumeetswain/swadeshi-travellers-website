import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#22c55e",
      },
      keyframes: {
        borderDraw: {
          "0%": { borderColor: "transparent" },
          "25%": { borderTopColor: "#22c55e" }, // green-500
          "50%": { borderRightColor: "#22c55e" },
          "75%": { borderBottomColor: "#22c55e" },
          "100%": { borderLeftColor: "#22c55e" },
        },
      },
      animation: {
        borderDraw: "borderDraw 1s linear forwards",
      },
    },
  },
  plugins: [],
};

export default config;
