import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Ecclogo from "../../assets/Ecclogo.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glass">

        {/* LEFT: Logo */}
        <div className="footer-logo">
          <Link to="/">
            <img src={Ecclogo} alt="Club Logo" />
          </Link>
          <p>Empowering students through technology & innovation.</p>
        </div>

        {/* CENTER: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Department of ENTC</p>
          <p>Dr D Y Patil Institute of Technology, Pimpri, Pune </p>
          <p className="email">
            <a href="mailto:entccodingclub@gmail.com">entccodingclub@gmail.com</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ECC Club. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
