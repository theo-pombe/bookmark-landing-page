/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
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
