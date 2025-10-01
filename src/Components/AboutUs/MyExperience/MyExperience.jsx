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
    <h3>Associate Web Developer</h3>
    <p className="company">Develtro</p>
    <div className="dateTag blue">
      <span>Jul 2025 - Present</span>
    </div>
    <p className="description">
      Contributed to a SaaS task management app by implementing new features, 
      integrating APIs, and ensuring responsive, user-friendly design. 
      Collaborated on multiple dynamic websites using React.js, Next.js, 
      TypeScript, and Tailwind CSS while following modern workflows and 
      best practices.
    </p>
    <div className="techTags">
      <button>React.js</button>
      <button>Next.js</button>
      <button>TypeScript</button>
      <button>Tailwind CSS</button>
      <button>API Integration</button>
    </div>
  </div>
  <div className="timelineConnector blue"></div>
</div>

<div className="ExperienceCard">
  <div className="ExperienceCardContent">
    <h3>Web Development Intern</h3>
    <p className="company">Commerce Kind</p>
    <div className="dateTag purple">
      <span>Mar 2025 - Jun 2025</span>
    </div>
    <p className="description">
      Developed the Commerce Kind website using React.js with a clean, 
      props-driven architecture. Created a global styling system with CSS 
      variables, integrated EmailJS for form submissions, and embedded Google 
      Maps API for accessibility. Improved performance through Lazy Loading 
      and React Suspense.
    </p>
    <div className="techTags">
      <button>React.js</button>
      <button>CSS</button>
      <button>EmailJS</button>
      <button>Google Maps API</button>
      <button>Performance Optimization</button>
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
          <h2>15+</h2>
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
