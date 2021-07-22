import { Website } from "./Website";
import styles from "./Websites.module.css";

export const WebsiteContainer = ({
  sites,
  selectedSites,
  setSelectedSites,
}) => {
  return (
    <div className={styles.websitesContainer}>
      {Object.values(sites).map((site) => (
        <Website
          key={site.url}
          site={site}
          selectedSites={selectedSites}
          setSelectedSites={setSelectedSites}
        />
      ))}
    </div>
  );
};
