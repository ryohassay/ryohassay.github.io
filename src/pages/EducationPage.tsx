import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Education";

const EducationPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <Card 
                    titleText="The University of Nottingham Malaysia | Selangor, Malaysia" 
                    subText="BEng (Hons) in Electrical and Electronic Engineering (graduating)"
                    from={new Date('2022-9-1')}
                    to={new Date('2024-3-1')}
                    detailText="I learnt about transistors, motor mechanisms, assembly language and computer vision. For my graduation research, I worked on a project that used Raspberry Pi, Python, OpenCV, and PyTorch to count the number of people in a crowd from camera images using deep learning techniques and display them in a web application. &#13;
                    &#13;
                    I participated in the badminton team on campus and a kyudo club off campus, too." 
                />

                <Card 
                    titleText="The University of Nottingham Ningbo China | Zhejiang, China" 
                    subText="BEng (Hons) in Electrical and Electronic Engineering (completed the second and third years)"
                    from={new Date('2019-9-1')}
                    to={new Date('2022-5-1')}
                    detailText="I worked on a project to create a robotic car using a microcomputer to control motors and sensors, learning to build hardware components and code. &#13;
                    &#13;
                    I also participated in the badminton club and ultimate frisbee club on campus." 
                />

                <Card 
                    titleText="DePauw University | Indiana, US" 
                    subText="BA in Physics (completed the first and second years)"
                    from={new Date('2017-8-1')}
                    to={new Date('2019-5-1')}
                    detailText="Taking advantage of being in a liberal arts college, I studied a wide range of academic disciplines, including economics, sociology, psychology and philosophy of science, without being restricted to my major. In particular, in the sociology class, I learnt about economic inequality and the mechanisms of racial discrimination by reading texts and discussing them in class. Through classes and daily life, I acquired English language skills, culture and logical thinking skills." 
                />

                <Card 
                    titleText="Makuhari Junior and Senior High School | Chiba, Japan" 
                    subText="High school diploma"
                    from={new Date('2011-4-1')}
                    to={new Date('2017-3-1')}
                    detailText="I wrote a graduation thesis on the theme of 'the Locational Concentration of Nuclear Power Plants in Japan', and gained an award. &#13;
                    &#13;
                    I also lead the school badminton team as its vice-captain." 
                />
            </div>
            <Footer />
        </div>
    )
};

export default EducationPage;
