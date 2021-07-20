import Image from "next/image";
import { MultiTextInput } from "../MultiTextInput";

export const ExcludedTerms = ({ setExcludedTerms, excludedTerms }) => {
  const handlePressEnter = (excludedTerm) => {
    setExcludedTerms((s) => [...s, excludedTerm]);
  };

  const handleBackSpace = (excludedTerms) => {
    setExcludedTerms(excludedTerms);
  };

  const handleRemove = (index) => {
    const excludedTermsCopy = [...excludedTerms];
    excludedTermsCopy.splice(index, 1);
    setExcludedTerms(excludedTermsCopy);
  };
  return (
    <MultiTextInput
      LeftIcon={
        <Image
          src="/icons/remove-icon.svg"
          alt="remove-icon"
          height={24}
          width={24}
        />
      }
      onPressEnter={handlePressEnter}
      onBackSpace={handleBackSpace}
      onRemove={handleRemove}
      tags={excludedTerms}
      placeholder="Enter the words you want to exclude"
    />
  );
};
