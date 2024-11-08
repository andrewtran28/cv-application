import { useState } from 'react';
import PersonalForm from './components/FormPersonal';
import EducationForm from './components/FormEducation';
import ExperienceForm from './components/FormExperience';
import Resume from './components/Resume';
import example from './example';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function App() {
    const [resume, setResume] = useState(example);

    const handlePersonalChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }

    const handleExperienceChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }

    const handleEducationChange = (e) => {
        const {name, value } = e.target;
        const index = parseInt(e.target.closest('li').dataset.key, 10);
        setResume(prevState => ({
            ...prevState,
            education: prevState.education.map((edu, i) => 
                i === index ? {...edu, [name]: value } : edu
            )
        }));
    }

    const addEducation = () => {
        const date = new Date();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        const newEducation = {
            school: '',
            field: '',
            degree: '',
            graduationDate: month + " " + year,
            expanded: true,
            id: crypto.randomUUID(),
        }

        setResume({...resume, education: [...resume.education, newEducation]});
    }

    const removeEducation = (index) => {
        setResume({...resume, education: resume.education.filter((edu, i) => i !== index)})
    }

    const expandEducation = (index) => {
        setResume(prevState => ({
            ...prevState,
            education: prevState.education.map((edu, i) => 
                i === index ? {...edu, expanded: !edu.expanded} : edu
            )
        }));
    }

    return (<div className="web-layout">
        <div className="form-cont">
            <PersonalForm resume={resume} onChange={handlePersonalChange}/>
            <ExperienceForm resume={resume} onChange={handleExperienceChange}/>
            <EducationForm
                educations={resume.education}
                onChange={handleEducationChange}
                onAdd={addEducation} 
                onRemove={removeEducation}
                onExpand={expandEducation}
            />
        </div>
        
        <div className="resume-cont">
            <Resume resume={resume} />
        </div>
    </div>)
}

export default App;