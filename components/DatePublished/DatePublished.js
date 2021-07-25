import { toTitleCase } from "../../utils";
export const DatePublished = ({
  title,
  isChecked,
  isCustom,
  value,
  setDatePublished,
  handleRemoveCustomDatePublished,
}) => {
  const handleDatePublished = () => {
    setDatePublished(value);
  };

  const handleRemove = (event) => {
    console.log(event);
    event.stopPropagation();
    handleRemoveCustomDatePublished(title);
  };

  return (
    <>
      <button
        onClick={handleDatePublished}
        className={`px-2 py-2 flex gap-2 items-center rounded font-titilium font-semibold tracking-wide leading-7 ${
          isChecked ? "bg-purple-400" : "bg-purple-200"
        } text-purple-500`}
      >
        {toTitleCase(title)}
        {isCustom && (
          <div>
            <span className="cursor-pointer" onClick={handleRemove}>
              &times;
            </span>
          </div>
        )}
      </button>
    </>
  );
};
