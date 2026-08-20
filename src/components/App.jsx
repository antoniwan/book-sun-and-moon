import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { PAGES } from "../book/content";
import { readResumePage } from "../book/storage";
import { useBookNavigation } from "../hooks/useBookNavigation";
import { useKeyboardNav, useSwipeNav } from "../hooks/useGestures";
import { useReadAloud } from "../hooks/useReadAloud";
import CoverPage from "./CoverPage";
import Header from "./Header";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import ReaderBar from "./ReaderBar";
import StoryPage from "./StoryPage";

function Book() {
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
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

  if (book.invalidPath) {
    return <Navigate to="/" replace />;
  }

  const currentPath = pathname.replace(/\/+$/, "") || "/";
  if (currentPath !== book.canonicalPath) {
    return <Navigate to={book.canonicalPath} replace />;
  }

  const theme = book.page.theme;
  const wideCaption = book.page.captionSize === "wide";

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

      <div
        className={`stage relative flex min-h-0 flex-1 flex-col overflow-hidden ${
          book.isCover ? "" : "lg:flex-row"
        }`}
      >
        <div
          className={`relative h-full min-h-0 flex-1 overflow-hidden ${
            book.isCover ? "bg-paper" : "bg-dusk"
          }`}
        >
          <img
            key={book.page.id}
            src={book.page.image}
            alt={book.page.alt[language]}
            className="page-art animate-pageIn absolute inset-0 h-full w-full"
            style={{
              "--page-delta": book.direction > 0 ? "18px" : "-18px",
              "--art-position": book.page.objectPosition || "center",
            }}
          />
          <div
            key={`${book.page.id}-copy`}
            className="animate-pageIn absolute inset-0"
            style={{ "--page-delta": book.direction > 0 ? "18px" : "-18px" }}
          >
            {book.isCover && (
              <CoverPage
                page={book.page}
                language={language}
                onStart={() => book.goTo(1, 1)}
                onContinue={() => book.goTo(resumeIndex || 1, 1)}
                showContinue={resumeIndex > 1}
                onLanguageChange={setLanguage}
              />
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

        {!book.isCover && (
          <div
            className={`flex min-h-0 shrink-0 flex-col overflow-y-auto border-t border-ink/10 bg-paper lg:border-l lg:border-t-0 ${
              wideCaption
                ? "max-h-[38vh] lg:h-full lg:max-h-none lg:w-[min(40rem,44%)]"
                : "max-h-[34vh] lg:h-full lg:max-h-none lg:w-[min(26rem,36%)]"
            }`}
          >
            <Header isCover={book.isCover} onHome={book.goFirst} />
            <StoryPage page={book.page} language={language} />
          </div>
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
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/:pageId" element={<Book />} />
        <Route path="/:pageNumber/:pageId" element={<Book />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
}
