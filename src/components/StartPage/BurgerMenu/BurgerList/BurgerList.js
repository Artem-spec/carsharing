import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";
import styles from "./burgerList.module.scss";

const BurgerList = () => {
  const classnames = classnamesBind.bind(styles);
  const { t } = useTranslation();
  return (
    <ul className={classnames("burger__list")}>
      <li className={classnames("burger__item")}>
        <a href="#parking">{t("Menu.1")}</a>
      </li>
      <li className={classnames("burger__item")}>
        <a href="#insurance">{t("Menu.2")}</a>
      </li>
      <li className={classnames("burger__item")}>
        <a href="#petrol">{t("Menu.3")}</a>
      </li>
      <li className={classnames("burger__item")}>
        <a href="#service">{t("Menu.4")}</a>
      </li>
    </ul>
  );
};
export default BurgerList;
