import Title from "./Title";

// import { i18n as i18nInstance } from 'i18next';
// import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

type HeaderPropsType = {
    path: string;
};

const Header = ({ path }: HeaderPropsType) => {
    const { t, i18n } = useTranslation()
    
    // const changeLanguage = (lang: string) => {
    //     i18n.changeLanguage(lang);
    // }
    
    return (
        <div className="header-container">
            <Title />
            <div className="sub-title">
                {t("title")}
            </div>
            <div className="lang-select">
                <Link to={"/en" + path}>
                    <button type="button" onClick={() => i18n.changeLanguage("en")} className="lang-button">
                        English
                    </button>
                </Link>
                <Link to={"/ja" + path}>
                    <button type="button" onClick={() => i18n.changeLanguage("ja")} className="lang-button">
                        日本語
                    </button>
                </Link>
            </div>
        </div>
    )
    
};

export default Header;
