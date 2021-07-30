import { useState } from "react";
import { noop } from "../../utils";
import { Button } from "../Button";

export const AddFileTypeModal = ({ onAdd = noop, onCancel = noop }) => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (file) {
      try {
        onAdd(file);
        onCancel();
      } catch (e) {
        setError(e.message);
      }
    }
  };
  return (
    <div className="bg-light-gray relative shadow-lg border-1 border-light-gray dark:bg-dark-mode-black font-rubik text-dark-text-gray dark:text-white dark:text-opacity-80 px-4 py-4 md:w-96 w-80">
      <div className="font-medium leading-6 tracking-wide text-2xl flex justify-between items-center ">
        <div>
          Add File Extension
          <span className="block text-sm mt-2 italic font-normal">
            this will be saved for future searches
          </span>
        </div>
        <div className="absolute top-2 right-4">
          <button onClick={onCancel}>&times;</button>
        </div>
      </div>
      <br />
      <div className="space-y-4">
        <div className="lg:w-80 w-74">
          <label htmlFor="name" className="font-rubik font-medium text-base">
            File Extension
          </label>
          <input
            className="py-4 block px-2 bg-transparent rounded-md font-rubik mt-2 border border-opacity-30 border-1 border-gray-500 w-full tracking-wide text-dark-text-gray placeholder-dark-text-gray dark:placeholder-opacity-30 placeholder-opacity-60 dark:placeholder-white  dark:text-white dark:opacity-80"
            id="name"
            placeholder="File Extension (no dot)"
            onChange={(event) => setFile(event.target.value)}
          />
        </div>
      </div>
      {
        <div className="mt-4 text-sm text-red-400 flex justify-center font-medium">
          {error}
        </div>
      }
      <div className="flex items-center justify-center my-8">
        <Button type="primary" onClick={handleAdd} className="py-2">
          Add
        </Button>
      </div>
    </div>
  );
};
