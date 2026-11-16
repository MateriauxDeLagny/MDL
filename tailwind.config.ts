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
        orange: {
          DEFAULT: "#C8202A",
          50: "#FFF0F0",
          100: "#FFDADB",
          200: "#FFB0B3",
          300: "#FF7880",
          400: "#EC404A",
          500: "#C8202A",
          600: "#A01820",
          700: "#781015",
          800: "#50080A",
          900: "#280005",
        },
        dark: "#1B2A6B",
        "dark-80": "#263891",
        "warm-white": "#F4F2EE",
        "warm-100": "#EAE7E1",
        "warm-border": "#DDD9D1",
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
        screens: { "2xl": "1200px" },
      },
    },
  },
  plugins: [],
};

export default config;
