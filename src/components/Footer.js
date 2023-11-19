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
        {currentPage !== 1 && (
          <button className={`${styles.button} ${styles.textButton}`}>
            Page {currentPage}
          </button>
        )}

        {currentPage !== 1 && (
          <button className={styles.button} onClick={goToFirstPage}>
            <SkipBack />
            First Page
          </button>
        )}

        {currentPage !== 1 && (
          <button className={` ${styles.button}`} onClick={goToPreviousPage}>
            <ChevronLeft />
            Previous Page
          </button>
        )}

        {currentPage !== lastPage && (
          <button className={styles.button} onClick={goToNextPage}>
            <ChevronRight />
            Next Page
          </button>
        )}
      </nav>

      <div>
        <p>
          Written & built with <span className="emoji">❤️</span> for my daughter
          and nephew.
        </p>
      </div>
    </footer>
  );
}
