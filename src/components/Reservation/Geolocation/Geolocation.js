import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import classnamesBind from "classnames/bind";
import styles from "./geolocation.module.scss";
import axiosConfig from "../../../utils/axiosConfig";
import YandexMap from "./YandexMap/YandexMap";
import { addAddressAPI } from "../../../actions/actionAddressAPI";
import { addCityAPI } from "../../../actions/actionCitysAPI";
import { changeDefCoords } from "../../../actions/actionDefCoords";
import {
  changeGeolocation,
  resetGeolocation,
} from "../../../actions/actionOrder";

const filterCastom = (value, array, setArray, field) => {
  const filterCity = array.filter((item) => {
    const valueFilter = value.toLowerCase().trim();
    const city = item[field].toLowerCase().trim();
    return !!city.startsWith(valueFilter);
  });
  setArray(filterCity);
};

const Geolocation = (props) => {
  const {
    setButtonDisabled,
  } = props;

  const dispatch = useDispatch();

  const classnames = classnamesBind.bind(styles);
  const { city, order, addressAPI, citysAPI } = useSelector((state) => state);
  // Список всех городов (фильтруется во время ввода)
  const [citysList, setCitysList] = useState([]);
  // Список всех адресов (фильтруется во время ввода)
  const [addressList, setAddressList] = useState([]);
  // Выподающий список городов (индикатор)
  const [selectCity, setSelectCity] = useState(false);
  // Выподающий список адресов (индикатор)
  const [selectAddress, setSelectAddress] = useState(false);
  // Город который попадает в input
  const [cityInput, setCityInput] = useState(city.name);
  // Адресс который попадает в input
  const [addressInput, setAddressInput] = useState("");

  useEffect(() => {
    setButtonDisabled(true);
  }, [
    setButtonDisabled,
    dispatch,
  ]);

  useEffect(() => {
    const getAPI = async () => {
      const responseCity = await axiosConfig.get("/city").then((response) => {
        return response.data.data;
      });
      dispatch(addCityAPI(responseCity));
      setCitysList(responseCity);
      const responseAddress = await axiosConfig
        .get("/point")
        .then((response) => {
          return response.data.data;
        });
      const newArr = responseAddress.filter((item) => {
        return !!item.cityId;
      });
      setAddressList(newArr);
      dispatch(addAddressAPI(newArr));
    };
    getAPI();

    if (order.squeezePoint) {
      let nameCoord = "";
      for (const city of citysAPI) {
        if (order.squeezePoint.startsWith(city.name)) {
          setCityInput(city.name);
          for (const address of addressAPI) {
            if (order.squeezePoint.endsWith(address.address)) {
              setAddressInput(address.address);
              nameCoord = `${city.name}, ${address.address}`;
            }
          }
        }
      }
      dispatch(
        changeDefCoords({
          name: nameCoord,
          zoom: 15,
        })
      );
    } else {
      dispatch(
        changeDefCoords({
          name: city.name,
          zoom: 10,
        })
      );
    }
  }, []);

  useEffect(() => {
    setButtonDisabled(true);
    if (cityInput && addressInput) {
      for (const city of citysAPI) {
        if (city.name === cityInput) {
          for (const address of addressAPI) {
            if (address.address === addressInput) {
              dispatch(changeGeolocation(cityInput + ", " + addressInput));
              setButtonDisabled(false);
            }
          }
        }
      }
    }
  }, [
    cityInput,
    addressInput,
    dispatch,
    setButtonDisabled,
    addressAPI,
    citysAPI,
  ]);
  // ------------------------------------------------------------------
  // Изменение списка адресов в зависимости от города
  // ------------------------------------------------------------------
  const changeAddressList = (value, setList) => {
    const newArrAddress = [];
    for (const address of addressAPI) {
      if (address.cityId.name === value) {
        newArrAddress.push(address);
      }
    }
    setList(newArrAddress);
  };
  // ------------------------------------------------------------------
  // Событие изменения города через input
  // ------------------------------------------------------------------
  const handleChangeCity = (value) => {
    dispatch(resetGeolocation());
    setAddressInput("");
    if (!value) {
      setButtonDisabled(true);
      setCitysList(citysAPI);
      setAddressList(addressAPI);
      setSelectCity(false);
    } else {
      setSelectCity(true); // Открываем выпадающий список
      filterCastom(value, citysList, setCitysList, "name");
      // Проверяем , вдруг уже есть такое значение в массиве
      for (const city of citysAPI) {
        if (city.name === value) {
          setSelectCity(false);
          changeAddressList(value, setAddressList);
        }
      }
    }
    setCityInput(value);
  };
  // ------------------------------------------------------------------
  // Событие изменения адреса через input
  // ------------------------------------------------------------------
  const handleChangeAddress = (value) => {
    dispatch(resetGeolocation());
    if (!value) {
      setButtonDisabled(true);
      setSelectAddress(false);
    } else {
      filterCastom(value, addressList, setAddressList, "address");
      setSelectAddress(true);
      for (const address of addressAPI) {
        if (address.address === value) {
          setCityInput(address.cityId.name);
        }
      }
    }
    setAddressInput(value);
  };
  // ------------------------------------------------------------------
  // Событие выбора города в выподающем списке
  // ------------------------------------------------------------------
  const handleClickSelectCity = (e) => {
    setAddressInput("");
    dispatch(
      changeDefCoords({
        name: e.currentTarget.innerText,
        zoom: 10,
      })
    );
    setCityInput(e.currentTarget.innerText);
    setSelectCity(false);
    changeAddressList(e.currentTarget.innerText, setAddressList);
  };
  // ------------------------------------------------------------------
  // Событие выбора адреса в выподающем списке
  // ------------------------------------------------------------------
  const handleClickSelectAddress = (e) => {
    const value = e.currentTarget.innerText;
    setAddressInput(value);
    setSelectAddress(false);
    for (const address of addressAPI) {
      if (address.address === value) {
        setCityInput(address.cityId.name);
        const name = `${address.cityId.name}, ${e.currentTarget.innerText}`;
        dispatch(
          changeDefCoords({
            name: name,
            zoom: 15,
          })
        );
      }
    }
  };

  const handleClickPlacemark = (point, geometry) => {
    setCityInput(point.city);
    setAddressInput(point.address);
    changeAddressList(point.city, setAddressList);
    const nameCoords = `${point.city}, ${point.address}`;
    dispatch(
      changeDefCoords({
        name: nameCoords,
        zoom: 15,
      })
    );
  };

  return (
    <div className={classnames("geolocation")}>
      {/* Поле ввода города */}
      <div className={classnames("geolocation__input-wrap")}>
        <label
          className={classnames("geolocation__label-filter")}
          htmlFor="city"
        >
          Город
        </label>
        <div
          className={classnames("geolocation__select-list")}
          onFocus={() => {
            setSelectCity(true);
          }}
          onBlur={() => {
            setSelectCity(false);
          }}
          tabIndex="0"
        >
          <input
            className={classnames("geolocation__input")}
            id="city"
            type="search"
            placeholder="Начните вводить город ..."
            value={cityInput}
            autoComplete={"off"}
            onChange={(event) => {
              handleChangeCity(event.currentTarget.value);
            }}
          />
          <ul
            className={classnames("list", {
              "list-active": selectCity === true,
            })}
          >
            <SimpleBar style={{ height: "100%", maxHeight: "200px" }}>
              {citysList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classnames("item")}
                    onClick={handleClickSelectCity}
                  >
                    {item.name}
                  </li>
                );
              })}
            </SimpleBar>
          </ul>
        </div>
      </div>
      {/* Поле ввода адреса */}
      <div className={classnames("geolocation__input-wrap")}>
        <label
          className={classnames("geolocation__label-filter")}
          htmlFor="pickup-point"
        >
          Пункт выдачи
        </label>
        <div
          className={classnames("geolocation__select-list")}
          onFocus={() => {
            setSelectAddress(true);
          }}
          onBlur={() => {
            setSelectAddress(false);
          }}
          tabIndex="0"
        >
          <input
            className={classnames("geolocation__input")}
            id="address"
            type="search"
            placeholder="Начните вводить пункт ..."
            autoComplete={"off"}
            value={addressInput}
            onChange={(event) => {
              handleChangeAddress(event.currentTarget.value);
            }}
          ></input>
          <ul
            className={classnames("list", {
              "list-active": selectAddress === true,
            })}
          >
            <SimpleBar style={{ height: "100%", maxHeight: "200px" }}>
              {addressList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classnames("item")}
                    onClick={handleClickSelectAddress}
                  >
                    {item.address}
                  </li>
                );
              })}
            </SimpleBar>
          </ul>
        </div>
      </div>
      <label
        className={classnames("geolocation__label-map")}
        htmlFor="pickup-point"
      >
        Выбрать на карте:
      </label>
      <div className={classnames("geolocation__map")}>
        <YandexMap
          address={addressAPI}
          handleClickPlacemark={handleClickPlacemark}
        />
      </div>
    </div>
  );
};

export default Geolocation;
