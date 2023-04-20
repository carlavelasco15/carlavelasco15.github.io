import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbDownload } from 'react-icons/tb';


function About() {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="section about" id="about">
      <div className="section__wrapper">
        <section className="cont-texto">
          <h2 className="section__title">{t("about.title")}</h2>
          <div className="about__info">
            <div className="about__profile">
              <img src="./img/me.jpg" alt="Picture profile" className="about__img" />
            </div>
            <div className="about__description">
              <p>{t("about.intro")}</p>
              <p>{t("about.role")}</p>
              <p>{t("about.description")}</p>
              <div className="about__button">
                <a className="btn" href= {t("about.cv-file")} download="Carla Velasco CV" target="_blank"
                  rel="noopener noreferrer">
                  <span className="btn__text">{t("about.btn-download-cv")}</span>
                  <span className="btn__icon">
                    <TbDownload/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
