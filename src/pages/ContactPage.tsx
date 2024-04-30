import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/cards/ContactCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from "react-i18next";

import LinkedInUrl from "../img/LinkedIn.png";
import WantedlyUrl from "../img/Wantedly.png";
import GitHubUrl from "../img/GitHub-mark.png";

const title: string = "Contact";

const ContactPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/contact"/>
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={t("contactPage.title")} />
            <div className="main">
                <h4>{t("contactPage.name")}</h4>
                <table className="service-table">
                    <tbody>
                        <ContactCard logoUrl={LinkedInUrl} serviceName="LinkedIn" address="https://www.linkedin.com/in/ryoji-hasegawa/"/>
                        <ContactCard logoUrl={WantedlyUrl} serviceName={t("contactPage.wantedly")} address="https://www.wantedly.com/id/ryoji_hasegawa"/>
                        <ContactCard logoUrl={GitHubUrl} serviceName="GitHub" address="https://github.com/ryohassay"/>
                    </tbody>
                    
                </table>
                
            </div>
            <Footer />
        </div>
    )
};

export default ContactPage;
