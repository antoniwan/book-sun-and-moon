import { useLanguage } from "../components/LanguageContext";
import PageWrapper from "../components/PageWrapper";
import styles from "./TitlePage.module.css";
import welcomeGraphic from "../graphics/page-title.png";

export default function TitlePage() {
  const { language } = useLanguage();

  return (
    <PageWrapper>
      {language === "en" && (
        <h2 className={styles.title}>Mia, the Sun, and her Moon</h2>
      )}

      {language === "es" && (
        <h2 className={styles.title}>Mia, el Sol, y su Luna</h2>
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
