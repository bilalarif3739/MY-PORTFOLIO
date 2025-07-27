import React from "react";
import "./MyExperience.css";

const MyExperience = () => {
  return (
    <div className="ExperienceGrandParent">
      <div className="MyExperienceHeading">
        <h1>Professional Experience</h1>
        <p>
          My journey as a Front-end developer, building impactful solutions and
          growing with every project.
        </p>
      </div>
      <div className="ExperienceParent">
        <div className="TimelineContainer">
          {/* <div className="ExperienceCard">
            <div className="ExperienceCardContent">
              <h3>Full Stack Developer</h3>
              <p className="company">Freelance • Remote</p>
              <div className="dateTag">
                <span>2023 - Present</span>
              </div>
              <p className="description">
                Developing modern web applications using React.js, Node.js, and MySQL.
                Creating responsive designs with Tailwind CSS and implementing robust REST APIs
                for seamless user experiences.
              </p>
              <div className="techTags">
                <button>React.js</button>
                <button>Node.js</button>
                <button>MySQL</button>
                <button>Express.js</button>
              </div>
            </div>
            <div className="timelineConnector green"></div>
          </div> */}

          <div className="ExperienceCard">
            <div className="ExperienceCardContent">
              <h3>Junior Web Developer</h3>
              <p className="company">Develtro</p>
              <div className="dateTag blue">
                <span>2025 - Present</span>
              </div>
              <p className="description">
                Built responsive user interfaces using React.js and styled with
                Bootstrap and Tailwind CSS. Collaborated with backend teams to
                integrate REST APIs and ensure optimal performance across
                different devices.
              </p>
              <div className="techTags">
                <button>React.js</button>
                <button>Bootstrap</button>
                <button>REST APIs</button>
                <button>JavaScript</button>
              </div>
            </div>
            <div className="timelineConnector blue"></div>
          </div>

          <div className="ExperienceCard">
            <div className="ExperienceCardContent">
              <h3>Web Development Intern</h3>
              <p className="company">Commerce Kind</p>
              <div className="dateTag purple">
                <span>2024 - 2025</span>
              </div>
              <p className="description">
                Started my professional journey learning modern web development
                practices. Worked on various client projects using HTML, CSS,
                JavaScript, and gained experience with database management and
                version control.
              </p>
              <div className="techTags">
                <button>HTML/CSS</button>
                <button>JavaScript</button>
                <button>MySQL</button>
                <button>Git</button>
              </div>
            </div>
            <div className="timelineConnector purple"></div>
          </div>
        </div>
      </div>

      <div className="ExperienceStats">
        <div className="statItem">
          <h2>1+</h2>
          <p>Year Experience</p>
        </div>
        <div className="statItem">
          <h2>5+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="statItem">
          <h2>10+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="statItem">
          <h2>100%</h2>
          <p>Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
