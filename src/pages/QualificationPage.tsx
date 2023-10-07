import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import QualificationCard from "../components/cards/QualificationCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

const title: string = "Qualifications";

const QualificationPage = ({ pagesJson }: PageIndexType) => {
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <QualificationCard 
                    titleText="IELTS Academic Module 7.5" 
                    time={new Date('2022-7-31')}
                />

                <QualificationCard 
                    titleText="HSK Level 5: score of 225 / 300 (no pass / fail)" 
                    time={new Date('2021-4-10')}
                />

                <QualificationCard 
                    titleText="HSK Level 3: pass with a score of 300 / 300" 
                    time={new Date('2016-10-16')}
                />

                <QualificationCard 
                    titleText="HackerRank 4 Stars on the C++ Badge" 
                    time={new Date('2022-6-17')}
                />
            </div>
            <Footer />
        </div>
    )
};

export default QualificationPage;
