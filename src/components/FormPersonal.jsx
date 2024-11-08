import DynamicInput from './Input'

function PersonalForm ({ resume, onChange }) {
    return (<div className="personal-form">
        <h2>Personal Info</h2>

        <form action="">
            <DynamicInput 
                label="Name"
                type="text"
                name="fullName"
                value={resume.name}
                onChange={onChange}
                placeholder="Hung Lo"
            />
            <br />

            <DynamicInput 
                label="E-Mail"
                type="email"
                name="email"
                value={resume.name}
                onChange={onChange}
                placeholder="email@address.com"
            />
            <br />

            <DynamicInput 
                label="Phone"
                type="phone"
                name="phone"
                value={resume.name}
                onChange={onChange}
                placeholder="555-5555"
            />
            <br />

            <DynamicInput 
                label="location"
                type="text"
                name="location"
                value={resume.name}
                onChange={onChange}
                placeholder="Ottawa, ON"
            />
            <br />

            <DynamicInput 
                label="Objective"
                type="textarea"
                name="objective"
                value={resume.name}
                onChange={onChange}
                placeholder=""
            />
        </form>
    </div>);
}

export default PersonalForm;