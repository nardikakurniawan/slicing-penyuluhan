module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pmbgreen: {
          DEFAULT: "#126E26",
          dark: "#093713",
          btn: "#22A527",
        },
        pmbred: {
          DEFAULT: "#FF1900",
          btn: "#CB374B",
        },
        pmbblue: {
          // DEFAULT: "#FF1900",
          btn: "#3340AE",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
