import Title from "./Title";
import { i18n as i18nInstance } from 'i18next';
// import i18next from 'i18next';
import { useTranslation } from "react-i18next";

type HeaderProps = {
    i18n: i18nInstance;
  };

// const Header = ({i18n}: HeaderProps) => {
const Header = () => {
    const { t, i18n } = useTranslation()
    
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    
    return (
        <div className="header-container">
            <Title />
            <div className="sub-title">
                {t("title")}
            </div>
            <div className="lang-select">
                <button onClick={() => {changeLanguage('en'); console.log(i18n.language)}}>English</button>
                <button onClick={() => {changeLanguage('jp'); console.log(i18n.language)}}>日本語</button>
            </div>
        </div>
    )
    
};

export default Header;
