import { REPO_URL } from "../book/content";

export default function VersionStamp({ className = "" }) {
  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`select-none font-story text-[9px] font-medium tracking-[0.2em] text-ink/15 transition hover:text-ink/45 focus-visible:text-ink/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${className}`}
    >
      v{__APP_VERSION__}
    </a>
  );
}
