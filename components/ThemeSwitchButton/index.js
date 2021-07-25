import { useTheme } from "../../Context/ThemeContext";
import { THEMES } from "../../constants";
const { DARK, LIGHT } = THEMES;

const ThemeSwitchButton = () => {
  const { setCurrentTheme, currentTheme } = useTheme();

  const handleThemeSwitch = () => {
    setCurrentTheme(currentTheme === DARK ? LIGHT : DARK);
  };

  return (
    <label className="py-2 bg-indigo-400 px-3 relative lg:h-8 h-6 w-16 cursor-pointer rounded-lg">
      <input
        onClick={handleThemeSwitch}
        type="checkbox"
        className="w-full h-full invisible peer"
      />
      <span className="h-full block absolute left-0 top-0 w-1/2 rounded-full bg-gray-400 peer-checked:bg-gray-800 peer-checked:left-10 transition-all"></span>
    </label>
  );
};

export { ThemeSwitchButton };
