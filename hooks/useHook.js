import { useMemo, useState } from "react";
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
  const [excludedTerms, setExcludedTerms] = useState([]);
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

  const allSites = useMemo(
    () => ({ ...supportedSites, ...customSites }),
    [customSites]
  );
  const allFileExtensions = useMemo(
    () => ({
      ...supportedFileFormats,
      ...customFileExtensions,
    }),
    [customFileExtensions]
  );
  const allLastPublished = useMemo(
    () => ({ ...datePublished, ...customLastPublished }),
    [customLastPublished]
  );

  const getSitesURIComponent = () =>
    Object.values(selectedSites)
      .map(({ url }) => encodeURIComponent(`${site}${{ url }}`))
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
    setTerms,
    setExcludedTerms,
    setSelectedSites,
    setIsExact,
    setFileFormat,
    setLastPublished,
    onSubmitClick,
    allSites,
    allFileExtensions,
    allLastPublished,
    terms,
    excludedTerms,
    selectedSites,
    fileFormat,
    isExact,
    lastPublished,
  };
};
