import { BOOK } from "../book/content";
import LanguageToggle from "./LanguageToggle";

const COVER_REST = {
  en: "the Sun, and the Moon",
  es: "el Sol y la Luna",
};

export default function CoverPage({
  page,
  language,
  onStart,
  onContinue,
  showContinue,
  onLanguageChange,
}) {
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <div className="relative z-10 flex max-w-xl flex-col px-6 pt-[max(1.75rem,env(safe-area-inset-top))] text-center animate-rise md:px-12 md:pt-12 md:text-left">
        <p className="font-story text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
          {language === "es" ? "Un cuentito" : "A short children's book"}
        </p>

        <h1 className="mt-3 text-ink" aria-label={BOOK.title[language]}>
          <span className="block font-display text-6xl italic leading-[0.9] sm:text-7xl md:text-8xl">
            Mia
          </span>
          <span className="mt-3 block font-display text-2xl font-medium leading-tight tracking-wide sm:text-3xl md:text-4xl">
            {COVER_REST[language]}
          </span>
        </h1>

        <div className="mx-auto mt-5 h-px w-16 bg-ember md:mx-0" aria-hidden="true" />

        <p className="mt-5 font-story text-sm text-ink/75 md:text-base">
          {language === "es" ? "por" : "by"} {BOOK.author[language]}
        </p>
        <p className="mx-auto mt-2 max-w-sm font-story text-sm italic text-ink/60 md:mx-0 md:text-base">
          {BOOK.dedication[language]}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <button
            type="button"
            onClick={onStart}
            className="rounded-full bg-ember px-8 py-3 font-story text-sm font-semibold tracking-wide text-paper shadow-page transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {language === "es" ? "Abrir el cuento" : "Open the book"}
          </button>
          {showContinue && (
            <button
              type="button"
              onClick={onContinue}
              className="rounded-full border border-ink/15 bg-paper/80 px-6 py-3 font-story text-sm font-semibold tracking-wide text-ink backdrop-blur-sm transition hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              {language === "es" ? "Seguir leyendo" : "Continue reading"}
            </button>
          )}
        </div>

        <div className="mt-5 flex justify-center md:justify-start">
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>
      </div>

      <span className="sr-only">{page.alt[language]}</span>
    </div>
  );
}
