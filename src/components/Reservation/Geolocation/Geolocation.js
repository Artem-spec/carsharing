import React, { useState, useCallback, useEffect } from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import classnamesBind from "classnames/bind";
import styles from "./geolocation.module.scss";

const filterCastom = (value, array, setArray) => {
  const filterCity = array.filter((item) => {
    const valueFilter = value.toLowerCase().trim();
    const city = item.toLowerCase().trim();
    if (city.startsWith(valueFilter)) return true;
    else return false;
  });
  setArray(filterCity);
};

const Geolocation = (props) => {
  const {
    setButtonDisabled,
    setActiveModel,
    setActiveAdditionally,
    setActiveTotal,
  } = props;

  const dispatch = useDispatch();
  const changeGeolocation = useCallback(
    (city, address) =>
      dispatch({
        type: "geolocation",
        payload: city + ", " + address,
      }),
    [dispatch]
  );

  const classnames = classnamesBind.bind(styles);
  const { city, citys, language } = useSelector((state) => state); //  order
  // Заполнение массивов значений
  const citysListArr = [];
  const addressListArr = [];
  const addressMap = []; //Сразу выводим весь список меток на карту
  for (const city of citys[language]) {
    citysListArr.push(city.name);
    for (const address of city.address) {
      addressListArr.push(address.descr);
      addressMap.push(address);
    }
  }

  // Список всех городов (фильтруется во время ввода)
  const [citysList, setCitysList] = useState(citysListArr);
  // Список всех адресов (фильтруется во время ввода)
  const [addressList, setAddressList] = useState(addressListArr);
  // Выподающий список городов (индикатор)
  const [selectCity, setSelectCity] = useState(false);
  // Выподающий список адресов (индикатор)
  const [selectAddress, setSelectAddress] = useState(false);
  // Город который попадает в input
  const [cityInput, setCityInput] = useState("");
  // Адресс который попадает в input
  const [addressInput, setAddressInput] = useState("");
  // Для карты
  const [ymaps, setYmaps] = useState(null);
  const [defCoords, setDefCoords] = useState({
    center: city.center,
    zoom: city.zoom,
  });

  useEffect(() => {
    setButtonDisabled(true);
    setActiveModel(false);
    setActiveAdditionally(false);
    setActiveTotal(false);
  }, [
    setButtonDisabled,
    setActiveModel,
    setActiveAdditionally,
    setActiveTotal,
  ]);

  // useEffect(()=>{
  //   for (const city of citys[language]) {
  //     if (order.squeezePoint.startsWith(city.name)) {
  //       setCityInput(city.name);
  //       for (const address of city.address) {
  //         if (order.squeezePoint.endsWith(address.descr)) {
  //           setAddressInput(address.descr);
  //           // setButtonDisabled(false);
  //         }
  //       }
  //     }

  //   }
  // },[order, citys, language])
  // ------------------------------------------------------------------
  // Изменение пункта выдачи
  // ------------------------------------------------------------------
  const addGeoInOrder = (cityNew, addressNew) => {
    // Если у нас два поля заполнены, то добавляем их в заказ
    if (cityNew !== "" && addressNew !== "") {
      for (const city of citys[language]) {
        if (city.name === cityNew) {
          for (const address of city.address) {
            if (address.descr === addressNew) {
              changeGeolocation(cityNew, addressNew);
              setButtonDisabled(false);
            }
          }
        }
      }
    }
  };
  // ------------------------------------------------------------------
  // Изменение списка адресов в зависимости от города
  // ------------------------------------------------------------------
  const changeAddressList = (value, setList) => {
    const newArrAddress = [];
    for (const city of citys[language]) {
      if (city.name === value) {
        setDefCoords({
          center: city.center,
          zoom: city.zoom,
        });
        for (const address of city.address) {
          newArrAddress.push(address.descr);
        }
      }
    }
    setList(newArrAddress);
  };
  // ------------------------------------------------------------------
  // Событие изменения города через input
  // ------------------------------------------------------------------
  const handleChangeCity = (value) => {
    if (value === "") {
      setButtonDisabled(true);
      setAddressList(addressListArr);
      setSelectCity(false);
    } else {
      setSelectCity(true); // Открываем выпадающий список
      filterCastom(value, citysListArr, setCitysList);
      // Проверяем , вдруг уже есть такое значение в массиве
      for (const city of citys[language]) {
        if (city.name === value) {
          setDefCoords({
            center: city.center,
            zoom: city.zoom,
          });
          setSelectCity(false);
        }
      }
      changeAddressList(value, setAddressList);
    }
    setCityInput(value);
    addGeoInOrder(value, addressInput);
  };
  // ------------------------------------------------------------------
  // Событие изменения адреса через input
  // ------------------------------------------------------------------
  const handleChangeAddress = (value) => {
    if (value === "") {
      setButtonDisabled(true);
      setSelectAddress(false);
    } else {
      filterCastom(value, addressListArr, setAddressList);
      setSelectAddress(true);
    }
    setAddressInput(value);
    addGeoInOrder(cityInput, value);
  };
  // ------------------------------------------------------------------
  // Событие выбора города в выподающем списке
  // ------------------------------------------------------------------
  const handleClickSelectCity = (e) => {
    setCityInput(e.currentTarget.innerText);
    setSelectCity(false);
    changeAddressList(e.currentTarget.innerText, setAddressList);
    addGeoInOrder(e.currentTarget.innerText, addressInput);
  };
  // ------------------------------------------------------------------
  // Событие выбора адреса в выподающем списке
  // ------------------------------------------------------------------
  const handleClickSelectAddress = (e) => {
    setAddressInput(e.currentTarget.innerText);
    setSelectAddress(false);
    for (const city of citys[language]) {
      for (const address of city.address) {
        if (address.descr === e.currentTarget.innerText) {
          setCityInput(address.city);
          addGeoInOrder(address.city, e.currentTarget.innerText);
          setDefCoords({
            center: address.center,
            zoom: address.zoom,
          });
        }
      }
    }
  };

  const handleClickPlacemark = (point, geometry) => {
    setCityInput(point.city);
    setAddressInput(point.descr);
    console.log(point.center + " " + point.zoom);
    addGeoInOrder(point.city, point.descr);
    changeAddressList(point.city, setAddressList);
    setDefCoords({
      center: point.center,
      zoom: point.zoom,
    });
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
            <SimpleBar style={{ height: "100%" }}>
              {citysList.map((item) => {
                return (
                  <li
                    key={item}
                    className={classnames("item")}
                    onClick={(e) => {
                      handleClickSelectCity(e);
                    }}
                  >
                    {item}
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
                    onClick={(e) => {
                      handleClickSelectAddress(e);
                    }}
                  >
                    {item}
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
        <YMaps className={classnames("geolocation__map")}>
          <Map
            state={defCoords}
            width={"100%"}
            height={"100%"}
            onLoad={(ymaps) => {
              return setYmaps({ ymaps });
            }}
          >
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {ymaps &&
                addressMap.map((address, index) => (
                  <Placemark
                    key={index}
                    geometry={address.center}
                    onClick={(geometry) =>
                      handleClickPlacemark(address, geometry)
                    }
                  />
                ))}
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default Geolocation;
