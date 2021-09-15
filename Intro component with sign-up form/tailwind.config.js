module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],

      height: ["hover", "focus", "group-hover"],
      width: ["responsive", "hover", "focus", "group-hover"],
      transform: ["hover", "focus"],
      scale: ["active", "group-hover", "hover", "focus"],
      transitionProperty: ["responsive", "hover", "focus"],
      transitionTimingFunction: ["responsive", "hover", "focus"],
      transitionDuration: ["responsive", "hover", "focus"],
      transitionDelay: ["responsive", "hover", "focus"],
    },
  },
};
