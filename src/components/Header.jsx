import { BOOK } from "../book/content";
import { useLanguage } from "./LanguageContext";

const TITLE_REST = {
  en: "The Sun, and the Moon",
  es: "El Sol y la Luna",
};

export default function Header({ onHome, isCover }) {
  const { language } = useLanguage();

  if (isCover) return null;

  return (
    <header className="shrink-0 px-5 pt-5 md:px-7 md:pt-7">
      <button
        type="button"
        onClick={onHome}
        className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
        aria-label={language === "es" ? "Ir a la portada" : "Go to the cover"}
      >
        <span className="block font-display text-3xl italic leading-none text-ink transition group-hover:text-ember md:text-4xl">
          Mia
        </span>
        <span className="mt-1.5 block font-story text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
          {TITLE_REST[language]}
        </span>
      </button>
      <div className="mt-4 h-px w-10 bg-ember/80" aria-hidden="true" />
      <span className="sr-only">{BOOK.shortTitle[language]}</span>
    </header>
  );
}
