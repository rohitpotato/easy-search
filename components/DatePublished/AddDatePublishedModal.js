import { useState } from "react";
import { noop } from "../../utils";
import { Button } from "../Button";

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
    <div className="bg-light-gray shadow-lg border-1 border-light-gray dark:bg-dark-mode-black font-rubik text-dark-text-gray dark:text-white dark:text-opacity-80 px-8 py-4 md:w-96 w-80">
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
            className="font-rubik font-semibold text-base"
          >
            Last Published (in months)
          </label>
          <input
            className="py-4 block px-2 bg-transparent rounded-md font-rubik mt-2 border border-opacity-30 border-1 border-gray-500 w-full tracking-wide text-dark-text-gray placeholder-dark-text-gray dark:placeholder-opacity-30 placeholder-opacity-60 dark:placeholder-white  dark:text-white dark:opacity-80"
            id="months"
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
        <Button type="primary" onClick={handleAdd} className=" py-2">
          Add
        </Button>
      </div>
    </div>
  );
};
