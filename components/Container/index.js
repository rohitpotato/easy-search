import Image from "next/image";
import React from "react";
import { ThemeSwitchButton } from "../ThemeSwitchButton";
import { SearchInput } from "../SearchInput";
import { Header } from "../Header";
import { Button } from "../Button";
import { toTitleCase } from "../../utils";
import { useHook } from "../../hooks/useHook";
import { SectionSeparator } from "../SectionSeparator";
import { ExcludedTerms } from "../ExcludeTerms";
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
    setExcludedTerms,
    onSubmitClick,
    terms: searchTerms,
    excludedTerms,
    // handleAddCustomFileFormat,
  } = useHook();

  return (
    <div className={styles.container}>
      <Header />
      {/* Search Term Input Container  */}
      <div className={`${styles.searchInputContainer} ${styles.sectionMargin}`}>
        <SearchInput setTerms={setTerms} searchTerms={searchTerms} />
        <div className={styles.submitQueryButton}>
          <Button text="Search" />
        </div>
      </div>
      {/* Exclude Search Terms Container */}
      <div
        className={`${styles.excludeTermsContainer} ${styles.sectionMargin}`}
      >
        <SectionSeparator sectionHeading="Exclude Terms" />
        <ExcludedTerms
          setExcludedTerms={setExcludedTerms}
          excludedTerms={excludedTerms}
        />
      </div>
      <div className={`${styles.websiteContainer} ${styles.sectionMargin}`}>
        <SectionSeparator sectionHeading="Websites to Search" />
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
