import { Button } from "../Button";

export const DesktopActionPanel = ({ onSubmitClick, searchTerms }) => {
  return (
    <div className="md:hidden">
      <div className="dark:bg-dark-text-gray bg-white border-t-[1px] leading-8 border-gray-500 gap-4 font-semibold flex justify-end z-50 md:rounded shadow-xl m-0 md:px-4 md:py-4 md:static fixed bottom-0 w-full md:w-auto left-0 p-3">
        <Button type="secondary">View Query</Button>
        <Button
          onClick={onSubmitClick}
          disabled={!searchTerms.length}
          type="primary"
        >
          Search
        </Button>
      </div>
    </div>
  );
};
