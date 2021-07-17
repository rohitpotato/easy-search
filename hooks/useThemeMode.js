import { useEffect } from "react";
import { THEMES } from "../constants";
const { DARK, LIGHT } = THEMES;

export const useThemeMode = () => {
  useEffect(() => {
    const handleTheme = (e) => {
      const prefersDarkTheme = e.matches;
      prefersDarkTheme
        ? localStorage.setItem("theme", DARK)
        : localStorage.setItem("theme", LIGHT);
      document.body.className = "";
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleTheme);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleTheme);
    };
  }, []);
};
