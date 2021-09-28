import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";
import slide1 from "../../../image/parking.png";
import slide2 from "../../../image/insurance.png";
import slide3 from "../../../image/petrol.png";
import slide4 from "../../../image/service.png";
import styles from "./slider.module.scss";

const Slider = () => {
  const classnames = classnamesBind.bind(styles);
  const { t } = useTranslation();
  const content = [
    {
      image: (
        <img
          key={slide1}
          src={slide1}
          alt=""
          className={classnames("slider__image", "img")}
        />
      ),
      header: <h3 className={classnames("slider__header")}>{t("Slider.1")}</h3>,
      text: (
        <p className={classnames("slider__description")}>{t("Slider.2")}</p>
      ),
      button: (
        <button
          className={classnames(
            "slider__button",
            "slider__button_margin",
            "slider__button-parking"
          )}
        >
          <span>{t("Slider.9")}</span>
        </button>
      ),
    },
    {
      image: (
        <img
          key={slide2}
          src={slide2}
          alt=""
          className={classnames("slider__image")}
        />
      ),
      header: <h3 className={classnames("slider__header")}>{t("Slider.3")}</h3>,
      text: (
        <p className={classnames("slider__description")}>{t("Slider.4")}</p>
      ),
      button: (
        <button
          className={classnames(
            "slider__button",
            "slider__button_margin",
            "slider__button-insurance"
          )}
        >
          {t("Slider.9")}
        </button>
      ),
    },
    {
      image: (
        <img
          key={slide3}
          src={slide3}
          alt=""
          className={classnames("slider__image")}
        />
      ),
      header: <h3 className={classnames("slider__header")}>{t("Slider.5")}</h3>,
      text: (
        <p className={classnames("slider__description")}>{t("Slider.6")}</p>
      ),
      button: (
        <button
          className={classnames(
            "slider__button",
            "slider__button_margin",
            "slider__button-petrol"
          )}
        >
          {t("Slider.9")}
        </button>
      ),
    },
    {
      image: (
        <img
          key={slide4}
          src={slide4}
          alt=""
          className={classnames("slider__image")}
        />
      ),
      header: <h3 className={classnames("slider__header")}>{t("Slider.7")}</h3>,
      text: (
        <p className={classnames("slider__description")}>{t("Slider.8")}</p>
      ),
      button: (
        <button
          className={classnames(
            "slider__button",
            "slider__button_margin",
            "slider__button-service"
          )}
        >
          {t("Slider.9")}
        </button>
      ),
    },
  ];

  const countIndex = content.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(countIndex);
  const [nextIndex, setNextIndex] = useState(1);

  function handleClickInc() {
    setActiveIndex(activeIndex !== countIndex ? activeIndex + 1 : 0);
    setPrevIndex(prevIndex !== countIndex ? prevIndex + 1 : 0);
    setNextIndex(nextIndex !== countIndex ? nextIndex + 1 : 0);
  }

  function handleClickDef() {
    setActiveIndex(activeIndex !== 0 ? activeIndex - 1 : countIndex);
    setPrevIndex(prevIndex !== 0 ? prevIndex - 1 : countIndex);
    setNextIndex(nextIndex !== 0 ? nextIndex - 1 : countIndex);
  }
  function handleClickCircle(e, indexClick) {
    setActiveIndex(indexClick);
    setPrevIndex(indexClick !== 0 ? indexClick - 1 : countIndex);
    setNextIndex(indexClick !== countIndex ? indexClick + 1 : 0);
  }
  return (
    <div className={classnames("slider")}>
      <div className={classnames("slider__slide-circle")}>
        {content.map((content, index) => {
          return (
            <div
              className={classnames("slider__circle", {
                "slider__circle-active": activeIndex === index,
              })}
              key={index}
              onClick={(e) => handleClickCircle(e, index)}
            ></div>
          );
        })}
      </div>
      <div className={classnames("slider__turn-over")}>
        <div
          className={classnames("slider__slide-prev")}
          onClick={() => handleClickDef()}
        >
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path
              d="M9 1L1 10L9 19"
              stroke="#EEEEEE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={classnames("slider__slide-next")}
          onClick={() => handleClickInc()}
        >
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path
              d="M1 1L9 10L1 19"
              stroke="#EEEEEE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={classnames(
          "slider-img",
          "slider-img-prev",
          "slider-wrapper",
          "slider-position-img"
        )}
        key={prevIndex}
      >
        {content[prevIndex].image}
        <div className={classnames("slider__group-description")}>
          {content[prevIndex].header}
          {content[prevIndex].text}
          {content[prevIndex].button}
        </div>
      </div>
      <div
        className={classnames("slider-img", "wrapper", "slider-position-img")}
        key={activeIndex}
      >
        {content[activeIndex].image}
        <div className={classnames("slider__group-description")}>
          {content[activeIndex].header}
          {content[activeIndex].text}
          {content[activeIndex].button}
        </div>
      </div>
      <div
        className={classnames(
          "slider-img",
          "slider-img-next",
          "slider-wrapper",
          "slider-position-img"
        )}
        key={nextIndex}
      >
        {content[nextIndex].image}
        <div className={classnames("slider__group-description")}>
          {content[nextIndex].header}
          {content[nextIndex].text}
          {content[nextIndex].button}
        </div>
      </div>
    </div>
  );
};
export default Slider;