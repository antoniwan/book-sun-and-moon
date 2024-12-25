import { useLanguage } from "./LanguageContext";
import styles from "./Footer.module.css";
import {
  SkipBack,
  SkipForward,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

const Disclaimer = () => {
  const { language } = useLanguage();
  return (
    <div className="flex items-center justify-center">
      {language === "en" && (
        <p className="text-xs">
          Written, designed, & built with <span className="emoji">❤️</span> for
          my daughter and nephew.
        </p>
      )}

      {language === "es" && (
        <p className="text-xs">
          Escrito, diseñado, y programado con mucho{" "}
          <span className="emoji">❤️</span> para mi hija y sobrino.
        </p>
      )}
    </div>
  );
};

export default function Footer({
  currentPage,
  lastPage,
  goToNextPage,
  goToPreviousPage,
  goToFirstPage,
  goToLastPage,
}) {
  const { language, switchLanguage } = useLanguage();

  return (
    <footer className="fixed bottom-0 left-0 right-0 p-2 bg-white">
      <nav className="flex items-center justify-between">
        <button
          className="inline-flex justify-center items-center w-40 px-4 py-2 bg-stone-100300 text-stone-900 text-sm hover:text-white font-bold rounded-md hover:bg-stone-600 transition duration-300"
          onClick={() => switchLanguage(language)}
        >
          {language === "en" ? "English 🇺🇸" : "Español 🇵🇷"}
        </button>

        {currentPage !== 1 && (
          <p className="text-sm font-semibold">
            {language === "en" ? "Page" : "Página"} {currentPage - 1}
          </p>
        )}

        {currentPage !== 1 && (
          <button
            className={` ${styles.button}`}
            onClick={() => goToPreviousPage()}
          >
            <ChevronLeft />
            {language === "en" ? "Previous Page" : "Página Anterior"}
          </button>
        )}

        <Disclaimer />

        {currentPage !== lastPage && (
          <button className={styles.button} onClick={() => goToNextPage()}>
            <ChevronRight />
            {language === "en" ? "Next Page" : "Siguiente Página"}
          </button>
        )}

        {currentPage === 11 && (
          <button className={styles.button} onClick={() => goToFirstPage()}>
            <SkipBack />
            {language === "es" ? "Al principio" : "Start Over"}
          </button>
        )}
      </nav>
    </footer>
  );
}
