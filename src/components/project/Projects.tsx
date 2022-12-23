import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data/projects";
import ProjectContent from "./ProjectContent";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below you can find some of the projects that I have worked on. For
            more details of each project, check out my GitHub or the Play Store
            by clicking on the projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/3 w-100 p-4"
            >
              <div className="flex relative h-full">
                <ProjectContent project={project} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
