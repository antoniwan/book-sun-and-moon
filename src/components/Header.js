import { useLanguage } from "./LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>
        {language === "en" && (
          <>
            Mia, the Sun <span className="emoji">☀️</span>, and the Moon{" "}
            <span className="emoji">🌙</span>
          </>
        )}

        {language === "es" && (
          <>
            Mia, el Sol <span className="emoji">☀️</span>, y la Luna{" "}
            <span className="emoji">🌙</span>
          </>
        )}
      </h1>
    </header>
  );
}
