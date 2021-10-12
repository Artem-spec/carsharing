import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";
import slide1 from "../../../image/parking.png";
import slide2 from "../../../image/insurance.png";
import slide3 from "../../../image/petrol.png";
import slide4 from "../../../image/service.png";
import styles from "./slider.module.scss";

const classnames = classnamesBind.bind(styles);

const Slider = () => {
  const { t } = useTranslation();
  const content = [
    {
      image: slide1,
      header: t("Slider.1"),
      text: t("Slider.2"),
      button: {
        text: t("Slider.9"),
        class: "slider__button-parking",
      },
    },
    {
      image: slide2,
      header: t("Slider.3"),
      text: t("Slider.4"),
      button: {
        text: t("Slider.9"),
        class: "slider__button-insurance",
      },
    },
    {
      image: slide3,
      header: t("Slider.5"),
      text: t("Slider.6"),
      button: {
        text: t("Slider.9"),
        class: "slider__button-petrol",
      },
    },
    {
      image: slide4,
      header: t("Slider.7"),
      text: t("Slider.8"),
      button: {
        text: t("Slider.9"),
        class: "slider__button-service",
      },
    },
  ];

  const countIndex = content.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(countIndex);
  const [nextIndex, setNextIndex] = useState(1);

  const handleClickInc = () => {
    setActiveIndex(activeIndex !== countIndex ? activeIndex + 1 : 0);
    setPrevIndex(prevIndex !== countIndex ? prevIndex + 1 : 0);
    setNextIndex(nextIndex !== countIndex ? nextIndex + 1 : 0);
  };

  const handleClickDef = () => {
    setActiveIndex(activeIndex !== 0 ? activeIndex - 1 : countIndex);
    setPrevIndex(prevIndex !== 0 ? prevIndex - 1 : countIndex);
    setNextIndex(nextIndex !== 0 ? nextIndex - 1 : countIndex);
  };
  const handleClickCircle = (e, indexClick) => {
    setActiveIndex(indexClick);
    setPrevIndex(indexClick !== 0 ? indexClick - 1 : countIndex);
    setNextIndex(indexClick !== countIndex ? indexClick + 1 : 0);
  };
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
        <SliderItem
          slide={content[prevIndex].image}
          header={content[prevIndex].header}
          text={content[prevIndex].text}
          button={content[prevIndex].button}
        />
      </div>
      <div
        className={classnames("slider-img", "wrapper", "slider-position-img")}
        key={activeIndex}
      >
        <SliderItem
          slide={content[activeIndex].image}
          header={content[activeIndex].header}
          text={content[activeIndex].text}
          button={content[activeIndex].button}
        />
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
        <SliderItem
          slide={content[nextIndex].image}
          header={content[nextIndex].header}
          text={content[nextIndex].text}
          button={content[nextIndex].button}
        />
      </div>
    </div>
  );
};

const SliderItem = (props) => {
  const { slide, header, text, button } = props;
  return (
    <>
      <img
        key={slide}
        src={slide}
        alt=""
        className={classnames("slider__image", "img")}
      />
      <div className={classnames("slider__group-description")}>
        <h3 className={classnames("slider__header")}>{header}</h3>,
        <p className={classnames("slider__description")}>{text}</p>
        <button
          className={classnames(
            "slider__button",
            "slider__button_margin",
            button.class
          )}
        >
          <span>{button.text}</span>
        </button>
      </div>
    </>
  );
};
export default Slider;
