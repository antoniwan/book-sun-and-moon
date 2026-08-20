import { pickVoice, splitForSpeech, toSpeechText } from "./speech";

test("picks a Latin American Spanish voice when available", () => {
  const voice = pickVoice(
    [
      { name: "Google US English", lang: "en-US" },
      { name: "Microsoft Sabina", lang: "es-MX" },
      { name: "Google Español", lang: "es-ES" },
    ],
    "es"
  );
  expect(voice.name).toBe("Microsoft Sabina");
});

test("strips song emoji so Spanish engines do not choke", () => {
  expect(toSpeechText("🎶 ¡Hola! ¡Hello! 🎶")).toBe("¡Hola! ¡Hello!");
});

test("splits a page into speakable sentences", () => {
  const parts = splitForSpeech("Cada día, el Sol dice hola. ¡Ahí se va corriendo!");
  expect(parts).toEqual(["Cada día, el Sol dice hola.", "¡Ahí se va corriendo!"]);
});
