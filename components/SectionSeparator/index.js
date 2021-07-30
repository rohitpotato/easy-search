import { memo } from "react";

function SectionSeparator({ sectionHeading, RightComponent = null }) {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <div className="font-rubik text-dark-text-gray dark:text-white dark:opacity-70  font-semibold tracking-wide leading-6">
          {sectionHeading}
        </div>
        {RightComponent}
      </div>
      <div className="w-full h-[1px] opacity-20 dark:opacity-75 bg-dark-text-gray "></div>
    </div>
  );
}

SectionSeparator = memo(SectionSeparator);
export { SectionSeparator };
