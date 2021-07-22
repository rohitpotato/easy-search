import React, { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { THEMES } from "../constants";
import { handleThemeSwitch } from "../utils";
const { LIGHT } = THEMES;

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", LIGHT);

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

export { ThemeContext, ThemeProvider };
