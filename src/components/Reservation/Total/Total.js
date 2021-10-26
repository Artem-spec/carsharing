import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import classnamesBind from "classnames/bind";
import styles from "./total.module.scss";
import CardTotal from "./CardTotal/CardTotal";

const Total = (props) => {
  const history = useHistory();
  const classnames = classnamesBind.bind(styles);
  const { order, car } = useSelector((state) => state);
  const { setButtonDisabled, setСonfirmationOrder } = props;

  // На тот случай если ввели URL с id заказа и нажали назад
  useEffect(() => {
    if (order.id || !order.duration) {
      setСonfirmationOrder(false);
      history.push("/reservation/geolocation");
    }
  }, []);

  return (
    <section className={classnames("total")}>
      {Boolean(Object.keys(car).length) && (
        <CardTotal setButtonDisabled={setButtonDisabled} confirmation={false} />
      )}
    </section>
  );
};
export default Total;
