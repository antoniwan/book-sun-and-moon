import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-park.png";

export default function Page1() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            Every day, the sun says hi and shines so warmly. The sun makes Mia's
            eyes squint and sometimes smile. Off she goes, running to play in
            the park! Each new sun is a new day of life. A new day of fun and a
            new day for smiles.
          </p>
        </div>

        <div className={` ${styles.graphicColumn}`}>
          <div className={styles["graphic-wrapper"]}>
            <img
              className={styles.graphic}
              src={graphic}
              alt="A 4-year-old girl with long, flowing brown hair, engaged in a playful moment with friends in a sunny playground, her smile radiant even as she becomes surrounded by softly blurred figures, illustrating the power of innocent joy amidst a backdrop of gentle shadow - she is playing in between shadows created by the trees and the playground"
            ></img>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
