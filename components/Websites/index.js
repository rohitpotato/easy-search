import { Website } from "./Website";
import { noop } from "../../utils";
import { memo } from "react";

function WebsiteContainer({
  sites = {},
  selectedSites = {},
  handleRemoveCustomSite = noop,
  setSelectedSites = noop,
}) {
  return (
    <div className="flex gap-2 flex-wrap w-full">
      {Object.values(sites).map((site) => {
        console.log(site);
        return (
          <Website
            key={site.url}
            site={site}
            handleRemoveCustomSite={handleRemoveCustomSite}
            selectedSites={selectedSites}
            setSelectedSites={setSelectedSites}
          />
        );
      })}
    </div>
  );
}

WebsiteContainer = memo(WebsiteContainer);
export { WebsiteContainer };
