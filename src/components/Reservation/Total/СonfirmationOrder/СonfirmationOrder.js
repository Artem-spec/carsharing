import { useHistory, useRouteMatch } from "react-router";
import classnamesBind from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import styles from "./confirmationOrder.module.scss";
import { modifyOrderFlags } from "../../../../store/actions/actionOrderFlags";
import getBodyRequest from "../../../../utils/getBodyRequest";
import axiosConfig from "../../../../utils/axiosConfig";

const СonfirmationOrder = (props) => {
  const { order } = useSelector((state) => state);
  const { modalOrder, setDisabled } = props;
  const history = useHistory();
  const { path } = useRouteMatch();
  const classnames = classnamesBind.bind(styles);
  const dispatch = useDispatch();

  const handleClickCreate = () => {
    const orderPost = async () => {
      const requestPost = getBodyRequest(
        { id: "5e26a1f0099b810b946c5d8b" },
        order
      );
      const response = await axiosConfig
        .post("/order", requestPost)
        .then((response) => {
          return response.data.data;
        });
      history.push(`${path}/${response.id}`);
      dispatch(modifyOrderFlags({ confirmationOrder: true }));
    };
    orderPost();
    setDisabled(false);
    dispatch(modifyOrderFlags({ modalOrder: false }));
  };

  return (
    <div className={classnames("modal", { active: modalOrder })}>
      <h3 className={classnames("modal-heading")}>Подтвердить заказ</h3>
      <div className={classnames("modal-btn-wrap")}>
        <button
          className={classnames("modal-btn-confirmation")}
          onClick={handleClickCreate}
        >
          Подтвердить
        </button>
        <button
          className={classnames("modal-btn-return")}
          onClick={() => dispatch(modifyOrderFlags({ modalOrder: false }))}
        >
          Вернуться
        </button>
      </div>
    </div>
  );
};
export default СonfirmationOrder;
