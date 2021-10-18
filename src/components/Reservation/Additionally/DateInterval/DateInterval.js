import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./dateInterval.module.scss";
import { changeDuration, changePrice } from "../../../../actions/actionOrder";
import { format } from "date-fns";

const DateInterval = (props) => {
  const { order, setButtonDisabled, rate, price } = props;
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [errorDateFrom, setErrorDateFrom] = useState({
    error: false,
    description: "",
  });
  const [errorDateTo, setErrorDateTo] = useState({
    error: false,
    description: "",
  });

  useEffect(() => {
    if (order.dateTo && order.dateFrom) {
      setDateFrom(format(order.dateFrom, "yyyy-MM-dd'T'HH:mm"));
      setDateTo(format(order.dateTo, "yyyy-MM-dd'T'HH:mm"));
    }
  }, []);

  useEffect(() => {
    if (dateFrom && dateTo) {
      const intervalObj = getInterval(dateFrom, dateTo);
      if (intervalObj)
        dispatch(
          changeDuration({
            duration: intervalObj.interval,
            dateFrom: intervalObj.dateFromFormat,
            dateTo: intervalObj.dateToFormat,
          })
        );
      dispatch(changePrice(intervalObj.calcPrice));
    }
  }, [dateFrom, dateTo, dispatch]);

  useEffect(() => {
    const intervalObj = getInterval(dateFrom, dateTo);
    if (intervalObj) dispatch(changePrice(intervalObj.calcPrice));
  }, [rate, dispatch]);

  const getInterval = (dateFrom, dateTo) => {
    const dateFromFormat = new Date(dateFrom);
    const dateToFormat = new Date(dateTo);
    const timeDiff = dateToFormat.getTime() - dateFromFormat.getTime();
    if (timeDiff < 0) {
      setErrorDateTo({
        error: true,
        description: 'Дата "С" не может быть больше даты "По"',
      });
      setDateTo("");
      setButtonDisabled(true);
      return null;
    } else {
      const diffDays = Math.trunc(timeDiff / (1000 * 3600 * 24));
      const hours = Math.abs(
        dateToFormat.getHours() - dateFromFormat.getHours()
      );
      const minuts = Math.abs(
        dateToFormat.getMinutes() - dateFromFormat.getMinutes()
      );
      let calcPrice;
      switch (rate.rateTypeId.unit) {
        case "мин":
          calcPrice = price + diffDays * 24 * 60 * rate.price;
          break;
        case "7 дней":
        case "сутки":
        case "30 дней":
          calcPrice = price + diffDays * rate.price;
          break;
        case "час":
          calcPrice = price + diffDays * 24 * rate.price;
          break;
        default:
          calcPrice = price;
          break;
      }

      return {
        interval: `${diffDays} д., ${hours} ч., ${minuts} мин.`,
        dateFromFormat,
        dateToFormat,
        calcPrice,
      };
    }
  };

  const handleChangeDate = (value, setDate, setError) => {
    const date = new Date(value);
    if (!isNaN(Date.parse(date))) {
      setDate(value);
      setError({
        error: false,
        description: "",
      });
    } else {
      setError({
        error: true,
        description: "Укажите правильную дату",
      });
      setButtonDisabled(true);
    }
  };

  return (
    <div className={classnames("wrap")}>
      <div className={classnames("date-input-wrap")}>
        <label className={classnames("date-input-label")} htmlFor="dateFrom">
          С
        </label>
        <input
          type="datetime-local"
          className={classnames("date-input")}
          id="dateFrom"
          value={dateFrom}
          onChange={(e) => {
            handleChangeDate(e.target.value, setDateFrom, setErrorDateFrom);
          }}
        />
        <span
          className={classnames("date-input-error", {
            "date-input-error-active": errorDateFrom.error,
          })}
        >
          {errorDateFrom.description}
        </span>
      </div>
      <div className={classnames("date-input-wrap", "date-input-wrap_margin")}>
        <label className={classnames("date-input-label")} htmlFor="dateTo">
          По
        </label>
        <input
          type="datetime-local"
          className={classnames("date-input", {
            "date-input-active": dateFrom === "",
          })}
          id="dateTo"
          value={dateTo}
          onChange={(e) => {
            handleChangeDate(e.target.value, setDateTo, setErrorDateTo);
          }}
        />
        <span
          className={classnames("date-input-error", {
            "date-input-error-active": errorDateTo.error,
          })}
        >
          {errorDateTo.description}
        </span>
      </div>
    </div>
  );
};
export default DateInterval;
