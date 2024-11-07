import DynamicInput from './Input';

function EducationForm( {resume, onChange} ) {
    return (<div className="education-form">
        <h2>Education</h2>

        <form action="">
            <DynamicInput 
                label="School/Institution"
                type="text"
                name="school"
                value={resume.name}
                onChange={onChange}
                placeholder="Carleton University"
            />
            <br />

            <DynamicInput 
                label="Degree"
                type="text"
                name="degree"
                value={resume.name}
                onChange={onChange}
                placeholder="B.Eng"
            />
            <br />

            <DynamicInput 
                label="Field of Study"
                type="text"
                name="field"
                value={resume.name}
                onChange={onChange}
                placeholder="Electrical Engineering"
            />
            <br />

            <DynamicInput 
                label="Location"
                type="text"
                name="schoolLocation"
                value={resume.name}
                onChange={onChange}
                placeholder="Toronto, ON"
            />
            <br />

            <DynamicInput 
                label="Start Date"
                type="date"
                name="startDate"
                value={resume.name}
                onChange={onChange}
            />
            
            <DynamicInput 
                label="End Date"
                type="date"
                name="endDate"
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