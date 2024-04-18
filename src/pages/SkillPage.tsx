import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import SkillCard from "../components/cards/SkillCard";
import CodingSkillCard from "../components/cards/CodingSkillCard";
import Footer from "../components/Footer";
import { SkillPageType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Skills";

const SkillPage = ({ pagesJson, codingSkillsJson }: SkillPageType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/skill" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("skillPage.title")}/>
            <div className="main">
                <CodingSkillCard codingSkillsJson={codingSkillsJson} />

                <SkillCard 
                    titleText={t("skillPage.cards.0.title")} 
                    skills={[
                        {skillText: t("skillPage.cards.0.skills.0.text"), subText: t("skillPage.cards.0.skills.0.subText")},
                        {skillText: t("skillPage.cards.0.skills.1.text"), subText: t("skillPage.cards.0.skills.1.subText")},
                        {skillText: t("skillPage.cards.0.skills.2.text"), subText: t("skillPage.cards.0.skills.2.subText")},
                        {skillText: t("skillPage.cards.0.skills.3.text"), subText: t("skillPage.cards.0.skills.3.subText")},
                        {skillText: t("skillPage.cards.0.skills.4.text"), subText: t("skillPage.cards.0.skills.4.subText")},
                        {skillText: t("skillPage.cards.0.skills.5.text"), subText: t("skillPage.cards.0.skills.5.subText")},
                    ]}        
                />

                <SkillCard 
                    titleText={t("skillPage.cards.1.title")} 
                    skills={[
                        {skillText: t("skillPage.cards.1.skills.0.text"), subText: t("skillPage.cards.1.skills.0.subText")},
                        {skillText: t("skillPage.cards.1.skills.1.text"), subText: t("skillPage.cards.1.skills.1.subText")},
                        {skillText: t("skillPage.cards.1.skills.2.text"), subText: t("skillPage.cards.1.skills.2.subText")},
                        {skillText: t("skillPage.cards.1.skills.3.text"), subText: t("skillPage.cards.1.skills.3.subText")},
                    ]}        
                />
            </div>
            <Footer />
        </div>
    )
};

export default SkillPage;
