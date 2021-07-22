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
import { WebsiteContainer } from "../Websites";

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
    setSelectedSites,
    onSubmitClick,
    terms: searchTerms,
    excludedTerms,
    selectedSites,
    // handleAddCustomFileFormat,
  } = useHook();

  return (
    <div className="dark:bg-black bg-white min-h-screen transition-colors">
      <Header />
    </div>
  );
};

export { Container };
