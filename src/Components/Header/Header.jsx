import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
import image from "../../assets/image1.png/";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nitish Kumar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={image} alt="image" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
