import { React } from "react";
import WebsitePic1 from '../../../assets/CKPic.png';
import WebsitePic2 from '../../../assets/DeveltroPic.png';
import "./FeaturedProjects.css";
import FeaturedProjects from "./FeaturedProjects";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function FeaturedProjectsData() {
  const commonProps = {
    githubIcon: faGithub,
    arrowIcon: faArrowUpRightFromSquare,
  };

  const featuredCards = [
    {
      title: "Commerce Kind Website ",
      image: WebsitePic1,
      description: "A professional business website developed for CommerceKind with modern design patterns and optimized performance.",
      Btn1: "React",
      Btn2: "Lazy Loading and Suspense",
      Btn3: "EmailJS",
      Btn4: "Node JS",
      liveLink: "https://commercekind.com/",
    },
    {
      title: "Develtro Wesbite",
      image: WebsitePic2,
      description: "A professional business website built for Develtro featuring modern design elements and optimized user experience.",
      Btn1: "HTML/CSS",
      Btn2: "Bootstrap",
      Btn3: "Google Maps API",
      Btn4: "JavaScript",
      liveLink: "https://develtro.com/",
    },
  ];

  return (
    <div className="FeaturedGrandParent">

      <div className="MyProjectHeading">
        <h1>My Projects</h1>
        <p>
          A collection of projects I've built using modern technologies and best practices
        </p>
      </div>
      <div className="FeaturedHeading">
        <h2>Featured Projects</h2>
      </div>
      <div className="FeaturedParent">
        
        {featuredCards.map((card, index) => (
          <FeaturedProjects key={index} {...commonProps} {...card} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjectsData;
