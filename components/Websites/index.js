import { Website } from "./Website";
import styles from "./Websites.module.css";
import { noop } from "../../utils";

export const WebsiteContainer = ({
  sites = {},
  selectedSites = {},
  setSelectedSites = noop,
}) => {
  return (
    <div className="flex gap-2 flex-wrap w-full">
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
