module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-mode-black": "#121212",
        "light-gray": "#ECEDF3",
        "light-text-purple": "#CBABF8",
        "dark-text-gray": "#313654",
        "light-bg-purple": "#F6EFFF",
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
