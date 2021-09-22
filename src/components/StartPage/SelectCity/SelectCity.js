import { useState } from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';
import 'simplebar/dist/simplebar.min.css';
import './selectCity.scss';

function SelectCity(props) {
    let citysList = props.city[props.language];
    const [citys, setCitys] = useState(citysList);
    const { t } = useTranslation();

    function handleClick(e) {
        props.setCity(e.target.innerText);
        props.setActive(false);
    }

    function handleChange(event) {
        let filterCity = citysList.filter(item => {
            let value = event.target.value.toLowerCase().trim();
            let city = item.toLowerCase().trim();
            if (city.startsWith(value))
                return true;
            else
                return false;

        })
        setCitys(filterCity);
    }


    return (
        <div className={props.active ? "modal-city active" : "modal-city"} onClick={() => { props.setActive(false); }}>
            <div className="modal-city__content" onClick={(e) => e.stopPropagation()}>
                <label className="modal-city__label modal-city__label_padding" htmlFor="modal-city__input">{t('City.1')}</label>
                <input className="modal-city__input" id="modal-city__input" type="search" placeholder={t('City.2')} onChange={(event) => handleChange(event)}></input>
                <ul className="modal-city__list">
                    <SimpleBar style={{ height: '100%' }}>
                        {citys.map((city) =>
                            <li key={city} className="modal-city__item" onClick={(e) => handleClick(e)}>{city}</li>
                        )}
                    </SimpleBar>
                </ul>
                <svg
                    className="modal-city__close"
                    onClick={() => { props.setActive(false); }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps)(SelectCity);
