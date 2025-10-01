import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterTop">
        <div className="FooterSection about">
          <div className="logoText">
            <span className="logoIcon">💻</span>
            <h3>
              Muhammad Bilal <span>Arif</span>
            </h3>
          </div>
          <p>
            Front-End developer crafting digital experiences with modern
            technologies and creative solutions.
          </p>
        </div>

        <div className="FooterSection links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="FooterSection connect">
          <h4>CONNECT</h4>
          <div className="socialIcons">
            <a href="mailto:bilalarif3739@gmail.com?subject=Let's work together&body=Hi, I'm interested in working with you.">
              <FaEnvelope />
            </a>
            <a href="https://github.com/bilalarif3739" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bilal-arif-144311215/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <p>Let's build something amazing together</p>
        </div>
      </div>

      <div className="FooterBottom">
        <p>
          Built with <FaHeart className="heart" /> using <span>React.js</span>,{" "}
          {/* <span></span>, */}
           <span>Tailwind CSS</span>
        </p>
        <p className="powered">☕ Powered by caffeine and code</p>
        <p>
          © 2025 <strong>Muhammad Bilal Arif</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
