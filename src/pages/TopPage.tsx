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
                <div className="text">
                    I am an aspiring engineering student who prides myself on my careful work and efficiency. While studying electronics at university, I also have programming experience in C++, Python, and other languages and frameworks. I am interested in both hardware and software. 
                    
                    After graduating from high school in Japan, I have attended university in the US, China and Malaysia, so I am good at teamwork with people from different backgrounds and perspectives.
                </div>

                <div className="map">
                    <h3 className="map-title">Schools I Have Attended</h3>
                    <div className="map-frame">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1CFD22bWuaEORwg8E8eDhYjD2pgz5xQM&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default TopPage;
