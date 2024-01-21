import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const getCurrentLanguage = localStorage.getItem("currentLanguage");
  const [language, setLanguage] = useState(getCurrentLanguage || "en");

  const switchLanguage = (currentLanguage) => {
    let nextLanguage = currentLanguage === "en" ? "es" : "en";
    localStorage.setItem("currentLanguage", nextLanguage);
    setLanguage(nextLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
