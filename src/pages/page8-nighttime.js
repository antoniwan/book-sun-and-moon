import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/page-title.png";

export default function Page8() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            The nighttime is also so full of stars! Mia has many hours to
            explore the night sky!
          </p>
        </div>

        <div className={` ${styles.graphicColumn}`}>
          <div className={styles["graphic-wrapper"]}>
            <img
              className={styles.graphic}
              src={welcomeGraphic}
              alt="Mia's smile is like sunshine!"
            ></img>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
