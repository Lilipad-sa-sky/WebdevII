// IMPORTS
import React from "react";
import "./Footer.css";

// IMPORT IMAGES
import insta from "../../assets/insta.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";

const Footer = () => {
  return (
    <>
      <div className="footmaincon">
        <div className="footercon">
          {/* TAGLINE SEC */}
          <div className="footerlogo">
            <h2>Storia</h2>
            <p>"Unearthing Ancient Rome, Inspiring Modern Minds, <br />
                A Place Where Rome's Legacy Comes Alive."</p>
          </div>

          {/* EXTRA LINKS */}
          <div className="footlink">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* SOCIALS SEC */}
          <div className="footsocial">
            <h4>Follow Us</h4>
            <div className="socialcon">
              <a href="#"><img src={fb} alt="Facebook" /></a>
              <a href="#"><img src={x} alt="Twitter" /></a>
              <a href="#"><img src={insta} alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SEC */}
      <div className="footbottom">
        <p>&copy; 2025 Storia. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
