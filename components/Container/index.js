import React from "react";
import {
  supportedSites,
  supportedFileFormats,
  datePublished,
} from "../../constants";
import { ThemeSwitchButton } from "../ThemeSwitchButton";
import { toTitleCase } from "../../utils";
import { useHook } from "../../hooks/useHook";

const Container = () => {
  const {
    allSites,
    allFileExtensions,
    allLastPublished,
    handleExcludeTerm,
    handleFileFormat,
    handleIsExact,
    handleSiteSelect,
    handleTermChange,
    handlePublishSelect,
    onSubmitClick,
    handleAddCustomFileFormat,
  } = useHook();

  return (
    <div>
      This is a container
      <div>
        <ThemeSwitchButton />
      </div>
      <div>
        <input onChange={handleTermChange} />
        {Object.keys(allSites).map((site) => (
          <button key={site} onClick={() => handleSiteSelect(site)}>
            {site}
          </button>
        ))}
        {Object.keys(allFileExtensions).map((format) => (
          <React.Fragment key={format}>
            <label>{format}</label>
            <input
              type="radio"
              name="file_type"
              value={format}
              onChange={handleFileFormat}
            />
          </React.Fragment>
        ))}
        <button onClick={handleAddCustomFileFormat}>
          Add File Format Custom
        </button>
        <input name="exclude_term" onChange={handleExcludeTerm} />
        <div>
          <label htmlFor="is_exact">Is exact</label>
          <input name="is_exact" type="checkbox" onChange={handleIsExact} />
        </div>
        {Object.keys(allLastPublished).map((publish) => (
          <React.Fragment key={publish}>
            <label>{toTitleCase(publish)}</label>
            <input
              type="radio"
              name="last_published"
              value={publish}
              onChange={handlePublishSelect}
            />
          </React.Fragment>
        ))}
        <button onClick={onSubmitClick}>Go</button>
      </div>
    </div>
  );
};

export { Container };
