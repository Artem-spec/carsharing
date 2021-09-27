import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";
import SelectCity from "./SelectCity/SelectCity";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Slider from "./Slider/Slider";
import styles from "./startPage.module.scss";

const StartPage = (props) => {
  const dispatch = useDispatch();
  const changeLang = useCallback((language) =>
    dispatch({
      type: "language",
      payload: language,
    }), [dispatch]
  );
  const { citys, language } = useSelector((state) => state);
  const classnames = classnamesBind.bind(styles);
  //Состояние модального окна выбора города
  const [selectCityActive, setSelectCityActive] = useState(false);
  //Состояние - город
  const [city, setCity] = useState("Ульяновск");
  //Состояние бургер меню
  const [burgerActive, setBurgerActive] = useState(false);
  //Перевод текста
  const { t, i18n } = useTranslation();
  function handleClickLinkLanguage(e) {
    const lang_ru = "Рус";
    const lang_en = "Eng";
    const lang = e.target.innerText;
    const cityIndex = citys[lang].indexOf(city);

    switch (lang) {
      case lang_en:
        changeLang(lang_ru);
        setCity(citys[lang_ru][cityIndex]);
        break;
      case lang_ru:
        changeLang(lang_en);
        setCity(citys[lang_en][cityIndex]);
        break;
      default:
        break;
    }
    i18n.changeLanguage(lang);
  }

  return (
    <section className={classnames("start-page")}>
      <div className={classnames("start-page__wrap")}>
        <div className={classnames("start-page__menu")}>
          <button
            id="button-burger"
            className={classnames("button-burger")}
            onClick={() => setBurgerActive(true)}
            type="button"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M4 16H28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={classnames("button-burger_color")}
              />
              <path
                d="M4 8H28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={classnames("button-burger_color")}
              />
              <path
                d="M4 24H28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={classnames("button-burger_color")}
              />
            </svg>
          </button>
          <div className={classnames("start-page__language-wrap")}>
            <span
              href="#"
              className={classnames("start-page__language")}
              onClick={(e) => handleClickLinkLanguage(e)}
            >
              {language}
            </span>
          </div>
        </div>
        <div className={classnames("start-page__reservation")}>
          <div className={classnames("start-page__header")}>
            <h4
              className={classnames(
                "start-page__heading-h4",
                "start-page__heading-h4_padding"
              )}
            >
              Need for drive
            </h4>
            <div className={classnames("start-page__geolocation")}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path
                  d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
                  stroke="#999999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
                  stroke="#999999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={classnames(
                  "start-page__city",
                  "start-page__city_padding"
                )}
                onClick={() => setSelectCityActive(true)}
              >
                {city}
              </span>
            </div>
          </div>
          <div className={classnames("start-page__main")}>
            <h2 className={classnames("start-page__heading-h2")}>
              {t("Carsharing.1")}
            </h2>
            <h1 className={classnames("start-page__heading-h1")}>
              Need for drive
            </h1>
            <p
              className={classnames(
                "start-page__description",
                "start-page__description_padding"
              )}
            >
              {t("Description.1")}
            </p>
            <button
              className={classnames(
                "button",
                "start-page__button-reservation",
                "start-page__button-reservation_padding",
                "start-page__button-reservation_margin"
              )}
            >
              <span>{t("Button.Reservation")}</span>
            </button>
          </div>
          <div className={classnames("start-page__footer")}>
            <span className={classnames("start-page__date-creation")}>
              © 2016-2019 «Need for drive»
            </span>
            <a
              href="tel: 84952342244"
              className={classnames("start-page__link-tel")}
            >
              8 (495) 234-22-44
            </a>
          </div>
        </div>
        <Slider />
      </div>
      <SelectCity
        active={selectCityActive}
        setActive={setSelectCityActive}
        language={language}
        setCity={setCity}
      />
      <BurgerMenu
        active={burgerActive}
        setActive={setBurgerActive}
        setLenguage={handleClickLinkLanguage}
        language={language}
      />
    </section>
  );
};
export default StartPage;
