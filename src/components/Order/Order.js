import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
// import axiosConfig from "../../../utils/axiosConfig";
import axiosConfig from "../../utils/axiosConfig";
import styles from "./order.module.scss";
import Total from "../Reservation/Total/Total";
import { resetOrder, modifyOrder } from "../../store/actions/actionOrder";
import { modifyCar } from "../../store/actions/actionCar";
import parseNumberToDate from "../../utils/parseNumberToDate";
import getIntervalDate from "../../utils/getIntervalDate";

const Order = (props) => {
  const { orderId } = props;
  const classnames = classnamesBind.bind(styles);

  const { order } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [orderAPI, getOrderAPI] = useState({});

  useEffect(() => {
    const getAPI = async () => {
      const response = await axiosConfig
        .get(`/order/${orderId}`)
        .then((response) => {
          console.log(response.data.data);
          return response.data.data;
        })
        .catch(() => {
          return false;
        });
      console.log(response);
      getOrderAPI(response);
      if (response) {
        const dateFrom = parseNumberToDate(response.dateFrom);
        const dateTo = parseNumberToDate(response.dateTo);
        dispatch(
          modifyOrder({
            squeezePoint: {
              description: `${response.cityId.name}, ${response.pointId.address}`,
              cityId: response.cityId.id,
              pointId: response.pointId.id,
            },
            model: {
              description: response.carId.name,
              carId: response.carId.id,
              carPrice: "",
            },
            color: response.color,
            duration: getIntervalDate(dateFrom, dateTo),
            dateFrom: dateFrom,
            dateTo: dateTo,
            rate: {
              description: response.rateId.rateTypeId.name,
              rateId: null,
              unit: "",
              price: "",
            },
            fuel: response.isFullTank,
            babyChair: response.isNeedChildChair,
            rightHandDrive: response.isRightWheel,
            price: response.price,
            id: response.id
          })
        );
        dispatch(modifyCar(response.carId));
        //   617584f218f5c2264119c4c0
      }
    };
    getAPI();
    console.log(orderAPI);
  }, []);

  return (
    <>
      {!orderAPI && <h3>Страница не найдена</h3>}
      {orderAPI && <Total confirmation={true} />}
    </>
  );
};
export default Order;
