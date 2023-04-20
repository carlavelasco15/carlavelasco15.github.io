import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="hero" className="hero">
      <div className="hero__background"></div>
      <div className="hero__content">
        <div className="about__profile">
          <img src="./img/me.jpg" alt="Picture profile" className="about__img" />
        </div>
        <div className="hero__description">
          <span className="hero__title--primary">{t("hero.hello")}</span>
          <h1 className="hero__title">{t("hero.my-name")}</h1>
          <span className="hero__title--secondary">Fullstack Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
