import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-1.avif";

export default function Page1({ language }) {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                Every day, the sun says hi and shines so bright. The sun makes
                Mia's brown eyes squint and sometimes smile.
              </p>
              <p className={styles.paragraph}>
                Off she goes, running to play in the park! Each new sun is a new
                day of life. A new day of fun and a new day for smiles.
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Cada día, el Sol dice hola y brilla con mucha calidez. El sol a
                veces hace que los ojos marrones de Mia se encojan un poquito,
                pero siempre la hace sonreír.
              </p>
              <p className={styles.paragraph}>
                ¡Ahí se va corriendo a jugar al parque! Cada nuevo sol es un
                nuevo día de vida. Un nuevo día de diversión y un nuevo día para
                sonrisas nuevas.
              </p>
            </>
          )}
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
