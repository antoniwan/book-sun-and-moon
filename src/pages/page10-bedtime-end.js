import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/graphic-goodnight.jpg";

export default function Page10({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={welcomeGraphic}
          alt="Mia's smile is like sunshine!"
        />
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-4/5 p-8">
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
      </div>
    </>
  );
}
