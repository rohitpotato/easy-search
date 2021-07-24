import Image from "next/image";
import styles from "./Websites.module.css";

export const Website = ({ site, selectedSites, setSelectedSites }) => {
  const { name, icon, url, isCustom } = site;
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

  const handleDeleteCustomSite = () => {
    // TODO
  };
  console.log(icon);
  return (
    <button
      onClick={handleSelect}
      className={`p-4 w-32 relative shadow hover:shadow-md ${
        isSelected ? "bg-purple-300" : "bg-purple-100"
      }`}
    >
      <div className={styles.iconContainer}>
        <Image src={icon} alt="site-icon" height={16} width={16} />
      </div>
      <div className={styles.nameContainer}>{name}</div>
      {isCustom ? (
        <button
          onClick={handleDeleteCustomSite}
          className="absolute top-1 right-0"
        >
          <span>&times;</span>
        </button>
      ) : null}
    </button>
  );
};
