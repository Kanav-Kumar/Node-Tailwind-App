const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      latoBlack: ["LatoBlack"],
      latoBlackItalic: ["LatoBlackItalic"],
      latoBold: ["LatoBold"],
      latoBoldItalic: ["LatoBoldItalic"],
      latoItalic: ["LatoItalic"],
      latoLight: ["LatoLight"],
      latoLightItalic: ["LatoLightItalic"],
      latoRegular: ["LatoRegular"],
      latoThin: ["LatoThin"],
      latoThinItalic: ["LatoThinItalic"],
    },
  },
  plugins: [],
};
