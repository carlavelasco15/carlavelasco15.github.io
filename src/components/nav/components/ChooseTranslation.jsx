import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ChooseTranslation = ({currentLanguage, handleLanguageChange}) => {
  const [t, i18n] = useTranslation("global");

  return (
    <ul className="nav__list">
      <li className="nav__item">
        <a  className={`nav__link nav__link--language ${currentLanguage === "ca" ? "active" : ""}`} onClick={() => handleLanguageChange("ca")}>
          CA
        </a>
      </li>

      <li className="nav__item">
        <a  className={`nav__link nav__link--language ${currentLanguage === "es" ? "active" : ""}`} onClick={() => handleLanguageChange("es")}>
          ES
        </a>
      </li>

      <li className="nav__item">
        <a  className={`nav__link nav__link--language ${currentLanguage === "en" ? "active" : ""}`} onClick={() => handleLanguageChange("en")}>
          EN
        </a>
      </li>

      <li className="nav__item">
        <a  className={`nav__link nav__link--language ${currentLanguage === "de" ? "active" : ""}`} onClick={() => handleLanguageChange("de")}>
          DE
        </a>
      </li>
    </ul>
  );
};

