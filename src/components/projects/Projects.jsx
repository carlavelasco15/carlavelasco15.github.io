import React, { useEffect, useState } from "react";
import Project from "./components/Project";
import Filter from "./components/Filter";
import { useTranslation } from "react-i18next";

const ProjectsSection = ({ currentLanguage }) => {
  const [t, i18n, ready] = useTranslation("global");
  const [filtered, setFiltered] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState("symfony");

  useEffect(() => {
    if (!ready) return "loading translations...";
    setProjects(t("projects.all-projects", { returnObjects: true }));
    if (!projects) return;
    setFiltered(projects);
  }, [t, currentLanguage, ready]);

  useEffect(() => {
    if (projects.length) {
      const allProjects = t("projects.all-projects", { returnObjects: true });
      setProjects(allProjects);
      setFiltered(allProjects);
    }
  }, [currentLanguage]);

  return (
    <section className="section projects" id="projects">
      <div className="section__wrapper">
        <section className="cont-texto">
          <h2 className="section__title">{t("projects.title")}</h2>
          {projects.length ? (
            <>
              <Filter
                projects={projects}
                setFiltered={setFiltered}
                activeTechnology={activeTechnology}
                setActiveTechnology={setActiveTechnology}
                currentLanguage={currentLanguage}
              />
              <div>
                {filtered.map((project, index) => {
                  return <Project key={index} {...project} />;
                })}
              </div>
            </>
          ) : (
            <div>Loading projects...</div>
          )}
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;
