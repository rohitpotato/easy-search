export const THEMES = {
  DARK: "dark-mode",
  LIGHT: "light-mode",
};

export const supportedSites = {
  stackoverflow: "stackoverflow.com",
  reddit: "reddit.com",
  // productHunt: "producthunt.com",
  github: "github.com",
  dribbble: "dribbble.com",
  behance: "behance.com",
  medium: "medium.com",
  dev_to: "dev.to",
  hackernews: "hackernews.com",
  // hashnode: "hashnode.com",
  mdn: "developer.mozilla.org",
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
