function Resume({ resume }) {
    return (
        <div className="resume">
            <div className="resume-header">
                <h1>{resume.firstName} {resume.lastName}</h1>
                <p className='header-details'>
                {resume.phone} | {resume.email}
                </p>
                <hr />
                <h2>Objective</h2>
                    <p>{resume.objective}</p>
                
            </div>
            <br />
        </div>
    )
}

export default Resume;