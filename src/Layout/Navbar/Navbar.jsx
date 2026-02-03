import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Ecclogo from "../../assets/Ecclogo.jpeg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
        <img src={Ecclogo} alt="ECC Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "")}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Join Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
