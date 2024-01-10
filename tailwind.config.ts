import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      direction: {
        rtl: "rtl",
      },
      colors: {
        gray: {
          200: "#ACACAC",
        },
        backgroundBlack: "#181822",
        borderColor: "#ffffff14",
        white: "#FFFFFF",
        blue: "#00a3ff",
        blueAlta: "#212e48",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
export default config;
