import styles from "./ContentPage.module.css";
import graphic from "../graphics/park-play.avif";

export default function Page1({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={graphic}
          alt="A 4-year-old girl with long, flowing brown hair, engaged in a playful moment with friends in a sunny playground, her smile radiant even as she becomes surrounded by softly blurred figures, illustrating the power of innocent joy amidst a backdrop of gentle shadow - she is playing in between shadows created by the trees and the playground"
        />
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-1/4 p-8">
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                Every day, the sun says hi and shines so bright. The sun makes
                Mia's brown eyes squint but always smile.
              </p>
              <p className={styles.paragraph}>
                Off she goes, running to play in the park! Each new sun is a new
                day of life, fun and smiles.
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Cada día, el Sol dice hola y brilla con mucha calidez. El sol a
                veces hace que los ojos marrones de Mia se encojan un poquito,
                pero siempre la hace sonreír.
              </p>
              <p className={styles.paragraph}>
                ¡Ahí se va corriendo a jugar al parque! Cada nuevo sol es un
                nuevo día de vida, diversión y sonrisas.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
