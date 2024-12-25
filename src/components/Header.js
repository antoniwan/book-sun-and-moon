import { useLanguage } from "./LanguageContext";

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-stone-100/25">
      <h1 className="m-0 p-4 md:px-8 text-xl md:text-4xl drop-shadow-md text-stone-900">
        {language === "en" && (
          <>
            Mia, the Sun <span className="emoji">☀️</span>, and the Moon{" "}
            <span className="emoji">🌙</span>
          </>
        )}

        {language === "es" && (
          <>
            Mia, el Sol <span className="emoji">☀️</span>, y la Luna{" "}
            <span className="emoji">🌙</span>
          </>
        )}
      </h1>
    </header>
  );
}
