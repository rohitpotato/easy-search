import { useState } from "react";
import { noop } from "../../utils";

export const AddDatePublishedModal = ({ onAdd = noop, onCancel = noop }) => {
  const [months, setMonths] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (months) {
      try {
        onAdd(months);
        onCancel();
      } catch (e) {
        setError(e.message);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-dark-mode-black font-titilium text-black dark:text-white px-8 py-4 md:w-96 w-80">
      <div className="font-semibold leading-6 tracking-wide text-2xl flex justify-between items-center -mx-4">
        <div>
          Add Custom Last Date
          <span className="block text-sm mt-2 italic font-normal">
            this will be saved for future searches
          </span>
        </div>
        <button onClick={onCancel}>&times;</button>
      </div>
      <br />
      <div className="space-y-4">
        <div className="lg:w-80 w-74">
          <label
            htmlFor="months"
            className="font-titilium font-semibold text-base"
          >
            Last Published (in months)
          </label>
          <input
            className="py-4 block px-2 rounded-md placeholder-gray-400 font-titilium mt-2 border-2 w-full text-black"
            name="months"
            type="number"
            placeholder="Enter Months"
            onChange={(event) => setMonths(event.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 text-sm text-red-400 flex justify-center font-semibold">
        {error}
      </div>
      <div className="flex items-center justify-center my-8">
        <button
          onClick={handleAdd}
          className="bg-black dark:bg-white text-white dark:text-black font-titilium font-semibold px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};
