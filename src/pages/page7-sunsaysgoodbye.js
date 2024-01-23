import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/graphic-nightskysong.jpg";

export default function Page7({ language }) {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          {language === "en" && (
            <>
              <p className={styles.paragraph}>
                As nighttime is nearby, it's time to say Goodbye to the sunshine
                and the daylight, but Mia rejoices because the moon is about to
                shine
                <em>
                  -"🎶 Hi! Hello! Good day, good night, good night, good day!
                  🎶"
                </em>{" "}
                A song that Mia made up for the moon!
              </p>
            </>
          )}

          {language === "es" && (
            <>
              <p className={styles.paragraph}>
                La noche se acerca y es momento de decirle adios a la luz del
                sol y al día, pero Mia agradece que la hermosa luna esta a punto
                de brillar -
                <em>
                  “🎶 ¡Hola! ¡Hello! ¡Buen día, buenas noches, buenas noches,
                  buen día! 🎶”
                </em>{" "}
                Mia se inventó y le cantaba una canción a la luna.
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
