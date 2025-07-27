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
                  <button> Available for hire</button>
                </span>
                <span>
                  {" "}
                  <button> Remote friendly</button>
                </span>
              </div>
            </div>
          </div>
          <div className="MyStory">
            <div className="MyStoryDescription">
              <h3>My Story</h3>
              <p>
                Hello! I'm Bilal Arif, a passionate frontend developer with over
                1 year of experience creating digital experiences that matter.
                My journey began with a curiosity about how websites work, which
                quickly evolved into a deep passion for crafting beautiful,
                functional, and accessible web applications. <br /> <br />I
                specialize in React and Javascript, with a strong focus on
                modern development practices, performance optimization, and user
                experience. I believe that great software is not just about
                writing code—it's about solving real problems and creating
                meaningful connections between users and technology. <br />{" "}
                <br />
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
