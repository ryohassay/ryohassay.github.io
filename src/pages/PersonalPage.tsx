import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import PersonalCard from "../components/cards/PersonalCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

const title: string = "Personal Interests";

const PersonalPage = ({ pagesJson }: PageIndexType) => {
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <PersonalCard 
                    titleText="Badminton" 
                    detailText="I started playing badminton when I was in middle school. Since then I've been playing it for more than 10 years, but still I suck at it."
                    
                />
                <PersonalCard 
                    titleText="Kyudo (Japanese archery)" 
                    detailText="I was in the kyudo club at middle school. I didn't do it for long, but I resumed it when I found a kyudo club in Kuala Lumpur."
                    
                />
            </div>
            <Footer />
        </div>
    )
};

export default PersonalPage;
