import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./servises.module.scss";
import {
  changeFuel,
  changeRightHandDrive,
  changeBabyChair,
} from "../../../../actions/actionOrder";

const Servises = (props) => {
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();
  const { order } = props;

  const [fuel, setFuel] = useState("");
  const [babyChair, setBabyChair] = useState("");
  const [rightHand, setRightHand] = useState("");

  useEffect(() => {
    dispatch(changeFuel(fuel));
  }, [fuel, dispatch]);

  useEffect(() => {
    dispatch(changeBabyChair(babyChair));
  }, [babyChair, dispatch]);

  useEffect(() => {
    dispatch(changeRightHandDrive(rightHand));
  }, [rightHand, dispatch]);

  const handleChangeCheckbox = (e, setParam) => {
    if (e.target.checked) {
      setParam("Да");
      order.price += 500; 
    } else {
      setParam("");
      order.price -= 500; 
    }
  };

  return (
    <div className={classnames("checkboxs-wrap")}>
      <div className={classnames("form-check")}>
        <label
          className={classnames("form-check-label", "checkboxs-label")}
          htmlFor="checkboxFuel"
        >
          Полный бак, 500р
        </label>
        <input
          className={classnames("form-check-input")}
          type="checkbox"
          id="checkboxFuel"
          onChange={(e) => handleChangeCheckbox(e, setFuel)}
        />
      </div>
      <div className={classnames("form-check")}>
        <label
          className={classnames("form-check-label", "checkboxs-label")}
          htmlFor="checkboxBabyChain"
        >
          Детское кресло, 500р"
        </label>
        <input
          className={classnames("form-check-input")}
          type="checkbox"
          id="checkboxBabyChain"
          onChange={(e) => handleChangeCheckbox(e, setBabyChair)}
        />
      </div>
      <div className={classnames("form-check")}>
        <label
          className={classnames("form-check-label", "checkboxs-label")}
          htmlFor="checkboxRightHand"
        >
          Правый руль, 500р
        </label>
        <input
          className={classnames("form-check-input")}
          type="checkbox"
          id="checkboxRightHand"
          onChange={(e) => handleChangeCheckbox(e, setRightHand)}
        />
      </div>
    </div>
  );
};
export default Servises;
