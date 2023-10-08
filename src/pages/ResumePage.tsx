import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

const title: string = "CV";
const linkedinUrl: string = "https://www.linkedin.com/in/ryoji-hasegawa/";

const ResumePage = ({ pagesJson }: PageIndexType) => {
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <div className="resume">
                    My CV and other documents are on <a className="inline-link" target="_blank" rel="noreferrer" href={linkedinUrl}>my LinkedIn profile pages</a>. For Japanese documents, please send an email through the email address written on <a className="inline-link" target="_blank" rel="noreferrer" href={linkedinUrl}>the LinkedIn page</a>.
                </div>
                
            </div>
            <Footer />
        </div>
    )
};

export default ResumePage;
