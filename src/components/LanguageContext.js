import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readSavedLanguage, saveLanguage } from "../book/storage";

const LanguageContext = createContext(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return value;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => readSavedLanguage());

  useEffect(() => {
    saveLanguage(language);
    document.documentElement.lang = language === "es" ? "es" : "en";
    document.documentElement.dir = "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage() {
        setLanguage((current) => (current === "en" ? "es" : "en"));
      },
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
