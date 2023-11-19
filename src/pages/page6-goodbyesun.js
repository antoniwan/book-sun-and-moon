import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-6.png";

export default function Page6() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            It's time to say goodbye to the sunshine and the daylight, but Mia
            rejoices because the moon is about to say{" "}
            <em>
              -"Hi! Hello! Good day good night good night good day!" A song that
              Mia made up!
            </em>
          </p>
        </div>

        <div className={` ${styles.graphicColumn}`}>
          <div className={styles["graphic-wrapper"]}>
            <img
              className={styles.graphic}
              src={graphic}
              alt="Mia's smile is like sunshine!"
            ></img>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
