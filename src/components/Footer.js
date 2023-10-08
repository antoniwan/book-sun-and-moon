import styles from "./Footer.module.css";
import {
  SkipBack,
  SkipForward,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

export default function Footer({ currentPage }) {
  return (
    <footer className={styles.footer}>
      {false && (
        <nav className={styles.nav}>
          {currentPage !== 1 && (
            <button className={styles.button}>
              <SkipBack />
              First Page
            </button>
          )}
          <button className={styles.button}>
            <SkipForward /> Last Page
          </button>
        </nav>
      )}

      <nav className={styles.nav}>
        {currentPage !== 1 && (
          <button className={` ${styles.button}`}>
            <ChevronLeft />
            Previous Page
          </button>
        )}
        <button className={styles.button}>
          <ChevronRight />
          Next Page
        </button>
      </nav>

      <div>
        <p>
          Written with <span className="emoji">❤️</span> for my daugther and
          nephew.
        </p>
      </div>
    </footer>
  );
}
