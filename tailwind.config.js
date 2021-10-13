module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greencolor: {
          DEFAULT: "#126e26",
          light: "#fdfefd",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
