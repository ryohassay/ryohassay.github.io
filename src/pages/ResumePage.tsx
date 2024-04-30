import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation, Trans } from 'react-i18next';

const title: string = "CV";
const linkedinUrl: string = "https://www.linkedin.com/in/ryoji-hasegawa/";

const ResumePage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/resume" />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("resumePage.title")}/>
            <div className="main">
                <div className="resume">
                <Trans
                    i18nKey="resumePage.text"
                    components={{ l: <a className="inline-link" target="_blank" rel="noreferrer" href={linkedinUrl}>my LinkedIn profile pages</a> }}
                />
                </div>
                
            </div>
            <Footer />
        </div>
    )
};

export default ResumePage;
