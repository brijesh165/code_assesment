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
      cardColor: "#ffffff",
      cardBorder: "#e6e6e6",
      cardBorder1: "#DADEDF",
      bgGrey: "#D8D8D8",
      fontDark: "#212121",
      fontDark1: "#182021",
      fontError: "#D86161",
      fontWhite: "#fafafa",
      fontPlaceholder: "#7a7a7a",
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
