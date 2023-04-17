import React, { useEffect, useState } from "react";
import Project from "./components/Project";
import { projects } from "./data/projects";
import Filter from "./components/Filter";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState('all');

  useEffect(() => {
    setFiltered(projects);
    console.log(projects)
  }, []);

  return (
    <section className="section projects" id="projects">
      <div className="section__wrapper">
        <section className="cont-texto">
          <h2 className="section__title">PROYECTOS</h2>
          <Filter
            projects={projects}
            setFiltered={setFiltered}
            activeTechnology={activeTechnology}
            setActiveTechnology={setActiveTechnology}
          />
          <motion.div layout>
            {filtered.map((project, index) => (
              <Project key={index} {...project} />
              ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;
