import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import jp from './translations/jp';

export const translations = {
  jp: {
    translation: jp,
  },
};

export type AvailableLanguages = keyof typeof translations;

export default (): void => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: translations,
      lng: 'jp',

      keySeparator: '.',

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
};
