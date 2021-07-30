import { Button } from "../Button";

export const DesktopActionPanel = ({
  onSubmitClick,
  searchTerms,
  onViewQueryClick,
}) => {
  return (
    <>
      <div className="md:block hidden">
        <Button
          onClick={onSubmitClick}
          disabled={!searchTerms.length}
          className="!py-[1.35rem]"
          type="primary"
        >
          Search
        </Button>
      </div>
      <div className="md:block hidden">
        <Button
          onClick={onViewQueryClick}
          // disabled={!searchTerms.length}
          type="secondary"
          className="!py-[1.35rem]  whitespace-nowrap"
        >
          View Query
        </Button>
      </div>
    </>
  );
};
