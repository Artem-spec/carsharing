import classnamesBind from "classnames/bind";
import Language from "../Language/Language";
import styles from "./menu.module.scss";

const Menu = (props) => {
  const { setBurgerActive } = props;
  const classnames = classnamesBind.bind(styles);

  return (
    <div className={classnames("menu")}>
      <button
        id="button-burger"
        className={classnames("button-burger")}
        onClick={() => setBurgerActive(true)}
        type="button"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M4 16H28"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classnames("button-burger_color")}
          />
          <path
            d="M4 8H28"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classnames("button-burger_color")}
          />
          <path
            d="M4 24H28"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classnames("button-burger_color")}
          />
        </svg>
      </button>
      <div className={classnames("language-wrap")}>
        <Language/>
      </div>
    </div>
  );
};
export default Menu;
