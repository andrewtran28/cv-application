import { useState } from 'react';

function EducationForm() {
    const [school, setSchool] = useState("");
    const [field, setField] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("");

    const handleSchool = (e) => {
        setSchool(e.target.value);
    }

    const handleField = (e) => {
        setField(e.target.value);
    }

    const handleDegree = (e) => {
        setDegree(e.target.value);
    }

    const handleYear = (e) => {
        setYear(e.target.value);
    }

    const addEducation = () => {

    }

    return (<div className="educationForm">
        <label for="school">School/Institution:{' '}</label>
        <input type="text" id="firstName" value={school} onChange={handleSchool} placeholder="College University" />
    </div>);
}

function EducationSection() {
    
}

export default EducationForm;