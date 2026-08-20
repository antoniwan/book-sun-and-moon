import { BOOK } from "../book/content";
import LanguageToggle from "./LanguageToggle";

export default function CoverPage({
  page,
  language,
  onStart,
  onContinue,
  showContinue,
  onLanguageChange,
}) {
  return (
    <div className="relative flex h-full min-h-0 flex-col justify-between">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/10 to-ink/85" />

      <div className="relative z-10 px-6 pt-[max(1.5rem,env(safe-area-inset-top))] text-center text-cream animate-rise md:px-12 md:pt-10 md:text-left">
        <h1 className="max-w-4xl font-display text-5xl leading-tight sm:text-7xl md:text-8xl [text-shadow:0_2px_8px_rgba(0,0,0,0.85),0_8px_28px_rgba(0,0,0,0.55)]">
          {BOOK.title[language]}
        </h1>
        <p className="mt-4 text-sm font-semibold text-cream md:text-base [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
          {language === "es" ? "por" : "by"} {BOOK.author[language]}
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8 text-center text-cream animate-rise md:pb-10">
        <p className="max-w-md text-sm font-semibold italic text-cream md:text-base [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
          {BOOK.dedication[language]}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onStart}
            className="rounded-full bg-pink-500 px-8 py-3 text-base font-bold text-white shadow-page transition hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            {language === "es" ? "Abrir el cuento" : "Open the book"}
          </button>
          {showContinue && (
            <button
              type="button"
              onClick={onContinue}
              className="rounded-full bg-cream px-6 py-3 text-base font-bold text-ink shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              {language === "es" ? "Seguir leyendo" : "Continue reading"}
            </button>
          )}
        </div>

        <div className="mt-5">
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>
      </div>

      <span className="sr-only">{page.alt[language]}</span>
    </div>
  );
}
