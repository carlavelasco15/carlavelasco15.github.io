import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollTopButton = () => {
    
  /* MOFICACIO TOPBUTOTN SCROLL */
  const [isScrollTopActive, setIsScrollTopActive] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
          const windowScrollButton = window.scrollY > 180;
      setIsScrollTopActive(windowScrollButton);
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
/* MOFICACIO TOPBUTOTN SCROLL */

  return (
    <button
      id="scroll-top"
      className={`btn__scroll-top btn--fixed${
        isScrollTopActive ? " active" : ""
      }`}
      onClick={handleScrollTop}
    >
      <a className="btn__link" href="#hero">
        <AiOutlineArrowUp />
      </a>
    </button>
  );
};

export default ScrollTopButton;
