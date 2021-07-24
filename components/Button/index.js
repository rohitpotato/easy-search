import styles from "./button.module.css";

/**
 * @param {React.HTMLProps<HTMLButtonElement>} props
 * @return {HTMLButtonElement}
 */

export const Button = ({ children, ...rest }) => {
  return (
    <button className={styles.buttonContainer} {...rest}>
      {children}
    </button>
  );
};
