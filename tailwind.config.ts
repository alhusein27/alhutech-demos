import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        // Alhutech agency brand: dark green + gold
        brand: {
          950: "#06231B",
          900: "#0B3D2E",
          800: "#0F4F3B",
          700: "#14654C",
        },
        gold: {
          300: "#F6D47E",
          400: "#EABF4C",
          500: "#D9A419",
          600: "#B58612",
        },
      },
    },
  },
  plugins: [],
};

export default config;
