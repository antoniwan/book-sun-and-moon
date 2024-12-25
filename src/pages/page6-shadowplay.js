import styles from "./ContentPage.module.css";
import graphic from "../graphics/shadow-play.avif";

export default function Page6({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={graphic}
          alt="Mia's smile is like sunshine!"
        />
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-3/4 p-8">
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
      </div>
    </>
  );
}
