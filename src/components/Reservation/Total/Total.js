import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import classnamesBind from "classnames/bind";
import styles from "./total.module.scss";
import CardTotal from "./CardTotal/CardTotal";
import { modifyOrderFlags } from "../../../store/actions/actionOrderFlags";
import { resetOrder } from "../../../store/actions/actionOrder";

const Total = (props) => {
  const history = useHistory();
  const classnames = classnamesBind.bind(styles);
  const { order, car } = useSelector((state) => state);
  const { setButtonDisabled } = props;
  const dispatch = useDispatch();

  // На тот случай если ввели URL с id заказа и нажали назад
  // Условие отличное от остальных компонентов
  useEffect(() => {
    if (order.id) {
      dispatch(modifyOrderFlags({ confirmationOrder: false }));
      dispatch(resetOrder());
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
