import { useState } from 'react';
import GeneralForm from './components/general';
import EducationForm from './components/education';
import Resume from './components/resume';

function App() {
    const [resume, setResume] = useState({firstName: "testFirst", lastName: "testLast", phone: "555-5555", email: "email@address.com", objective: "I want to be the very best. Like no one ever was."});

    function handleGeneralChange(e) {
        setResume({ ...resume, [e.target.name]: e.target.value });
      }

    return (<>
        <GeneralForm resume={resume} onChange={handleGeneralChange}/>

        <br />
        <EducationForm />

        <Resume resume = { resume } />
    </>)
}

export default App;