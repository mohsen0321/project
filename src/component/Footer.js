import React, { useState, useEffect } from "react";
import "../Footer.css";
import logo from "../Screenshot 2024-11-04 193746.png";
import appleIcon from "../assets/Icons/mac-os-logo.png";
import windowsIcon from "../assets/Icons/menu.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`footer ${isVisible ? "visible" : "hidden"}`}>
      <NewsletterSection />
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

const NewsletterSection = () => (
  <div className="newsletter-section">
    <h2 className="newsletter-title">Join Our Newsletter</h2>
    <p className="newsletter-description">
      Get AI news, tips, and exclusive content delivered to your inbox.
    </p>
    <div className="newsletter-container">
      <div className="newsletter-input-wrapper">
        <input
          type="email"
          className="newsletter-input"
          placeholder="Enter your email"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </div>
  </div>
);

const FooterMain = () => (
  <div className="footer-main">
    <FooterAbout />
    <FooterLinks />
  </div>
);

const FooterAbout = () => (
  <div className="footer-about">
    <div className="footer-logo-wrapper">
      <img src={logo} alt="Model Craft Logo" className="footer-logo" />
      <h4 className="footer-title">Model Craft</h4>
    </div>
    <p className="footer-description">
      Model Craft makes building, training,<br /> and deploying AI models accessible to everyone.
    </p>
    <div className="footer-icons">
      <img src={appleIcon} alt="Apple" className="footer-icon-image" />
      <img src={windowsIcon} alt="Windows" className="footer-icon-image" />
    </div>
  </div>
);

const FooterLinks = () => (
  <div className="footer-links-group">
    <FooterLinksColumn title="Home" links={["Overview", "Features", "Problems", "Case Studies"]} />
    <FooterLinksColumn title="Company" links={["Help Center", "About Us", "Blog", "FAQ"]} />
    <FooterLinksColumn title="Resources" links={["Docs", "Database", "Models", "Learn"]} />
  </div>
);

const FooterLinksColumn = ({ title, links }) => (
  <div className="footer-links">
    <h5 className="footer-subtitle">{title}</h5>
    <ul>
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    <p className="footer-copyright">@Model Craft 2025. All Rights Reserved.</p>
    <SocialIcons />
  </div>
);

const SocialIcons = () => (
  <div className="footer-social-icons">
    <SocialIcon iconClass="github" href="#" />
    <SocialIcon iconClass="linkedin" href="#" />
    {/* <SocialIcon iconClass="apple" href="#" /> */}
    {/* <SocialIcon iconClass="twitter" href="#" /> */}
    <SocialIcon iconClass="facebook" href="https://www.facebook.com/share/16hfjPipe5/" />
  </div>
);

const SocialIcon = ({ iconClass, href }) => (
  <a
    href={href}
    className={`social-icon ${iconClass}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`fab fa-${iconClass}`}></i>
  </a>
);

export default Footer;