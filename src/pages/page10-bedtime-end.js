import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/graphic-goodnight.png";

export default function Page10({ language }) {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                <em>"It's time for bed,"</em> said Mia with the moonshine
                glowing on her face, and so happy that tomorrow is another day.{" "}
                <em>"Good night, moon!"</em>
              </p>

              <h3 className={styles.theEnd}>The End</h3>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                <em>“Es hora de dormir”</em>, dijo Mia con la luz de la luna
                tocándole la carita, y feliz de que mañana será otro día y verá
                al sol.
                <em>“¡Buenas noches, Luna!”</em>
              </p>

              <h3 className={styles.theEnd}>Fin</h3>
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
