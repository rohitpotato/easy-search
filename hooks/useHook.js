import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import {
  allSites,
  supportedFileFormats,
  datePublished,
  params,
  baseUrl,
  localStorageKeys,
  supportedSites,
} from "../constants";

const {
  site,
  siteJoinChar,
  term: termParam,
  exclude,
  queryJoiner,
  fileType,
  datePublished: datePublishedParam,
} = params;

const {
  ES_Sites: sitesKey,
  ES_LastPublishedList: lastPublishedListKey,
  ES_FileExtensions: fileExtensionsKey,
} = localStorageKeys;

export const useHook = () => {
  const [term, setTerm] = useState("");
  const [selectedSites, setSelectedSites] = useState({});
  const [fileFormat, setFileFormat] = useState("");
  const [excludedTerms, setExcludedTerms] = useState("");
  const [isExact, setIsExact] = useState("");
  const [lastPublished, setLastPublished] = useState("");
  const [customSites, setCustomSites] = useLocalStorage(sitesKey, {});
  const [customLastPublished, setCustomLastPublished] = useLocalStorage(
    lastPublishedListKey,
    {}
  );
  const [customFileExtensions, setCustomFileExtensions] = useLocalStorage(
    fileExtensionsKey,
    {}
  );

  const allSites = { ...supportedSites, ...customSites };
  const allFileExtensions = {
    ...supportedFileFormats,
    ...customFileExtensions,
  };
  const allLastPublished = { ...datePublished, ...customLastPublished };

  const handleTermChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  const handleExcludeTerm = (e) => {
    const { value } = event.target;
    setExcludedTerms(value);
  };

  const handleIsExact = () => {
    const { checked } = event.target;
    setIsExact(checked);
  };

  const handleSiteSelect = (site) => {
    if (selectedSites[site]) {
      const newSites = { ...selectedSites };
      delete newSites[site];
      setSelectedSites(newSites);
    } else {
      setSelectedSites((s) => ({ ...s, [site]: allSites[site] }));
    }
  };

  const handleFileFormat = (e) => {
    const { value } = event.target;
    setFileFormat(value);
  };

  const handlePublishSelect = (e) => {
    const { value } = event.target;
    setLastPublished(value);
  };

  const getSitesURIComponent = () =>
    Object.values(selectedSites)
      .map((selected) => encodeURIComponent(`${site}${selected}`))
      .join(`${siteJoinChar}`);

  const getTerm = () => {
    let toSearch = "";
    if (isExact) {
      toSearch += `"${term.split(" ").join(queryJoiner)}"`;
    } else {
      toSearch += term.split(" ").join(queryJoiner);
    }
    if (excludedTerms) {
      toSearch += `${exclude}${excludedTerms.split(" ").join(exclude)}`;
    }
    return toSearch;
  };

  const onSubmitClick = () => {
    const term = getTerm();
    const query = `${termParam}${term}`;
    const sites = getSitesURIComponent();
    let final = `${baseUrl}?${query}`;
    if (sites) {
      final += `${queryJoiner}${sites}`;
    }
    if (fileFormat && fileFormat !== allFileExtensions.any) {
      final += `${queryJoiner}${encodeURIComponent(
        `${fileType}${fileFormat}`
      )}`;
    }
    if (lastPublished && lastPublished !== allLastPublished.any) {
      final += `${`${datePublishedParam}:${allLastPublished[lastPublished]}`}`;
    }

    console.log(String(final));
  };

  // const handleAddCustomWebsite = () => {
  //   const site = window.prompt("Enter a url");
  //   set;
  // };

  const handleAddCustomFileFormat = () => {
    const format = prompt("Enter file extension");
    setCustomFileExtensions((s) => ({ ...s, [format]: format }));
  };

  // const handleAddCustomPublishMonth = () => {};

  return {
    handleTermChange,
    handleExcludeTerm,
    handleFileFormat,
    handleIsExact,
    handleSiteSelect,
    handlePublishSelect,
    onSubmitClick,
    allSites,
    allFileExtensions,
    allLastPublished,
    handleAddCustomFileFormat,
  };
};
