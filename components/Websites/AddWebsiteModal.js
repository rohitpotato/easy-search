import { useState } from "react";
import { noop } from "../../utils";

export const AddWebsiteModal = ({ onAdd = noop, onCancel = noop }) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAddSite = () => {
    if (name && url) {
      try {
        onAdd(name, url);
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
          Add Custom URL
          <span className="block text-sm mt-2 italic font-normal">
            sites will be saved for future searches
          </span>
        </div>
        <button onClick={onCancel}>&times;</button>
      </div>
      <br />
      <div className="space-y-4">
        <div className="lg:w-80 w-74">
          <label
            htmlFor="name"
            className="font-titilium font-semibold text-base"
          >
            Website Name
          </label>
          <input
            className="py-4 block px-2 rounded-md placeholder-gray-400 font-titilium mt-2 border-2 w-full text-black"
            name="name"
            placeholder="Enter Website Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="lg:w-80 w-74">
          <label
            htmlFor="url"
            className="font-titilium font-semibold text-base"
          >
            Website Url
          </label>
          <input
            className="py-4 px-2 rounded-md placeholder-gray-400 font-titilium mt-2 block border-2 w-full text-black"
            name="url"
            placeholder="Enter Website Url"
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 text-sm text-red-400 flex justify-center font-semibold">
        {error}
      </div>
      <div className="flex items-center justify-center my-8">
        <button
          onClick={handleAddSite}
          className="bg-black dark:bg-white text-white dark:text-black font-titilium font-semibold px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};
