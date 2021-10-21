import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, useRouteMatch, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classnamesBind from "classnames/bind";
import Header from "../Header/Header";
import SelectCity from "../Header/SelectCity/SelectCity";
import BurgerMenu from "../Menu/BurgerMenu/BurgerMenu";
import Menu from "../Menu/Menu";
import SwitchReservation from "./SwitchReservation/SwitchReservation";
import OrderItem from "./OrderItem/OrderItem";
import styles from "./reservation.module.scss";
import {
  resetDataForGeolocation,
  resetDataForModel,
} from "../../store/actions/actionOrder";
//-----------------------------------------------------------------
// Изменение текста кнопки
//-----------------------------------------------------------------
const changeButtonText = (params, setButtonText) => {
  switch (params) {
    case `geolocation`:
      setButtonText("Выбрать модель");
      break;
    case `model`:
      setButtonText("Дополнительно");
      break;
    case `additionally`:
      setButtonText("Итого");
      break;
    case `total`:
      setButtonText("Заказать");
      break;
    default:
      break;
  }
};

const Reservation = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const classnames = classnamesBind.bind(styles);
  const { order } = useSelector((state) => state);
  const [burgerActive, setBurgerActive] = useState(false);
  const [selectCityActive, setSelectCityActive] = useState(false);
  const [activeModel, setActiveModel] = useState(false);
  const [activeAdditionally, setActiveAdditionally] = useState(false);
  const [activeTotal, setActiveTotal] = useState(false);

  const [selectedGeolocatinon, setSelectedGeolocation] = useState(false);
  const [selectedModel, setSelectedModel] = useState(false);
  const [selectedAdditionally, setSelectedAdditionally] = useState(false);

  const [buttonDisabled, setDisabled] = useState(true);
  const [params, setParams] = useState("");
  const [buttonText, setButtonText] = useState("Выбрать модель");
  //-----------------------------------------------------------------
  // Переход на следующий этап формирования заказа, по кнопке
  //-----------------------------------------------------------------
  const handleClickButton = () => {
    switch (params) {
      case `geolocation`:
        setActiveModel(true);
        setSelectedGeolocation(true);
        history.push(`${path}/model`);
        break;
      case `model`:
        setActiveAdditionally(true);
        setSelectedModel(true);
        history.push(`${path}/additionally`);
        break;
      case `additionally`:
        setActiveTotal(true);
        setSelectedAdditionally(true);
        history.push(`${path}/total`);
        break;
      case `total`:
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    changeButtonText(params, setButtonText);
  }, [params]);

  useEffect(() => {
    setSelectedGeolocation(false);
    dispatch(resetDataForGeolocation());
    setActiveModel(false);
    setActiveAdditionally(false);
    setActiveTotal(false);
  }, [order.squeezePoint, dispatch]);

  useEffect(() => {
    setSelectedModel(false);
    setSelectedAdditionally(false);
    dispatch(resetDataForModel());
    setActiveAdditionally(false);
    setActiveTotal(false);
  }, [order.model, dispatch]);

  useEffect(() => {
    setSelectedAdditionally(false);
    setActiveTotal(false);
  }, [
    order.color,
    order.duration,
    order.rate.description,
    order.fuel,
    order.babyChair,
    order.rightHandDrive,
    dispatch,
  ]);

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
                "reservation__link-active": true,
                "reservation__link-selected": selectedGeolocatinon,
              })}
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
                "reservation__link-selected": selectedModel,
              })}
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
                "reservation__link-selected": selectedAdditionally,
              })}
              id="additionally"
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
            path={`${path}/:id`}
            children={
              <SwitchReservation
                setDisabled={setDisabled}
                setParams={setParams}
              />
            }
          />
          <div
            className={classnames(
              "reservation__order",
              "reservation__order_padding"
            )}
          >
            <h4 className={classnames("reservation__heading-h4")}>Ваш заказ</h4>
            <div className={classnames("reservation_list-order-items")}>
              <OrderItem
                item={order.squeezePoint.description}
                descr="Пункт выдачи"
              />
              <OrderItem item={order.model.description} descr="Модель" />
              <OrderItem item={order.color} descr="Цвет" />
              <OrderItem item={order.duration} descr="Длительность аренды" />
              <OrderItem item={order.rate.description} descr="Тариф" />
              {order.fuel && <OrderItem item="Да" descr="Полный бак" />}
              {order.babyChair && (
                <OrderItem item="Да" descr="Детское кресло" />
              )}
              {order.rightHandDrive && (
                <OrderItem item="Да" descr="Правый руль" />
              )}
              {order.price && (
                <p className={classnames("reservation__price")}>
                  Цена: {order.price} &#x20bd;
                  {}
                </p>
              )}
            </div>
            <button
              className={classnames(
                "button",
                "reservation__button",
                "reservation__button_padding",
                "reservation_button_margin"
              )}
              disabled={buttonDisabled}
              onClick={handleClickButton}
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
