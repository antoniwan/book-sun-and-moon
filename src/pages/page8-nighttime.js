import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/colorful-sky.avif";

export default function Page8({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={welcomeGraphic}
          alt="Mia's smile is like sunshine!"
        />
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-1/4 p-8">
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
                ¡El cielo de la noche tiene tantas estrellas! Mia tiene un poco
                de tiempo antes de dormir para explorar el cielo de la noche,
                ¡su imaginación salta con curiosidad!
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
