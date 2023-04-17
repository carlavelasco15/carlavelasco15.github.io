import React from "react";

const TechItem = ({ imgSrc, altText, techName }) => {
  return (
    <li className="tech__item">
      <img className="tech__img" src={imgSrc} alt={altText} />
      <p className="tech__name">{techName}</p>
    </li>
  );
};

export default TechItem;
