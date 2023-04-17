import React from 'react';
import { TbDownload } from 'react-icons/tb';


function About() {
  return (
    <section className="section about" id="about">
      <div className="section__wrapper">
        <section className="cont-texto">
          <h2 className="section__title">SOBRE MÍ</h2>
          <div className="about__info">
            <div className="about__profile">
              <img src="./img/me.jpg" alt="Picture profile" className="about__img" />
            </div>
            <div className="about__description">
              <p>¡Hola, soy Carla! </p>
              <p>Soy desarrolladora Fullstack titulada en CFGS Desarrollo de aplicaciones web.</p>
              <p>Soy estudiante Fullstack developer apasionada por dar vida a ideas creativas y colaborar con diseñadores, pequeñas empresas y emprendedores para llevar sus proyectos al siguiente nivel. Siempre estoy aprendiendo y comprometida a entregar el mejor proyecto posible, trabajando tanto en el frontend como en el backend para asegurarme de que cada detalle esté en su lugar. ¡Contáctame para colaborar en tu próximo proyecto!</p>

              <div className="about__button">
                <a className="btn" href="./pdf/Carla_Velasco_CV.pdf" download="Carla Velasco CV" target="_blank"
                  rel="noopener noreferrer">
                  <span className="btn__text">Descargar CV</span>
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
