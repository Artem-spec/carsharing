import { useDispatch } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./servises.module.scss";
import {
  changeFuel,
  changeRightHandDrive,
  changeBabyChair,
  changePrice,
} from "../../../../store/actions/actionOrder";

const Servises = (props) => {
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();
  const { order } = props;

  const calcPrice = (value) => {
    const calcValue = value
      ? parseInt(order.price) + 500
      : parseInt(order.price) - 500;
    dispatch(changePrice(calcValue));
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
          checked={order.fuel}
          onChange={(e) => {
            calcPrice(e.target.checked);
            dispatch(changeFuel(e.target.checked));
          }}
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
          checked={order.babyChair}
          onChange={(e) => {
            calcPrice(e.target.checked);
            dispatch(changeBabyChair(e.target.checked));
          }}
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
          checked={order.rightHandDrive}
          onChange={(e) => {
            calcPrice(e.target.checked);
            dispatch(changeRightHandDrive(e.target.checked));
          }}
        />
      </div>
    </div>
  );
};
export default Servises;
