import { SEO, SITE_IMAGE } from "./content";

function setMetaBySelector(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function applyDocumentMeta(language) {
  if (typeof document === "undefined") return;

  const title = SEO.title[language] || SEO.defaultTitle;
  const description = SEO.description[language];
  const locale = SEO.locale[language];
  const imageAlt = SEO.imageAlt[language];

  document.title = title;
  document.documentElement.lang = language === "es" ? "es" : "en";

  setMetaBySelector('meta[name="description"]', "content", description);
  setMetaBySelector('meta[property="og:title"]', "content", title);
  setMetaBySelector('meta[property="og:description"]', "content", description);
  setMetaBySelector('meta[property="og:locale"]', "content", locale);
  setMetaBySelector('meta[property="og:image"]', "content", SITE_IMAGE);
  setMetaBySelector('meta[property="og:image:alt"]', "content", imageAlt);
  setMetaBySelector('meta[name="twitter:title"]', "content", title);
  setMetaBySelector('meta[name="twitter:description"]', "content", description);
  setMetaBySelector('meta[name="twitter:image"]', "content", SITE_IMAGE);
  setMetaBySelector('meta[name="twitter:image:alt"]', "content", imageAlt);
}
