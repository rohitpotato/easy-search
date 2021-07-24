export const SectionSeparator = ({ sectionHeading, RightComponent = null }) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <div className="font-titilium dark:text-white font-semibold tracking-wide leading-6">
          {sectionHeading}
        </div>
        {RightComponent}
      </div>
      <div className="w-full h-[1px] bg-black dark:bg-gray-200"></div>
    </div>
  );
};
