import classnamesBind from "classnames/bind";
import cn from "classnames";
import styles from "./radioButton.module.scss";

const RadioButton = (props) => {
  const classnames = classnamesBind.bind(styles);
  const { item, objItem, setChecked, inputId, defaultCheck, name, type } =
    props;
  return (
    item && (
      <>
        <input
          className={cn("form-check-input", classnames(""))}
          type={type}
          name={name}
          id={inputId}
          defaultChecked={defaultCheck}
          onClick={() => {
            setChecked && setChecked(objItem || item);
          }}
        />
        <label
          className={cn("form-check-label", classnames("label-color"))}
          htmlFor={inputId}
        >
          {item}
        </label>
      </>
    )
  );
};
export default RadioButton;
