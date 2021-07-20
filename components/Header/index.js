import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <Image src="/icons/logo.svg" height={40} width={40} alt="site_logo" />
        <h1 className={styles.logoText}>Easy Search</h1>
      </div>
      <div className={styles.subTextContainer}>
        <span className={styles.subText}>
          Get what you want from Google by limiting sites, dates, file formats
          and more.
        </span>
      </div>
    </>
  );
};
