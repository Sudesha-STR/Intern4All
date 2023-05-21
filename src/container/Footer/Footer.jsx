import React from 'react';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; {currentYear} Intern4All. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
