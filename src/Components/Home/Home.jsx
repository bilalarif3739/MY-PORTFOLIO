import React from "react";
import { Link } from "react-router-dom";
// import "animate.css";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faArrowRight,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="HomeCompGrandParent">
      <div className="HomeCompParent">
        <div className="Opportunities slow-pulse">
          <div className="OpportunitiesIcon">
            <FontAwesomeIcon icon={faBolt} color="limegreen" />
          </div>
          <div className="OpportunitiesText">
            Available for new opportunities
          </div>
        </div>

        <div className="Name">
          <div className="FirstName">Hi, I'm</div>
          <div className="LastName">
            <Typewriter
              options={{
                strings: [
                  "Bilal Arif",
                  "a Web Developer",
                  "a React Js Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 80,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>

        <div className="FrontEnd">
          <h2>Frontend Developer & UI/UX Enthusiast</h2>
        </div>

        <div className="CraftPara">
          <p>
            I craft beautiful, responsive web experiences with modern
            technologies. Passionate about clean code, user-centered design, and
            bringing ideas to life through innovative digital solutions.
          </p>
        </div>

        <div className="HomeCompButtons">
          <Link to="/project" className="ViewMyWork">
            <span className="BtnText">View My Work</span>
            <span className="BtnIcon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>

          <Link to="/contact" className="LetsChat">
            <span className="BtnIcon">
              <FontAwesomeIcon icon={faCoffee} />
            </span>
            <span className="BtnText">Let's Chat</span>
          </Link>
        </div>

        <div className="HomeCompNumbers">
          <div className="Experience">
            <div className="No">1+</div>
            <div className="NoText">Years Experience</div>
          </div>
          <div className="ProjectBuilt">
            <div className="No">5+</div>
            <div className="NoText">Projects Built</div>
          </div>
          <div className="Client">
            <div className="No">100%</div>
            <div className="NoText">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
