/**
 * @param {React.HTMLProps<HTMLButtonElement>} props
 * @return {HTMLButtonElement}
 */

export const Button = ({ children, className, type, ...rest }) => {
  const types = {
    primary:
      "bg-purple-700 shadow text-light-text-purple border border-purple-700 ",
    secondary:
      "shadow-sm transparent border border-1 border-gray-500 text-dark-text-gray dark:text-light-text-purple",
  };
  return (
    <button
      className={`px-5 py-1 rounded-md font-rubik tracking-wider font-medium ${types[type]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
