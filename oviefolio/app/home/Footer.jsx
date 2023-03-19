import React from "react";
import {faLinkedinIn, faMedium, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const newdate = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="copyright">&copy; <span>Precious Ovie-George</span> <span className="copyrightyear">{newdate}</span></p>
      <div className="socials">
        <div className="footerIcons">
          <a href="#" target="_blank">
          <FontAwesomeIcon className="icon"  icon={faLinkedinIn} />
          </a>
        </div>
        <div className="footerIcons">
          <a href="#" target="_blank">
          <FontAwesomeIcon className="icon" icon={faMedium} />
          </a>
        </div>
        <div>
          <a href="#" target="_blank">
          <FontAwesomeIcon className="icon"  icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


