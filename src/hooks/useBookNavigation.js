import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LAST_STORY_INDEX, PAGES } from "../book/content";
import { indexFromPathname, pathForIndex, pathFromLegacyHash } from "../book/paths";
import { savePage } from "../book/storage";

export function useBookNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(1);
  const index = indexFromPathname(location.pathname);
  const resolvedIndex = index ?? 0;
  const indexRef = useRef(resolvedIndex);
  indexRef.current = resolvedIndex;

  const goTo = useCallback(
    (nextIndex, nextDirection) => {
      const current = indexRef.current;
      const clamped = Math.min(Math.max(nextIndex, 0), LAST_STORY_INDEX);
      setDirection(nextDirection ?? (clamped >= current ? 1 : -1));
      savePage(clamped);
      navigate(pathForIndex(clamped));
    },
    [navigate]
  );

  const goNext = useCallback(() => goTo(resolvedIndex + 1, 1), [goTo, resolvedIndex]);
  const goPrev = useCallback(() => goTo(resolvedIndex - 1, -1), [goTo, resolvedIndex]);
  const goFirst = useCallback(() => goTo(0, -1), [goTo]);
  const goLast = useCallback(() => goTo(LAST_STORY_INDEX, 1), [goTo]);

  useEffect(() => {
    if (!location.hash) return undefined;
    const migrated = pathFromLegacyHash(location.hash);
    if (migrated) {
      navigate({ pathname: migrated, hash: "" }, { replace: true });
    }
    return undefined;
  }, [location.hash, navigate]);

  useEffect(() => {
    if (index === null) return;
    savePage(index);
  }, [index]);

  useEffect(() => {
    const nextPage = PAGES[resolvedIndex + 1];
    if (!nextPage || import.meta.env.MODE === "test") return undefined;
    const preload = new Image();
    preload.src = nextPage.image;
    return () => {
      preload.src = "";
    };
  }, [resolvedIndex]);

  return {
    index: resolvedIndex,
    page: PAGES[resolvedIndex],
    direction,
    isCover: resolvedIndex === 0,
    isLast: resolvedIndex === LAST_STORY_INDEX,
    pageCount: LAST_STORY_INDEX,
    storyNumber: resolvedIndex,
    invalidPath: index === null,
    canonicalPath: index === null ? "/" : pathForIndex(index),
    goTo,
    goNext,
    goPrev,
    goFirst,
    goLast,
  };
}
