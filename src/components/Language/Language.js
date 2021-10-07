import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";
import styles from "./language.module.scss";

const Language = () => {

  const { language } = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeLang = useCallback(
    (language) =>
      dispatch({
        type: "language",
        payload: language,
      }),
    [dispatch]
  );

  const { i18n } = useTranslation();

  const handleClickLinkLanguage = (e) => {
    const lang_ru = "Рус";
    const lang_en = "Eng";
    const lang = e.target.innerText;

    switch (lang) {
      case lang_en:
        changeLang(lang_ru);
        break;
      case lang_ru:
        changeLang(lang_en);
        break;
      default:
        break;
    }
    i18n.changeLanguage(lang);
  };
  const classnames = classnamesBind.bind(styles);

  return (
      <span
        href="#"
        className={classnames("language")}
        onClick={(e) => handleClickLinkLanguage(e)}
      >
        {language}
      </span>
  );
};

export default Language;
