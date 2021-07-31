import { Search } from "../icons/Search";
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
    <div className="flex flex-col w-full">
      <MultiTextInput
        placeholder="Enter your search query"
        LeftComponent={
          <div className="ml-4">
            <Search />
          </div>
        }
        tags={searchTerms}
        onPressEnter={handlePressEnter}
        onRemove={handleRemove}
        onBackSpace={handleBackSpace}
      />
      <div className="flex items-center mt-2 gap-3 w-full">
        <label
          htmlFor="is_exact"
          className="font-rubik font-medium text-dark-text-gray dark:text-white dark:opacity80"
        >
          Is exact
        </label>
        <input
          type="checkbox"
          name="is_exact"
          id="is_exact"
          onChange={handleIsExact}
          checked={isExact}
        />
      </div>
    </div>
  );
};
