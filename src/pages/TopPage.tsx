import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

const title: string = "About Me";

const TopPage = ({ pagesJson }: PageIndexType) => {
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                I am an aspiring engineering student who prides myself on my careful work and efficiency. While studying electronics at university, I also have programming experience in C++, Python, and other languages and frameworks. I am interested in both hardware and software. 
                
                After graduating from high school in Japan, I have attended university in the US, China and Malaysia, so I am good at teamwork with people from different backgrounds and perspectives.
            </div>
            <Footer />
        </div>
    )
};

export default TopPage;
