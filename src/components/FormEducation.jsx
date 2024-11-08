import DynamicInput from './Input';

function EducationForm({ educations, onChange, onAdd, onRemove, onExpand }) {
    const educationArr = educations.map((education) => {
        const index = educations.indexOf(education);
        
        if(education.expanded) {
            return(
                <li key={index} data-key={index} className="expanded">
                    <form action="">
                        <DynamicInput 
                            label="School/Institution"
                            type="text"
                            name="school"
                            value={education.school}
                            onChange={onChange}
                            placeholder="Carleton University"
                        />
                        <br />

                        <DynamicInput 
                            label="Degree"
                            type="text"
                            name="degree"
                            value={education.degree}
                            onChange={onChange}
                            placeholder="B.Eng"
                        />
                        <br />

                        <DynamicInput 
                            label="Field of Study"
                            type="text"
                            name="field"
                            value={education.field}
                            onChange={onChange}
                            placeholder="Electrical Engineering"
                        />
                        <br />

                        <DynamicInput 
                            label="Location"
                            type="text"
                            name="schoolLocation"
                            value={education.schoolLocation}
                            onChange={onChange}
                            placeholder="Toronto, ON"
                        />
                        <br />

                        <DynamicInput 
                            label="Graduation/Expected Date"
                            type="date"
                            name="graduationDate"
                            value={education.graduationDate}
                            onChange={onChange}
                        />
                        <br />

                        <div className='btns-education'>
                            <button className="btn-remove" onClick={() => onRemove(index)}>Delete</button>
                            <button className="btn-collapse" onClick={() => onExpand(index)}>OK</button>
                        </div>
                    </form>                    
                </li>
            )
        } else {
            return (<>
                <h4>
                    {education.school} <br/>
                    {education.degree}, {education.field}
                </h4>
                <button className="btn-expand" onClick={() => onExpand(index)}>
                    <span className="symbol-down">Down Arrow</span>
                </button>
            </>)
        }
    }); 

    return (
        <div className="form-education">
            <h2>Education</h2>
            <ul>{educationArr}</ul>
            <button onClick={onAdd}>Add Education</button>
        </div>
    );
}

export default EducationForm;