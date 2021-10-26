import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, useRouteMatch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classnamesBind from "classnames/bind";
import Header from "../Header/Header";
import SelectCity from "../Header/SelectCity/SelectCity";
import BurgerMenu from "../Menu/BurgerMenu/BurgerMenu";
import Menu from "../Menu/Menu";
import SwitchReservation from "./SwitchReservation/SwitchReservation";
import OrderItem from "./OrderItem/OrderItem";
import СonfirmationOrder from "./Total/СonfirmationOrder/СonfirmationOrder";
import styles from "./reservation.module.scss";
import axiosConfig from "../../utils/axiosConfig";
import {
  resetDataForGeolocation,
  resetDataForModel,
  resetOrder,
} from "../../store/actions/actionOrder";
import parseDateToNumber from "../../utils/parseDateToNumber";
//-----------------------------------------------------------------
// Изменение текста кнопки
//-----------------------------------------------------------------
const changeButtonText = (params, setButtonText, confirmationOrder) => {
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
      setButtonText("Отменить");
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

  const [modalOrder, setModalOrder] = useState(false);
  const [createOrder, setCreateOrder] = useState(false);
  const [deleteOrder, setDeleteOrder] = useState(false);
  const [confirmationOrder, setСonfirmationOrder] = useState(false);

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
        setModalOrder(true);
        break;
      default:
        if (confirmationOrder) {
          setDeleteOrder(true);
        }
        setСonfirmationOrder(false);
        break;
    }
  };
  //-----------------------------------------------------------------
  // Данные для запроса
  //-----------------------------------------------------------------
  const getBodyRequest = (orderStatus) => {
    // {name: 'Новые', id: '5e26a191099b810b946c5d89'}
    // {name: 'Подтвержденные', id: '5e26a1f0099b810b946c5d8b'}
    // {name: 'Отмененые', id: '5e26a1f5099b810b946c5d8c'}
    // {name: 'Временные ', id: '6114e4502aed9a0b9b850846'}
    return {
      orderStatusId: orderStatus,
      cityId: { id: order.squeezePoint.cityId },
      pointId: { id: order.squeezePoint.pointId },
      carId: { id: order.model.carId },
      color: order.color,
      dateFrom: parseDateToNumber(order.dateFrom),
      dateTo: parseDateToNumber(order.dateTo),
      rateId: { id: order.rate.rateId },
      price: order.price,
      isFullTank: order.fuel,
      isNeedChildChair: order.babyChair,
      isRightWheel: order.rightHandDrive,
    };
  };
  useEffect(() => {
    changeButtonText(params, setButtonText, confirmationOrder);
  }, [params]);

  useEffect(() => {
    if (
      params === "geolocation" ||
      params === "model" ||
      params === "total" ||
      params === "additionally"
    ) {
      setSelectedGeolocation(false);
      dispatch(resetDataForGeolocation());
      setActiveModel(false);
      setActiveAdditionally(false);
      setActiveTotal(false);
    }
  }, [order.squeezePoint, dispatch]);

  useEffect(() => {
    if (
      params === "geolocation" ||
      params === "model" ||
      params === "total" ||
      params === "additionally"
    ) {
      setSelectedModel(false);
      setSelectedAdditionally(false);
      dispatch(resetDataForModel());
      setActiveAdditionally(false);
      setActiveTotal(false);
    }
  }, [order.model, dispatch]);

  useEffect(() => {
    if (
      params === "geolocation" ||
      params === "model" ||
      params === "total" ||
      params === "additionally"
    ) {
      setSelectedAdditionally(false);
      setActiveTotal(false);
    }
  }, [
    order.color,
    order.duration,
    order.rate.description,
    order.fuel,
    order.babyChair,
    order.rightHandDrive,
    dispatch,
  ]);

  useEffect(() => {
    if (createOrder) {
      const orderPost = async () => {
        const requestPost = getBodyRequest({ id: "5e26a1f0099b810b946c5d8b" });
        const response = await axiosConfig
          .post("/order", requestPost)
          .then((response) => {
            return response.data.data;
          });
        history.push(`${path}/${response.id}`);
        setСonfirmationOrder(true);
      };
      orderPost();
      setDisabled(false);
    }
  }, [createOrder]);
  useEffect(() => {
    if (deleteOrder && order.id) {
      const requestPut = getBodyRequest({ id: "5e26a191099b810b946c5d89" });
      const orderPut = async () => {
        await axiosConfig.put(`/order/${order.id}`, requestPut);
      };
      orderPut();
      dispatch(resetOrder());
      setDeleteOrder(false);
      setCreateOrder(false);
      setSelectedGeolocation(false);
      setActiveModel(false);
      setActiveAdditionally(false);
      setActiveTotal(false);
      setSelectedModel(false);
      setSelectedAdditionally(false);
      history.push(`${path}/geolocation`);
    }
  }, [deleteOrder]);

  return (
    <section className={classnames("reservation")}>
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
        {confirmationOrder && (
          <div className={classnames("reservation__container")}>
            Заказ оформлен
          </div>
        )}
        {!confirmationOrder && (
          <div
            className={classnames(
              "reservation__iteration",
              "reservation__container"
            )}
          >
            <div className={classnames("reservation__iteration-wrap")}>
              <Link
                id="rrr"
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
        )}

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
                setСonfirmationOrder={setСonfirmationOrder}
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
                "reservation_button_margin",
                {
                  reservation__button_red: confirmationOrder,
                }
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
      <СonfirmationOrder
        modalOrder={modalOrder}
        setModalOrder={setModalOrder}
        setCreateOrder={setCreateOrder}
      />
    </section>
  );
};
export default Reservation;
