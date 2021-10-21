import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";
import styles from "./language.module.scss";
import { changeLanguage } from "../../store/actions/actionLanguage";
const Language = () => {
  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.language); 
  const { i18n } = useTranslation();

  const handleClickLinkLanguage = (e) => {
    const lang_ru = "Рус";
    const lang_en = "Eng";
    const lang = e.target.innerText;

    switch (lang) {
      case lang_en:
        dispatch(changeLanguage({language: lang_ru}));
        break;
      case lang_ru:
        dispatch(changeLanguage({language: lang_en}));
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
