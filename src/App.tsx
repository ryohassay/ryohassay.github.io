import { Route, Routes, BrowserRouter } from 'react-router-dom'
import TopPage from './pages/TopPage';
import EducationPage from './pages/EducationPage'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'
import SkillPage from './pages/SkillPage'
import QualificationPage from './pages/QualificationPage'
import PersonalPage from './pages/PersonalPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import pagesJson from "./pages.json";
import codingSkillsJson from './logos.json';
import './App.css';

function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<TopPage pagesJson={pagesJson} />} />
        //         <Route path='education' element={<EducationPage pagesJson={pagesJson} />} />
        //         <Route path='work' element={<WorkPage pagesJson={pagesJson} />} />
        //         <Route path='project' element={<ProjectPage pagesJson={pagesJson} />} />
        //         <Route path='skill' element={<SkillPage pagesJson={pagesJson} codingSkillsJson={codingSkillsJson}/>} />
        //         <Route path='qualification' element={<QualificationPage pagesJson={pagesJson} />} />
        //         <Route path='personal' element={<PersonalPage pagesJson={pagesJson} />} />
        //         <Route path='resume' element={<ResumePage pagesJson={pagesJson} />} />
        //         <Route path='contact' element={<ContactPage pagesJson={pagesJson} />} />
        //     </Routes>
        // </BrowserRouter>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TopPage pagesJson={pagesJson} />} />
                <Route path='/:lang' element={<TopPage pagesJson={pagesJson} />} />
                <Route path='/:lang/education' element={<EducationPage pagesJson={pagesJson} />} />
                <Route path='/:lang/work' element={<WorkPage pagesJson={pagesJson} />} />
                <Route path='/:lang/project' element={<ProjectPage pagesJson={pagesJson} />} />
                <Route path='/:lang/skill' element={<SkillPage pagesJson={pagesJson} codingSkillsJson={codingSkillsJson}/>} />
                <Route path='/:lang/qualification' element={<QualificationPage pagesJson={pagesJson} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
