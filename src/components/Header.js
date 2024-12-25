import { useLanguage } from "./LanguageContext";

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="bg-white p-3 px-6 text-stone-900">
      <h1 className="m-0 text-xl">
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
