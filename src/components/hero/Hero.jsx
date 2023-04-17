import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__background"></div>
      <div className="hero__content">
        <div className="about__profile">
          <img src="./img/me.jpg" alt="Picture profile" className="about__img" />
        </div>
        <div className="hero__description">
          <span className="hero__title--primary">¡Hola!</span>
          <h1 className="hero__title">Soy Carla</h1>
          <span className="hero__title--secondary">Fullstack Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
