import React, { createContext, useState, useContext, ReactNode } from "react";
import i18n from 'i18next';

// Defina o tipo do contexto de idioma (opcional)
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

// Forneça um valor padrão inicial para o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("pt");

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}
