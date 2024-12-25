import styles from "./ContentPage.module.css";
import graphic from "../graphics/school.avif";

export default function Page3({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={graphic}
          alt="Mia's smile is like sunshine!"
        ></img>
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-1/4 p-8">
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                It's another day, and the sun says hi again. The sun will always
                be there for us, she notices.
              </p>
              <p className={styles.paragraph}>
                Today is a school day, and Mia is off to learning and thriving
                with her favorite teacher and friends.
              </p>
            </>
          )}
          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Hoy es otro día, y el sol dice hola y brilla nuevamente. Mia se
                da cuenta de que el sol siempre estará ahí para ella durante el
                día.
              </p>
              <p className={styles.paragraph}>
                Hoy hay escuela, y Mia se va a aprender y prosperar con su
                maestra, y unos amigos y compañeros de clase.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
