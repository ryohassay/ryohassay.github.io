import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import SkillCard from "../components/cards/SkillCard";
import CodingSkillCard from "../components/cards/CodingSkillCard";
import Footer from "../components/Footer";
import { SkillPageType } from "../types";

const title: string = "Skills";

const SkillPage = ({ pagesJson, codingSkillsJson }: SkillPageType) => {



    
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <CodingSkillCard codingSkillsJson={codingSkillsJson} />

                <SkillCard 
                    titleText="Languages" 
                    skills={[
                        {skillText: "Japanese", subText: "native"},
                        {skillText: "English", subText: "advanced"},
                        {skillText: "Mandarin", subText: "intermediate"}, 
                        {skillText: "Korean", subText: "beginner"}, 
                        {skillText: "Cantonese", subText: "absolute beginner"}, 
                        {skillText: "Malay / Indonesian", subText: "absolute beginner"}, 
                    ]}        
                />

                <SkillCard 
                    titleText="Soft skills" 
                    skills={[
                        {skillText: "Logical thinking", subText: ""},
                        {skillText: "Thought transcription", subText: ""},
                        {skillText: "Teamwork", subText: ""}, 
                        {skillText: "Idea conceiving", subText: ""},
                    ]}        
                />
            </div>
            <Footer />
        </div>
    )
};

export default SkillPage;
