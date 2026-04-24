import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#2D5016",
        stone: "#D4C5A9",
        teal: "#3B7A8C",
        charcoal: "#2C2C2C",
        cream: "#FAF8F3",
      },
    },
  },
};

export default config;
