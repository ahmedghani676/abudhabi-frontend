import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import './i18n'
// import i18n from "i18next";
// import Backend from 'i18next-http-backend';
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector'; 
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// i18n
//   .use(initReactI18next) 
//   // passes i18n down to react-i18next
//    .use(LanguageDetector)
//   .use(Backend)
//   .init({
//     supportedLngs:['en','fr'],
    
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
   
//     // lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",
//     detection:{
//        order:['cookie' ,'htmlTag', 'localStorage',
//       'path','subdomain'],
//       caches:[
//         'cookie'
//       ]
//     },
//     backend:{
//       loadpath:'/asstes/locales/{{lng}}/translation.json',
//     },
//     react:{
//           useSuspense:false,
//     },
//     interpolation: {
//       escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     }
//   });


// function App() {
//   const { t } = useTranslation();
//   return <h2>{t('welcome_to_react')}</h2>;   
// }
ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
