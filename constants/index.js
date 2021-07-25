export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export const supportedSites = {
  stackoverflow: {
    url: "stackoverflow.com",
    name: "StackOverflow",
    isCustom: false,
    icon: "/icons/stackoverflow.png",
  },
  reddit: {
    url: "reddit.com",
    name: "Reddit",
    isCustom: false,
    icon: "/icons/reddit.png",
  },
  // productHunt: "producthunt.com",
  // github: {
  //   url: "github.com",
  //   name: "Github",
  //   isCustom: false,
  //   icon: "/icons/github.png",
  // },
  dribbble: {
    url: "dribbble.com",
    name: "Dribbble",
    isCustom: false,
    icon: "/icons/dribbble.png",
  },
  // behance: {
  //   url: "behance.com",
  //   name: "Behance",
  //   isCustom: false,
  //   icon: "/icons/behance.png",
  // },
  medium: {
    url: "medium.com",
    name: "Medium",
    isCustom: false,
    icon: "/icons/medium.png",
  },
  dev_to: {
    url: "dev.to",
    name: "Dev To",
    isCustom: false,
    icon: "/icons/devto.png",
  },
  // hackernews: {
  //   url: "hackernews.com",
  //   name: "Hacker News",
  //   isCustom: false,
  //   icon: "/icons/hackernews.ico",
  // },
  // hashnode: "hashnode.com",
  mdn: {
    url: "developer.mozilla.org",
    name: "MDN",
    isCustom: false,
    icon: "/icons/mdn.png",
  },
};

export const datePublished = {
  any: {
    last: "any",
    isCustom: false,
  },
  past_24_hours: {
    last: "d",
    isCustom: false,
  },
  past_seven_days: {
    last: "w",
    isCustom: false,
  },
  past_six_months: {
    last: "m6",
    isCustom: false,
  },
  past_year: {
    last: "m12",
    isCustom: false,
  },
};

export const supportedFileFormats = {
  any: {
    format: "any",
    isCustom: false,
  },
  pdf: {
    format: "pdf",
    isCustom: false,
  },
  xlsx: {
    format: "xlsx",
    isCustom: false,
  },
  docx: {
    format: "docx",
    isCustom: false,
  },
  pptx: {
    format: "pptx",
    isCustom: false,
  },
  mp3: {
    format: "mp3",
    isCustom: false,
  },
  mp4: {
    format: "mp4",
    isCustom: false,
  },
  mkv: {
    format: "mkv",
    isCustom: false,
  },
  zip: {
    format: "zip",
    isCustom: false,
  },
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
  sites: "ES_Sites",
  lastPublishedList: "ES_LastPublishedList",
  fileExtensions: "ES_FileExtensions",
};
