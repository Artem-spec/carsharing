import { useDispatch } from "react-redux";
import classnamesBind from "classnames/bind";
import styles from "./car.module.scss";
import { changeModel, changePrice } from "../../../../actions/actionOrder";

const Car = (props) => {
  const { car, setButtonDisabled } = props;
  const classnames = classnamesBind.bind(styles);

  const dispatch = useDispatch();

  const handleClick = (model, priceMin, priceMax) => {
    const price = `от ${priceMin} до ${priceMax}`;
    dispatch(changeModel(model));
    dispatch(changePrice(price));
    setButtonDisabled(false);
  };

  let styleImg;
  if (car.thumbnail.path.startsWith("/files/")) styleImg = {};
  else
    styleImg = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + car.thumbnail.path + ")",
      backgroundPosition: "center",
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
    };

  return (
    <div
      className={classnames("car")}
      onClick={() => {
        handleClick(car.name, car.priceMin, car.priceMax);
      }}
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
