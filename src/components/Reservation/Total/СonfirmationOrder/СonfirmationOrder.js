import classnamesBind from "classnames/bind";
import styles from "./confirmationOrder.module.scss";

const СonfirmationOrder = (props) => {
  const { modalOrder, setModalOrder, setCreateOrder } = props;
  const classnames = classnamesBind.bind(styles);
  return (
    <div className={classnames("modal", { active: modalOrder })}>
      <h3 className={classnames("modal-heading")}>Подтвердить заказ</h3>
      <div className={classnames("modal-btn-wrap")}>
        <button
          className={classnames("modal-btn-confirmation")}
          onClick={() => {
            setCreateOrder(true);
            setModalOrder(false);
          }}
        >
          Подтвердить
        </button>
        <button
          className={classnames("modal-btn-return")}
          onClick={() => setModalOrder(false)}
        >
          Вернуться
        </button>
      </div>
    </div>
  );
};
export default СonfirmationOrder;
