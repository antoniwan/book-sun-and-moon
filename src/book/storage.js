const PAGE_KEY = "mia-book-page";
const RESUME_KEY = "mia-book-resume";
const LANGUAGE_KEY = "mia-book-language";
const LEGACY_PAGE_KEY = "currentPage";
const LEGACY_LANGUAGE_KEY = "currentLanguage";

function canUseStorage() {
  try {
    return typeof window !== "undefined" && Boolean(window.localStorage);
  } catch {
    return false;
  }
}

export function readSavedPage(pageCount) {
  if (!canUseStorage()) return 0;

  const fresh = window.localStorage.getItem(PAGE_KEY);
  if (fresh !== null) {
    const value = Number(fresh);
    if (Number.isInteger(value) && value >= 0 && value < pageCount) {
      return value;
    }
  }

  const legacy = window.localStorage.getItem(LEGACY_PAGE_KEY);
  if (legacy !== null) {
    const oldValue = Number(legacy);
    if (Number.isInteger(oldValue) && oldValue >= 1 && oldValue <= pageCount) {
      return oldValue - 1;
    }
  }

  return 0;
}

export function savePage(index) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(PAGE_KEY, String(index));
  if (index > 0) {
    window.localStorage.setItem(RESUME_KEY, String(index));
  }
}

export function readResumePage(pageCount) {
  if (!canUseStorage()) return 0;
  const resume = Number(window.localStorage.getItem(RESUME_KEY));
  if (Number.isInteger(resume) && resume > 0 && resume < pageCount) {
    return resume;
  }

  const legacy = Number(window.localStorage.getItem(LEGACY_PAGE_KEY));
  if (Number.isInteger(legacy) && legacy >= 2 && legacy <= pageCount) {
    return legacy - 1;
  }

  return 0;
}

export function readSavedLanguage() {
  if (!canUseStorage()) return "en";
  const fresh = window.localStorage.getItem(LANGUAGE_KEY);
  if (fresh === "en" || fresh === "es") return fresh;
  const legacy = window.localStorage.getItem(LEGACY_LANGUAGE_KEY);
  if (legacy === "en" || legacy === "es") return legacy;
  return "en";
}

export function saveLanguage(language) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(LANGUAGE_KEY, language);
}

export function pageFromHash(pageCount) {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#/") return null;
  const raw = hash.replace(/^#\/?/, "");
  if (raw === "cover") return 0;
  const value = Number(raw);
  if (Number.isInteger(value) && value >= 0 && value < pageCount) {
    return value;
  }
  return null;
}

export function writeHash(index) {
  if (typeof window === "undefined") return;
  const next = index === 0 ? "#/" : `#/${index}`;
  if (window.location.hash !== next) {
    window.history.replaceState(null, "", next);
  }
}
