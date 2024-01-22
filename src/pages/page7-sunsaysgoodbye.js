import PageWrapper from "../components/PageWrapper";
import styles from "./ContentPage.module.css";
import graphic from "../graphics/page-4.png";

export default function Page7() {
  return (
    <PageWrapper>
      <div className={styles.columnsWrapper}>
        <div className={` ${styles.textArea}`}>
          <p className={styles.paragraph}>
            As nighttime is nearby, it's time to say Goodbye to the sunshine and
            the daylight, but Mia rejoices because the moon is about to shine
            <em>
              -"🎶 Hi! Hello! Good day, good night, good night, good day! 🎵"
            </em>{" "}
            A song that Mia made up for the moon!
          </p>
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
