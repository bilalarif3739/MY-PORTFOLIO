import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

function Skills() {
  return (
    <div className="SkillsGrandParent">
      <div className="MySkillsHeading">
        <h1>Skills & Technologies</h1>
        <p>
          Front End developer with expertise in modern web technologies, from
          beautiful frontends to robust backend systems.
        </p>
      </div>
      <div className="SkillsParent">
        <div className="SkillNO1 card-hover">
          <div className="skillUpper">
            <FontAwesomeIcon icon={faCode} className="icon blue" />
            <h4>Frontend Development</h4>
            <p>Building interactive user interfaces</p>
          </div>
          <div className="skillMiddle">
            <div className="skillMiddleLeft">
              <button>React.Js</button>
              <button>JavaScript (Es6+)</button>
              <button>Bootstrap</button>
            </div>
            <div className="skillMiddleRight">
              <button>HTML5 & CSS3</button>
              <button>Tailwind CSS</button>
              <button>Responsive Design</button>
            </div>
          </div>
        </div>
        <div className="SkillNO2 card-hover">
          <div className="skillUpper">
            <FontAwesomeIcon icon={faDatabase} className="icon green" />
            <h4>Backend Development</h4>
            <p>Server-side logic and database management</p>
          </div>
          <div className="skillMiddle">
            <div className="skillMiddleLeft">
              <button>Node.Js</button>
              <button>REST APIs</button>
              <button>API Integration</button>
            </div>
            <div className="skillMiddleRight">
              <button>Express.js</button>
              <button>MySQL</button>
              <button>Server Architecture</button>
            </div>
          </div>
        </div>
        <div className="SkillNO3 card-hover">
          <div className="skillUpper">
            <FontAwesomeIcon icon={faGlobe} className="icon purple" />
            <h4>Full Stack Integration</h4>
            <p>End-to-end application development</p>
          </div>
          <div className="skillMiddle">
            <div className="skillMiddleLeft">
              <button>MERN Stack</button>
              <button>Authentication</button>
              <button>Version Control (Git)</button>
            </div>
            <div className="skillMiddleRight">
              <button>Database Design</button>
              <button>State Management</button>
              <button>Deployment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
