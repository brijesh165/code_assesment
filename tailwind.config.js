/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "rgba(21, 151, 228, 0.83)",
      white: "#ffffff",
      offWhite: "#fafafa",
      gray: "#e6e6e6",
      gray1: "#DADEDF",
      gray2: "#7a7a7a",
      background: "#D8D8D8",
      dark: "#212121",
      dark1: "#182021",
      danger: "#D86161",
    },
    extend: {
      animation: {
        bounce100: "bounce 1s infinite 100ms",
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
};
