import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChooseTranslation } from "./components/ChooseTranslation";

function Nav({currentLanguage, handleLanguageChange}) {
  const [t, i18n] = useTranslation("global");
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
    const navLink = document.querySelectorAll("#nav-list > li a");

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
    <header
      className={`header ${isHeaderActive || isNavActive ? "active" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <div className="nav__logo">
          <h1>
            <a href="#" className="nav__title">
              carlavelasco
            </a>
          </h1>
        </div>
        <div
          className={`nav__menu ${isNavActive ? "active" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list" id="nav-list">
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link about"
                onClick={handleNavLinkClick}
              >
                {t("nav.about")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#technologies"
                className="nav__link technologies"
                onClick={handleNavLinkClick}
              >
                {t("nav.technologies")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link projects"
                onClick={handleNavLinkClick}
              >
                {t("nav.projects")}
              </a>
            </li>
            <ChooseTranslation currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange}/>
          </ul>
        </div>
        <div
          className={`nav__toggle ${isNavActive ? "active" : ""}`}
          id="nav-toggle"
          onClick={toggleNavActive}
        >
          <div className="nav__t-line nav__t-line--line1"></div>
          <div className="nav__t-line nav__t-line--line2"></div>
          <div className="nav__t-line nav__t-line--line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
