import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-beach.jpg";

export default function Page2({ language }) {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                Every day, the sun says hi and shines so warmly. The sun makes
                Mia's skin warm.
              </p>
              <p className={styles.paragraph}>
                Today is different; she won't go to the park; she'd instead go
                to the beach and play on the sand. This day is special because
                her cousin Dario joins them in the fun.
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Cada día, el Sol dice hola y brilla con mucha calidez. El sol
                hace que la piel de Mia se ponga calentita.
              </p>
              <p className={styles.paragraph}>
                Hoy es un día diferente; Mia no va al parque porque se va para
                la playa a jugar en la arena. El día también es especial pues su
                primo Dario la acompaña en la diversión.
              </p>
            </>
          )}
        </div>

        <div className={` ${styles.graphicColumn}`}>
          <div className={styles["graphic-wrapper"]}>
            <img
              className={styles.graphic}
              src={graphic}
              alt="A sandy beach with crystal clear waters meeting the ocean in the backdrop of a serene blue sky, accented by the soft glow of a sunny day, all framed by the distinctive contours of mountains in the distance. You can see a 4-year old playing in the sand, and her family is spotted near the girl."
            ></img>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
