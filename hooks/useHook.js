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
  const [terms, setTerms] = useState([]);
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
    setTerms(value);
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

  const formatSearchTerm = () => {
    let res = "";
    terms.forEach((term) => {
      res += isExact
        ? `"${term.split(" ").join(queryJoiner)}"`
        : term.split(" ").join(queryJoiner);
    });
    return res;
  };

  const formatExcludeTerm = () =>
    `${exclude}${excludedTerms.split(" ").join(exclude)}`;

  const getTerms = () => {
    let toSearch = formatSearchTerm();
    if (excludedTerms.length) {
      toSearch += formatExcludeTerm();
    }
    return toSearch;
  };

  const onSubmitClick = () => {
    const term = getTerms();
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
    // handleTermChange,
    // handleExcludeTerm,
    // handleFileFormat,
    // handleIsExact,
    // handleSiteSelect,
    // handlePublishSelect,
    setTerms,
    onSubmitClick,
    allSites,
    allFileExtensions,
    allLastPublished,
    terms,
    // handleAddCustomFileFormat,
  };
};
