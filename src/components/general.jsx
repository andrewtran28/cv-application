import DynamicInput from './Input'

function GeneralForm ({ resume, onChange }) {
    return (<div className="general-form">
        <form action="">

            <DynamicInput 
                label="First Name: "
                type="text"
                name="firstName"
                value={resume.name}
                onChange={onChange}
                placeholder="Hung"
            />
            <br />

            <DynamicInput 
                label="Last Name: "
                type="text"
                name="lastName"
                value={resume.name}
                onChange={onChange}
                placeholder="Lo"
            />
            <br />

            <DynamicInput 
                label="E-Mail: "
                type="email"
                name="email"
                value={resume.name}
                onChange={onChange}
                placeholder="email@address.com"
            />
            <br />

            <DynamicInput 
                label="Phone: "
                type="phone"
                name="phone"
                value={resume.name}
                onChange={onChange}
                placeholder="555-5555"
            />
            <br />

            <DynamicInput 
                label="Objective: "
                type="textarea"
                name="objective"
                value={resume.name}
                onChange={onChange}
                placeholder=""
            />
            <br />
        </form>

    </div>);
}

export default GeneralForm;