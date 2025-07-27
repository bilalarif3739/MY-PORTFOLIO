import React from "react";
import "./AllProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AllProjects({
  title,
  image,
  description,
  githubIcon,
  arrowIcon,
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  liveLink,
}) {
  return (
    <div className="ProjectCard">
      <div className="ProjectImage">
        <img src={image} alt={title} />
      </div>

      <div className="ProjectCardContent">
        <div className="ProjectTitle">
          <h3>{title}</h3>
        </div>

        <div className="ProjectDescription">
          <p>{description}</p>
        </div>

        <div className="ProjectTechtacks">
          <button className="ProjectTechBtn">{Btn1}</button>
          <button className="ProjectTechBtn">{Btn2}</button>
          <button className="ProjectTechBtn">{Btn3}</button>
          <button className="ProjectTechBtn">{Btn4}</button>
        </div>

        <div className="FeaturedSocialLinks">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="FeaturedSocialBtn"
          >
            <FontAwesomeIcon icon={arrowIcon} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
