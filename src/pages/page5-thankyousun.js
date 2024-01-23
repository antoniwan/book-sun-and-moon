import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-4.jpg";

export default function Page5({ language }) {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                As another day goes by, and whenever Mia feels the sunshine on
                her skin, her smile shines, and as she looks into the sky with a
                bright, big smile, she screams,{" "}
                <em>"Hi, Sun! Thank you for the warmth and light!"</em>
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Hoy es otro día nuevo, y cada vez que Mia sienta la luz del sol
                en su piel, su sonrisa brilla y mirando al cielo, con su gran y
                brillante sonrisa, grita:{" "}
                <em>
                  “¡Hola, Sol! ¡Gracias por el calorcito y por la luz! ¡Gracias
                  por un nuevo día de diversión y juegos!
                </em>
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
