import { useState } from 'react';
import GeneralForm from './components/general';
import EducationForm from './components/education';
import Resume from './components/Resume';

function App() {
    const [resume, setResume] = useState({firstName: "testFirst", lastName: "testLast", phone: "555-5555", email: "email@address.com", objective: "I want to be the very best. Like no one ever was."});

    const handleGeneralChange = (e) => {
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

    return (<>
        <GeneralForm resume={resume} onChange={handleGeneralChange}/>
        <br />
        <EducationForm resume={resume} onChange={handleEducationChange}/>

        <Resume resume={resume} />
    </>)
}

export default App;