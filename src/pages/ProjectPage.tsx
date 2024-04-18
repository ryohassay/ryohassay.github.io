import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/cards/ProjectCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Projects";

const ProjectPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="page-container">
            <Header path="/project" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("projectPage.title")}/>
            <div className="main">
                <ProjectCard 
                    titleText={t("projectPage.cards.2.title")}
                    from={new Date('2022-9-1')}
                    to={new Date('2023-4-1')}
                    detailText={t("projectPage.cards.2.detail")}
                />

                <ProjectCard 
                    titleText={t("projectPage.cards.1.title")}
                    from={new Date('2020-12-1')}
                    to={new Date('2022-4-1')}
                    detailText={t("projectPage.cards.1.detail")}
                />

                <ProjectCard 
                    titleText={t("projectPage.cards.0.title")}
                    from={new Date('2022-1-1')}
                    to={new Date('2022-1-1')}
                    detailText={t("projectPage.cards.0.detail")}
                />
            </div>
            <Footer />
        </div>
    )
};

export default ProjectPage;
