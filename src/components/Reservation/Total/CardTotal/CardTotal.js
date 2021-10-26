import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./cardTotal.module.scss";
import parseNumberCar from "../utils/parseNumberCar";
import parseDate from "../utils/parseDate";

const CardTotal = (props) => {
  const classnames = classnamesBind.bind(styles);
  const { order, car } = useSelector((state) => state);
  const { setButtonDisabled, confirmation } = props;
  const [styleImg, setStyleImg] = useState(null);

  // На тот случай если ввели URL с id заказа и нажали назад
  useEffect(() => {
    if (!confirmation) setButtonDisabled(false);
    if (confirmation) setButtonDisabled(true);
  }, []);

  useEffect(() => {
    if (Boolean(Object.keys(car).length))
      setStyleImg(
        car.thumbnail.path.startsWith("/files/")
          ? {}
          : {
              width: "100%",
              height: "100%",
              backgroundImage: "url(" + car.thumbnail.path + ")",
              backgroundPosition: "center",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
            }
      );
  }, [car]);

  return (
    <>
      {Boolean(Object.keys(car).length) && (
        <div className={classnames("card-total__order")}>
          <div className={classnames("card-total__order-description")}>
            {!confirmation && (
              <h4 className={classnames("card-total__order-create")}>
                Ваш заказ подтвержден
              </h4>
            )}
            <span className={classnames("card-total__order-car-name")}>
              {car.name}
            </span>
            <span
              className={classnames(
                "card-total__order-car-numder",
                "card-total__order-item_margin"
              )}
            >
              {parseNumberCar(car.number)}
            </span>
            {order.fuel && (
              <span className={classnames("card-total__order-item_margin")}>
                <b>Топливо </b>100%
              </span>
            )}
            {order.babyChair && (
              <span className={classnames("card-total__order-item_margin")}>
                <b>Детское кресло </b>Да
              </span>
            )}
            {order.rightHandDrive && (
              <span className={classnames("card-total__order-item_margin")}>
                <b>Правый руль </b>Да
              </span>
            )}
            <span className={classnames("card-total__order-item_margin")}>
              <b>Доступна с </b>
              {parseDate(order.dateFrom)}
            </span>
          </div>
          <div className={classnames("card-total__order-car-image")}>
            <div style={styleImg}></div>
          </div>
        </div>
      )}
    </>
  );
};
export default CardTotal;
