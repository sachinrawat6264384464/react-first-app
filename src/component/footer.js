import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>
          VISIT_THE <span>INDIA</span>
        </h3>
        <p className="tagline">
          Discover. Explore. Experience — the magic of Incredible India!
        </p>
      </div>

    

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Visit_The_India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
