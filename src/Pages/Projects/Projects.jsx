import React from "react";
import AllProjectData from "../../Components/Projects/AllProjects/AllProjectData";
import FeaturedProjectsData  from  "../../Components/Projects/FeaturedProjects/FeaturedProjectsData"

const ProjectPage = () => {
  return (
    <>
    <FeaturedProjectsData/>
      <AllProjectData />
    </>
  );
};

export default ProjectPage;
