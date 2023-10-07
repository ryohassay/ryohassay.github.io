import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import SkillCard from "../components/cards/SkillCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

const title: string = "Skills";

const SkillPage = ({ pagesJson }: PageIndexType) => {
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <SkillCard 
                    titleText="Coding" 
                    skills={[
                        {skillText: "Python", subText: ""}, 
                        {skillText: "C/C++", subText: ""}, 
                        {skillText: "Java", subText: "beginner"}, 
                        {skillText: "HTML / CSS / JavaScript", subText: "beginner"}, 
                        {skillText: "React", subText: "beginner"}, 
                        {skillText: "Selenium", subText: "beginner"}, 
                        {skillText: "OpenCV", subText: ""}, 
                        {skillText: "PyTorch", subText: "beginner"}, 
                    ]}        
                />

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
