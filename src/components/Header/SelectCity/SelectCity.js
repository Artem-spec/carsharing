import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import classnamesBind from "classnames/bind";
import "simplebar/dist/simplebar.min.css";
import styles from "./selectCity.module.scss";
import { changeCity } from "../../../store/actions/actionCity";

const SelectCity = (props) => {
  const { active, setActive } = props;
  const { citys, language } = useSelector((state) => ({
    ...state.citys,
    ...state.language
  }));
  const { t } = useTranslation();
  const classnames = classnamesBind.bind(styles);

  const dispatch = useDispatch();

  const citysList = citys[language];
  const [citysModal, setCitys] = useState(citysList);

  const handleClick = (e) => {
    const objectCity = citys[language].find(
      (city) => city.name === e.target.innerText
    );
    dispatch(changeCity(objectCity));
    setActive(false);
  };

  const handleChange = (e) => {
    const filterCity = citysList.filter((item) => {
      const value = e.target.value.toLowerCase().trim();
      const city = item.name.toLowerCase().trim();
      return !!city.startsWith(value);
    });
    setCitys(filterCity);
  };

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
          onChange={handleChange}
        ></input>
        <ul className={classnames("modal-city__list")}>
          <SimpleBar style={{ height: "100%" }}>
            {citysModal.map((city) => (
              <li
                key={city.name}
                className={classnames("modal-city__item")}
                onClick={handleClick}
              >
                {city.name}
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
