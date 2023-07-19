import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;
  return (
    <div id={projects.title} className="px-8 md:px-16 md:px-32 pb-16 bg-white flex-1 justify-center items-center">
      <h1 className="pt-12 uppercase font-bold text-center text-black text-bold text-4xl">{projects.title}</h1>
      <div className="projects__menu  justify-center items-center">
        <ul className="justify-center items-center">
          {projects.projects.map((item) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12">
              <div className="lg:w-full">
                <h2 className="text-2xl">
                  {item.title}
                </h2>
                <p className="mt-6">
                  {item.description}
                </p>
                <div className="flex mt-4">
                  {
                    item.url !== "" && 
                    <div className="text-md text-center font-semibold p-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <div className="bg-white">
                          <span className="block py-0.5 px-2 bg-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                            See Project
                          </span>
                        </div>
                      </a>
                    </div>
                  }
                  {
                    item.github !== "" &&
                    <div className="bg-white ml-2 font-semibold">
                      <a href={item.github} target="_blank" rel="noreferrer">                      
                        <span className="block py-1 px-2 bg-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                          Source Code
                        </span>
                      </a>
                    </div>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;