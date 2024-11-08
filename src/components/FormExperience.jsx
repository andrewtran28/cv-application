import DynamicInput from './Input'

function ExperienceForm({ resume, onChange }) {
    return (<div className="form-experience">
        <h2>Professional Experience</h2>

        <form action="">
            <DynamicInput 
                label="Company"
                type="text"
                name="company"
                value={resume.name}
                onChange={onChange}
                placeholder="Company Name"
            />
            <br />

            <DynamicInput 
                label="Position/Title"
                type="text"
                name="position"
                value={resume.name}
                onChange={onChange}
                placeholder="Junior Web Developer"
            />
            <br />

            <DynamicInput 
                label="Location"
                type="text"
                name="workLocation"
                value={resume.name}
                onChange={onChange}
                placeholder="Vancouver, BC"
            />
            <br />

            <DynamicInput 
                label="Start Date"
                type="date"
                name="startDate"
                value={resume.name}
                onChange={onChange}
            />
            <br />
            
            <DynamicInput 
                label="End Date"
                type="date"
                name="endDate"
                value={resume.name}
                onChange={onChange}
            />
            <br />
            
            <DynamicInput 
                label="Responsibilities"
                type="textarea"
                name="responsibilities"
                value={resume.name}
                onChange={onChange}
                placeholder="Use * to create a • bullet point"
            />
            <br />                  
        </form>
    </div>);
}

export default ExperienceForm;