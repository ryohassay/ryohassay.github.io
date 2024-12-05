import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import QualificationCard from "../components/cards/QualificationCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from "react-i18next";

const QualificationPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/qualification" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("qualificationPage.title")} />
            <div className="main">
                <QualificationCard 
                    titleText={t("qualificationPage.cards.0.title")}
                    time={new Date('2022-7-31')}
                />

                <QualificationCard 
                    titleText={t("qualificationPage.cards.1.title")}
                    time={new Date('2021-4-10')}
                />

                <QualificationCard 
                    titleText={t("qualificationPage.cards.2.title")}
                    time={new Date('2016-10-16')}
                />

                <QualificationCard 
                    titleText={t("qualificationPage.cards.3.title")}
                    time={new Date('2022-6-17')}
                />

                <QualificationCard 
                    titleText={t("qualificationPage.cards.4.title")}
                    time={new Date('2024-11-21')}
                />
            </div>
            <Footer />
        </div>
    )
};

export default QualificationPage;
