import React, { useState } from "react";
import { connect } from 'react-redux';
import './StartPage.scss';
import { useTranslation } from 'react-i18next';
import SelectCity from "./SelectCity/SelectCity";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Slider from "./Slider/Slider";
// import Car from '../../img/jp-valery-1052513-unsplash.png';
// import Menu from "./Menu/Menu";

function StartPage(props) {
    // let img = ;
    //Состояние модального окна выбора города
    const [selectCityActive, setSelectCityActive] = useState(false);
    //Состояние - город
    const [city, setCity] = useState('Ульяновск');
    //Состояние бургер меню
    const [burgerActive, setBurgerActive] = useState(false);
    // const [citys, setCitys] = useState(props.city['Eng']);
    // //Состояние выбора языка
    const [language, setLenguache] = useState('Eng');
    //Перевод текста
    const { t, i18n } = useTranslation();

    function handleClickLinkLanguage(e) {
        const lang_ru = 'Рус';
        const lang_en = 'Eng';
        const lang = e.target.innerText;
        const cityIndex = props.city[lang].indexOf(city);

        switch (lang) {
            case lang_en:
                setLenguache(lang_ru);
                setCity(props.city[lang_ru][cityIndex]);
                break;
            case lang_ru:
                setLenguache(lang_en);
                setCity(props.city[lang_en][cityIndex]);
                break;
            default:
                break;
        }
        i18n.changeLanguage(lang);
    }

    return (
        <section className="start-page">
            <div className="start-page__menu">
                <button id="button-burger" className="button-burger" onClick={() => setBurgerActive(true)}
                    type="button">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M4 16H28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="button-burger_color" />
                        <path d="M4 8H28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="button-burger_color" />
                        <path d="M4 24H28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="button-burger_color" />
                    </svg>
                </button>
                <div className="start-page__language-wrap">
                    <span href='#' className="start-page__language" onClick={(e) => handleClickLinkLanguage(e)}>{language}</span>
                </div>
            </div>
            <div className="start-page__wrap">
                <div className="start-page__reservation">
                    <div className="start-page__header">
                        <h4 className="start-page__heading-h4 start-page__heading-h4_padding">Need for drive</h4>
                        <div className="start-page__geolocation">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="start-page__city start-page__city_padding" onClick={() => setSelectCityActive(true)}>{city}</span>
                        </div>
                    </div>
                    <div className="start-page__main">
                        <h2 className="start-page__heading-h2">{t('Carsharing.1')}</h2>
                        <h1 className="start-page__heading-h1">Need for drive</h1>
                        <p className="start-page__description start-page__description_padding">{t('Description.1')}</p>
                        <button className="button start-page__button-reservation button start-page__button-reservation_padding start-page__button-reservation_margin">
                            <span >{t("Button.Reservation")}</span>
                        </button>
                    </div>
                    <div className="start-page__footer">
                        <span className="start-page__date-creation">
                            © 2016-2019 «Need for drive»
                        </span>
                        <a href="tel: 84952342244" className="start-page__link-tel">8 (495) 234-22-44</a>
                    </div>
                </div>
                <Slider />
            </div>
            <SelectCity active={selectCityActive} setActive={setSelectCityActive} language={language} setCity={setCity} />
            <BurgerMenu active={burgerActive} setActive={setBurgerActive} setLenguache={handleClickLinkLanguage} language={language} />
        </section>

    )
}
function mapStateToProps(state) {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps)(StartPage);
