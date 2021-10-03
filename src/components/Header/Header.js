import React, {  useState } from "react";
import { useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./header.module.scss";
import SelectCity from "./SelectCity/SelectCity";

const Header = () => {
  const { city,  } = useSelector((state) => state); //language
  const classnames = classnamesBind.bind(styles);
  //Состояние модального окна выбора города
  const [selectCityActive, setSelectCityActive] = useState(false);
  return (
    <div className={classnames("header")}>
      <h4
        className={classnames(
          "header__heading-h4",
          "header__heading-h4_padding"
        )}
      >
        Need for drive
      </h4>
      <div className={classnames("header__geolocation")}>
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
          className={classnames("header__city", "header__city_padding")}
          onClick={() => setSelectCityActive(true)}
        >
          {city.name}
        </span>
      </div>
      <SelectCity active={selectCityActive} setActive={setSelectCityActive} />
    </div>
  );
};

export default Header;
