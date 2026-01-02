import { React } from "react";
import WebsitePic1 from "../../../assets/CKPic.jpeg";
import WebsitePic2 from "../../../assets/DeveltroPic.jpeg";
import WebsitePic3 from "../../../assets/PMD1.png";
import WebsitePic4 from "../../../assets/RealEstatewebsite.jpeg";
import WebsitePic5 from "../../../assets/bhsp.png";
import WebsitePic6 from "../../../assets/bw.png";
import WebsitePic7 from "../../../assets/rst.png";

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
      description:
        "A professional business website developed for CommerceKind with modern design patterns and optimized performance.",
      Btn1: "React",
      Btn2: "Lazy Loading and Suspense",
      Btn3: "EmailJS",
      Btn4: "Node JS",
      liveLink: "https://commercekind.com/",
    },
    {
      title: "Platinum Marketing Distribution",
      image: WebsitePic3,
      description:
        "Developed a website for Platinum Marketing Distribution showcasing their tailored distribution strategies and supply chain optimization solutions for global market penetration.",
      Btn1: "React",
      Btn2: "Framer Motion",
      Btn3: "SCSS",
      Btn4: "+1",
      liveLink: "https://platinummarketingdistribution.com/",
    },

    {
      title: "BHS Website",
      image: WebsitePic5,
      description:
        "A modern real estate platform that enables users to effortlessly browse property listings through an intuitive interface, featuring advanced filtering options, comprehensive property details, and a fully responsive design for seamless navigation across all devices.",
      Btn1: "React",
      Btn2: "TypeScript",
      Btn3: "Tailwind",
      Btn4: "+2",
      liveLink: "https://bilalbhs.netlify.app/",
    },

    {
      title: "Restaurant Website",
      image: WebsitePic7,
      description:
        "A visually engaging restaurant website that highlights menu items, ambiance, and services, providing users with seamless navigation, responsive layouts, and an easy-to-use table booking interface.",
      Btn1: "React",
      Btn2: "TypeScript",
      Btn3: "Tailwind",
      Btn4: "+2",
      liveLink: "https://bilalrestaurantwebsite.netlify.app/",
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
      // liveLink: "http://167.99.24.75:3001/",
      liveLink: "https://bilalrealestatewebsite.netlify.app/",
    },

    {
      title: "BazelWorx Website",
      image: WebsitePic6,
      description:
        "A modern corporate business website designed for BazelWorx, highlighting company services, expertise, and brand identity through a clean UI, responsive layout, and intuitive navigation to drive client engagement.",
      Btn1: "HTML",
      Btn2: "CSS",
      Btn3: "JavaScript",
      Btn4: "+2",
      liveLink: "https://bazelworxx.netlify.app/",
    },

    {
      title: "Develtro Wesbite",
      image: WebsitePic2,
      description:
        "A professional business website built for Develtro featuring modern design elements and optimized user experience.",
      Btn1: "HTML/CSS",
      Btn2: "Bootstrap",
      Btn3: "Google Maps API",
      Btn4: "JavaScript",
      liveLink: "https://develtro.com/",
    },
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
