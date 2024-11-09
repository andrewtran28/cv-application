import { useState } from 'react';
import PersonalForm from './components/FormPersonal';
import EducationForm from './components/FormEducation';
import ExperienceForm from './components/FormExperience';
import Resume from './components/Resume';
import example from './example';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const month = months[date.getMonth()];
const year = date.getFullYear();

function App() {
    const [resume, setResume] = useState(example);

    const handlePersonalChange = (e) => {
        setResume({ ...resume, [e.target.name]: e.target.value });
    }

    const handleExperienceChange = (e) => {
        const {name, value} = e.target;
        const index = parseInt(e.target.closest('li').dataset.key, 10);
        setResume(prevState => ({
            ...prevState,
            experience: prevState.experience.map((exp, i) => 
            i === index ? {...exp, [name]: value} : exp
            )
        }));
    }

    const addExperience = () => {
        const newExperience = {
            company: '',
            position: '',
            workLocation: '',
            startDate: month + " " + year,
            endDate: month + " " + year,
            responsibilities: '',
            expanded: true,
            id: crypto.randomUUID(),
        }

        setResume({...resume, experience: [...resume.experience, newExperience]});
    }

    const removeExperience = (index) => {
        setResume({...resume, experience: resume.experience.filter((exp, i) => i !== index)})
    }

    const expandExperience = (index) => (
        setResume(prevState => ({
            ...prevState,
            experience: prevState.experience.map((exp, i) => 
                i === index ? {...exp, expanded: !exp.expanded} : exp
            )
        }))
    )

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
            <ExperienceForm 
                experiences={resume.experience}
                onChange={handleExperienceChange}
                onAdd={addExperience}
                onRemove={removeExperience}
                onExpand={expandExperience}
            />
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