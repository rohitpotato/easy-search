/**
 * @param {React.HTMLProps<HTMLButtonElement>} props
 * @return {HTMLButtonElement}
 */

export const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
