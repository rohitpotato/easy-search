import { Button } from "../Button";

export const AddMore = ({ onClick, title = "Add More" }) => {
  return (
    <Button
      onClick={onClick}
      className="text-black dark:text-gray-200 text-sm m-0 p-0 flex items-center gap-2 font-titilium tracking-wide"
    >
      <span>+</span>
      <span>{title}</span>
    </Button>
  );
};
