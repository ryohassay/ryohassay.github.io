import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Education";

const EducationPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/education" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("educationPage.title")}/>
            <div className="main">
                <Card 
                    titleText={t("educationPage.card4.title")} 
                    subText={t("educationPage.card4.sub")}
                    from={new Date('2011-4-1')}
                    to={new Date('2017-3-1')}
                    detailText={t("educationPage.card4.detail")} 
                />

                <Card 
                    titleText={t("educationPage.card3.title")} 
                    subText={t("educationPage.card3.sub")}
                    from={new Date('2017-8-1')}
                    to={new Date('2019-5-1')}
                    detailText={t("educationPage.card3.detail")}
                />

                <Card 
                    titleText={t("educationPage.card2.title")} 
                    subText={t("educationPage.card2.sub")}
                    from={new Date('2019-9-1')}
                    to={new Date('2022-5-1')}
                    detailText={t("educationPage.card2.detail")}
                />

                <Card 
                    titleText={t("educationPage.card1.title")} 
                    subText={t("educationPage.card1.sub")}
                    from={new Date('2022-9-1')}
                    to={new Date('2024-3-1')}
                    detailText={t("educationPage.card1.detail")}
                />
            </div>
            <Footer />
        </div>
    )
};

export default EducationPage;
