import React from "react";
import TechItem from "./techItem/TechItem";
import { backend } from "./data/backend";
import { frontend } from "./data/frontend";
import { others } from "./data/others";
import { useTranslation } from "react-i18next";


const Technologies = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="section bg-gray" id="technologies">
      <div className="section__wrapper">
        <section className="cont-texto">
          <h2 className="section__title">{t("technologies.title")}</h2>
          <div className="tech__full">
            <h3 className="tech__subtitle">{t("technologies.front")}</h3>
            <ul className="tech__list">
              {frontend.map((item, index) => (
                <TechItem
                    key={index}
                    imgSrc={item.imgSrc}
                    altText={item.altText}
                    techName={item.techName}
                  />
                ))}
            </ul>
            <h3 className="tech__subtitle">{t("technologies.back")}</h3>
            <ul className="tech__list">
            {backend.map((item, index) => (
                <TechItem
                    key={index}
                    imgSrc={item.imgSrc}
                    altText={item.altText}
                    techName={item.techName}
                  />
                ))}
            </ul>
            <h3 className="tech__subtitle">{t("technologies.others")}</h3>
            <ul className="tech__list">
              {others.map((item, index) => (
                <TechItem
                    key={index}
                    imgSrc={item.imgSrc}
                    altText={item.altText}
                    techName={item.techName}
                  />
                ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Technologies;
