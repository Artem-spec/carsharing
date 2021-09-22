import './burgerList.scss';
import { useTranslation } from 'react-i18next';

export default function BurgerList() {
    const { t } = useTranslation();
    return (
        <ul className="burger__list">
            <li className="burger__item">
                <a href="#">{t('Menu.1')}</a>
            </li>
            <li className="burger__item">
                <a href="#">{t('Menu.2')}</a>
            </li>
            <li className="burger__item">
                <a href="#">{t('Menu.3')}</a>
            </li>
            <li className="burger__item">
                <a href="#">{t('Menu.4')}</a>
            </li>
        </ul>
    )
}