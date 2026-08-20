import { BOOK } from "../book/content";
import { useLanguage } from "./LanguageContext";

export default function Header({ onHome, isCover }) {
  const { language } = useLanguage();

  if (isCover) return null;

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-3 md:p-5">
      <button
        type="button"
        onClick={onHome}
        className="pointer-events-auto rounded-full border border-ink/10 bg-cream px-4 py-2 text-left text-ink shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
      >
        <span className="font-display text-xl leading-none md:text-3xl">
          {BOOK.shortTitle[language]}
        </span>
      </button>
    </header>
  );
}
