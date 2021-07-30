import { useCallback, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import {
  supportedFileFormats,
  datePublished,
  params,
  baseUrl,
  localStorageKeys,
  supportedSites,
} from "../constants";
import { validateUrl } from "../utils";

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
  sites: sitesKey,
  lastPublishedList: lastPublishedListKey,
  fileExtensions: fileExtensionsKey,
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
  const [modalToRender, setModalToRender] = useState(null);

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
      .map(({ url }) => encodeURIComponent(`${site}${url}`))
      .join(`${siteJoinChar}`);

  const formatSearchTerm = () => {
    let res = "";
    res = terms
      .map((term) => term.split(" ").join(queryJoiner))
      .join(queryJoiner);
    return isExact ? `"${res}"` : res;
  };

  const formatExcludeTerm = () =>
    `${exclude}${excludedTerms
      .map((excludedTerm) => excludedTerm.replace("-", ""))
      .join(exclude)}`;

  const getTerms = () => {
    let toSearch = formatSearchTerm();
    if (excludedTerms.length) {
      toSearch += formatExcludeTerm();
    }
    return toSearch;
  };

  const onSubmitClick = (redirect = true) => {
    const term = getTerms();
    const query = `${termParam}${term}`;
    const sites = getSitesURIComponent();
    let final = `${baseUrl}?${query}`;
    if (sites) {
      final += `${queryJoiner}${sites}`;
    }
    if (fileFormat && fileFormat !== allFileExtensions.any.format) {
      final += `${queryJoiner}${encodeURIComponent(
        `${fileType}${fileFormat}`
      )}`;
    }
    if (lastPublished && lastPublished !== allLastPublished.any.last) {
      final += `${`${datePublishedParam}:${lastPublished}`}`;
    }

    const redirectUrl = String(final);

    if (redirect) {
      window.open(redirectUrl, "_blank");
    }
    return String(redirectUrl);
  };

  const handleAddCustomWebsite = useCallback(
    (name, url) => {
      if (allSites[name]) {
        throw new Error("The site already exists.");
      }

      if (!validateUrl(url)) {
        throw new Error("Please enter a valid url");
      }

      setCustomSites((s) => ({
        ...s,
        [name]: { name, url, isCustom: true, icon: "/icons/custom-url.svg" },
      }));
    },
    [setCustomSites, allSites]
  );

  const handleRemoveCustomSite = useCallback(
    (name) => {
      const customSitesCopy = { ...customSites };
      delete customSitesCopy[name];
      if (selectedSites[name]) {
        const selectedSitesCopy = { ...selectedSites };
        delete selectedSitesCopy[name];
        setSelectedSites(selectedSitesCopy);
      }
      setCustomSites(customSitesCopy);
    },
    [setCustomSites, customSites, selectedSites]
  );

  const handleAddCustomFileFormat = useCallback(
    (format) => {
      if (allFileExtensions[format]) {
        throw new Error("The file extension already exists.");
      }
      setCustomFileExtensions((s) => ({
        ...s,
        [format]: {
          format,
          isCustom: true,
        },
      }));
    },
    [setCustomFileExtensions, allFileExtensions]
  );

  const handleRemoveCustomFileFormat = useCallback(
    (format) => {
      const customFileFormatsCopy = { ...customFileExtensions };
      delete customFileFormatsCopy[format];
      if (fileFormat === format) {
        setFileFormat("");
      }
      setCustomFileExtensions(customFileFormatsCopy);
    },
    [setCustomFileExtensions, customFileExtensions, fileFormat]
  );

  const handleAddCustomLastDate = useCallback(
    (months) => {
      if (allLastPublished[months]) {
        throw new Error("The month already exists");
      }

      setCustomLastPublished((s) => ({
        ...s,
        [`${months}_months`]: {
          last: `${months}m`,
          isCustom: true,
        },
      }));
    },
    [setCustomLastPublished, allLastPublished]
  );

  const handleRemoveCustomDatePublished = useCallback(
    (months) => {
      const customLastPublishedCopy = { ...customLastPublished };
      delete customLastPublishedCopy[months];
      if (months === lastPublished) {
        setLastPublished("");
      }
      setCustomLastPublished(customLastPublishedCopy);
    },
    [customLastPublished, setCustomLastPublished, lastPublished]
  );

  return {
    setTerms,
    setExcludedTerms,
    setSelectedSites,
    setIsExact,
    setFileFormat,
    setLastPublished,
    setModalToRender,
    onSubmitClick,
    allSites,
    handleAddCustomWebsite,
    handleAddCustomFileFormat,
    handleAddCustomLastDate,
    handleRemoveCustomSite,
    handleRemoveCustomFileFormat,
    handleRemoveCustomDatePublished,
    allFileExtensions,
    allLastPublished,
    terms,
    excludedTerms,
    selectedSites,
    fileFormat,
    isExact,
    lastPublished,
    modalToRender,
  };
};
