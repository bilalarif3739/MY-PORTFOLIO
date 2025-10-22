import React from "react";
import Profilepic from "../../../assets/pic1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMusic,
  faGamepad,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

import "./Story.css";

const Story = () => {
  return (
    <div className="StoryGrandParent">
      <div className="MyStoryHeading">
        <h1>About Me</h1>
        <p>
          A passionate developer crafting digital experiences with precision and
          creativity
        </p>
      </div>
      <div className="StoryParent">
        <div className="MyStorySection">
          <div className="StoryProfile">
            <div className="StoryProfilePicDiv">
              <img src={Profilepic} alt="Profile" className="profile-image" />
            </div>
            <div className="StoryProfileInfo">
              <h3>Muhammad Bilal Arif</h3>
              <p>Frontend Developer</p>
              <div className="ProfileBtn">
                <span>
                  <button className="btn-skill"> Available for hire</button>
                </span>
                <span>
                  {" "}
                  <button className="btn-skill"> Remote friendly</button>
                </span>
              </div>
            </div>
          </div>
          <div className="MyStory">
            <div className="MyStoryDescription">
              <h3>My Story</h3>
              <p>
                Hello! I'm Bilal Arif, a frontend developer with hands-on
                experience in building responsive, user-focused web
                applications. My journey began with a curiosity about how
                websites work, which quickly grew into a passion for crafting
                seamless digital experiences. <br /> I specialize in React.js, Next.js, JavaScript, and
                TypeScript, with a solid foundation in HTML5, CSS3, Tailwind
                CSS, and Bootstrap. From developing SaaS applications to
                designing scalable component architectures, I focus on writing
                clean, optimized code and building solutions that balance
                performance, accessibility, and user experience.  <br />
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while sketching out ideas for my next project.
              </p>
              <br />
              <h3>Interests & Hobbies</h3>
            </div>
            <div className="InterestandHobbies">
              <div className="Coffee">
                <FontAwesomeIcon icon={faCoffee} className="icon" />{" "}
                {/* ☕ Coffee */} <br />
                <span>Coffee Brewing</span>
              </div>
              <div className="Music">
                <FontAwesomeIcon icon={faMusic} className="icon" />{" "}
                {/* 🎵 Music */} <br />
                <span>Music Production</span>
              </div>
              <div className="Sports">
                <FontAwesomeIcon icon={faFutbol} className="icon" />{" "}
                {/* ⚽ Sports */} <br />
                <span>Sports</span>
              </div>
              <div className="Gaming">
                <FontAwesomeIcon icon={faGamepad} className="icon" />{" "}
                {/* 🎮 Gaming */} <br />
                <span>Gaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
