import { useDispatch, useSelector } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./car.module.scss";
import {
  changeModel,
  changePrice,
} from "../../../../store/actions/actionOrder";
import { modifyCar } from "../../../../store/actions/actionCar";

const Car = (props) => {
  const { car, setButtonDisabled } = props;
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const handleClickCar = () => {
    dispatch(
      changeModel({
        description: car.name,
        carId: car.id,
        carPrice: String(car.priceMin),
      })
    );
    dispatch(changePrice(String(car.priceMin)));
    dispatch(modifyCar(car));
    setButtonDisabled(false);
  };

  return (
    <div
      className={classnames("car", {
        "car-active": order.model.carId === car.id,
      })}
      onClick={handleClickCar}
    >
      <div className={classnames("car__wrap")}>
        <h4 className={classnames("car__heading")}>{car.name}</h4>
        <p className={classnames("car__price")}>
          {car.priceMin} - {car.priceMax} &#x20bd;
        </p>
        <div className={classnames("car__img-wrap")}>
          <div
            className={classnames("car__image")}
            style={
              car.thumbnail.path.startsWith("/files/")
                ? {}
                : { backgroundImage: "url(" + car.thumbnail.path + ")" }
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Car;
