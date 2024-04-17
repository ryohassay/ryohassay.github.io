import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import PersonalCard from "../components/cards/PersonalCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Personal Interests";

const PersonalPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header path="/personal" />
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

                <PersonalCard 
                    titleText="Learning languages" 
                    detailText="I'm learning Mandarin, Korean, Cantonese, and Malay (Indonesian). I started learning Mandarin in middle school, and since then my interests on learning new languages have never stopped. I started learning Korean and Cantonese as hobbies and Malay as I studied abroad in Malaysia although it wasn't quite necessary in my daily life. However, I think learning a local language is one of the ways to respect people there, so I continued learning it."
                />

                <PersonalCard 
                    titleText="Travelling" 
                    detailText="Although I'm poor, I like travelling especially abroad. So far, I've been to New Zealand, Singapore (twice), China (twice), Taiwan, the US, Hong Kong (five times), Malaysia, and Macau (twice)."
                />
            </div>
            <Footer />
        </div>
    )
};

export default PersonalPage;
