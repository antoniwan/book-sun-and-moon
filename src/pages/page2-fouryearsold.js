import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-2.png";

export default function Page2() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            So many days have gone by that Mia is now four years old, and she’s
            growing up to be joyful and strong.
          </p>
          <p className={styles.paragraph}>
            Her birthday happened one the day, among family and friends.
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
