import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';


const Project = ({ title, img, description, technologies, webLink, githubLink }) => {
  return (
    <div className="about__info about__info--project">
      <div className="about__profile">
        <img src={img} alt="Picture profile" className="about__img" />
      </div>
      <div className="about__description">
        <h3 className="important">{title}</h3>
        <p>{description}</p>
        <p>
          Tecnologías: <span className="important">{technologies}</span>
        </p>
        <div className="about__button">
          <a className="btn btn--proyect" href={webLink} target="_blank" rel="noopener noreferrer">
            <span className="btn__text">Web</span>
            <span className="btn__icon">
              <TbWorld/>
            </span>
          </a>
          <a className="btn btn--proyect" href={githubLink} target="_blank" rel="noopener noreferrer">
            <span className="btn__text">GitHub</span>
            <span className="btn__icon">
              <FaGithub/>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
