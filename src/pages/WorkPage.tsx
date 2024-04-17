import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Work Experience";

const WorkPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/work" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("workPage.title")}/>
            <div className="main">
                <Card 
                    titleText={t("workPage.card4.title")} 
                    subText={t("workPage.card4.sub")}
                    from={new Date('2024-4-1')}
                    to={new Date()}
                    detailText={t("workPage.card4.detail")} 
                />

                <Card 
                    titleText={t("workPage.card3.title")} 
                    subText={t("workPage.card3.sub")}
                    from={new Date('2020-12-1')}
                    to={new Date('2022-4-1')}
                    detailText={t("workPage.card3.detail")}
                />

                <Card 
                    titleText={t("workPage.card2.title")} 
                    subText={t("workPage.card2.sub")}
                    from={new Date('2017-9-1')}
                    to={new Date('2019-5-1')}
                    detailText={t("workPage.card2.detail")}
                />

                <Card 
                    titleText={t("workPage.card1.title")} 
                    subText={t("workPage.card1.sub")}
                    from={new Date('2018-7-1')}
                    to={new Date('2018-8-1')}
                    detailText={t("workPage.card1.detail")}
                />
            </div>
            <Footer />
        </div>
    )
};

export default WorkPage;
