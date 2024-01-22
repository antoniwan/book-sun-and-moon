import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import welcomeGraphic from "../graphics/graphic-moon.png";

export default function Page9() {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            Mia thinks the moon has many faces because it looks different every
            night. What a curious girl! Mia's parents explain that the moon is
            similar to us as we have many sides. We are family, friends, and
            workers, asleep, awake, sometimes sick, sometimes happy, sometimes
            we hide in the shadows, sometimes we bask in the sun, sometimes we
            are parents, sometimes we are daughters and sons, sometimes we are
            awake, and other times asleep, sometimes we are there, and sometimes
            we must go away, we always have many different sides and phases,
            just like the moon, our lives are everchanging. Mia giggles,
            remembering or creating some kind of humor from this explanation.
          </p>
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
    </PageWrapper>
  );
}
