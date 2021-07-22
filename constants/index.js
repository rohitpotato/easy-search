export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export const supportedSites = {
  stackoverflow: {
    url: "stackoverflow.com",
    name: "StackOverflow",
    isCustom: false,
    icon: "/icons/stackoverflow.svg",
  },
  reddit: {
    url: "reddit.com",
    name: "Reddit",
    isCustom: false,
    icon: "/icons/reddit.svg",
  },
  // productHunt: "producthunt.com",
  github: {
    url: "github.com",
    name: "Github",
    isCustom: false,
    icon: "/icons/github.svg",
  },
  dribbble: {
    url: "dribbble.com",
    name: "Dribbble",
    isCustom: false,
    icon: "/icons/dribbble.svg",
  },
  behance: {
    url: "behance.com",
    name: "Behance",
    isCustom: false,
    icon: "/icons/behance.svg",
  },
  medium: {
    url: "medium.com",
    name: "Medium",
    isCustom: false,
    icon: "/icons/medium.svg",
  },
  dev_to: {
    url: "dev.to",
    name: "Dev To",
    isCustom: false,
    icon: "/icons/devto.svg",
  },
  hackernews: {
    url: "hackernews.com",
    name: "Hacker News",
    isCustom: false,
    icon: "/icons/hackernews.svg",
  },
  // hashnode: "hashnode.com",
  mdn: {
    url: "developer.mozilla.org",
    name: "MDN",
    isCustom: false,
    icon: "/icons/mdn.svg",
  },
};

export const datePublished = {
  any: "any",
  past_24_hours: "d",
  past_seven_days: "w",
  past_six_months: "m6",
  past_year: "y",
};

export const supportedFileFormats = {
  any: "any",
  pdf: "pdf",
  xlsx: "xlsx",
  docx: "docx",
  pptx: "pptx",
  mp3: "mp3",
  mp4: "mp4",
  mkv: "mkv",
  zip: "zip",
};

export const params = {
  term: "q=",
  fileType: "fileType:",
  siteJoinChar: "+OR+",
  site: "site:",
  queryJoiner: "+",
  exclude: "+-",
  datePublished: "&tbs=qdr",
};

export const baseUrl = "https://google.com/search";

export const localStorageKeys = {
  ES_Sites: "sites",
  ES_LastPublishedList: "lastPublishedList",
  ES_FileExtensions: "fileExtensions",
};
