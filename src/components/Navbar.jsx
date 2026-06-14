import React, { useState } from 'react';
import { Sun, Moon } from './Icons';

const Navbar = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'skills', label: 'Habilidades & Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  const handleNavLinkClick = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    // Smooth scroll back to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}>
          Portafolio<span className="nav-logo-dot"></span>
        </a>

        {/* Menu Items */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <span
                className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
                onClick={() => handleNavLinkClick(link.id)}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Buttons */}
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Cambiar tema de color"
            title={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
