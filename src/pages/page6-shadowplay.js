import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-shadowplay.png";

export default function Page6({ language }) {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                As the hours of each day go by and the sun passes, it creates
                many shadows for our brave and joyful girl and her friends to
                play and enjoy. <em>"The sun also plays with us!"</em> Mia
                explains excitedly.
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Las horas de cada día pasan y el sol a su vez va pasando y
                moviéndose, creando muchas sombras para que nuestra niña
                valiente y alegre y sus amigos disfruten. Ellos inventan juegos
                con las sombras y su oscuridad.{" "}
                <em>“El sol también quiere jugar con nosotros”</em> Mia le
                explica a sus amigos.
              </p>
            </>
          )}
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
