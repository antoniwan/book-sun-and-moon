import { useEffect, useRef } from "react";
import { PAGES } from "../book/content";
import { readResumePage } from "../book/storage";
import { useBookNavigation } from "../hooks/useBookNavigation";
import { useKeyboardNav, useSwipeNav } from "../hooks/useGestures";
import { useReadAloud } from "../hooks/useReadAloud";
import CoverPage from "./CoverPage";
import Header from "./Header";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import ReaderBar from "./ReaderBar";
import Starfield from "./Starfield";
import StoryPage from "./StoryPage";

function Book() {
  const { language, setLanguage } = useLanguage();
  const book = useBookNavigation();
  const { speaking, toggle, stop } = useReadAloud(book.page, language);
  const liveRef = useRef(null);
  const resumeIndex = readResumePage(PAGES.length);

  useKeyboardNav({
    goNext: book.goNext,
    goPrev: book.goPrev,
    goFirst: book.goFirst,
    goLast: book.goLast,
  });
  useSwipeNav({ goNext: book.goNext, goPrev: book.goPrev });

  useEffect(() => {
    stop();
  }, [book.index, language, stop]);

  const theme = book.page.theme;
  const nightSky = theme === "night" || theme === "dusk";

  return (
    <div
      className="book-shell flex h-[100dvh] flex-col overflow-hidden"
      data-theme={theme}
    >
      <div className="sr-only" aria-live="polite" ref={liveRef}>
        {book.isCover
          ? language === "es"
            ? "Portada"
            : "Cover"
          : language === "es"
            ? `Página ${book.storyNumber} de ${book.pageCount}`
            : `Page ${book.storyNumber} of ${book.pageCount}`}
      </div>

      <div className="stage relative min-h-0 flex-1 overflow-hidden">
        <img
          key={book.page.id}
          src={book.page.image}
          alt={book.page.alt[language]}
          className="page-art absolute inset-0 h-full w-full object-cover"
          style={{ "--page-delta": book.direction > 0 ? "18px" : "-18px" }}
        />
        <div
          key={`${book.page.id}-copy`}
          className="animate-pageIn absolute inset-0"
          style={{ "--page-delta": book.direction > 0 ? "18px" : "-18px" }}
        >
          <Starfield enabled={nightSky} />
          {!book.isCover && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-gradient-to-t from-ink/35 to-transparent" />
          )}
          <Header isCover={book.isCover} onHome={book.goFirst} />

          {book.isCover ? (
            <CoverPage
              page={book.page}
              language={language}
              onStart={() => book.goTo(1, 1)}
              onContinue={() => book.goTo(resumeIndex || 1, 1)}
              showContinue={resumeIndex > 1}
              onLanguageChange={setLanguage}
            />
          ) : (
            <StoryPage page={book.page} language={language} />
          )}
        </div>

        {!book.isCover && (
          <>
            <button
              type="button"
              className="hotspot absolute inset-y-0 left-0 z-[5] w-[18%] bg-transparent"
              aria-label={language === "es" ? "Página anterior" : "Previous page"}
              onClick={book.goPrev}
            />
            {!book.isLast && (
              <button
                type="button"
                className="hotspot absolute inset-y-0 right-0 z-[5] w-[18%] bg-transparent"
                aria-label={language === "es" ? "Página siguiente" : "Next page"}
                onClick={book.goNext}
              />
            )}
          </>
        )}
      </div>

      <ReaderBar
        language={language}
        onLanguageChange={setLanguage}
        storyNumber={book.storyNumber}
        pageCount={book.pageCount}
        isCover={book.isCover}
        isLast={book.isLast}
        goPrev={book.goPrev}
        goNext={book.goNext}
        goFirst={book.goFirst}
        goLast={book.goLast}
        goTo={book.goTo}
        speaking={speaking}
        onToggleSpeech={toggle}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Book />
    </LanguageProvider>
  );
}
