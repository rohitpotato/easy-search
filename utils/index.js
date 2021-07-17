import { THEMES } from "../constants";

const { DARK, LIGHT } = THEMES;

export const handleThemeInit = () => {
  const currentTheme = localStorage.getItem("theme");
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (!currentTheme && prefersDarkTheme) {
    document.body.classList.toggle(DARK);
  } else if (currentTheme === DARK) {
    document.body.classList.toggle(DARK);
  } else if (currentTheme === LIGHT) {
    document.body.classList.toggle(LIGHT);
  }
};

export const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const localStorageClient = () => {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }

  return {
    getItem: () => {},
    setItem: () => {},
    removeItem: () => {},
  };
};
