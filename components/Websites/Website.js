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

  return (
    <button
      onClick={handleSelect}
      className={`${styles.container} ${isSelected ? styles.siteSelected : ""}`}
    >
      <div className={styles.iconContainer}>
        <Image src={icon} alt="site-icon" height={16} width={16} />
      </div>
      <div className={styles.nameContainer}>{name}</div>
      {isCustom ? (
        <button
          onClick={handleDeleteCustomSite}
          className={styles.removeSiteIcon}
        >
          <span>&times;</span>
        </button>
      ) : null}
    </button>
  );
};
