import { useTheme } from "../../Context/ThemeContext";
import { THEMES } from "../../constants";
const { DARK, LIGHT } = THEMES;

const ThemeSwitchButton = () => {
  const { setCurrentTheme, currentTheme } = useTheme();

  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === DARK ? LIGHT : DARK);
  };

  return (
    <label className="relative block h-6 w-16 cursor-pointer rounded shadow-sm transparent border border-1 border-gray-300 text-gray-600">
      <input
        onClick={handleThemeSwitch}
        type="checkbox"
        defaultChecked={currentTheme === DARK}
        className="w-full h-full invisible peer"
      />
      <span className="h-full block absolute left-0 top-0 w-1/2 rounded bg-gray-400 peer-checked:bg-dark-text-gray peer-checked:left-8 transition-all"></span>
    </label>
  );
};

export { ThemeSwitchButton };
