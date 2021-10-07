import classnamesBind from "classnames/bind";
import BurgerList from "./BurgerList/BurgerList";
import SocialNetworks from "./SocialNetworls/SocialNetworks";
import Language from "../../Language/Language";
import styles from "./burgerMenu.module.scss";

const BurgerMenu = (props) => {
  const { active, setActive } = props;

  const classnames = classnamesBind.bind(styles);

  return (
    <div
      className={classnames("burger", { active })}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={classnames("burger__content")}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={classnames("burger__close")}
          onClick={() => {
            setActive(false);
          }}
        >
          <path
            d="M24 8L8 24"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L24 24"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={classnames("burger__menu", "burger__menu-magrin")}>
          <div>
            <BurgerList />
            <SocialNetworks />
          </div>
          <div className={classnames("language-wrap")}>
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
