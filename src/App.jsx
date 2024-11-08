import { useState } from 'react';
import PersonalForm from './components/FormPersonal';
import EducationForm from './components/FormEducation';
import ExperienceForm from './components/FormExperience';
import Resume from './components/Resume';
import example from './example';

function App() {
    const [resume, setResume] = useState(example);

    const handlePersonalChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }

    const handleEducationChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }

    const handleExperienceChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }

    const addEducation = () => {
        const newEducation = {
            school: '',
            field: '',
            degree: '',
            startDate: '',
            expand: true,
            id: crypto.randomUUID(),
        }

        setResume({...resume, education: [...resume.education, newEducation]});
    }

    const removeEducation = () => {
        setResume({...resume, education: resume.education.filter((edu, index) => index !==index)});
    }

    return (<div className="web-layout">
        <div className="form-cont">
            <PersonalForm resume={resume} onChange={handlePersonalChange}/>
            <ExperienceForm resume={resume} onChange={handleExperienceChange}/>
            <EducationForm resume={resume} onChange={handleEducationChange}/>
        </div>
        
        <div className="resume-cont">
            <Resume resume={resume} />
        </div>
    </div>)
}

export default App;