import DynamicInput from './Input'

function ExperienceForm({ experiences, onChange, onAdd, onRemove, onExpand }) {
    const experienceArr = experiences.map((experience) => {
        const index = experiences.indexOf(experience);

        if (experience.expanded) {
            return (
                <li key={index} data-key={index} className="expanded">
                    <form action="">
                        <DynamicInput 
                            label="Company"
                            type="text"
                            name="company"
                            value={experience.company}
                            onChange={onChange}
                            placeholder="Company Name"
                        />
                        <br />

                        <DynamicInput 
                            label="Position/Title"
                            type="text"
                            name="position"
                            value={experience.position}
                            onChange={onChange}
                            placeholder="Junior Web Developer"
                        />
                        <br />

                        <DynamicInput 
                            label="Location"
                            type="text"
                            name="workLocation"
                            value={experience.workLocation}
                            onChange={onChange}
                            placeholder="Vancouver, BC"
                        />
                        <br />

                        <DynamicInput 
                            label="Start Date"
                            type="date"
                            name="startDate"
                            value={experience.startDate}
                            onChange={onChange}
                        />
                        <br />
                        
                        <DynamicInput 
                            label="End Date"
                            type="date"
                            name="endDate"
                            value={experience.endDate}
                            onChange={onChange}
                        />
                        <br />
                        
                        <DynamicInput 
                            label="Responsibilities"
                            type="textarea"
                            name="responsibilities"
                            value={experience.responsibilities}
                            onChange={onChange}
                            placeholder="Use * to create a • bullet point"
                        />
                        <br />

                        <div className='btns-experience'>
                            <button className="btn-remove" onClick={() => onRemove(index)}>Delete</button>
                            <button className="btn-collapse" onClick={() => onExpand(index)}>OK</button>
                        </div>
                    </form>
                </li>
            )
        } else {
            return (<>
                <h4>
                    {experience.company} <br/>
                    {experience.position}
                </h4>
                <button className="btn-expand" onClick={() => onExpand(index)}>
                    <span className="symbol-down">Down Arrow</span>
                </button>
            </>)
        }
    });

    return (
        <div className="form-experience">
            <h2>Professional Experience</h2>
            <ul>{experienceArr}</ul>
            <button onClick={onAdd}>Add Experience</button>
        </div>
    );
}

export default ExperienceForm;