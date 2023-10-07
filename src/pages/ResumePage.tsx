import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

const title: string = "CV";

const ResumePage = ({ pagesJson }: PageIndexType) => {
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            {/* Fix this */}
            <div className="main">
                <a href="%PUBLIC_URL%/profile_jp.pdf">Profile document (in Japanese)</a>
            </div>
            <Footer />
        </div>
    )
};

export default ResumePage;
