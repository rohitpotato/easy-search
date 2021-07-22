import { THEMES } from "../constants";

const { DARK, LIGHT } = THEMES;

export const handleThemeSwitch = (theme) => {
  const root = window.document.documentElement;
  const isDark = theme === DARK;
  root.classList.remove(isDark ? LIGHT : DARK);
  root.classList.add(theme);
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
