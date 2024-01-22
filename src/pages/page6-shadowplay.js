import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-shadowplay.png";

export default function Page6() {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            As the hours of each day go by and the sun passes, it creates many
            shadows for our brave and joyful girl and her friends to play and
            enjoy. <em>"The sun also plays with us!"</em> Mia explains
            excitedly.
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
