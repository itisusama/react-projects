import "./css/style.css";

const About = () => {
    return(
        <>
        <section className="about">
        <div class="about__heading">
            <h3>About Me</h3>
        </div>

        <div className="about__image-and-info">
            <div className="about__info-image"><img src="images/profile.jpg" alt="profile" width="200"/></div>
            <div className="about__info-para">
                <p>
                    As a software engineer who graduated from the University of South Asia Lahore, my personality likely includes a strong analytical and problem-solving mindset, with a passion for technology and innovation. My education has equipped me with a broad range of technical skills, such as programming languages, software development, and computer science principles.
                    <br/><br/>
                    In addition, my personality may include traits such as attention to detail, perseverance, and a collaborative approach to working with others. I may have excellent communication skills, enabling me to explain technical concepts to non-technical stakeholders and work effectively as part of a team.
                    <br/><br/>
                    Overall, my education and experience as a software engineer suggest that I am a driven, intelligent, and creative individual with a talent for solving complex problems and developing innovative solutions.
                </p>
                <br/>
                <button className="bttn-stretch bttn-sm bttn-danger">Download CV</button>
            </div>
        </div>
    </section>
    </>
    );
}

export default About;