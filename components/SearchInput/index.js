import Image from "next/image";
import { MultiTextInput } from "../MultiTextInput";

export const SearchInput = ({ setTerms, searchTerms, setIsExact, isExact }) => {
  const handlePressEnter = (term) => {
    setTerms((s) => [...s, term]);
  };

  const handleBackSpace = (terms) => {
    setTerms(terms);
  };

  const handleRemove = (index) => {
    const terms = [...searchTerms];
    terms.splice(index, 1);
    setTerms(terms);
  };

  const handleIsExact = () => {
    setIsExact((s) => !s);
  };

  return (
    <MultiTextInput
      placeholder="Enter your query. Press Enter for multiple queries"
      LeftComponent={
        <div className="ml-4">
          <Image
            src="/icons/search.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
        </div>
      }
      RightComponent={
        <button
          className={`${
            isExact ? "bg-purple-300" : "bg-gray-300"
          } transition-colors absolute rounded right-0 top-0 h-full p-2 dark:text-white`}
          onClick={handleIsExact}
        >
          <span className="flex flex-shrink-0 text-purple-600">
            Exact Search
          </span>
        </button>
      }
      tags={searchTerms}
      onPressEnter={handlePressEnter}
      onRemove={handleRemove}
      onBackSpace={handleBackSpace}
    />
  );
};
