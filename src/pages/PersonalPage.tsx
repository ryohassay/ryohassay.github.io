import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import PersonalCard from "../components/cards/PersonalCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const PersonalPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();

    const jsonKeys = [];
    for(let i = 0; i < 4; i++){
        jsonKeys.push({
            title: "personalPage.cards." + i + ".title",
            detail: "personalPage.cards." + i + ".detail"
        });
    }
    
    return (
        <div className="page-container">
            <Header path="/personal" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("personalPage.title")} />
            <div className="main">
                {jsonKeys.map((key, i) => 
                    <PersonalCard 
                        key={i}
                        titleText={t(key.title)}
                        detailText={t(key.detail)}
                    />
                )}
            </div>
            <Footer />
        </div>
    )
};

export default PersonalPage;
