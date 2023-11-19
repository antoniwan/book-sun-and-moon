import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-4.png";

export default function Page4() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            Another day goes by and whenever Mia feels the sunshine on her skin,
            her smile shines, and as she looks into the sky with a bright big,
            she screams -<em>"Hi sun! Thank you for the warmth and light!"</em>
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
