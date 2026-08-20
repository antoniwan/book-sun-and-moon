import { PAGES } from "./content";

function cleanPathname(pathname) {
  return (pathname || "/").replace(/\/+$/, "") || "/";
}

export function pathForIndex(index) {
  const page = PAGES[index];
  if (!page || page.id === "cover") return "/";
  return `/${index}/${page.id}`;
}

export function indexFromPathname(pathname) {
  const clean = cleanPathname(pathname);
  if (clean === "/" || clean === "/cover") return 0;

  const numbered = clean.match(/^\/(\d+)(?:\/([^/]+))?$/);
  if (numbered) {
    const index = Number(numbered[1]);
    const page = PAGES[index];
    if (!page || page.id === "cover") return null;
    return index;
  }

  const slug = clean.match(/^\/([^/]+)$/);
  if (slug) {
    const index = PAGES.findIndex((page) => page.id === slug[1]);
    return index > 0 ? index : null;
  }

  return null;
}

export function pathFromLegacyHash(hash) {
  if (!hash || hash === "#" || hash === "#/") return "/";
  const raw = hash.replace(/^#\/?/, "");
  if (!raw || raw === "cover") return "/";
  const asNumber = Number(raw);
  if (Number.isInteger(asNumber) && PAGES[asNumber]) {
    return pathForIndex(asNumber);
  }
  const byId = PAGES.findIndex((page) => page.id === raw);
  if (byId >= 0) return pathForIndex(byId);
  return null;
}
