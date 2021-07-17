import { THEMES } from "../../constants";
const { DARK, LIGHT } = THEMES;

const ThemeSwitchButton = () => {
  const handleThemeSwitch = () => {
    let currentTheme;
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkTheme.matches) {
      document.body.classList.toggle(LIGHT);
      currentTheme = document.body.classList.contains(LIGHT) ? LIGHT : DARK;
    } else {
      document.body.classList.toggle(DARK);
      currentTheme = document.body.classList.contains(DARK) ? DARK : LIGHT;
    }
    localStorage.setItem("theme", currentTheme);
  };

  return <button onClick={handleThemeSwitch}>Switch The Theme Less goo</button>;
};

export { ThemeSwitchButton };
