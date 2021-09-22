// import React, { useState } from "react";
// import { useTranslation } from 'react-i18next';

// export default function Menu(props) {
//     //Состояние выбора языка
//     // const [language, setLenguache] = useState('Eng');
//     //Перевод текста
//     const { t, i18n } = useTranslation();

//     function handleClickLinkLanguage(e) {
//         const lang_ru = 'Рус';
//         const lang_en = 'Eng';
//         const lang = e.target.innerText;
//         const cityIndex = props.citys[lang].indexOf(city);
    
//         switch (lang) {
//             case lang_en:
//                 props.setLenguache(lang_ru);
//                 props.setCity(props.citys[lang_ru][cityIndex]);
//                 break;
//             case lang_ru:
//                 props.setLenguache(lang_en);
//                 props.setCity(props.citys[lang_en][cityIndex]);
//                 break;
//         }
//         i18n.changeLanguage(lang);
//     }

//     return (
//         <div className="start-page__menu">
//             <button id="button-burger" className="button-burger"
//                 type="button">
//                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                     <path d="M4 16H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M4 8H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M4 24H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//             </button>
//             <div className="start-page__language-wrap">
//                 <span href='#' className="start-page__language" onClick={(e) => handleClickLinkLanguage(e)}>{props.language}</span>
//             </div>
//         </div>
//     )

// }

