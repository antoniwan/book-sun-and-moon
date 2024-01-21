import { useLanguage } from "../components/LanguageContext";
import PageWrapper from "../components/PageWrapper";
import styles from "./TitlePage.module.css";
import welcomeGraphic from "../graphics/page-title.png";

export default function TitlePage() {
  const { language } = useLanguage();

  return (
    <PageWrapper>
      {language === "en" && (
        <h2 className={styles.title}>
          Mia, the Sun <span className={styles["sun-emoji"]}>☀️</span>, and her
          Moon{" "}
          <span className={`${styles.emoji} ${styles["moon-emoji"]}`}>🌙</span>
        </h2>
      )}

      {language === "es" && (
        <h2 className={styles.title}>
          Mia, el Sol <span className={styles["sun-emoji"]}>☀️</span>, y su Luna{" "}
          <span className={`${styles.emoji} ${styles["moon-emoji"]}`}>🌙</span>
        </h2>
      )}

      <div className={styles["graphic-wrapper"]}>
        <img
          className={styles.graphic}
          src={welcomeGraphic}
          alt="Mia's smile is like sunshine!"
        ></img>
      </div>
    </PageWrapper>
  );
}
