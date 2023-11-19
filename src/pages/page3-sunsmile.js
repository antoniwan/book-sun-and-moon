import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-3.png";

export default function Page3() {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            Every day, the sun says hi and shines so bright. This consistency
            makes Mia smile. Off she goes, running to play in the park!
          </p>
          <p className={styles.paragraph}>
            Each new sun is a new day of life. A new day of fun, and a new day
            for smiles.
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
