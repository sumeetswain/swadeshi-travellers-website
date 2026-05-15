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
        brand: "#00B355",
      },
      keyframes: {
        borderDraw: {
          "0%": { borderColor: "transparent" },
          "25%": { borderTopColor: "#00B355" }, // brand
          "50%": { borderRightColor: "#00B355" },
          "75%": { borderBottomColor: "#00B355" },
          "100%": { borderLeftColor: "#00B355" },
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
