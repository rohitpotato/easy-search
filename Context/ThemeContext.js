import React, { useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { THEMES } from "../constants";
import { handleThemeSwitch } from "../utils";
const { DARK } = THEMES;

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", DARK);
  useEffect(() => {
    handleThemeSwitch(currentTheme);
  }, [currentTheme]);

  const values = {
    currentTheme,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  if (!ThemeContext) {
    throw new Error(
      "Children should be wrapped with ThemeProvider for useTheme to work"
    );
  }
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  return { currentTheme, setCurrentTheme };
};

export { ThemeContext, ThemeProvider, useTheme };
