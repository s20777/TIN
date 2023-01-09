import React from "react";
import {Link} from "react-router-dom";
import { withTranslation } from "react-i18next";

class Navigation extends React.Component {
     handleLanguageChange = (lang) => {
        const { i18n } = this.props
         i18n.changeLanguage(lang, (err, t) => {
             if (err) return console.log("sth went wrong loading", err)
         });
    }

    render () {
        const { t } = this.props

        return (
            <nav>
                <ul>
                    <li><Link to="/">{t('nav.main-page')}</Link></li>
                    <li><Link to="/employees">{t('nav.employees')}</Link></li>
                    <li><Link to="/departments">{t('nav.departments')}</Link></li>
                    <li><Link to="/employments">{t('nav.employments')}</Link></li>
                    <li className='lang'><button onClick={() => {this.handleLanguageChange('pl') }}>PL</button></li>
                    <li><button onClick={() => {this.handleLanguageChange('en') }}>EN</button></li>
                </ul>
            </nav>
        )

    }

}

export default withTranslation() (Navigation)