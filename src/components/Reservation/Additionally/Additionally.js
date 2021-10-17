import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
import axiosConfig from "../../../utils/axiosConfig";
import styles from "./additionally.module.scss";
import RadioButton from "../RadioButton/RadioButton";
import Loading from "../Loading/Loading";
import Servises from "./Servises/Servises";
import DateInterval from "./DateInterval/DateInterval";
import { changeColor, changeRate } from "../../../actions/actionOrder";

const Additionally = (props) => {
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();

  const { setButtonDisabled } = props;
  const { order } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState({});
  const [rate, setRate] = useState([]);
  const [colorChecked, setColorChecked] = useState("");
  const [rateChecked, setRateChecked] = useState("");

  useEffect(() => {
    if (order.duration) setButtonDisabled(false)
    else setButtonDisabled(true);
  }, [order, setButtonDisabled]);

  useEffect(() => {
    let cleanupFunction = false;
    const getAPI = async () => {
      const responseCar = await axiosConfig
        .get(`/car?name=${order.model}`)
        .then((response) => {
          return response.data.data[0];
        });
      const responseRate = await axiosConfig.get(`/rate`).then((response) => {
        return response.data.data;
      });
      if (!cleanupFunction) {
        setCar(responseCar);
        if (responseCar) {
          setColorChecked(responseCar.colors[0]);
        }
        setRate(responseRate);
        setRateChecked(responseRate[0].rateTypeId.name);
        setLoading(false);
      }
    };
    getAPI();
    // функция очистки useEffect
    return () => (cleanupFunction = true);
  }, []);

  useEffect(() => {
    dispatch(changeColor(colorChecked));
  }, [colorChecked, dispatch]);

  useEffect(() => {
    dispatch(changeRate(rateChecked));
  }, [rateChecked, dispatch]);

  if (loading) {
    return (
      <section className={classnames("additionally")}>
        <Loading />
      </section>
    );
  } else {
    return (
      <section className={classnames("additionally")}>
        <div className={classnames("additionally__content-wrap")}>
          <h5 className={classnames("additionally__heading-h5")}>Цвет</h5>
          <div className={classnames("additionally__color")}>
            {Boolean(car.colors.length) &&
              car.colors.map((color, index) => {
                const inputId = `inputRadioColor${index}`;
                let defaultCheck = true;
                if (index > 0) defaultCheck = false;
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
          <DateInterval order={order} setButtonDisabled={setButtonDisabled} />
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
                let defaultCheck = true;
                if (index > 0) defaultCheck = false;
                return (
                  <div
                    key={index}
                    className={classnames(
                      "form-check",
                      "form-check-inline",
                      "additionally__rate-item"
                    )}
                    onClick={() => setRateChecked(rate.rateTypeId.name)}
                  >
                    <RadioButton
                      item={item}
                      setChecked={() => {}}
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
          <h5 className={classnames("additionally__heading-h5")}>Доп услуги</h5>
          <Servises />
        </div>
      </section>
    );
  }
};
export default Additionally;
