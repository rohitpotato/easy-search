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
      className={`p-4 w-32 relative rounded-md shadow hover:shadow-md ${
        isSelected ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      <div>
        <Image
          src={isCustom ? "/icons/link-icon.svg" : `${icon}`}
          alt="site-icon"
          height={16}
          width={16}
        />
      </div>
      <div
        className={`font-titilium font-semibold tracking-normal leading-8 ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {name}
      </div>
      {isCustom ? (
        <button
          onClick={handleDelete}
          className="absolute text-lg top-1 right-2"
        >
          <span>&times;</span>
        </button>
      ) : null}
    </button>
  );
};
