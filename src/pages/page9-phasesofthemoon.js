import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/graphic-moon.jpg";

export default function Page9({ language }) {
  return (
    <>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <p className={styles.paragraph}>
              Mia thinks the moon has many faces because it looks different
              every night. What a curious girl! Mia's parents explain that the
              moon is similar to us as we have many sides. We are family,
              friends, and workers, sometimes sick, sometimes happy; sometimes
              we hide or play in the shadows; sometimes we bask in the sun;
              sometimes we are parents; sometimes we are daughters and sons,
              sometimes we are awake, and other times asleep, sometimes we are
              there, and sometimes we must go away, we always have many
              different sides and phases, just like the moon, our lives are
              ever-changing. Mia giggles, remembering or creating some kind of
              humor from this explanation.
            </p>
          )}

          {language === "es" && (
            <p className={styles.paragraph}>
              Mia piensa que la luna tiene muchas caras por que se ve como que
              diferente cada noche. ¡Que curiosidad! Los padres de Mia le
              explican que la luna es similar a nosotros las personas que
              tenemos muchos lados y dimensiones. Somos familia, amigos,
              trabajadores, algunos estamos durmiendo, mientras otros andan
              despiertos, a veces nos enfermamos, a veces estamos felices, a
              veces nos escondemos y jugamos en las sombras, y a veces nos
              recostamos a alimentarnos de la luz del sol, a veces somos padres,
              y a veces solo solos hijos e hijas, a veces estamos, y en otras
              ocasiones no podemos estar del todo, todos tenemos diferentes
              lados y fases, diferentes momentos, como la luna, nuestras vidas
              son cambio constante. A Mia esta reflexión le produce unas
              carcajadas, al parecer recordó o creó algún tipo de humor.
            </p>
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
    </>
  );
}
