export const defaultDateValue = new Date();

export const defaultNumberValue = 1234567890.1234;

export const defaultMessages: { [locale: string]: {} } = {
  en: {
    hello: "Hello!",
  },
  pl: {
    hello: "Cześć!",
  },
  fr: {
    hello: "Salut!",
  },
};

export const localeOptions = Object.keys(defaultMessages);

declare global {
  interface Navigator {
    userLanguage: string;
  }
}

export const getEnvLocale = () => (
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  localeOptions[0]
).substr(0, 2);
