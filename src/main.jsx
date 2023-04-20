import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_de from "./translations/de/global.json"
import global_ca from "./translations/ca/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    ca: {
      global: global_ca,
    },
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    de: {
      global: global_de,
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
