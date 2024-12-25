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
    <div>
      {language === "en" && (
        <p className="">
          Written, designed, & built with <span className="emoji">❤️</span> for
          my daughter and nephew.
        </p>
      )}

      {language === "es" && (
        <p className="">
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
      {false && (
        <nav className="flex">
          {currentPage !== 1 && (
            <button className={styles.button} onClick={() => goToFirstPage()}>
              <SkipBack />
              First Page
            </button>
          )}
          <button className={styles.button} onClick={() => goToLastPage()}>
            <SkipForward /> Last Page
          </button>
        </nav>
      )}

      <nav className={styles.nav}>
        <button
          className={styles.button}
          onClick={() => switchLanguage(language)}
        >
          {language === "en" ? "🇺🇸 English" : "🇵🇷 Español"}
        </button>

        {currentPage !== 1 && (
          <button className={`${styles.button} ${styles.textButton}`}>
            {language === "en" ? "Page" : "Página"} {currentPage - 1}
          </button>
        )}

        {false && currentPage !== 1 && (
          <button className={styles.button} onClick={() => goToFirstPage()}>
            <SkipBack />
            {language === "en" ? "First Page" : "Primera Página"}
          </button>
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
            {language === "en" ? "Next Page" : "Próxima Página"}
          </button>
        )}

        {currentPage === 11 && (
          <button className={styles.button} onClick={() => goToFirstPage()}>
            <SkipBack />
            {language === "es" ? "Comenzar Nuevamente" : "Start Over"}
          </button>
        )}
      </nav>
    </footer>
  );
}
