import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
import Header from "../Header/Header";
import SelectCity from "../Header/SelectCity/SelectCity";
import BurgerMenu from "../Menu/BurgerMenu/BurgerMenu";
import Menu from "../Menu/Menu";
import Geolocation from "./Geolocation/Geolocation";
import Model from "./Model/Model";
import Additionally from "./Additionally/Additionally";
import Total from "./Total/Total";
import OrderItem from "./OrderItem/OrderItem";
import styles from "./reservation.module.scss";

//-----------------------------------------------------------------
// Изменение текста кнопки
//-----------------------------------------------------------------
const changeButtonText = (location, path, setButtonText) => {
  switch (location.pathname) {
    case `${path}/geolocation`:
      setButtonText("Выбрать модель");
      break;
    case `${path}/model`:
      setButtonText("Дополнительно");
      break;
    case `${path}/additionally`:
      setButtonText("Итого");
      break;
    case `${path}/total`:
      setButtonText("Заказать");
      break;
    default:
      break;
  }
};

const Reservation = () => {
  const { url, path } = useRouteMatch();
  const classnames = classnamesBind.bind(styles);
  const { order } = useSelector((state) => state);
  const location = useLocation();
  const [burgerActive, setBurgerActive] = useState(false);
  const [selectCityActive, setSelectCityActive] = useState(false);

  const [activeGeolocation, setActiveGeolocation] = useState(true);
  const [activeModel, setActiveModel] = useState(false);
  const [activeAdditionally, setActiveAdditionally] = useState(false);
  const [activeTotal, setActiveTotal] = useState(false);

  const [buttonDisabled, setDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Выбрать модель");
  //-----------------------------------------------------------------
  // Изменение текста кнопки
  //-----------------------------------------------------------------
  const handleClickButton = () => {
    switch (location.pathname) {
      case `${path}/geolocation`:
        document.getElementById("model").click();
        break;
      case `${path}/model`:
        document.getElementById("additionally").click();
        break;
      case `${path}/additionally`:
        document.getElementById("total").click();
        break;
      case `${path}/total`:
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    changeButtonText(location, path, setButtonText);
  }, [location, path]);

  return (
    <section className={classnames("reservation")}>
      <Redirect to={`${path}/geolocation`} />
      <Menu setBurgerActive={setBurgerActive} />
      <div className={classnames("reservation__wrap")}>
        <div
          className={classnames(
            "reservation__header-wrap",
            "reservation__container"
          )}
        >
          <Header />
        </div>
        <div className={classnames("border")}></div>
        <div
          className={classnames(
            "reservation__iteration",
            "reservation__container"
          )}
        >
          <div className={classnames("reservation__iteration-wrap")}>
            <Link
              to={`${url}/geolocation`}
              className={classnames("reservation__link", {
                "reservation__link-active": activeGeolocation,
              })}
              onClick={() => {}}
            >
              Местоположение
            </Link>
            <span className={classnames("reservation__iteration-arrow")}>
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
              </svg>
            </span>
          </div>
          <div className={classnames("reservation__iteration-wrap")}>
            <Link
              to={`${url}/model`}
              id="model"
              className={classnames("reservation__link", {
                "reservation__link-active": activeModel,
                "reservation__link-disabled": !activeModel,
              })}
              onClick={() => {
                setActiveModel(true);
              }}
            >
              Модель
            </Link>
            <span className={classnames("reservation__iteration-arrow")}>
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
              </svg>
            </span>
          </div>
          <div className={classnames("reservation__iteration-wrap")}>
            <Link
              to={`${url}/additionally`}
              className={classnames("reservation__link", {
                "reservation__link-active": activeAdditionally,
                "reservation__link-disabled": !activeAdditionally,
              })}
              id="additionally"
              onClick={() => {
                setActiveAdditionally(true);
              }}
            >
              Дополнительно
            </Link>
            <span className={classnames("reservation__iteration-arrow")}>
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
              </svg>
            </span>
          </div>
          <Link
            to={`${url}/total`}
            className={classnames("reservation__link", {
              "reservation__link-active": activeTotal,
              "reservation__link-disabled": !activeTotal,
            })}
            id="total"
            onClick={() => {
              setActiveTotal(true);
            }}
          >
            Итого
          </Link>
        </div>
        <div className={classnames("border")}></div>

        <div
          className={classnames(
            "reservation__container",
            "reservation__content"
          )}
        >
          <Route
            path={`${path}/geolocation`}
            children={
              <Geolocation
                setButtonDisabled={setDisabled}
                setActiveModel={setActiveModel}
                setActiveAdditionally={setActiveAdditionally}
                setActiveTotal={setActiveTotal}
              />
            }
          />
          <Route
            path={`${path}/model`}
            children={
              <Model
                setButtonDisabled={setDisabled}
                setActiveAdditionally={setActiveAdditionally}
                setActiveTotal={setActiveTotal}
              />
            }
          />
          <Route
            path={`${path}/additionally`}
            children={
              <Additionally
                setButtonDisabled={setDisabled}
                setActiveTotal={setActiveTotal}
              />
            }
          />
          <Route
            path={`${path}/total`}
            children={<Total setButtonDisabled={setDisabled} />}
          />

          <div
            className={classnames(
              "reservation__order",
              "reservation__order_padding"
            )}
          >
            <h4 className={classnames("reservation__heading-h4")}>Ваш заказ</h4>
            <div className={classnames("reservation_list-order-items")}>
              <OrderItem item={order.squeezePoint} descr="Пункт выдачи" />
              <OrderItem item={order.model} descr="Модель" />
              <OrderItem item={order.color} descr="Цвет" />
              <OrderItem item={order.duration} descr="Длительность аренды" />
              <OrderItem item={order.rate} descr="Тариф" />
              <OrderItem item={order.fuel} descr="Полный бак" />
              {/* Цена */}
            </div>
            <button
              className={classnames(
                "button",
                "reservation__button",
                "reservation__button_padding",
                "reservation_button_margin"
              )}
              disabled={buttonDisabled}
              onClick={() => handleClickButton()}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <SelectCity active={selectCityActive} setActive={setSelectCityActive} />
      <BurgerMenu active={burgerActive} setActive={setBurgerActive} />
    </section>
  );
};

export default Reservation;
