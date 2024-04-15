import Header from "../components/Header";
import PageIndex from "../components/PageIndex";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { PageIndexType } from "../types";

import { useTranslation } from 'react-i18next';

const title: string = "Work Experience";

const WorkPage = ({ pagesJson }: PageIndexType) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div className="page-container">
            <Header />
            <PageIndex pagesJson={pagesJson} />
            <PageTitle pageTitle={title}/>
            <div className="main">
                <Card 
                    titleText="Morpho, Inc. | Tokyo, Japan" 
                    subText="Image Processing Intern"
                    from={new Date('2020-12-1')}
                    to={new Date('2022-4-1')}
                    detailText="I worked on a project that tracks and names mumbers in a music video of BTS, one of the most popular K-pop artists, using deep learning. In this project, I utilized Python, OpenCV, and PyTorch." 
                />

                <Card 
                    titleText="Information Technology Associates Program | Indiana, US"
                    subText="Associate (Biomedical Imaging and Visualization Intern)"
                    from={new Date('2017-9-1')}
                    to={new Date('2019-5-1')}
                    detailText="I coloured microscopic pictures of fish hearts to visualize vessels, cells, and other organs digitally, using a digital visualization software, Amira. I was fortumnate to be able to participate in biology conferences (including an international one) as a lab worker. 
                    
                    Before being an associate, I worked as an apprentice under intern hosts on campus for six weeks for each to learn IT skills.
                    In this job rotation, I had a chance to create a music piece using an audio-editing software and Simulate teaching a PDF-editing software, following the ADDIE model, an instructional design."
                />

                <Card 
                    titleText="MasterProgress, Inc. | Tokyo, Japan"
                    subText="Data Managing Clerk"
                    from={new Date('2018-7-1')}
                    to={new Date('2018-8-1')}
                    detailText="I arranged data that the sales staff uses by using Google Ads, Yahoo Promotional Ads, Excel functions, macros and simple web browsing automation. I was given a discretion on how to work on the data, so I decided to quickly learn and use Excel VBA to make my work efficient."
                />
            </div>
            <Footer />
        </div>
    )
};

export default WorkPage;
