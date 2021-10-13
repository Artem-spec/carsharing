import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import classnamesBind from "classnames/bind";
import "simplebar/dist/simplebar.min.css";
import "../../../castomBootstrap.scss";
import axiosConfig from "../../../utils/axiosConfig";
import RadioButton from "../RadioButton/RadioButton";
import Car from "./Car/Car";
import Loading from "../Loading/Loading";
import { goToModel } from "../../../actions/actionOrder";
import styles from "./model.module.scss";

const Model = (props) => {
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();
  const { setButtonDisabled, setActiveAdditionally, setActiveTotal } = props;
  const [categoryChecked, setCategoryChecked] = useState("");
  const [cars, setCar] = useState([]);
  const [category, setCategory] = useState("Все модели");
  const [loading, setLoading] = useState(true);
  const { order } = useSelector((state) => state);
  const carsAPI = useRef(null);

  useEffect(() => {
    setButtonDisabled(true);
    setActiveAdditionally(false);
    setActiveTotal(false);
    dispatch(goToModel());
  }, [setButtonDisabled, setActiveAdditionally, setActiveTotal, dispatch]);

  useEffect(() => {
    if (order.model) setButtonDisabled(false);
  }, [order, setButtonDisabled]);

  useEffect(() => {
    let cleanupFunction = false;
    const getAPI = async () => {
      const responseCar = await axiosConfig.get("/car").then((response) => {
        return response.data.data;
      });
      const responseCategory = await axiosConfig
        .get("/category")
        .then((response) => {
          return response.data.data;
        });
      if (!cleanupFunction) {
        setCategory(responseCategory);
        setCar(responseCar);
        carsAPI.current = responseCar;
        setLoading(false);
      }
    };
    getAPI();
    // функция очистки useEffect
    return () => (cleanupFunction = true);
  }, []);

  useEffect(() => {
    if (carsAPI.current) {
      if (!categoryChecked || categoryChecked === "Все модели") {
        setCar(carsAPI.current);
      } else {
        const filterCars = carsAPI.current.filter((car) => {
          if (car.categoryId && car.categoryId.name === categoryChecked)
            return true;
          return false;
        });
        setCar(filterCars);
      }
    }
  }, [categoryChecked]);

  if (loading) {
    return (
      <section className={classnames("model")}>
        <Loading />
      </section>
    );
  } else {
    return (
      <section className={classnames("model")}>
        <div className={classnames("model__category")}>
          <div
            className={classnames(
              "form-check",
              "form-check-inline",
              "model__category-item"
            )}
          >
            <RadioButton
              item="Все модели"
              setChecked={setCategoryChecked}
              inputId="radioBtnDefault"
              defaultCheck={true}
              name="category"
              type="radio"
            />
          </div>
          {Boolean(category.length) &&
            category.map((item) => (
              <div
                key={item.id}
                className={classnames(
                  "form-check",
                  "form-check-inline",
                  "model__category-item"
                )}
              >
                <RadioButton
                  item={item.name}
                  setChecked={setCategoryChecked}
                  inputId="radioBtnDefault"
                  defaultCheck={false}
                  name="category"
                  type="radio"
                />
              </div>
            ))}
        </div>
        <div className={classnames("model__cars")}>
          {Boolean(cars.length) && (
            <SimpleBar
              style={{ width: "100%", height: "101%", maxHeight: "57vh" }}
            >
              <div className={classnames("model__car-item")}>
                {cars.map((car) => (
                  <Car
                    key={car.id}
                    car={car}
                    setButtonDisabled={setButtonDisabled}
                  />
                ))}
              </div>
            </SimpleBar>
          )}
          {Boolean(!cars.length) && <h1>К сожалению таких машин нет...</h1>}
        </div>
      </section>
    );
  }
};
export default Model;
