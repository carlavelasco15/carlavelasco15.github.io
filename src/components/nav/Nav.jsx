import React, { useEffect, useState } from "react";

function Nav() {

    /* MODIFICACIÓ MENU SCROLL */
    const [isNavActive, setIsNavActive] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    
    useEffect(() => {
        const toggleButton = document.querySelector(".nav__toggle");
        const header = document.getElementById("header");
        
      const handleScroll = () => {
        const windowScrollHeader = window.scrollY > 0;
  
        setIsHeaderActive(
          !toggleButton.classList.contains("active") && windowScrollHeader
        );
      };
      
      window.addEventListener("scroll", handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const toggleNavActive = () => setIsNavActive(!isNavActive);

    const handleNavLinkClick = () => {
      if (isNavActive) {
        setIsNavActive(false);
      }
    };
    /* MODIFICACIÓ MENU SCROLL */


    /* NAVBAR RESSALTAR SECCIÓ ON ESTAS */
    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const navLink = document.querySelectorAll("#nav-list a");
    
        const handleScroll = () => {
          let current = "";
    
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
            }
          });
    
          navLink.forEach((a) => {
            a.classList.remove("active");
            if (a.classList.contains(current)) {
              a.classList.add("active");
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    /* NAVBAR RESSALTAR SECCIÓ ON ESTAS */
    
    


  return (
     <header className={`header ${isHeaderActive || isNavActive ? "active" : ""}`} id="header">
      <nav className="nav container">
        <div className="nav__logo">
          <h1>
            <a href="#" className="nav__title nav--color">
              carlavelasco
            </a>
          </h1>
        </div>
        <div className={`nav__menu ${isNavActive ? "active" : ""}`} id="nav-menu">
          <ul className="nav__list" id="nav-list">
            <li className="nav__item">
              <a href="#about" className="nav__link nav--color about" onClick={handleNavLinkClick}>
                Sobre mí
              </a>
            </li>
            <li className="nav__item">
              <a href="#technologies" className="nav__link nav--color technologies" onClick={handleNavLinkClick}>
                Tecnologías
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link nav--color projects" onClick={handleNavLinkClick}>
                Proyectos
              </a>
            </li>
          </ul>
        </div>
        <div className={`nav__toggle ${isNavActive ? "active" : ""}`} id="nav-toggle" onClick={toggleNavActive}>
          <div className="nav__t-line nav__t-line--line1"></div>
          <div className="nav__t-line nav__t-line--line2"></div>
          <div className="nav__t-line nav__t-line--line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
