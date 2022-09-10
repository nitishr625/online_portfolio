import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        PORTFOLIO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
