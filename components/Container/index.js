import Image from "next/image";
import React from "react";
import { ThemeSwitchButton } from "../ThemeSwitchButton";
import { SearchInput } from "../SearchInput";
import { toTitleCase } from "../../utils";
import { useHook } from "../../hooks/useHook";
import styles from "./container.module.css";

const Container = () => {
  const {
    allSites,
    allFileExtensions,
    allLastPublished,
    // handleExcludeTerm,
    // handleFileFormat,
    // handleIsExact,
    // handleSiteSelect,
    // handleTermChange,
    // handlePublishSelect,
    setTerms,
    onSubmitClick,
    terms: searchTerms,
    // handleAddCustomFileFormat,
  } = useHook();

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/icons/logo.svg" height={40} width={40} alt="site_logo" />
        <h1 className={styles.logoText}>Easy Search</h1>
      </div>
      <div className={styles.subTextContainer}>
        <span className={styles.subText}>
          Get what you want from Google by limiting sites, dates, file formats
          and more.
        </span>
      </div>
      <div className={styles.searchInputContainer}>
        <SearchInput setTerms={setTerms} searchTerms={searchTerms} />
      </div>
    </div>
    // <div>
    //   This is a container
    //   <div>
    //     <ThemeSwitchButton />
    //   </div>
    //   <div>
    //     <input onChange={handleTermChange} />
    //     {Object.keys(allSites).map((site) => (
    //       <button key={site} onClick={() => handleSiteSelect(site)}>
    //         {site}
    //       </button>
    //     ))}
    //     {Object.keys(allFileExtensions).map((format) => (
    //       <React.Fragment key={format}>
    //         <label>{format}</label>
    //         <input
    //           type="radio"
    //           name="file_type"
    //           value={format}
    //           onChange={handleFileFormat}
    //         />
    //       </React.Fragment>
    //     ))}
    //     <button onClick={handleAddCustomFileFormat}>
    //       Add File Format Custom
    //     </button>
    //     <input name="exclude_term" onChange={handleExcludeTerm} />
    //     <div>
    //       <label htmlFor="is_exact">Is exact</label>
    //       <input name="is_exact" type="checkbox" onChange={handleIsExact} />
    //     </div>
    //     {Object.keys(allLastPublished).map((publish) => (
    //       <React.Fragment key={publish}>
    //         <label>{toTitleCase(publish)}</label>
    //         <input
    //           type="radio"
    //           name="last_published"
    //           value={publish}
    //           onChange={handlePublishSelect}
    //         />
    //       </React.Fragment>
    //     ))}
    //     <button onClick={onSubmitClick}>Go</button>
    //   </div>
    // </div>
  );
};

export { Container };
