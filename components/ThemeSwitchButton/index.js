import { THEMES } from "../../constants";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
const { DARK, LIGHT } = THEMES;

const ThemeSwitchButton = () => {
  const { setCurrentTheme, currentTheme } = useContext(ThemeContext);

  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === DARK ? LIGHT : DARK);
  };

  return <button onClick={handleThemeSwitch}>Switch The Theme Less goo</button>;
};

export { ThemeSwitchButton };
