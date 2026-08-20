import { useEffect } from "react";

export function useKeyboardNav({ goNext, goPrev, goFirst, goLast, enabled = true }) {
  useEffect(() => {
    if (!enabled) return undefined;

    const onKeyDown = (event) => {
      const tag = event.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || event.target?.isContentEditable) {
        return;
      }

      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "Home") {
        event.preventDefault();
        goFirst();
      } else if (event.key === "End") {
        event.preventDefault();
        goLast();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, goFirst, goLast, goNext, goPrev]);
}

export function useSwipeNav({ goNext, goPrev, enabled = true }) {
  useEffect(() => {
    if (!enabled) return undefined;
    let startX = 0;
    let startY = 0;

    const onTouchStart = (event) => {
      startX = event.changedTouches[0].clientX;
      startY = event.changedTouches[0].clientY;
    };

    const onTouchEnd = (event) => {
      const dx = event.changedTouches[0].clientX - startX;
      const dy = event.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) goNext();
      else goPrev();
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [enabled, goNext, goPrev]);
}
