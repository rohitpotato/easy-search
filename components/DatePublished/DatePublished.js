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
    if (isChecked) {
      setDatePublished("");
    } else {
      setDatePublished(value);
    }
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    handleRemoveCustomDatePublished(title);
  };

  return (
    <>
      <button
        onClick={handleDatePublished}
        className={`px-2 py-2 flex gap-2 items-center rounded font-rubik font-medium tracking-wide leading-7 shadow-md ${
          isChecked
            ? "bg-purple-700 text-light-bg-purple"
            : " bg-light-text-purple text-purple-700"
        } `}
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
