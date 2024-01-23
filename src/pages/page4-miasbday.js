import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-bday.png";

export default function Page4({ language }) {
  return (
    <PageWrapper>
      <div
        className={`${styles.columnsWrapper} ${styles.columnWrapperReverse}`}
      >
        <div className={` ${styles.textArea}`}>
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
                Han pasado tantos días que Mia ahora cumplió 4 años de edad, y
                crece a ser muy valiente y alegre. Un año completo del cicle del
                sol y la luna ha pasado.
              </p>
              <p className={styles.paragraph}>
                Mia tuvo una celebración de cumpleaños junto a sus familiares y
                amigos para apreciar un nuevo año de vida. El bizcocho estaba
                muy delicioso.
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
