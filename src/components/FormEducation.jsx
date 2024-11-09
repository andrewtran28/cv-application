import DynamicInput from './Input';

function EducationForm({ educations, onChange, onAdd, onRemove, onExpand }) {
    const educationArr = educations.map((education) => {
        const index = educations.indexOf(education);
        
        if(education.expanded) {
            return(
                <div className="form">
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
                                <button className="btn-remove" onClick={() => onRemove(index)}>Delete</button>
                                <button className="btn-collapse" onClick={() => onExpand(index)}>▲</button>
                        </form>                    
                    </li>
                </div>
            )
        } else {
            return (
                <div className="form">
                    <div className="collapse-title">{education.school} <br/></div>
                    <div className="collapse-subtitle">{education.degree}</div>
                    <button className="btn-expand" onClick={() => onExpand(index)}>▼</button>
                </div>)
        }
    }); 

    return (
        <div className="form-education">
            <h2>Education</h2>
            <ul>{educationArr}</ul>
            <div className="btn-add"><button onClick={onAdd}>+ Add Education</button></div>
        </div>
    );
}

export default EducationForm;