import { useLanguage } from "./LanguageContext";
import styles from "./Footer.module.css";
import {
  SkipBack,
  SkipForward,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

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
    <footer className={styles.footer}>
      {false && (
        <nav className={styles.nav}>
          {currentPage !== 1 && (
            <button className={styles.button} onClick={goToFirstPage}>
              <SkipBack />
              First Page
            </button>
          )}
          <button className={styles.button} onClick={goToLastPage}>
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
            {language === "en" ? "Page" : "Página"} {currentPage}
          </button>
        )}

        {currentPage !== 1 && (
          <button className={styles.button} onClick={goToFirstPage}>
            <SkipBack />
            {language === "en" ? "First Page" : "Primera Página"}
          </button>
        )}

        {currentPage !== 1 && (
          <button className={` ${styles.button}`} onClick={goToPreviousPage}>
            <ChevronLeft />
            {language === "en" ? "Previous Page" : "Página Anterior"}
          </button>
        )}

        {currentPage !== lastPage && (
          <button className={styles.button} onClick={goToNextPage}>
            <ChevronRight />
            {language === "en" ? "Next Page" : "Próxima Página"}
          </button>
        )}
      </nav>

      <div>
        {language === "en" && (
          <p>
            Written & built with <span className="emoji">❤️</span> for my
            daughter and nephew.
          </p>
        )}

        {language === "es" && (
          <p>
            Escrito y construito con mucho <span className="emoji">❤️</span>{" "}
            para mi hija y sobrino.
          </p>
        )}
      </div>
    </footer>
  );
}
