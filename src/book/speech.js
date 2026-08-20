function normalizeLang(lang) {
  return String(lang || "")
    .toLowerCase()
    .replace("_", "-");
}

export function toSpeechText(text) {
  return String(text || "")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/[🎶🎵]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function splitForSpeech(text) {
  const cleaned = toSpeechText(text);
  if (!cleaned) return [];
  const parts = cleaned
    .split(/(?<=[.!?…])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  return parts.length ? parts : [cleaned];
}

export function pickVoice(voices, language) {
  if (!voices?.length) return null;

  const prefix = language === "es" ? "es" : "en";
  const pool = voices.filter((voice) => normalizeLang(voice.lang).startsWith(prefix));
  const preferred =
    language === "es"
      ? ["es-mx", "es-us", "es-419", "es-pr", "es-ar", "es-co", "es-cl", "es-es"]
      : ["en-us", "en-gb", "en"];

  for (const code of preferred) {
    const match = pool.find((voice) => {
      const lang = normalizeLang(voice.lang);
      return lang === code || lang.startsWith(`${code}-`);
    });
    if (match) return match;
  }

  if (language === "es") {
    const named = pool.find((voice) =>
      /spanish|español|espanol|sabina|helena|paloma|catalina|mexico|mexican/i.test(
        `${voice.name} ${voice.lang}`
      )
    );
    if (named) return named;
  }

  return pool[0] || null;
}

export function loadVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve([]);
  }

  const synth = window.speechSynthesis;
  const existing = typeof synth.getVoices === "function" ? synth.getVoices() : [];
  if (existing.length) return Promise.resolve(existing);

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      if (typeof synth.removeEventListener === "function") {
        synth.removeEventListener("voiceschanged", finish);
      }
      const voices = typeof synth.getVoices === "function" ? synth.getVoices() : [];
      resolve(voices);
    };

    if (typeof synth.addEventListener === "function") {
      synth.addEventListener("voiceschanged", finish);
    }
    window.setTimeout(finish, 850);
  });
}
