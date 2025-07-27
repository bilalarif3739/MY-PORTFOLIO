import React from "react";
import MyExperienceComp from "../../Components/AboutUs/MyExperience/MyExperience";
import MyStoryComp from "../../Components/AboutUs/Story/Story";
import Skills from "../../Components/AboutUs/Skills&Technologies/Skills";

const AboutPage = () => {
  return (
    <>
      <MyStoryComp />
      <Skills/>
      <MyExperienceComp />
    </>
  );
};

export default AboutPage;
