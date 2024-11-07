import DynamicInput from './Input';

function EducationForm(resume, onChange) {
    return (<div className="education-form">
        <form>
            <DynamicInput 
                    label="School/Institution: "
                    type="text"
                    name="school"
                    value={resume.name}
                    onChange={onChange}
                    placeholder="Carleton University"
                />
                <br />

            <DynamicInput 
                label="Field of Study: "
                type="text"
                name="field"
                value={resume.name}
                onChange={onChange}
                placeholder="Electrical Engineering"
            />
            <br />

            <DynamicInput 
                label="Degree: "
                type="text"
                name="degree"
                value={resume.name}
                onChange={onChange}
                placeholder="B.Eng"
            />
            <br />

            <DynamicInput 
                label="Start Date: "
                type="date"
                name="start-date"
                value={resume.name}
                onChange={onChange}
            />
            
            <DynamicInput 
                label="End Date: "
                type="date"
                name="end-date"
                value={resume.name}
                onChange={onChange}
            />
            <br />

            <div className='btns-education'>
                <button className="btn-remove" onClick={() => onpointermove(index)}>Delete</button>
                <button className="btn-collapse">OK</button>
            </div>
        </form>
    </div>);
}

function addEducation() {

}

export default EducationForm;