import Image from "next/image";
import { MultiTextInput } from "../MultiTextInput";

export const SearchInput = ({ setTerms, searchTerms }) => {
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

  return (
    <MultiTextInput
      placeholder="Enter your query. Press Enter for multiple queries"
      LeftIcon={
        <Image
          src="/icons/search.svg"
          alt="search-icon"
          width={24}
          height={24}
        />
      }
      tags={searchTerms}
      onPressEnter={handlePressEnter}
      onRemove={handleRemove}
      onBackSpace={handleBackSpace}
    />
  );
};
