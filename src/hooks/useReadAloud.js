import { useCallback, useEffect, useRef, useState } from "react";
import { pagePlainText } from "../book/content";
import { loadVoices, pickVoice, splitForSpeech } from "../book/speech";

export function useReadAloud(page, language) {
  const [speaking, setSpeaking] = useState(false);
  const sessionRef = useRef(0);
  const keepAliveRef = useRef(null);

  const clearKeepAlive = useCallback(() => {
    if (keepAliveRef.current) {
      window.clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    sessionRef.current += 1;
    clearKeepAlive();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  }, [clearKeepAlive]);

  const toggle = useCallback(async () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (speaking) {
      stop();
      return;
    }

    const session = sessionRef.current + 1;
    sessionRef.current = session;
    const chunks = splitForSpeech(pagePlainText(page, language));
    if (!chunks.length) return;

    const voices = await loadVoices();
    if (sessionRef.current !== session) return;

    const voice = pickVoice(voices, language);
    const synth = window.speechSynthesis;
    let index = 0;

    setSpeaking(true);
    synth.cancel();

    const speakNext = () => {
      if (sessionRef.current !== session) return;
      if (index >= chunks.length) {
        clearKeepAlive();
        setSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      index += 1;
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = language === "es" ? "es-MX" : "en-US";
      }
      utterance.rate = 0.94;
      utterance.pitch = 1;
      utterance.onend = speakNext;
      utterance.onerror = () => {
        if (sessionRef.current !== session) return;
        clearKeepAlive();
        setSpeaking(false);
      };
      synth.speak(utterance);
    };

    clearKeepAlive();
    keepAliveRef.current = window.setInterval(() => {
      if (!synth.speaking) return;
      synth.pause();
      synth.resume();
    }, 11000);

    window.setTimeout(speakNext, 40);
  }, [clearKeepAlive, language, page, speaking, stop]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return undefined;
    window.speechSynthesis.getVoices();
    const warm = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", warm);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", warm);
  }, []);

  useEffect(() => stop, [stop, page, language]);
  useEffect(() => () => stop(), [stop]);

  return {
    speaking,
    toggle,
    stop,
    supported: typeof window !== "undefined" && "speechSynthesis" in window,
  };
}
