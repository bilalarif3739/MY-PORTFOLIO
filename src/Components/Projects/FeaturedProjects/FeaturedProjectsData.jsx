import { React } from "react";
import WebsitePic1 from "../../../assets/CKPic.jpeg";
import WebsitePic2 from "../../../assets/DeveltroPic.jpeg";
import WebsitePic4 from "../../../assets/RealEstatewebsite.jpeg";

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
      description:
        "A professional business website developed for CommerceKind with modern design patterns and optimized performance.",
      Btn1: "React",
      Btn2: "Lazy Loading and Suspense",
      Btn3: "EmailJS",
      Btn4: "Node JS",
      liveLink: "https://commercekind.com/",
    },
    {
      title: "Real Estate Website",
      image: WebsitePic4,
      description:
        "A dynamic real estate platform offering users an intuitive interface to explore property listings, complete with advanced search filters and detailed property information. Designed to enhance user experience with a responsive layout and seamless navigation.",
      Btn1: "React js",
      Btn2: "GSAP",
      Btn3: "Tailwind CSS",
      Btn4: "+3",
      liveLink: "https://bilalrealestatewebsite.netlify.app/",

    },
    // {
    //   title: "Develtro Wesbite",
    //   image: WebsitePic2,
    //   description: "A professional business website built for Develtro featuring modern design elements and optimized user experience.",
    //   Btn1: "HTML/CSS",
    //   Btn2: "Bootstrap",
    //   Btn3: "Google Maps API",
    //   Btn4: "JavaScript",
    //   liveLink: "https://develtro.com/",
    // },
  ];

  return (
    <div className="FeaturedGrandParent">
      <div className="MyProjectHeading">
        <h1>My Projects</h1>
        <p>
          A collection of projects I've built using modern technologies and best
          practices
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
