import { Button } from "../Button";

export const AddMore = ({ onClick, title = "Add More" }) => {
  return (
    <Button
      onClick={onClick}
      className="text-dark-text-gray dark:text-white opacity-70 text-sm m-0 p-0 flex items-center gap-[0.5rem] font-rubik tracking-wide"
    >
      <span>+</span>
      <span>{title}</span>
    </Button>
  );
};
