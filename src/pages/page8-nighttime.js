import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/graphic-space.jpg";

export default function Page8({ language }) {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                The nighttime is also so full of stars! Mia has many hours to
                explore the night sky, and her imagination goes wild!
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                ¡El cielo de la noche tiene tantas estrellas! Mia tiene mucho
                tiempo para explorar el cielo e la noche, ¡su imaginación se
                vuelve loquita mirando el cielo con sus estrellas y planetas!
              </p>
            </>
          )}
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
