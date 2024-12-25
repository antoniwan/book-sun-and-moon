import { useLanguage } from "./LanguageContext";
import styles from "./Footer.module.css";
import { SkipBack, ChevronLeft, ChevronRight } from "react-feather";

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
    <footer className="fixed bottom-0 left-0 right-0 p-2 bg-white flex flex-col gap-2 justify-center">
      <nav className="flex grow-1 flex-row gap-4 items-center justify-center align-middle">
        {currentPage === 1 && (
          <button
            className="inline-flex justify-center items-center w-full p-4 px-2 bg-pink-500 text-white text-lg font-bold rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => goToNextPage()}
          >
            {language === "en" ? "Start reading!" : "¡Comenzar a leer!"}
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

        {/* Page Counter! */}
        {currentPage !== 1 && (
          <p className="flex-1 text-sm font-bold text-center text-stone-700">
            {language === "en" ? "Page" : "Página"} {currentPage - 1}
          </p>
        )}

        {currentPage !== 1 && currentPage !== lastPage && (
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

      <div className="mt-2 flex gap-6 order-last items-center justify-center">
        <button
          className="order-4 inline-flex justify-center items-center w-40 md:w-40 px-4 py-2 bg-stone-100 text-stone-900 text-sm font-bold rounded-md hover:bg-stone-300 transition duration-300"
          onClick={() => switchLanguage(language)}
        >
          {language === "en" ? "English 🇺🇸" : "Español 🇵🇷"}
        </button>

        {language === "en" && (
          <p className="text-xs text-center">
            Written, designed, & built with <span className="emoji">❤️</span>{" "}
            for my daughter and nephew.
          </p>
        )}

        {language === "es" && (
          <p className="text-xs text-center">
            Escrito, diseñado, y programado con mucho{" "}
            <span className="emoji">❤️</span> para mi hija y sobrino.
          </p>
        )}
      </div>
    </footer>
  );
}
