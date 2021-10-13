module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greencolor: {
          DEFAULT: "#188D32",
          light: "#fdfefd",
          dark: "#063811",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
