import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosConfig from "../../utils/axiosConfig";
import classNames from "classnames/bind";
import Loading from "../Reservation/Loading/Loading";
import CardTotal from "../Reservation/Total/CardTotal/CardTotal";
import { modifyOrder } from "../../store/actions/actionOrder";
import { modifyCar } from "../../store/actions/actionCar";
import { modifyOrderFlags } from "../../store/actions/actionOrderFlags";
import getObjModifyOrder from "./utils/getObjModifyOrder";
import styles from "./order.module.scss";
import { resetActiveLink } from "../../store/actions/actionActiveLink";

const Order = (props) => {
  const { orderId, setButtonDisabled } = props;
  const dispatch = useDispatch();
  const classnames = classNames.bind(styles);

  const [orderAPI, getOrderAPI] = useState({});
  const [loading, setLoading] = useState(true);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    let cleanup = false;
    const getAPI = async () => {
      const response = await axiosConfig
        .get(`/order/${orderId}`)
        .then((response) => {
          return response.data.data;
        })
        .catch(() => {
          return false;
        });
      if (!cleanup) {
        getOrderAPI(response);
        if (response) {
          const rateDescr = response.hasOwnProperty("rateId")
            ? response.rateId.rateTypeId.name
            : "";
          if (!rateDescr) {
            setConfirmation(true);
            dispatch(modifyOrderFlags({ orderСancellation: true }));
          }
          dispatch(modifyOrder(getObjModifyOrder(response, rateDescr)));
          dispatch(modifyCar(response.carId));
          setButtonDisabled(false);
          if (response.orderStatusId.name !== "Новые")
            dispatch(modifyOrderFlags({ confirmationOrder: true }));
          else dispatch(resetActiveLink());
        }
        setLoading(false);
      }
    };
    getAPI();
    return () => (cleanup = true);
  }, []);

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {!loading && (
        <>
          {!orderAPI && (
            <h3 style={{ margin: "20px 0" }}>Страница не найдена</h3>
          )}
          {orderAPI && (
            <div
              style={{ width: "70%", display: "flex", flexDirection: "column" }}
            >
              {!confirmation && (
                <h4 className={classnames("order-title")}>
                  Ваш заказ подтвержден
                </h4>
              )}
              {confirmation && (
                <h4 className={classnames("order-title")}>Ваш заказ отменен</h4>
              )}
              <CardTotal
                setButtonDisabled={setButtonDisabled}
                confirmation={confirmation}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Order;
