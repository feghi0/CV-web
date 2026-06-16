import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap } from './Icons';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
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
      role: 'Futuro Técnico en Computación',
      company: 'Zoma Solutions',
      period: '2026 - Presente',
      desc: 'Desarrollo conjunto de aplicaciones y sistemas a medida para clientes. Participación activa en todo el ciclo del producto: desde el relevamiento de necesidades y diseño de interfaces hasta el desarrollo de frontend/backend y puesta en producción.'
    }
  ];

  const education = [
    {
      title: 'Educación Secundaria Técnica',
      school: 'Escuela Técnica N° 35 de 18 "Ing. Eduardo Latzina"',
      period: '2021 - 2026',
      desc: 'Estudios secundarios de carácter técnico en curso, adquiriendo bases sólidas de resolución de problemas lógicos, tecnología y metodologías estructuradas.'
    },
    {
      title: 'Estudios de Inglés',
      school: 'Instituto Cambridge',
      period: '2015 - 2025',
      desc: 'Estudios formales de inglés durante una década, desarrollando una sólida capacidad de lectura de documentación técnica, escritura y comunicación oral.'
    },
    {
      title: 'Curso de Inteligencia Artificial',
      school: 'Cursos / Especializaciones',
      period: '2024',
      desc: 'Capacitación teórica y práctica en fundamentos de IA, ingeniería de prompts y su integración en flujos de trabajo de desarrollo de software.'
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

        <div>
          
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
