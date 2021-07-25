import { memo } from "react";
import { DatePublished } from "./DatePublished";

function DatePublishedContainer({
  allDatePublished,
  selectedDatePublished,
  setDatePublished,
  handleRemoveCustomDatePublished,
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.keys(allDatePublished).map((datePublished) => {
        const { last, isCustom } = allDatePublished[datePublished];
        return (
          <DatePublished
            key={datePublished}
            title={datePublished}
            value={last}
            isCustom={isCustom}
            isChecked={selectedDatePublished === last}
            setDatePublished={setDatePublished}
            handleRemoveCustomDatePublished={handleRemoveCustomDatePublished}
          />
        );
      })}
    </div>
  );
}

DatePublishedContainer = memo(DatePublishedContainer);

export { DatePublishedContainer };
