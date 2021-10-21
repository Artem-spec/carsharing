import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
import axiosConfig from "../../../utils/axiosConfig";
import styles from "./additionally.module.scss";
import RadioButton from "../RadioButton/RadioButton";
import Loading from "../Loading/Loading";
import Servises from "./Servises/Servises";
import DateInterval from "./DateInterval/DateInterval";
import {
  changeColor,
  changeRate,
  changePrice,
} from "../../../store/actions/actionOrder";
import calcPrice from "./util/calcPrice";

const Additionally = (props) => {
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();

  const { setButtonDisabled } = props;
  const { order } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState({});
  const [rate, setRate] = useState([]);
  const [colorChecked, setColorChecked] = useState("");
  const [rateChecked, setRateChecked] = useState(null);

  useEffect(() => {
    if (order.duration && order.color && order.rate.description)
      setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [order, setButtonDisabled]);

  useEffect(() => {
    let cleanup = false;
    const getAPI = async () => {
      const responseCar = await axiosConfig
        .get(`/car?id=${order.model.carId}`)
        .then((response) => {
          return response.data.data[0];
        });
      const responseRate = await axiosConfig.get(`/rate`).then((response) => {
        return response.data.data;
      });
      if (!cleanup) {
        setCar(responseCar);
        setRate(responseRate);
        setLoading(false);
      }
    };
    getAPI();
    // функция очистки useEffect
    return () => (cleanup = true);
  }, []);

  useEffect(() => {
    if (colorChecked && order.color !== colorChecked) {
      dispatch(changeColor(colorChecked));
    } else {
      setColorChecked(colorChecked);
    }
  }, [colorChecked, dispatch]);

  useEffect(() => {
    if (rateChecked) {
      if (order.dateFrom && order.dateTo) {
        const price = calcPrice(
          order.dateFrom,
          order.dateTo,
          rateChecked.price,
          "мин"
        );
        if (price) dispatch(changePrice(parseInt(order.model.carPrice) + price));
      }
      if (order.rate.rateId !== rateChecked.id) {
        dispatch(
          changeRate({
            ...rateChecked,
            description: rateChecked.description,
            rateId: rateChecked.rateId,
            unit: rateChecked.unit,
          })
        );
      }
    }
  }, [rateChecked, dispatch]);

  return (
    <>
      {loading && (
        <section className={classnames("additionally")}>
          <Loading />
        </section>
      )}
      {!loading && (
        <section className={classnames("additionally")}>
          <div className={classnames("additionally__content-wrap")}>
            <h5 className={classnames("additionally__heading-h5")}>Цвет</h5>
            <div className={classnames("additionally__color")}>
              {Boolean(car.colors.length) &&
                car.colors.map((color, index) => {
                  const inputId = `inputRadioColor${index}`;
                  const defaultCheck = color === order.color;
                  return (
                    <div
                      key={index}
                      className={classnames(
                        "form-check",
                        "form-check-inline",
                        "additionally__color-item"
                      )}
                    >
                      <RadioButton
                        item={color}
                        setChecked={setColorChecked}
                        inputId={inputId}
                        defaultCheck={defaultCheck}
                        name="color"
                        type="radio"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={classnames("additionally__content-wrap")}>
            <h5 className={classnames("additionally__heading-h5")}>
              Дата аренды
            </h5>
            <DateInterval
              order={order}
              setButtonDisabled={setButtonDisabled}
              rate={rateChecked}
              price={car.priceMin}
            />
          </div>
          <div className={classnames("additionally__content-wrap")}>
            <h5 className={classnames("additionally__heading-h5")}>Тариф</h5>
            <div className={classnames("additionally__rate")}>
              {Boolean(rate.length) &&
                rate.map((rate, index) => {
                  const inputId = `inputRadioRate${index}`;
                  const item = [
                    `${rate.rateTypeId.name}, ${rate.price}`,
                    <span key={index}>&#x20bd;</span>,
                    `/${rate.rateTypeId.unit}`,
                  ];
                  const defaultCheck = order.rate.rateId === rate.id;

                  return (
                    <div
                      key={index}
                      className={classnames(
                        "form-check",
                        "form-check-inline",
                        "additionally__rate-item"
                      )}
                      onClick={() =>
                        setRateChecked({
                          ...rate,
                          description: rate.rateTypeId.name,
                          rateId: rate.id,
                          unit: rate.rateTypeId.unit,
                        })
                      }
                    >
                      <RadioButton
                        item={item}
                        // setChecked={() => {}}
                        inputId={inputId}
                        defaultCheck={defaultCheck}
                        name="rate"
                        type="radio"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={classnames("additionally__content-wrap")}>
            <h5 className={classnames("additionally__heading-h5")}>
              Доп услуги
            </h5>
            <Servises order={order} />
          </div>
        </section>
      )}
    </>
  );
};
export default Additionally;
