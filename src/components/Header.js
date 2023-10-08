import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>
        Mia, the Sun <span className="emoji">☀️</span>, and the Moon{" "}
        <span className="emoji">🌙</span>
      </h1>
    </header>
  );
}
