import { toTitleCase } from "../../utils";
export const DatePublished = ({ title, isChecked, setDatePublished }) => {
  const handleDatePublished = () => {
    setDatePublished(title);
  };

  return (
    <>
      <button
        onClick={handleDatePublished}
        className={`px-2 py-2 rounded font-titilium font-semibold tracking-wide leading-7 ${
          isChecked ? "bg-purple-400" : "bg-purple-200"
        } text-purple-500`}
      >
        {toTitleCase(title)}
      </button>
    </>
  );
};
