import Image from "next/image";

export const Website = ({
  site,
  selectedSites,
  handleRemoveCustomSite,
  setSelectedSites,
}) => {
  const { name, icon, isCustom } = site;
  const isSelected = Boolean(selectedSites[name]);

  const handleSelect = () => {
    if (selectedSites[name]) {
      const newSites = { ...selectedSites };
      delete newSites[name];
      setSelectedSites(newSites);
    } else {
      setSelectedSites((s) => ({ ...s, [name]: site }));
    }
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    handleRemoveCustomSite(name);
  };
  return (
    <button
      onClick={handleSelect}
      className={`py-4 pl-3 pr-3 flex gap-2  items-center justify-center relative rounded  shadow hover:shadow-md hover:bg-purple-700 hover:text-light-bg-purple  ${
        isSelected
          ? "bg-purple-700 text-light-bg-purple"
          : "bg-light-text-purple text-purple-700"
      }`}
    >
      <div>
        <Image
          src={isCustom ? "/icons/link-icon.svg" : `${icon}`}
          alt="site-icon"
          height={18}
          width={18}
        />
      </div>
      <div className={`font-rubik font-medium tracking-normal leading-8`}>
        {name}
      </div>
      {isCustom ? (
        <button
          onClick={handleDelete}
          className={`ml-2 text-xl flex -mt-1 ${
            isSelected ? "text-white" : "text-black"
          }`}
        >
          <span>&times;</span>
        </button>
      ) : null}
    </button>
  );
};
