import { useCallback, useEffect, useRef, useState } from "react";
import { LAST_STORY_INDEX, PAGES } from "../book/content";
import { pageFromHash, savePage, writeHash } from "../book/storage";

export function useBookNavigation() {
  const [index, setIndex] = useState(() => pageFromHash(PAGES.length) ?? 0);
  const [direction, setDirection] = useState(1);
  const indexRef = useRef(index);
  indexRef.current = index;

  const goTo = useCallback((nextIndex, nextDirection) => {
    const current = indexRef.current;
    const clamped = Math.min(Math.max(nextIndex, 0), LAST_STORY_INDEX);
    setDirection(nextDirection ?? (clamped >= current ? 1 : -1));
    setIndex(clamped);
  }, []);

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const goFirst = useCallback(() => goTo(0, -1), [goTo]);
  const goLast = useCallback(() => goTo(LAST_STORY_INDEX, 1), [goTo]);

  useEffect(() => {
    savePage(index);
    writeHash(index);
  }, [index]);

  useEffect(() => {
    const onHashChange = () => {
      const fromHash = pageFromHash(PAGES.length);
      if (fromHash !== null) {
        setIndex(fromHash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const nextPage = PAGES[index + 1];
    if (!nextPage || process.env.NODE_ENV === "test") return undefined;
    const preload = new Image();
    preload.src = nextPage.image;
    return () => {
      preload.src = "";
    };
  }, [index]);

  return {
    index,
    page: PAGES[index],
    direction,
    isCover: index === 0,
    isLast: index === LAST_STORY_INDEX,
    pageCount: LAST_STORY_INDEX,
    storyNumber: index,
    goTo,
    goNext,
    goPrev,
    goFirst,
    goLast,
  };
}
