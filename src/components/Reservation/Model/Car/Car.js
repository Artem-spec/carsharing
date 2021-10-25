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
    const price = `${car.priceMin}`;
    dispatch(
      changeModel({
        description: car.name,
        carId: car.id,
        carPrice: car.priceMin,
      })
    );
    dispatch(changePrice(price));
    dispatch(modifyCar(car));
    setButtonDisabled(false);
  };

  const styleImg = car.thumbnail.path.startsWith("/files/")
    ? {}
    : {
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + car.thumbnail.path + ")",
        backgroundPosition: "center",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
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
          <div style={styleImg}></div>
        </div>
      </div>
    </div>
  );
};
export default Car;
