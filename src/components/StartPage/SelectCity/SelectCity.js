import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import classnamesBind from "classnames/bind";
import "simplebar/dist/simplebar.min.css";
import styles from "./selectCity.module.scss";

const SelectCity = (props) => {
  const { active, setActive, setCity, language } = props;
  const citysList = useSelector((state) => state.citys[language]);
  const [citys, setCitys] = useState(citysList);
  const { t } = useTranslation();
  const classnames = classnamesBind.bind(styles);
  function handleClick(e) {
    setCity(e.target.innerText);
    setActive(false);
  }

  function handleChange(event) {
    const filterCity = citysList.filter((item) => {
      const value = event.target.value.toLowerCase().trim();
      const city = item.toLowerCase().trim();
      if (city.startsWith(value)) return true;
      else return false;
    });
    setCitys(filterCity);
  }

  return (
    <div
      className={classnames("modal-city", { active })}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={classnames("modal-city__content")}
        onClick={(e) => e.stopPropagation()}
      >
        <label
          className={classnames(
            "modal-city__label",
            "modal-city__label_padding"
          )}
          htmlFor="modalCity__input"
        >
          {t("City.1")}
        </label>
        <input
          className={classnames("modal-city__input")}
          id="modalCity__input"
          type="search"
          placeholder={t("City.2")}
          onChange={(event) => handleChange(event)}
        ></input>
        <ul className={classnames("modal-city__list")}>
          <SimpleBar style={{ height: "100%" }}>
            {citys.map((city) => (
              <li
                key={city}
                className={classnames("modal-city__item")}
                onClick={(e) => handleClick(e)}
              >
                {city}
              </li>
            ))}
          </SimpleBar>
        </ul>
        <svg
          className={classnames("modal-city__close")}
          onClick={() => {
            setActive(false);
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );
};

export default SelectCity;
