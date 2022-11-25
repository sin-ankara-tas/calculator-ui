import React from 'react';
import TRFlag from '../icons/turkey-flag-icon-32.png'
import USFlag from "../icons/united-states-of-america-flag-icon-32.png"
import { withTranslation } from "react-i18next"
import { changelanguage } from '../api/apiCalls';


const LanguageSelector = (props) => {

    const changeLang = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changelanguage(language);
    }


    changeLang('tr');
    
    return (

        <div className='Checkout'>
             <img src={TRFlag} alt="tr" onClick={() => changeLang('tr')} style={{ cursor: 'pointer' }} />
             <img src={USFlag} alt="en" onClick={() => changeLang('en')} style={{ cursor: 'pointer' }} />
        </div>
    );
};


export default withTranslation()(LanguageSelector);