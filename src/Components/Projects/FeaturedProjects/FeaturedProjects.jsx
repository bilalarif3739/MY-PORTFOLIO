import React from "react";
import "./FeaturedProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeaturedProjects({
  title,
  image,
  description,
  githubIcon,
  arrowIcon,
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  liveLink, // <-- New prop
}) {
  return (
    <div className="FeaturedCard">
      <div className="FeaturedImage">
        <img src={image} alt={title} />
      </div>

      <div className="FeaturedCardContent">
        <div className="FeaturedTitle">
          <h3>{title}</h3>
        </div>

        <div className="FeaturedDescription">
          <p>{description}</p>
        </div>

        <div className="FeaturedTechStack">
          <button className="FeaturedTechBtn">{Btn1}</button>
          <button className="FeaturedTechBtn">{Btn2}</button>
          <button className="FeaturedTechBtn">{Btn3}</button>
          <button className="FeaturedTechBtn">{Btn4}</button>
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

export default FeaturedProjects;
