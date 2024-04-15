import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/cards/ProjectCard";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Projects";

const ProjectPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <ProjectCard 
                    titleText="Real-time Crowd Counting"
                    from={new Date('2022-9-1')}
                    to={new Date('2023-4-1')}
                    detailText="The crowdedness of the school cafeteria was inconvenient for many students and staff members. I worked on a project to count the number of crowds using deep learning techniques and display it on a web application so that it can encourage users to avoid most crowded times. For this project, I used Raspberry Pi, Python, OpenCV, and PyTorch."
                />

                <ProjectCard 
                    titleText="Face Tracking and Classification"
                    from={new Date('2020-12-1')}
                    to={new Date('2022-4-1')}
                    detailText="I worked on a project that tracks and names mumbers in a music video of BTS, one of the most popular K-pop artists, using deep learning. In this project, I utilized Python, OpenCV, and PyTorch. Through this project, I learnt basic deep learning theory and methods and improved my Python skills."
                />

                <ProjectCard 
                    titleText="Transit Interchange Search Web Application"
                    from={new Date('2022-1-1')}
                    to={new Date('2022-1-1')}
                    detailText="I created a web application that is convenient when you have multiple destinations and want to search all the routes and fares at once. I utilized HTML, CSS, JavaScript, and Python."
                />
            </div>
            <Footer />
        </div>
    )
};

export default ProjectPage;
