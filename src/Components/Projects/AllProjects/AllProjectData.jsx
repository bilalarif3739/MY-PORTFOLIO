import {React} from "react";
import WebsitePic1 from '../../../assets/CKPic.jpeg';
import WebsitePic2 from '../../../assets/DeveltroPic.jpeg';
import WebsitePic3 from '../../../assets/PMD.jpeg'
import WebsitePic4 from '../../../assets/RealEstatewebsite.jpeg'
import "./AllProjects.css";
import AllProjects from "./AllProjects";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function AllProjectData() {
  const commonProps = {
    githubIcon: faGithub,
    arrowIcon: faArrowUpRightFromSquare,
  };

  const cards = [
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
    {
      title: "Platinum Marketing Distribution",
      image: WebsitePic3,
      description: "Platinum Marketing Distribution is a company specializing in the marketing, repacking, and distribution of consumer food products.",
      Btn1: "React",
      Btn2: "Framer Motion",
      Btn3: "SCSS",
      Btn4: "+1",
      liveLink: "https://platinummarketingdistribution.com/",
    },
    {
      title: "Real Estate Website",
      image: WebsitePic4,
      description: "A dynamic real estate platform offering users an intuitive interface to explore property listings, complete with advanced search filters and detailed property information. Designed to enhance user experience with a responsive layout and seamless navigation.",
      Btn1: "React js",
      Btn2: "GSAP",
      Btn3: "Tailwind CSS",
      Btn4: "+3",
      liveLink: "http://167.99.24.75:3001/",
    },
    // {
    //   title: "Weather App",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    //   description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts for multiple cities.",
    //   Btn1: "Angular",
    //   Btn2: "TypeScript",
    //   Btn3: "Bootstrap",
    //   Btn4: "+2",
    // },
    
    // {
    //   title: "Chat Application",
    //   image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
    //   description: "A real-time messaging platform with end-to-end encryption, file sharing, group chats, and video calling capabilities.",
    //   Btn1: "Socket.io",
    //   Btn2: "Express.js",
    //   Btn3: "Redis",
    //   Btn4: "+2",
    // },
  ];

  return (
  <div className="ProjectGrandParents">
    <div className="ProjectHeading">
      <h2>All Projects</h2>
    </div>
    <div className="ProjectParents">
      {cards.map((card, index) => (
        <AllProjects key={index} {...commonProps} {...card} />
      ))}
    </div>
  </div>
  );
}

export default AllProjectData;