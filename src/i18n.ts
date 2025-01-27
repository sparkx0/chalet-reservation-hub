import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      "welcome": "Bienvenue au Chalet du Salève",
      "book": "Réserver votre séjour",
      // Ajoutez d'autres traductions ici
    }
  },
  en: {
    translation: {
      "welcome": "Welcome to Chalet du Salève",
      "book": "Book your stay",
      // Add other translations here
    }
  },
  // Ajoutez d'autres langues ici
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;