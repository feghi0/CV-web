import React from 'react';
import profileImg from '../assets/profile.jpg';
import { Download } from './Icons';

const Home = ({ setActiveTab }) => {
  return (
    <section className="section container">
      <div className="home-wrapper">

        <div className="home-content">
          <div className="home-badge">
            <span className="home-badge-dot"></span>
            Disponible para Nuevos Proyectos
          </div>

          <h1 className="home-title">
            Hola, soy <span>Agustín</span> <br />
            Futuro Técnico en Computación
          </h1>

          <p className="home-desc">
            Me especializo en diseñar y construir aplicaciones web modernas, rápidas e interactivas.
            Combino lógica sólida de backend con interfaces de usuario pulidas para entregar productos
            digitales que marcan la diferencia.
          </p>

          <div className="home-actions">
            <button
              className="btn btn-primary"
              onClick={() => setActiveTab('projects')}
            >
              Ver Proyectos
            </button>
            <a
              href="/CV-AgustinManteiga.pdf"
              download="CV-AgustinManteiga.pdf"
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <Download size={18} /> Descargar CV
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => setActiveTab('contact')}
            >
              Contactar
            </button>
          </div>

          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-num">1+</span>
              <span className="stat-label">Año de Experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">2+</span>
              <span className="stat-label">Proyectos Exitosos</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">Tecnologías Dominadas</span>
            </div>
          </div>
        </div>

        <div className="home-image-container">
          <div className="home-image-glow"></div>
          <div className="home-image-frame">
            <img
              src={profileImg}
              alt="Agustín - Futuro Técnico en Computación"
              className="home-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
