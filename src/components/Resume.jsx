function Resume({ resume }) {
    const formatDate = (date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        console.log(date);
        if (typeof date === 'undefined'){
            return;
        } else if (isNaN(date.charAt(0))){
            return date;
        } else {
            const monthDate = date.slice(5, 7);
            console.log(monthDate);
            const yearDate = date.slice(0,4);

            return months[monthDate-1] + " " + yearDate;
        }

    }

    const bulletPoints = (text) => {
        let bullets = text.split("*");
        // *The Dog *The Cat *Banana
        return bullets.forEach((bullet) => console.log(bullet));
    }

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

            <section className="resume-experience">
                <h2>Professional Experience</h2>

                <div className="experience">
                    <div className="company"><strong>{resume.company}</strong></div>
                    <span><em>{resume.position}</em></span>
                    <div className="date-location">
                            {formatDate(resume.startDate)} - {formatDate(resume.endDate)}<br />
                            {resume.workLocation}
                    </div>
                    <div className="responsibilities">{resume.responsibilities}</div>
                </div>
            </section>
            <br />
            <hr />

            <section className="resume-education">
                <h2>Education</h2>

                <div className="education">
                    <div className="school"><strong>{resume.school}</strong></div>
                    <span><em>{resume.degree}, {resume.field}</em></span> <br />
                        <div className="date-location">
                            {formatDate(resume.graduationDate)}<br />
                            {resume.schoolLocation}
                        </div>
                </div>
            </section>
            <br />
            <hr />
            <br />
        </div>
    )

}

export default Resume;