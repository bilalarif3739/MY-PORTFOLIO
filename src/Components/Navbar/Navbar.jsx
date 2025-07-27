import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="NavParent">
        <div className="NavLogo">
          <Link to="/">
            <h2>{"<DEV />"}</h2>
          </Link>
        </div>

        <div
          className={`HamburgerMenu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="NavList desktop">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={location.pathname === "/project" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={`SideMenu ${isMenuOpen ? "open" : ""}`}>
          <div className="SideMenuContent">
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className={location.pathname === "/project" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {isMenuOpen && <div className="Overlay" onClick={closeMenu}></div>}
      </div>

      {/* Sticky Mini Navbar */}
      {showStickyNav && (
        <div className="StickyMiniNavbar">
          <div className="MiniNavLogo">
            <Link to="/">{"<DEV />"}</Link>
          </div>

          {/* Hamburger for Sticky Navbar (visible only on small screens) */}
          <div
            className={`HamburgerMenu ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Desktop Sticky Links */}
          <div className="MiniNavLinks desktop">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="/project"
              className={location.pathname === "/project" ? "active" : ""}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
