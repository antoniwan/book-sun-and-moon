import styles from "./ContentPage.module.css";
import graphic from "../graphics/birthday.avif";

export default function Page4({ language }) {
  return (
    <>
      <div className="flex flex-col mb-36">
        <img
          className="w-screen h-screen object-cover"
          src={graphic}
          alt="Mia's smile is like sunshine!"
        ></img>
        <div className="md:fixed bg-white/95 md:bottom-36 md:right-0 md:w-3/4 p-8">
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                So many days have passed that Mia is now four years old, growing
                up brave and joyful. An entire year of the sun and her moon has
                passed by.
              </p>
              <p className={styles.paragraph}>
                Mia had a birthday celebration among family and friends to
                celebrate a new year of life. The cake was very yummy.
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                Un año completo del ciclo de día y noche, del baile del sol y la
                luna, ha pasado. Son muchos días y Mia ahora cumplió 4 años.
              </p>
              <p className={styles.paragraph}>
                Mia tuvo una celebración de cumpleaños junto a sus familiares y
                amigos para apreciar un nuevo año de vida. El bizcocho estaba
                muy delicioso.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
