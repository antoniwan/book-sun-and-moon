import PageWrapper from "../components/PageWrapper";
import styles from "./TitlePage.module.css";
import welcomeGraphic from "../graphics/page-title.jpg";

export default function TitlePage({ language }) {
  return (
    <PageWrapper>
      {language === "en" && (
        <h2 className={styles.title}>Mia, the Sun, and the Moon</h2>
      )}

      {language === "es" && (
        <h2 className={styles.title}>Mia, el Sol, y la Luna</h2>
      )}

      <div className={styles["graphic-wrapper"]}>
        <img
          className={styles.graphic}
          src={welcomeGraphic}
          alt="Mia' is a happy and brave 4-year old girl who is dressed in a pink dress."
        ></img>
      </div>
    </PageWrapper>
  );
}
