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
import { AddMore } from "../AddMore";

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
    setIsExact,
    onSubmitClick,
    terms: searchTerms,
    excludedTerms,
    selectedSites,
    isExact,
    // handleAddCustomFileFormat,
  } = useHook();

  return (
    <div className="dark:bg-black mx-auto lg:w-3/4  w-4/5 bg-gray-200 min-h-screen transition-colors">
      <Header />
      <div className="w-full">
        <SearchInput
          setTerms={setTerms}
          searchTerms={searchTerms}
          setIsExact={setIsExact}
          isExact={isExact}
        />
        <div className="mt-12">
          <div className="flex gap-16 lg:flex-row flex-col">
            <div className="space-y-4 flex-1">
              <SectionSeparator sectionHeading="Exclude Keywords" />
              <ExcludedTerms
                setExcludedTerms={setExcludedTerms}
                excludedTerms={excludedTerms}
              />
            </div>
            <div className="flex-1 space-y-4">
              <SectionSeparator
                sectionHeading="Select websites to search"
                RightComponent={<AddMore />}
              />
              <WebsiteContainer
                sites={allSites}
                selectedSites={selectedSites}
                setSelectedSites={setSelectedSites}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Container };
