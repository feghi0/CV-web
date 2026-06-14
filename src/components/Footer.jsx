import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          Portafolio.
        </div>
        <p className="footer-text">
          &copy; {currentYear} Agustín. Todos los derechos reservados. Desarrollado con React y JSX.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
