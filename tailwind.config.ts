import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0E74D",
        dark: "#121212",
        base: "#2A2A2A",
        line: "#3B3B3B",
        card: "#323232",
        textLight: "#5C5C5C",
        twitch: "#864CF6",
        darkAlt: "#222123",
      },
    },
  },
  plugins: [],
};
export default config;
