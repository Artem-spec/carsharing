import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const languages = ["Eng", "Рус"];

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      Eng: {
        translation: {
          Carsharing: {
            1: "Carsharing",
          },
          Description: {
            1: "Per-minute car rental in your city",
          },
          Button: {
            Reservation: "Reservation",
          },
          City: {
            1: "City",
            2: "Start typing an item ...",
          },
          Menu: {
            1: "PARKING",
            2: "INSURANCE",
            3: "PETROL",
            4: "SERVICE",
          },
          Slider: {
            1: "Free parking",
            2: "Leave your car in paid city parking lots and permitted places, without violating traffic rules, as well as at airports.",
            3: "Insurance",
            4: "Full car insurance",
            5: "Gasoline",
            6: "A full tank at any gas station in the city at our expense",
            7: "Service",
            8: "The car is undergoing weekly MOT",
            9: "More",
          },
        },
      },
      Рус: {
        translation: {
          Carsharing: {
            1: "Каршеринг",
          },
          Description: {
            1: "Поминутная аренда авто в вашем городе",
          },
          Button: {
            Reservation: "Забронировать",
          },
          City: {
            1: "Город",
            2: "Начните вводить пункт ...",
          },
          Menu: {
            1: "ПАРКОВКА",
            2: "СТРАХОВКА",
            3: "БЕНЗИН",
            4: "ОБСЛУЖИВАНИЕ",
          },
          Slider: {
            1: "Бесплатная парковка",
            2: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
            3: "Страховка",
            4: "Полная страховка страховка автомобиля",
            5: "Бензин",
            6: "Полный бак на любой заправке города за наш счёт",
            7: "Обслуживание",
            8: "Автомобиль проходит еженедельное ТО",
            9: "Подробнее",
          },
        },
      },
    },
    fallbackLng: "Рус",
    debug: true,
    whitelist: languages,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
