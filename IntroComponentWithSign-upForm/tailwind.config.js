module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
      colors: {
        "regal-blue": "#342A7A",
      },
      backgroundImage: {
        "intro-lg": "url('/images/bg-intro-desktop.png')",
        "intro-sm": "url('/images/bg-intro-mobile.png')",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
