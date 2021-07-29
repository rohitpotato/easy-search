import { useCallback } from "react";
import Image from "next/image";
import { useHook } from "../../hooks/useHook";
import { SearchInput } from "../SearchInput";
import { Header } from "../Header";
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
import { Button } from "../Button";

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
      <div className="dark:bg-black pb-16 bg-light-gray min-h-screen">
        <Header />
        <div className="mt-16 md:w-4/5 w-full mx-auto py-3 px-4">
          <div className="inline-flex w-full md:gap-4">
            <SearchInput
              setTerms={setTerms}
              searchTerms={searchTerms}
              setIsExact={setIsExact}
              isExact={isExact}
            />
            <div className="md:block hidden">
              <Button
                onClick={onSubmitClick}
                disabled={!searchTerms.length}
                className="py-[1.35rem] "
                type="primary"
              >
                Search
              </Button>
            </div>
            <div className="md:hidden">
              <div className="dark:bg-dark-text-gray bg-white border-t-[1px] leading-8 border-gray-500 gap-4 font-semibold flex justify-end z-50 md:rounded shadow-xl m-0 md:px-4 md:py-4 md:static fixed bottom-0 w-full md:w-auto left-0 p-3">
                <Button type="secondary">View Query</Button>
                <Button
                  onClick={onSubmitClick}
                  disabled={searchTerms.length === 0}
                  type="primary"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-12">
            <div className="flex gap-16 lg:flex-row flex-col lg:py-4 py-2">
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
            <div className="flex gap-16 lg:flex-row flex-col mt-12 lg:py-8 py-4">
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
        closeOnOverlayPress
        onClose={closeModal}
        isVisible={Boolean(modalToRender)}
      >
        {modalToRender}
      </Modal>
    </>
  );
};

export { Container };
