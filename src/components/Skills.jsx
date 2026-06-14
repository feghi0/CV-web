import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap } from './Icons';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations after mounting
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    { name: 'JavaScript / React / JSX', percentage: 90 },
    { name: 'HTML5 / CSS3 / Responsividad', percentage: 95 },
    { name: 'Node.js / Express.js', percentage: 85 },
    { name: 'Bases de Datos (MongoDB, MySQL)', percentage: 80 },
    { name: 'Control de Versiones (Git & GitHub)', percentage: 85 },
    { name: 'Diseño UI/UX (Figma, Prototipado)', percentage: 75 }
  ];

  const softSkills = [
    { name: 'Resolución de Problemas', percentage: 90 },
    { name: 'Trabajo en Equipo', percentage: 95 },
    { name: 'Adaptabilidad & Autoaprendizaje', percentage: 90 },
    { name: 'Comunicación Asertiva', percentage: 85 }
  ];

  const experience = [
    {
      role: 'Desarrollador Full Stack Freelance',
      company: 'Proyectos Independientes',
      period: '2024 - Presente',
      desc: 'Desarrollo de sitios web a medida para pequeños negocios, landing pages optimizadas para SEO, integraciones de APIs REST y maquetación interactiva con React y CSS moderno.'
    },
    {
      role: 'Desarrollador Frontend Junior',
      company: 'Estudio de Diseño Digital Tech',
      period: '2023 - 2024',
      desc: 'Maquetación responsiva, implementación de interfaces interactivas y mantención de plataformas e-commerce utilizando React y flujos de trabajo con Git.'
    }
  ];

  const education = [
    {
      title: 'Tecnicatura en Desarrollo de Software',
      school: 'Instituto de Tecnología Aplicada',
      period: '2021 - 2023',
      desc: 'Formación en algoritmos, bases de datos (SQL y NoSQL), ingeniería de software, arquitectura web y programación orientada a objetos.'
    },
    {
      title: 'Especialización en React y Node.js Backend',
      school: 'Academia Digital (Cursos y Certificaciones)',
      period: '2022',
      desc: 'Profundización en desarrollo del lado del cliente con React (Hooks, Context, State Management) y backend con Node/Express y bases de datos NoSQL.'
    }
  ];

  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="section-title">Mi <span>Perfil Profesional</span></h2>
        <p className="section-subtitle">
          Una mirada en detalle a mis competencias técnicas, habilidades blandas, formación y trayectoria.
        </p>
      </div>

      <div className="skills-layout">
        
        {/* Left Side: Skills progress bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          <div className="skills-card">
            <h3 className="skills-card-title">
              Habilidades Técnicas
            </h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill"
                      style={{ width: animate ? `${skill.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-card">
            <h3 className="skills-card-title">
              Habilidades Blandas
            </h3>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill"
                      style={{ width: animate ? `${skill.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Experience & Education Timeline */}
        <div>
          
          {/* Experience Timeline */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h3 className="timeline-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Briefcase size={24} style={{ color: 'var(--accent)' }} /> Experiencia Laboral
            </h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-date">{item.period}</div>
                  <h4 className="timeline-title">{item.role}</h4>
                  <div className="timeline-subtitle">{item.company}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="timeline-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <GraduationCap size={24} style={{ color: 'var(--accent)' }} /> Educación y Cursos
            </h3>
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-date">{item.period}</div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <div className="timeline-subtitle">{item.school}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
