import Image from "next/image";
import { ThemeSwitchButton } from "../ThemeSwitchButton/";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <div className="text-4xl font-bold font-titilium">Easy Search</div>
      <ThemeSwitchButton />
    </header>
  );
};
