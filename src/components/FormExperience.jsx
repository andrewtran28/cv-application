import DynamicInput from './Input'

function ExperienceForm({ experiences, onChange, onAdd, onRemove, onExpand }) {
    const experienceArr = experiences.map((experience) => {
        const index = experiences.indexOf(experience);

        if (experience.expanded) {
            return (
                <div className="form">
                    <li key={index} data-key={index} className="expanded">
                        <form action="">
                            <DynamicInput 
                                label="Company"
                                type="text"
                                name="company"
                                value={experience.company}
                                onChange={onChange}
                            />
                            <br />

                            <DynamicInput 
                                label="Position/Title"
                                type="text"
                                name="position"
                                value={experience.position}
                                onChange={onChange}
                            />
                            <br />

                            <DynamicInput 
                                label="Location"
                                type="text"
                                name="workLocation"
                                value={experience.workLocation}
                                onChange={onChange}
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
                                <button className="btn-remove" onClick={() => onRemove(index)}>Delete</button>
                                <button className="btn-collapse" onClick={() => onExpand(index)}>▲</button>
                        </form>
                    </li>
                </div>
            )
        } else {
            return (
                <div className="form">
                    <div className="collapse-title">{experience.company} <br/></div>
                    <div className="collapse-subtitle">{experience.position}</div>
                    <button className="btn-expand" onClick={() => onExpand(index)}>▼</button>
                </div>
            )
        }
    });

    return (
        <div className="form-experience">
            <h2>Professional Experience</h2>
            <ul>{experienceArr}</ul>
            <div className="btn-add"><button onClick={onAdd}>+ Add Experience</button></div>
            <br />
            <hr />
        </div>
    );
}

export default ExperienceForm;