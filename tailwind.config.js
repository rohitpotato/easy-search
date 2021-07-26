module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    fontFamily: {
      titilium: ["Titillium Web", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-mode-black": "#121212",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus", "group-hover"],
      transition: ["group-focus"],
      transform: ["group-focus"],
      translate: ["group-hover", "group-focus"],
    },
  },
  plugins: [],
};
