import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/page-title.png";

export default function Page2() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            Mia is four years old, and she’s growing up to be joyful and strong.
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
