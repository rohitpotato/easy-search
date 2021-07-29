import { Button } from "../Button";

export const MobileActionPanel = ({ onSubmitClick, searchTerms }) => {
  return (
    <>
      <div className="md:block hidden">
        <Button
          onClick={onSubmitClick}
          disabled={!searchTerms.length}
          className="py-[1.35rem] "
          type="primary"
        >
          Search
        </Button>
      </div>
      <div className="md:block hidden">
        <Button
          disabled={!searchTerms.length}
          type="secondary"
          className="py-[1.35rem] whitespace-nowrap"
        >
          View Query
        </Button>
      </div>
    </>
  );
};
