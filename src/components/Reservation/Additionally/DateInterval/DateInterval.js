import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHours, setMinutes } from "date-fns";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale";
import classnamesBind from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./dateInterval.module.scss";
import {
  changeDuration,
} from "../../../../store/actions/actionOrder";
import getIntervalDate from "../../../../utils/getIntervalDate";

const DateInterval = (props) => {
  const { order, rate } = props;
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();
  registerLocale("ru", ru);

  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const [minTime, setMinTime] = useState(null);

  useEffect(() => {
    if (order.dateTo && order.dateFrom) {
      setDateFrom(order.dateFrom);
      setDateTo(order.dateTo);
      checkDate(order.dateFrom, order.dateTo);
    }
  }, []);

  useEffect(() => {
    if (dateFrom && dateTo) {
      const interval = getIntervalDate(dateFrom, dateTo);
      if (
        interval
        // order.dateTo !== intervalObj.dateToFormat &&
        // order.dateFrom !== intervalObj.dateFromFormat
      )
        dispatch(
          changeDuration({
            duration: interval,
            dateFrom,
            dateTo,
          })
        );
    }
  }, [dateFrom, dateTo, rate, dispatch]);

  // const getInterval = (dateFrom, dateTo) => {
  //   const dateFromFormat = new Date(dateFrom);
  //   const dateToFormat = new Date(dateTo);
  //   const timeDiff = dateToFormat.getTime() - dateFromFormat.getTime();
  //   const diffDays = Math.trunc(timeDiff / (1000 * 3600 * 24));
  //   const hours = Math.abs(dateToFormat.getHours() - dateFromFormat.getHours());
  //   const minuts = Math.abs(
  //     dateToFormat.getMinutes() - dateFromFormat.getMinutes()
  //   );

  //   return {
  //     interval: `${diffDays} д., ${hours} ч., ${minuts} мин.`,
  //     dateFromFormat,
  //     dateToFormat,
  //   };
  // };
  const checkDate = (dateFrom, dateTo) => {
    if (
      dateFrom.getFullYear() >= dateTo.getFullYear() &&
      dateFrom.getMonth() >= dateTo.getMonth() &&
      dateFrom.getDate() >= dateTo.getDate()
    ) {
      setMinTime(
        dateFrom
      );
    } else setMinTime(setHours(setMinutes(dateFrom, 0), 0));
  };

  const handleChangeDateFrom = (date) => {
    setDateFrom(date);
    setDateTo(null);
    setMinTime(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours() + 1,
        date.getMinutes()
      )
    );
  };

  const handleChangeDateTo = (date) => {
    if (dateFrom >= date) {
      setDateTo(
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          dateFrom.getHours() + 1,
          dateFrom.getMinutes()
        )
      );
    } else setDateTo(date);
    checkDate(dateFrom, date);
  };

  return (
    <div className={classnames("wrap")}>
      <div className={classnames("date-input-wrap",{
      })}>
        <label className={classnames("date-input-label")} htmlFor="dateFrom">
          С
        </label>
        <ReactDatePicker
          selected={dateFrom}
          onChange={(date) => handleChangeDateFrom(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy p"
          locale="ru"
        />
      </div>
      <div
        className={classnames("date-input-wrap", "date-input-wrap_margin", {
          "date-input-active": !dateFrom,
        })}
      >
        <label className={classnames("date-input-label")} htmlFor="dateTo">
          По
        </label>
        <ReactDatePicker
          selected={dateTo}
          onChange={(date) => handleChangeDateTo(date)}
          minDate={dateFrom}
          minTime={minTime}
          maxTime={setHours(setMinutes(dateFrom, 30), 23)}
          showTimeSelect
          dateFormat="MMMM d, yyyy p"
          locale="ru"
        />
      </div>
    </div>
  );
};
export default DateInterval;
