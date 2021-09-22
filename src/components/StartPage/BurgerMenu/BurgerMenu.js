import BurgerList from './BurgerList/BurgerList';
import './burgerMenu.scss';
import SocialNetworks from './SocialNetworls/SocialNetworks';

export default function BurgerMenu(props) {
    
    return (
        <div className={props.active ? "burger active" : "burger"} onClick={() => { props.setActive(false); }}>
            <div className="burger__content" onClick={(e)=> e.stopPropagation()}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="burger__close" onClick={() => { props.setActive(false); }}>
                    <path d="M24 8L8 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 8L24 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="burger__menu burger__menu-magrin">
                    <BurgerList/>
                    <SocialNetworks/>
                </div>
                <div className="burger__menu__language-wrap">
                    <span href='#' className="burger__menu__language" onClick={(e) => props.setLenguache(e)}>{props.language}</span>
                </div>
            </div>
        </div>
    )
}