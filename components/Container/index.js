import Image from "next/image";
import { SearchInput } from "../SearchInput";
import { Header } from "../Header";
import { useHook } from "../../hooks/useHook";
import { SectionSeparator } from "../SectionSeparator";
import { ExcludedTerms } from "../ExcludeTerms";
import { WebsiteContainer } from "../Websites";
import { AddMore } from "../AddMore";
import { FileTypesContainer } from "../FileTypes";
import { DatePublishedContainer } from "../DatePublished";
import { Modal } from "../Modal";
import { AddWebsiteModal } from "../Websites/AddWebsiteModal";
import { AddFileTypeModal } from "../FileTypes/AddFileTypeModal";
import { AddDatePublishedModal } from "../DatePublished/AddDatePublishedModal";
import { Footer } from "../Footer";
import { useCallback, useEffect } from "react";

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
    setModalToRender,
    handleAddCustomWebsite,
    handleAddCustomFileFormat,
    handleAddCustomLastDate,
    handleRemoveCustomSite,
    handleRemoveCustomFileFormat,
    handleRemoveCustomDatePublished,
    onSubmitClick,
    terms: searchTerms,
    excludedTerms,
    selectedSites,
    fileFormat,
    isExact,
    lastPublished,
    modalToRender,
  } = useHook();

  const openModal = (component) => {
    setModalToRender(component);
  };

  const closeModal = useCallback(() => {
    setModalToRender(null);
  }, [setModalToRender]);

  return (
    <>
      <div className="dark:bg-black mx-auto lg:w-3/4 pb-16 pt-8 md:w-4/5 w-11/12 bg-gray-300 min-h-screen transition-colors">
        <Header />
        <div className="w-full">
          <div className="inline-flex w-full md:gap-4">
            <SearchInput
              setTerms={setTerms}
              searchTerms={searchTerms}
              setIsExact={setIsExact}
              isExact={isExact}
            />
            <div className="">
              <button
                onClick={onSubmitClick}
                className="bg-gray-700 flex items-center justify-center z-50 rounded m-0 md:px-4 md:py-4 md:static fixed bottom-0 w-full md:w-auto left-0 p-3"
              >
                <Image
                  src="/icons/search.svg"
                  alt="search_icon"
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex gap-16 lg:flex-row flex-col lg:p-4 p-2">
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
                  RightComponent={
                    <AddMore
                      onClick={() =>
                        openModal(
                          <AddWebsiteModal
                            onCancel={closeModal}
                            onAdd={handleAddCustomWebsite}
                          />
                        )
                      }
                    />
                  }
                />
                <WebsiteContainer
                  sites={allSites}
                  selectedSites={selectedSites}
                  setSelectedSites={setSelectedSites}
                  handleRemoveCustomSite={handleRemoveCustomSite}
                />
              </div>
            </div>
            <div className="flex gap-16 lg:flex-row flex-col mt-12 lg:p-8 p-4">
              <div className="space-y-4 flex-1">
                <SectionSeparator
                  sectionHeading="Select File type"
                  RightComponent={
                    <AddMore
                      onClick={() =>
                        openModal(
                          <AddFileTypeModal
                            onCancel={closeModal}
                            onAdd={handleAddCustomFileFormat}
                          />
                        )
                      }
                    />
                  }
                />
                <FileTypesContainer
                  setFileType={setFileFormat}
                  fileTypes={allFileExtensions}
                  selectedFileType={fileFormat}
                  handleRemoveCustomFileFormat={handleRemoveCustomFileFormat}
                />
              </div>
              <div className="flex-1 space-y-4">
                <SectionSeparator
                  sectionHeading="Select Date Published"
                  RightComponent={
                    <AddMore
                      onClick={() =>
                        openModal(
                          <AddDatePublishedModal
                            onCancel={closeModal}
                            onAdd={handleAddCustomLastDate}
                          />
                        )
                      }
                    />
                  }
                />
                <DatePublishedContainer
                  allDatePublished={allLastPublished}
                  setDatePublished={setLastPublished}
                  selectedDatePublished={lastPublished}
                  handleRemoveCustomDatePublished={
                    handleRemoveCustomDatePublished
                  }
                />
              </div>
            </div>
            <div className="flex justify-center text-center my-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <Modal
        shouldCloseOnEsc
        onClose={closeModal}
        isVisible={Boolean(modalToRender)}
      >
        {modalToRender}
      </Modal>
    </>
  );
};

export { Container };
