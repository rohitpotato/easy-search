import React from "react";
import { SearchInput } from "../SearchInput";
import { Header } from "../Header";
import { toTitleCase } from "../../utils";
import { useHook } from "../../hooks/useHook";
import { SectionSeparator } from "../SectionSeparator";
import { ExcludedTerms } from "../ExcludeTerms";
import { WebsiteContainer } from "../Websites";
import { AddMore } from "../AddMore";
import { FileTypesContainer } from "../FileTypes";
import { DatePublishedContainer } from "../DatePublished";

const Container = () => {
  const {
    allSites,
    allFileExtensions,
    allLastPublished,
    setTerms,
    setExcludedTerms,
    setSelectedSites,
    setIsExact,
    setFileFormat,
    setLastPublished,
    onSubmitClick,
    terms: searchTerms,
    excludedTerms,
    selectedSites,
    fileFormat,
    isExact,
    lastPublished,
  } = useHook();

  return (
    <div className="dark:bg-black mx-auto lg:w-3/4 py-8 w-4/5 bg-gray-200 min-h-screen transition-colors">
      <Header />
      <div className="w-full">
        <SearchInput
          setTerms={setTerms}
          searchTerms={searchTerms}
          setIsExact={setIsExact}
          isExact={isExact}
        />
        <div className="mt-12">
          <div className="flex gap-16 lg:flex-row flex-col shadow-md p-4">
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
          <div className="flex gap-16 lg:flex-row flex-col mt-12 shadow-md p-8">
            <div className="space-y-4 flex-1">
              <SectionSeparator
                sectionHeading="Select File type"
                RightComponent={<AddMore />}
              />
              <FileTypesContainer
                setFileType={setFileFormat}
                fileTypes={allFileExtensions}
                selectedFileType={fileFormat}
              />
            </div>
            <div className="flex-1 space-y-4">
              <SectionSeparator
                sectionHeading="Select Date Published"
                RightComponent={<AddMore />}
              />
              <DatePublishedContainer
                allDatePublished={allLastPublished}
                setDatePublished={setLastPublished}
                selectedDatePublished={lastPublished}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Container };
