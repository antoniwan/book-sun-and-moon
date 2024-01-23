import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-school.jpg";

export default function Page3({ language }) {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                It's another day, and the sun says hi again. The sun will always
                be there for us, she notices.
              </p>
              <p className={styles.paragraph}>
                Today is a school day, and Mia is off to learning and thriving
                with her favorite teacher and many friends.
              </p>
            </>
          )}
          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Hoy es otro día, y el sol dice hola y brilla nuevamente. Mia se
                da cuenta de que el sol siempre estará ahí para nosotros durante
                el día.
              </p>
              <p className={styles.paragraph}>
                Hoy hay escuela, y Mia se va a aprender y prosperar con su
                maestra favorita, y unos cuantos amigos y compañeros.
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
