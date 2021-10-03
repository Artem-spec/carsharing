
import classnamesBind from "classnames/bind";
import styles from "./orderItem.module.scss";


const OrderItem = (props) => {
    const classnames = classnamesBind.bind(styles);
    const {
        item,
        descr
    } = props;

    if (item !== '') {
        return(
            <div className={classnames("order-item__wrap")}>                
                <span className={classnames("descr")}>
                    {descr}
                </span>
                <span className={classnames("item")}>
                    {item}
                </span>
            </div>
        );
    }
    else return null;
   
}
export default OrderItem;