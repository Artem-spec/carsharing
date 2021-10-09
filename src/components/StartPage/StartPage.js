import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classnamesBind from "classnames/bind";
import BurgerMenu from "../Menu/BurgerMenu/BurgerMenu";
import Slider from "./Slider/Slider";
import Menu from "./../Menu/Menu";
import Header from "../Header/Header";
import styles from "./startPage.module.scss";

const StartPage = () => {
  const classnames = classnamesBind.bind(styles);
  //Состояние бургер меню
  const [burgerActive, setBurgerActive] = useState(false);
  //Перевод текста
  const { t } = useTranslation();

  return (
    <section className={classnames("start-page")}>
      <div className={classnames("start-page__wrap")}>
        <Menu setBurgerActive={setBurgerActive} />
        <div className={classnames("start-page__reservation")}>
          <div className={classnames("start-page__header")}>
            <Header />
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
            <Link
              to={{
                pathname: `reservation`,
              }}
              className={classnames(
                "button",
                "start-page__button-reservation",
                "start-page__button-reservation_padding",
                "start-page__button-reservation_margin"
              )}
            >
              <span>{t("Button.Reservation")}</span>
            </Link>           
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
      <BurgerMenu
        active={burgerActive}
        setActive={setBurgerActive}
      />
    </section>
  );
};
export default StartPage;
