module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pmbgreen: {
          DEFAULT: "#126E26",
          dark: "#093713",
          light: "#408321",
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

      spacing: {
        464: "464px",
        84: "21rem",
        99: "30rem",
        100: "40rem",
      },

      fontFamily: {
        primary: ["Tahoma"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
