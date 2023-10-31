import React from "react";
import "./style.scss";
import imgLogo from "../../images/logo_white.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-full">
      <div className="container content-wrapper">
        <div className="">
          <img src={imgLogo} alt="" />
        </div>
        <ul className="footer-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Design Lab
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Production Lab
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Platform
            </a>
          </li>
        </ul>
        <ul className="footer-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Project Earth
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Create+Collaborate
            </a>
          </li>
        </ul>
        <ul className="footer-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Reach us
            </a>
          </li>
          <li className="nav-item">
            <a href="mailto:support@nitex.info" className="extra">
              support@nitex.info
            </a>
          </li>
          <li className="nav-item extra">
            <p className="extra">
              153 Curtain Rd, London EC2A 3QE, United Kingdom
            </p>
          </li>
        </ul>
        <div className="social-wrapper">
          <h5 className="nav-link">Social</h5>
          <ul className="social-links">
            <li>
              <a href="#" className="nav-link">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <div>
          <span>
            © {new Date().getFullYear() || 2023}. Nitex Inc. All rights
            Reserved.
          </span>
        </div>
        <div className="footer-right">
          <a href="#" target="_blank">
            Privacy policy
          </a>
          <a href="#" target="_blank">
            Tarms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
