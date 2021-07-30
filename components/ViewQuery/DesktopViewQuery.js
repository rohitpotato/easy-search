import { useState } from "react";
import { Clipboard } from "../icons/Clipboard";
export const DesktopViewQuery = ({ query, onCancel }) => {
  const [copied, setCopied] = useState(false);
  if (!query) {
    return null;
  }

  const handleClipboardClick = () => {
    const cb = navigator.clipboard;
    cb.writeText(query);
    setCopied(true);
  };

  return (
    <div className="bg-light-gray relative shadow-lg border-1 border-light-gray dark:bg-dark-mode-black font-rubik text-dark-text-gray dark:text-white dark:text-opacity-80 px-4 py-4 md:w-96 w-80">
      <div className="font-medium leading-6 tracking-wide text-2xl flex justify-between items-center">
        <div>
          Your Query
          <span className="block text-sm mt-2 italic font-normal">
            Copy this to share with others.
          </span>
        </div>
        <div className="absolute top-2 right-4">
          <button onClick={onCancel}>&times;</button>
        </div>
      </div>
      <br />
      <div className="space-y-4 flex items-center gap-5 ">
        <div className="lg:w-80 w-74 w-full">
          <input
            className="py-4 block px-2 bg-transparent rounded-md font-rubik mt-2 border border-opacity-30 border-1 border-gray-500 w-full tracking-wide text-dark-text-gray placeholder-dark-text-gray dark:placeholder-opacity-30 placeholder-opacity-60 dark:placeholder-white  dark:text-white dark:opacity-80"
            id="name"
            value={query}
            readOnly
          />
        </div>
        <Clipboard onClick={handleClipboardClick} copied={copied} />
      </div>
    </div>
  );
};
