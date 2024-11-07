function Resume({ resume }) {
    return (
        <div className="resume">
            <section className="resume-header">
                <h1>{resume.fullName}</h1>
                <div className='header-details'>
                {resume.phone} | {resume.email} | {resume.location}
                </div>
                <p>{resume.objective}</p>
            </section>
            <hr />
            <br />

            {/* <section className="resume-professional">

            </section> */}

            <section className="resume-education">
                <h2>Education</h2>
                <div className="education">
                    <div className="school"><strong>{resume.school}</strong></div>
                    <span><em>{resume.degree}, {resume.field}</em></span> <br />
                        <div className="education-dates">
                            {resume.startDate} - {resume.endDate} <br />
                            {resume.schoolLocation}
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Resume;