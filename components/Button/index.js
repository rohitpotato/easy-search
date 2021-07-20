import styles from "./button.module.css";

/**
 * @param {React.HTMLProps<HTMLButtonElement>} props
 * @return {HTMLButtonElement}
 */

export const Button = ({ text, ...rest }) => {
  return (
    <button className={styles.buttonContainer} {...rest}>
      {text}
    </button>
  );
};
