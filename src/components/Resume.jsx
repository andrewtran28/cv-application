function Resume({ resume }) {
    const formatDate = (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        if (typeof date === 'undefined'){
            return;
        } else if (isNaN(date.charAt(0))){
            return date;
        } else {
            const monthDate = date.slice(5, 7);
            const yearDate = date.slice(0,4);

            return months[monthDate-1] + " " + yearDate;
        }
    }

    const bulletPoints = (text) => {
        if (text === "") {
            return text;
        }

        return text.replace(/\*/g, "• ");
    }

    return (
        <div className="resume">
            <section className="resume-header">
                <h1>{resume.fullName}</h1>
                <div className='header-details'>
                    {resume.phone} | {resume.email} | {resume.location}
                </div>
                <p className="objective">{resume.objective}</p>
            </section>

            <section className="resume-experience">
                <hr />
                <h2>Professional Experience</h2>
                <ul>
                    {resume.experience.map((experience, index) => (
                        <li key={index}>
                            <div className="experience">
                                <div className="company"><strong>{experience.company}</strong></div>
                                <span><em>{experience.position}</em></span><br />
                                <div className="responsibilities">{bulletPoints(experience.responsibilities)}</div>
                                <div className="date-location">
                                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}<br />
                                    {experience.workLocation}
                                </div>
                            </div>
                            <br />
                        </li>
                    ))}
                </ul>
            </section>

            <section className="resume-education">
                <hr />
                <h2>Education</h2>
                <ul>
                    {resume.education.map((education, index) => (
                        <li key={index}>
                            <div className="education">
                                <div className="school"><strong>{education.school}</strong></div>
                                <span><em>{education.degree}</em></span><br />
                                    <div className="date-location">
                                        {formatDate(education.graduationDate)}<br />
                                        {education.schoolLocation}
                                    </div>
                            </div>
                            <br />
                        </li>
                    ))}
                </ul>
            </section>
            <hr />
        </div>
    )
}

export default Resume;