import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 text-sm text-white">
      <button onClick={() => changeLanguage("fr")} className="flex items-center gap-1 hover:underline">
        <span>FR</span>
      </button>
      <span className="text-white/50">|</span>
      <button onClick={() => changeLanguage("en")} className="flex items-center gap-1 hover:underline">
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;