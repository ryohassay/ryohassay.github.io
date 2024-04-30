import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// const title: string = "About Me";

const TopPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();

    useEffect(() => {
        if(lang === 'en') {
            i18n.changeLanguage('en');
        }
        else if(lang === 'ja') {
            i18n.changeLanguage('ja');
        }
        else {
            i18n.changeLanguage('en');
        }
    }, [lang, i18n]);
    
    return (
        <div className="page-container">
            <Header path="/"/>
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("topPage.title")}/>
            <div className="main">
                <div className="text">
                    {t("topPage.about")}
                </div>

                <div className="map">
                    <h3 className="map-title">{t("topPage.mapTitle")}</h3>
                    <div className="map-frame">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1CFD22bWuaEORwg8E8eDhYjD2pgz5xQM&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default TopPage;
