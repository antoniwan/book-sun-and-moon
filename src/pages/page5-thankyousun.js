import styles from "./ContentPage.module.css";
import graphic from "../graphics/sun.avif";

export default function Page5({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={graphic}
          alt="Mia's smile is like sunshine!"
        />
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-1/4 p-8">
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                As another day goes by, and whenever Mia feels the sunshine on
                her skin, her smile shines, and as she looks into the sky with a
                bright, big smile, she screams,{" "}
                <em>"Hi, Sun! Thank you for the warmth and light So fun!"</em>
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Hoy es otro día nuevo, y cuando Mia siente la luz del sol en su
                piel, su sonrisa brilla y grita:{" "}
                <em>
                  “¡Hola, Sol! ¡Gracias por el calorcito y por la luz! ¡Qué
                  diversión!
                </em>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
