import { memo } from "react";
import { DatePublished } from "./DatePublished";

function DatePublishedContainer({
  allDatePublished,
  selectedDatePublished,
  setDatePublished,
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.keys(allDatePublished).map((datePublished) => (
        <DatePublished
          key={datePublished}
          title={datePublished}
          isChecked={selectedDatePublished === datePublished}
          setDatePublished={setDatePublished}
        />
      ))}
    </div>
  );
}

DatePublishedContainer = memo(DatePublishedContainer);

export { DatePublishedContainer };
