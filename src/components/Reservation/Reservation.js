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
import { modifyOrderFlags } from "../../store/actions/actionOrderFlags";
import {
  modifyActiveLink,
  resetActiveLink,
} from "../../store/actions/actionActiveLink";
import getBodyRequest from "../../utils/getBodyRequest";
import changeButtonText from "../../utils/changeButtonTextReservation";

const Reservation = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const classnames = classnamesBind.bind(styles);

  const { order, orderFlags, activeLink } = useSelector((state) => state);

  const [burgerActive, setBurgerActive] = useState(false);
  const [selectCityActive, setSelectCityActive] = useState(false);

  const [buttonDisabled, setDisabled] = useState(true);
  const [params, setParams] = useState("");
  const [buttonText, setButtonText] = useState("Выбрать модель");
  //-----------------------------------------------------------------
  // Переход на следующий этап формирования заказа, по кнопке
  //-----------------------------------------------------------------
  const handleClickButton = () => {
    switch (params) {
      case `geolocation`:
        dispatch(
          modifyActiveLink({
            activeModel: true,
            selectedGeolocation: true,
          })
        );
        history.push(`${path}/model`);
        break;
      case `model`:
        dispatch(
          modifyActiveLink({
            activeAdditionally: true,
            selectedModel: true,
          })
        );
        history.push(`${path}/additionally`);
        break;
      case `additionally`:
        dispatch(
          modifyActiveLink({
            activeTotal: true,
            selectedAdditionally: true,
          })
        );
        history.push(`${path}/total`);
        break;
      case `total`:
        dispatch(modifyOrderFlags({ modalOrder: true }));
        break;
      default:
        dispatch(
          modifyOrderFlags({ deleteOrder: true, confirmationOrder: false })
        );
        break;
    }
  };
  //-----------------------------------------------------------------
  // Смена текста кнопки
  //-----------------------------------------------------------------
  useEffect(() => {
    changeButtonText(params, setButtonText);
  }, [params]);

  useEffect(() => {
    if (
      params === "geolocation" ||
      params === "model" ||
      params === "total" ||
      params === "additionally"
    ) {
      dispatch(resetActiveLink());
      dispatch(resetDataForGeolocation());
    }
  }, [order.squeezePoint]);

  useEffect(() => {
    if (
      params === "geolocation" ||
      params === "model" ||
      params === "total" ||
      params === "additionally"
    ) {
      dispatch(
        modifyActiveLink({
          selectedModel: false,
          selectedAdditionally: false,
          activeAdditionally: false,
          activeTotal: false,
        })
      );
      dispatch(resetDataForModel());
    }
  }, [order.model]);

  useEffect(() => {
    if (
      params === "geolocation" ||
      params === "model" ||
      params === "total" ||
      params === "additionally"
    ) {
      dispatch(
        modifyActiveLink({
          selectedAdditionally: false,
          activeTotal: false,
        })
      );
    }
  }, [
    order.color,
    order.duration,
    order.rate.description,
    order.fuel,
    order.babyChair,
    order.rightHandDrive,
  ]);

  useEffect(() => {
    if (orderFlags.deleteOrder && order.id) {
      const requestPut = getBodyRequest(
        { id: "5e26a191099b810b946c5d89" },
        order
      );
      const orderPut = async () => {
        await axiosConfig.put(`/order/${order.id}`, requestPut);
      };
      orderPut();
      dispatch(resetOrder());
      dispatch(modifyOrderFlags({ createOrder: false, deleteOrder: false }));
      dispatch(resetActiveLink());
      history.push(`${path}/geolocation`);
    }
  }, [orderFlags.deleteOrder]);

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
        {orderFlags.confirmationOrder && (
          <div
            className={classnames(
              "reservation__container",
              "reservation__order-id"
            )}
          >
            Заказ оформлен RU{order.id}
          </div>
        )}
        {!orderFlags.confirmationOrder && (
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
                  "reservation__link-selected": activeLink.selectedGeolocation,
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
                  "reservation__link-active": activeLink.activeModel,
                  "reservation__link-disabled": !activeLink.activeModel,
                  "reservation__link-selected": activeLink.selectedModel,
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
                  "reservation__link-active": activeLink.activeAdditionally,
                  "reservation__link-disabled": !activeLink.activeAdditionally,
                  "reservation__link-selected": activeLink.selectedAdditionally,
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
                "reservation__link-active": activeLink.activeTotal,
                "reservation__link-disabled": !activeLink.activeTotal,
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
                  reservation__button_red: orderFlags.confirmationOrder,
                  reservation__button_disabled: orderFlags.orderСancellation,
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
        modalOrder={orderFlags.modalOrder}
        setDisabled={setDisabled}
      />
    </section>
  );
};
export default Reservation;
