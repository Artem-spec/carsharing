(this.webpackJsonpcarsharing=this.webpackJsonpcarsharing||[]).push([[0],{101:function(e,t,r){e.exports={"start-page":"startPage_start-page__2M5oD","start-page__menu":"startPage_start-page__menu__3WT4M","start-page__language-wrap":"startPage_start-page__language-wrap__3C0DV","start-page__language":"startPage_start-page__language___pX0s","button-burger":"startPage_button-burger__hjKg1","button-burger_color":"startPage_button-burger_color__29Nfj","start-page__wrap":"startPage_start-page__wrap__1dfL_","start-page__reservation":"startPage_start-page__reservation__1_p-e","start-page__header":"startPage_start-page__header__4h5mU","start-page__geolocation":"startPage_start-page__geolocation__3pK-_","start-page__city":"startPage_start-page__city__3wTGq","start-page__city_padding":"startPage_start-page__city_padding__2E85T","start-page__heading-h4":"startPage_start-page__heading-h4__1NDJq",button:"startPage_button__AU48y","start-page__main":"startPage_start-page__main__b7826","start-page__heading-h1":"startPage_start-page__heading-h1__2ydOK","start-page__heading-h2":"startPage_start-page__heading-h2__2UcGv","start-page__description":"startPage_start-page__description__8k66V","start-page__description_padding":"startPage_start-page__description_padding__3P9S2","start-page__button-reservation":"startPage_start-page__button-reservation__2bBAU","start-page__button-reservation_padding":"startPage_start-page__button-reservation_padding__5Nu-o","start-page__button-reservation_margin":"startPage_start-page__button-reservation_margin__2UnoI","start-page__footer":"startPage_start-page__footer__1b_D3","start-page__date-creation":"startPage_start-page__date-creation__1zwZE","start-page__link-tel":"startPage_start-page__link-tel__2CfXp"}},103:function(e,t,r){e.exports={"modal-city":"selectCity_modal-city__28TCT","modal-city__content":"selectCity_modal-city__content__1MN4v","modal-city__label":"selectCity_modal-city__label__3Lwgu","modal-city__input":"selectCity_modal-city__input__3Rt99","modal-city__label_padding":"selectCity_modal-city__label_padding__3KKsL","modal-city__list":"selectCity_modal-city__list__Vzj8b","modal-city__item":"selectCity_modal-city__item__d0Bgl","modal-city__close":"selectCity_modal-city__close__1-8Xx",active:"selectCity_active__186ym"}},107:function(e,t,r){e.exports={burger__item:"burgerList_burger__item__3DiEc"}},108:function(e,t,r){e.exports={burger:"burgerMenu_burger__39iFH",burger__content:"burgerMenu_burger__content__uSkC_",burger__close:"burgerMenu_burger__close__1UQ8L",burger__menu:"burgerMenu_burger__menu__1-R52","burger__language-wrap":"burgerMenu_burger__language-wrap__cwHA2",burger__language:"burgerMenu_burger__language__JEIJl",active:"burgerMenu_active__2nZ6c","burger__menu-magrin":"burgerMenu_burger__menu-magrin__2TO_k"}},109:function(e,t,r){e.exports={"burger__group-social-networks":"socialNetworks_burger__group-social-networks__2bR4X"}},110:function(e,t,r){e.exports={slider:"slider_slider__2PDFE","slider__turn-over":"slider_slider__turn-over__2_syu","slider__slide-prev":"slider_slider__slide-prev__53M9o","slider__slide-next":"slider_slider__slide-next__2T7se","slider-img":"slider_slider-img__3FN3X",slider__image:"slider_slider__image__2HZfd","slider-img-prev":"slider_slider-img-prev__5etTh","slider-img-next":"slider_slider-img-next__3CnlL",slider__button:"slider_slider__button__1D5bV",slider__button_margin:"slider_slider__button_margin__3FUEn","slider__button-parking":"slider_slider__button-parking__19_kc","slider__button-insurance":"slider_slider__button-insurance__2j-KE","slider__button-petrol":"slider_slider__button-petrol__1Feo8","slider__button-service":"slider_slider__button-service__EW6Uo","slider__group-description":"slider_slider__group-description__2_QC-",slider__header:"slider_slider__header__3430P",slider__description:"slider_slider__description__31yvo","slider__slide-circle":"slider_slider__slide-circle__3SUsX",slider__circle:"slider_slider__circle__2qKMe","slider__circle-active":"slider_slider__circle-active__1kzcJ","slider-position-img":"slider_slider-position-img__2MV_l","slider-wrapper":"slider_slider-wrapper__1iW5_"}},118:function(e,t,r){},181:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),s=r(40),n=r.n(s),_=(r(118),r(3)),c=r(16),l=r(22),o=r(13),d=r.n(o),g=r(101),u=r.n(g),b=r(182),h=r(113),j=(r(173),r(103)),p=r.n(j),m=r(1),C=function(e){var t=e.active,r=e.setActive,i=e.setCity,s=e.language,n=Object(l.c)((function(e){return e.citys[s]}));console.log(n);var _=Object(a.useState)(n),o=Object(c.a)(_,2),g=o[0],u=o[1],j=Object(b.a)().t,C=d.a.bind(p.a);return Object(m.jsx)("div",{className:C("modal-city",{active:t}),onClick:function(){r(!1)},children:Object(m.jsxs)("div",{className:C("modal-city__content"),onClick:function(e){return e.stopPropagation()},children:[Object(m.jsx)("label",{className:C("modal-city__label","modal-city__label_padding"),htmlFor:"modalCity__input",children:j("City.1")}),Object(m.jsx)("input",{className:C("modal-city__input"),id:"modalCity__input",type:"search",placeholder:j("City.2"),onChange:function(e){return function(e){var t=n.filter((function(t){var r=e.target.value.toLowerCase().trim();return!!t.toLowerCase().trim().startsWith(r)}));u(t)}(e)}}),Object(m.jsx)("ul",{className:C("modal-city__list"),children:Object(m.jsx)(h.a,{style:{height:"100%"},children:g.map((function(e){return Object(m.jsx)("li",{className:C("modal-city__item"),onClick:function(e){return function(e){i(e.target.innerText),r(!1)}(e)},children:e},e)}))})}),Object(m.jsxs)("svg",{className:C("modal-city__close"),onClick:function(){r(!1)},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(m.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(m.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})]})})},v=r(107),x=r.n(v),O=function(){var e=d.a.bind(x.a),t=Object(b.a)().t;return Object(m.jsxs)("ul",{className:e("burger__list"),children:[Object(m.jsx)("li",{className:e("burger__item"),children:Object(m.jsx)("a",{href:"#parking",children:t("Menu.1")})}),Object(m.jsx)("li",{className:e("burger__item"),children:Object(m.jsx)("a",{href:"#insurance",children:t("Menu.2")})}),Object(m.jsx)("li",{className:e("burger__item"),children:Object(m.jsx)("a",{href:"#petrol",children:t("Menu.3")})}),Object(m.jsx)("li",{className:e("burger__item"),children:Object(m.jsx)("a",{href:"#service",children:t("Menu.4")})})]})},k=r(108),y=r.n(k),f=r(109),N=r.n(f),w=function(){var e=d.a.bind(N.a);return Object(m.jsxs)("div",{className:e("burger__group-social-networks"),children:[Object(m.jsx)("a",{href:"#telegram",children:Object(m.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:Object(m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",fill:"white"})})}),Object(m.jsx)("a",{href:"#facebook",children:Object(m.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:Object(m.jsx)("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",fill:"white"})})}),Object(m.jsx)("a",{href:"#instagram",children:Object(m.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[Object(m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",fill:"white"}),Object(m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",fill:"white"}),Object(m.jsx)("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",fill:"white"})]})})]})},L=function(e){var t=e.active,r=e.setActive,a=e.setLenguage,i=e.language,s=d.a.bind(y.a);return Object(m.jsx)("div",{className:s("burger",{active:t}),onClick:function(){r(!1)},children:Object(m.jsxs)("div",{className:s("burger__content"),onClick:function(e){return e.stopPropagation()},children:[Object(m.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:s("burger__close"),onClick:function(){r(!1)},children:[Object(m.jsx)("path",{d:"M24 8L8 24",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M8 8L24 24",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(m.jsxs)("div",{className:s("burger__menu","burger__menu-magrin"),children:[Object(m.jsx)(O,{}),Object(m.jsx)(w,{})]}),Object(m.jsx)("div",{className:s("burger__language-wrap"),children:Object(m.jsx)("span",{href:"#",className:s("burger__language"),onClick:function(e){return a(e)},children:i})})]})})},M=r(110),S=r.n(M),P=r.p+"static/media/parking.9369f2aa.png",E=r.p+"static/media/insurance.ea68d8b3.png",R=r.p+"static/media/petrol.4e22dc96.png",Z=r.p+"static/media/service.be695f13.png",B=function(){var e=d.a.bind(S.a),t=Object(b.a)().t,r=[{image:Object(m.jsx)("img",{src:P,alt:"",className:e("slider__image","img")},P),header:Object(m.jsx)("h3",{className:e("slider__header"),children:t("Slider.1")}),text:Object(m.jsx)("p",{className:e("slider__description"),children:t("Slider.2")}),button:Object(m.jsx)("button",{className:e("slider__button","slider__button_margin","slider__button-parking"),children:Object(m.jsx)("span",{children:t("Slider.9")})})},{image:Object(m.jsx)("img",{src:E,alt:"",className:e("slider__image")},E),header:Object(m.jsx)("h3",{className:e("slider__header"),children:t("Slider.3")}),text:Object(m.jsx)("p",{className:e("slider__description"),children:t("Slider.4")}),button:Object(m.jsx)("button",{className:e("slider__button","slider__button_margin","slider__button-insurance"),children:t("Slider.9")})},{image:Object(m.jsx)("img",{src:R,alt:"",className:e("slider__image")},R),header:Object(m.jsx)("h3",{className:e("slider__header"),children:t("Slider.5")}),text:Object(m.jsx)("p",{className:e("slider__description"),children:t("Slider.6")}),button:Object(m.jsx)("button",{className:e("slider__button","slider__button_margin","slider__button-petrol"),children:t("Slider.9")})},{image:Object(m.jsx)("img",{src:Z,alt:"",className:e("slider__image")},Z),header:Object(m.jsx)("h3",{className:e("slider__header"),children:t("Slider.7")}),text:Object(m.jsx)("p",{className:e("slider__description"),children:t("Slider.8")}),button:Object(m.jsx)("button",{className:e("slider__button","slider__button_margin","slider__button-service"),children:t("Slider.9")})}],i=r.length-1,s=Object(a.useState)(0),n=Object(c.a)(s,2),_=n[0],l=n[1],o=Object(a.useState)(i),g=Object(c.a)(o,2),u=g[0],h=g[1],j=Object(a.useState)(1),p=Object(c.a)(j,2),C=p[0],v=p[1];return Object(m.jsxs)("div",{className:e("slider"),children:[Object(m.jsx)("div",{className:e("slider__slide-circle"),children:r.map((function(t,r){return Object(m.jsx)("div",{className:e("slider__circle",{"slider__circle-active":_===r}),onClick:function(e){return l(t=r),h(0!==t?t-1:i),void v(t!==i?t+1:0);var t}},r)}))}),Object(m.jsxs)("div",{className:e("slider__turn-over"),children:[Object(m.jsx)("div",{className:e("slider__slide-prev"),onClick:function(){return l(0!==_?_-1:i),h(0!==u?u-1:i),void v(0!==C?C-1:i)},children:Object(m.jsx)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",children:Object(m.jsx)("path",{d:"M9 1L1 10L9 19",stroke:"#EEEEEE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(m.jsx)("div",{className:e("slider__slide-next"),onClick:function(){return l(_!==i?_+1:0),h(u!==i?u+1:0),void v(C!==i?C+1:0)},children:Object(m.jsx)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",children:Object(m.jsx)("path",{d:"M1 1L9 10L1 19",stroke:"#EEEEEE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Object(m.jsxs)("div",{className:e("slider-img","slider-img-prev","slider-wrapper","slider-position-img"),children:[r[u].image,Object(m.jsxs)("div",{className:e("slider__group-description"),children:[r[u].header,r[u].text,r[u].button]})]},u),Object(m.jsxs)("div",{className:e("slider-img","wrapper","slider-position-img"),children:[r[_].image,Object(m.jsxs)("div",{className:e("slider__group-description"),children:[r[_].header,r[_].text,r[_].button]})]},_),Object(m.jsxs)("div",{className:e("slider-img","slider-img-next","slider-wrapper","slider-position-img"),children:[r[C].image,Object(m.jsxs)("div",{className:e("slider__group-description"),children:[r[C].header,r[C].text,r[C].button]})]},C)]})},V=Object(l.b)((function(e){return{}}),(function(e){return{changeLang:function(t){e({type:"language",payload:t})}}}))((function(e){var t=e.changeLang,r=Object(l.c)((function(e){return e})),i=r.citys,s=r.language,n=d.a.bind(u.a),_=Object(a.useState)(!1),o=Object(c.a)(_,2),g=o[0],h=o[1],j=Object(a.useState)("\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"),p=Object(c.a)(j,2),v=p[0],x=p[1],O=Object(a.useState)(!1),k=Object(c.a)(O,2),y=k[0],f=k[1],N=Object(b.a)(),w=N.t,M=N.i18n;function S(e){var r="\u0420\u0443\u0441",a="Eng",n=e.target.innerText,_=i[n].indexOf(v);switch(n){case a:t(r),x(i["\u0420\u0443\u0441"][_]);break;case r:t(a),x(i.Eng[_])}M.changeLanguage(n),console.log(s)}return Object(m.jsxs)("section",{className:n("start-page"),children:[Object(m.jsxs)("div",{className:n("start-page__wrap"),children:[Object(m.jsxs)("div",{className:n("start-page__menu"),children:[Object(m.jsx)("button",{id:"button-burger",className:n("button-burger"),onClick:function(){return f(!0)},type:"button",children:Object(m.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[Object(m.jsx)("path",{d:"M4 16H28",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:n("button-burger_color")}),Object(m.jsx)("path",{d:"M4 8H28",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:n("button-burger_color")}),Object(m.jsx)("path",{d:"M4 24H28",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:n("button-burger_color")})]})}),Object(m.jsx)("div",{className:n("start-page__language-wrap"),children:Object(m.jsx)("span",{href:"#",className:n("start-page__language"),onClick:function(e){return S(e)},children:s})})]}),Object(m.jsxs)("div",{className:n("start-page__reservation"),children:[Object(m.jsxs)("div",{className:n("start-page__header"),children:[Object(m.jsx)("h4",{className:n("start-page__heading-h4","start-page__heading-h4_padding"),children:"Need for drive"}),Object(m.jsxs)("div",{className:n("start-page__geolocation"),children:[Object(m.jsxs)("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",children:[Object(m.jsx)("path",{d:"M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z",stroke:"#999999",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(m.jsx)("path",{d:"M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z",stroke:"#999999",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(m.jsx)("span",{className:n("start-page__city","start-page__city_padding"),onClick:function(){return h(!0)},children:v})]})]}),Object(m.jsxs)("div",{className:n("start-page__main"),children:[Object(m.jsx)("h2",{className:n("start-page__heading-h2"),children:w("Carsharing.1")}),Object(m.jsx)("h1",{className:n("start-page__heading-h1"),children:"Need for drive"}),Object(m.jsx)("p",{className:n("start-page__description","start-page__description_padding"),children:w("Description.1")}),Object(m.jsx)("button",{className:n("button","start-page__button-reservation","start-page__button-reservation_padding","start-page__button-reservation_margin"),children:Object(m.jsx)("span",{children:w("Button.Reservation")})})]}),Object(m.jsxs)("div",{className:n("start-page__footer"),children:[Object(m.jsx)("span",{className:n("start-page__date-creation"),children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(m.jsx)("a",{href:"tel: 84952342244",className:n("start-page__link-tel"),children:"8 (495) 234-22-44"})]})]}),Object(m.jsx)(B,{})]}),Object(m.jsx)(C,{active:g,setActive:h,language:s,setCity:x}),Object(m.jsx)(L,{active:y,setActive:f,setLenguage:S,language:s})]})})),z=r(69),T=r(33);z.a.use(T.e).init({resources:{Eng:{translation:{Carsharing:{1:"Carsharing"},Description:{1:"Per-minute car rental in your city"},Button:{Reservation:"Reservation"},City:{1:"City",2:"Start typing an item ..."},Menu:{1:"PARKING",2:"INSURANCE",3:"PETROL",4:"SERVICE"},Slider:{1:"Free parking",2:"Leave your car in paid city parking lots and permitted places, without violating traffic rules, as well as at airports.",3:"Insurance",4:"Full car insurance",5:"Gasoline",6:"A full tank at any gas station in the city at our expense",7:"Service",8:"The car is undergoing weekly MOT",9:"More"}}},"\u0420\u0443\u0441":{translation:{Carsharing:{1:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"},Description:{1:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0432 \u0432\u0430\u0448\u0435\u043c \u0433\u043e\u0440\u043e\u0434\u0435"},Button:{Reservation:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},City:{1:"\u0413\u043e\u0440\u043e\u0434",2:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442 ..."},Menu:{1:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410",2:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410",3:"\u0411\u0415\u041d\u0417\u0418\u041d",4:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"},Slider:{1:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",2:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.",3:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",4:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",5:"\u0411\u0435\u043d\u0437\u0438\u043d",6:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442",7:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",8:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e",9:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}}}},fallbackLng:"\u0420\u0443\u0441",debug:!0,whitelist:["Eng","\u0420\u0443\u0441"],interpolation:{escapeValue:!1}});z.a;var K=function(){var e=Object(_.f)(),t=e.state&&e.state.background;return Object(m.jsx)(_.c,{location:t||e,children:Object(m.jsx)(_.a,{exact:!0,path:"/carsharing",children:Object(m.jsx)(V,{})})})},A=r(64),D=r(45),U=["\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c","\u0410\u0431\u0430\u043a\u0430\u043d","\u0410\u043d\u0430\u043f\u0430","\u0410\u0437\u043e\u0432","\u0410\u043d\u0433\u0430\u0440\u0441\u043a","\u0411\u0430\u0440\u043d\u0430\u0443\u043b","\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434","\u0411\u0430\u0442\u0430\u0439\u0441\u043a","\u0411\u0440\u044f\u043d\u0441\u043a","\u0411\u043e\u0440","\u0412\u043e\u0440\u043e\u043d\u0435\u0436","\u0412\u043e\u043b\u043e\u0433\u0434\u0430","\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434","\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a","\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440","\u0413\u0430\u0442\u0447\u0438\u043d\u0430","\u0413\u0435\u043e\u0440\u0433\u0438\u0435\u0432\u0441\u043a","\u0413\u0440\u043e\u0437\u043d\u044b\u0439","\u0413\u0443\u0431\u043a\u0438\u043d","\u0413\u0443\u043a\u043e\u0432\u043e","\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a","\u0414\u043c\u0438\u0442\u0440\u043e\u0432","\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439","\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e","\u0414\u0443\u0431\u043d\u0430","\u0415\u0432\u043f\u0430\u0442\u043e\u0440\u0438\u044f","\u0415\u0439\u0441\u043a","\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433","\u0415\u043b\u0435\u0446","\u0415\u0441\u0441\u0435\u043d\u0442\u0443\u043a\u0438","\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a","\u0416\u0438\u0433\u0443\u043b\u0435\u0432\u0441\u043a","\u0416\u0443\u043a\u043e\u0432\u0441\u043a\u0438\u0439","\u0417\u0430\u0440\u0435\u0447\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u043e\u0440\u0441\u043a","\u0417\u0435\u043b\u0435\u043d\u043e\u0434\u043e\u043b\u044c\u0441\u043a","\u0417\u043b\u0430\u0442\u043e\u0443\u0441\u0442","\u0418\u0432\u0430\u043d\u043e\u0432\u043e","\u0418\u0436\u0435\u0432\u0441\u043a","\u0418\u0440\u043a\u0443\u0442\u0441\u043a","\u0418\u0448\u0438\u043c","\u0418\u0448\u0438\u043c\u0431\u0430\u0439","\u0419\u043e\u0448\u043a\u0430\u0440-\u041e\u043b\u0430","\u041a\u0430\u0437\u0430\u043d\u044c","\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434","\u041a\u0430\u043b\u0443\u0433\u0430","\u041a\u043e\u0433\u0430\u043b\u044b\u043c","\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0430","\u041b\u0435\u043d\u0438\u043d\u043e\u0433\u043e\u0440\u0441\u043a","\u041b\u0435\u0441\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a","\u041b\u0438\u043f\u0435\u0446\u043a","\u041b\u0438\u0441\u043a\u0438","\u041b\u044e\u0431\u0435\u0440\u0446\u044b","\u041c\u0430\u0433\u0430\u0434\u0430\u043d","\u041c\u0430\u0433\u043d\u0438\u0442\u043e\u0433\u043e\u0440\u0441\u043a","\u041c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430","\u041c\u043e\u0441\u043a\u0432\u0430","\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a","\u041d\u0435\u0444\u0442\u0435\u044e\u0433\u0430\u043d\u0441\u043a","\u041d\u0438\u0436\u043d\u0435\u0432\u0430\u0440\u0442\u043e\u0432\u0441\u043a","\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a","\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a","\u041d\u043e\u044f\u0431\u0440\u044c\u0441\u043a","\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439","\u041e\u043c\u0441\u043a","\u041e\u0440\u0435\u043b","\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433","\u041e\u0440\u0441\u043a","\u041f\u0435\u043d\u0437\u0430","\u041f\u0435\u0440\u043c\u044c","\u041f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a","\u041f\u0440\u043e\u043a\u043e\u043f\u044c\u0435\u0432\u0441\u043a","\u041f\u0441\u043a\u043e\u0432","\u0420\u0435\u0432\u0434\u0430","\u0420\u0436\u0435\u0432","\u0420\u0443\u0431\u0446\u043e\u0432\u0441\u043a","\u0420\u044b\u0431\u0438\u043d\u0441\u043a","\u0420\u044f\u0437\u0430\u043d\u044c","\u0421\u0430\u043c\u0430\u0440\u0430","\u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c","\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a","\u0421\u043e\u0447\u0438","\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c","\u0422\u043e\u0431\u043e\u043b\u044c\u0441\u043a","\u0422\u0432\u0435\u0440\u044c","\u0422\u043e\u043c\u0441\u043a","\u0422\u0443\u043b\u0430","\u0422\u044e\u043c\u0435\u043d\u044c","\u0423\u0437\u043b\u043e\u0432\u0430\u044f","\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a","\u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043a","\u0423\u0444\u0430","\u0424\u0435\u043e\u0434\u043e\u0441\u0438\u044f","\u0424\u0440\u044f\u0437\u0438\u043d\u043e","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a","\u0425\u0430\u0441\u0430\u0432\u044e\u0440\u0442","\u0425\u0438\u043c\u043a\u0438","\u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b","\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a","\u0427\u0435\u0440\u0435\u043f\u043e\u0432\u0435\u0446","\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a","\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0441\u043a","\u0428\u0430\u0434\u0440\u0438\u043d\u0441\u043a","\u0428\u0430\u043b\u0438","\u0428\u0430\u0445\u0442\u044b","\u0428\u0443\u044f","\u0429\u0435\u043a\u0438\u043d\u043e","\u0429\u0435\u043b\u043a\u043e\u0432\u043e","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0442\u0430\u043b\u044c","\u042d\u043b\u0438\u0441\u0442\u0430","\u042d\u043d\u0433\u0435\u043b\u044c\u0441","\u042e\u0436\u043d\u043e-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a","\u042e\u0440\u0433\u0430","\u042f\u043a\u0443\u0442\u0441\u043a","\u042f\u043b\u0442\u0430","\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c"],W=["Astrakhan","Abakan","Anapa","Azov","Angarsk","Barnaul","Belgorod","Bataysk","Bryansk","Bor","Voronezh","Vologda","Volgograd","Vladivostok","Vladimir","Gatchina","Georgievsk","Grozny","Gubkin","Gukovo","Dzerzhinsk","Dmitrov","Dolgoprudny","Domodedovo","Dubna","Evpatoria","Yeisk","Yekaterinburg","Yelets","Essentuki","Zheleznogorsk","Zhigulevsk","Zhukovsky","Zarechny","Zelenogorsk","Zelenodolsk","Zlatoust","Ivanovo","Izhevsk","Irkutsk","Ishim","Ishimbay","Yoshkar-Ola","Kazan","Kaliningrad","Kaluga","Kogalym","Kostroma","Leninogorsk","Lesosibirsk","Lipetsk","Liski","Lyubertsy","Magadan","Magnitogorsk","Makhachkala","Moscow","Murmansk","Nefteyugansk","Nizhnevartovsk","Novosibirsk","Norilsk","Noyabrsk","Oktyabrsky","Omsk","Oryol","Orenburg","Orsk","Penza","Perm","Petrozavodsk","Prokopyevsk","Pskov","Revda","Rzhev","Rubtsovsk","Rybinsk","Ryazan","Samara","Sevastopol","Smolensk","Sochi","Stavropol","Tobolsk","Tver","Tomsk","Tula","Tyumen","Uzlovaya","Ulyanovsk","Ussuriysk","Ufa","Feodosia","Fryazino","Khabarovsk","Khanty-Mansiysk","Khasavyurt","Khimki","Cheboksary","Chelyabinsk","Cherepovets","Cherkessk","Chernogorsk","Shadrinsk","Shali","Mines","Shuya","Shchekino","Shchelkovo","Elektrostal","Elista","Engels","Yuzhno-Sakhalinsk","Yurga","Yakutsk","Yalta","Yaroslavl"],H=function(){return{Eng:U,"\u0420\u0443\u0441":W}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Eng",t=arguments.length>1?arguments[1]:void 0;return"language"===t.type?t.payload:e},F=Object(D.a)({citys:H,language:I}),G=Object(D.b)(F);n.a.render(Object(m.jsx)(l.a,{store:G,children:Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(A.a,{children:Object(m.jsx)(K,{})})})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.f1b8be9c.chunk.js.map