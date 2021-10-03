import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classnamesBind from "classnames/bind";

const Language = (props) => {
  const { styles } = props;
  const { language } = useSelector((state) => state); //  city, citys,
  const dispatch = useDispatch();

  // const changeCity = useCallback(
  //   (city) =>

  //     dispatch({
  //       type: "city",
  //       payload: city.name,
  //     }),
  //   [dispatch]
  // );
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
        // changeCity(citys[lang_ru][cityIndex]);
        // console.log(citys[lang_en][cityIndex]);
        break;
      case lang_ru:
        changeLang(lang_en);
        // console.log(citys[lang_en][cityIndex]);
        // changeCity(citys[lang_en][cityIndex]);

        break;
      default:
        break;
    }
    i18n.changeLanguage(lang);
  };
  const classnames = classnamesBind.bind(styles);

  return (
    <div className={classnames("language-wrap")}>
      <span
        href="#"
        className={classnames("language")}
        onClick={(e) => handleClickLinkLanguage(e)}
      >
        {language}
      </span>
    </div>
  );
};

export default Language;
