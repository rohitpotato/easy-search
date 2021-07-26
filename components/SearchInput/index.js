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
        <div className="ml-4 stroke-current">
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
            !isExact ? "bg-gray-400" : "bg-gray-700 dark:bg-gray-700"
          } transition-colors absolute rounded right-0 top-0 h-full p-2 `}
          onClick={handleIsExact}
        >
          <span className="flex-shrink-0 text-white font-titilium tracking-wider leading-8 font-semibold hidden lg:block">
            Exact
          </span>
          <span className="lg:hidden block">
            <Image
              src="/icons/tick.svg"
              alt="tick_icon"
              height={20}
              width={20}
            />
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
