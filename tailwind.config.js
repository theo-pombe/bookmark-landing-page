/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/js/*.js"],
  theme: {
    extend: {
      animation: {
        collapse: "collapse 250ms ease-in-out",
        fade: "fade-in 2s ease-in-out",
        "fade-in": "fade-in 1s ease-in",
        "fade-out": "fade-out 1s ease-out",
      },
      keyframes: {
        collapse: {
          "0%": { opacity: 0.5 },
          "50%": { opacity: 0.75 },
          "100%": { opacity: 1 },
        },
        fade: {
          "0%": { opacity: 0.75 },
          "100%": { opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 0.5, transform: "translate(-75px)" },
          "100%": { opacity: 1, transform: "translate(0)" },
        },
      },
    },
    fontFamily: { Rubik: ["Rubik, sans-serif"] },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
        xl: "1024px",
        desktop: "1024px",
      },
    },
    colors: {
      SoftBlue: "hsl(231, 69%, 60%)",
      SoftRed: "hsl(0, 94%, 66%)",
      GrayishBlue: "hsl(229, 8%, 60%)",
      VeryDarkBlue: "hsl(229, 31%, 21%)",
      black: "rgb(0, 0, 0)",
      white: "rgb(250, 250, 250)",
      gray: "#cecece",
      transparent: "transparent",
    },
  },
  plugins: [],
};
