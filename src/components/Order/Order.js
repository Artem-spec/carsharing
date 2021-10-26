import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosConfig from "../../utils/axiosConfig";
import { modifyOrder } from "../../store/actions/actionOrder";
import { modifyCar } from "../../store/actions/actionCar";
import parseNumberToDate from "../../utils/parseNumberToDate";
import getIntervalDate from "../../utils/getIntervalDate";
import Loading from "../Reservation/Loading/Loading";
import CardTotal from "../Reservation/Total/CardTotal/CardTotal";

const Order = (props) => {
  const { orderId, setButtonDisabled, setСonfirmationOrder } = props;
  const dispatch = useDispatch();

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
          if (!rateDescr) setConfirmation(true);
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
                description: rateDescr,
                rateId: null,
                unit: "",
                price: "",
              },
              fuel: response.isFullTank,
              babyChair: response.isNeedChildChair,
              rightHandDrive: response.isRightWheel,
              price: response.price,
              id: response.id,
              status: response.orderStatusId.name,
            })
          );
          dispatch(modifyCar(response.carId));
          setButtonDisabled(false);
          setLoading(false);
          if (response.orderStatusId.name !== "Новые") {
            setСonfirmationOrder(true);
          }
        }
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
            <CardTotal
              setButtonDisabled={setButtonDisabled}
              confirmation={confirmation}
            />
          )}
        </>
      )}
    </>
  );
};
export default Order;
