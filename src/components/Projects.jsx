import React, { useState } from 'react';
import { Github, ExternalLink, Code } from './Icons';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import zomahub from '../assets/zomahub.png';
import edubot from '../assets/edubot.png';
import zomadash from '../assets/zomadash.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projectsData = [
    {
      id: 0,
      title: 'ZomaHub ERP',
      category: 'web',
      categoryLabel: 'Desarrollo Web / SaaS',
      image: zomahub,
      desc: 'Plataforma SaaS para facturación oficial ARCA (ex-AFIP) en un clic, presupuestos profesionales con seguimiento y aviso de lectura en tiempo real, gestión de inventario y liquidación automática de comisiones de vendedores.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'ARCA API'],
      github: null,
      demo: 'https://www.zomahub.com.ar/'
    },
    {
      id: 4,
      title: 'EduBot',
      category: 'web',
      categoryLabel: 'Desarrollo Web / IA',
      image: edubot,
      desc: 'Sistema inteligente de estudio con asistente virtual por IA, calendario, tablero Kanban de tareas, temporizador Pomodoro personalizable y seguimiento de objetivos diarios.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'OpenAI API', 'LocalStorage'],
      github: 'https://github.com/feghi0',
      demo: 'https://example.com'
    },
    {
      id: 5,
      title: 'Zoma DASH',
      category: 'web',
      categoryLabel: 'Desarrollo Web / Dashboard',
      image: zomadash,
      desc: 'Plataforma premium e interactiva para la visualización y gestión en tiempo real de métricas y KPIs de negocios SaaS (MRR, ARR, LTV, CAC, Churn). Incluye gráficos avanzados con ApexCharts, un simulador financiero de crecimiento y exportación de reportes a PDF.',
      tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'ApexCharts', 'LocalStorage'],
      github: 'https://github.com/feghi0/Zoma-DASH',
      demo: 'https://feghi0.github.io/Zoma-DASH/'
    },
    {
      id: 1,
      title: 'E-Commerce Premium',
      category: 'web',
      categoryLabel: 'Desarrollo Web',
      image: project1,
      desc: 'Plataforma de comercio electrónico de alto rendimiento con carrito de compras reactivo, pasarela de pago simulada y panel de administración en tiempo real.',
      tags: ['React', 'Vite', 'Vanilla CSS', 'Context API'],
      github: 'https://github.com/feghi0',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Dashboard de Métricas SaaS',
      category: 'web',
      categoryLabel: 'Desarrollo Web',
      image: project2,
      desc: 'Panel de control interactivo para visualización de analíticas financieras y de usuario con gráficos dinámicos animados y exportación de reportes.',
      tags: ['React', 'ChartJS', 'Express.js', 'MongoDB'],
      github: 'https://github.com/feghi0',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'App Móvil de Tareas',
      category: 'ui',
      categoryLabel: 'Diseño UI/UX',
      image: project3,
      desc: 'Diseño conceptual y prototipado interactivo de una aplicación móvil para gestión de tareas diarias y proyectos colaborativos en tiempo real.',
      tags: ['Figma', 'UI/UX Design', 'Design System'],
      github: 'https://github.com/feghi0',
      demo: 'https://example.com'
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'web', label: 'Desarrollo Web' },
    { id: 'ui', label: 'Diseño UI/UX' }
  ];

  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="section-title">Mis <span>Trabajos & Proyectos</span></h2>
        <p className="section-subtitle">
          Una selección de mis proyectos más recientes y relevantes que demuestran mis capacidades de diseño y programación.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="portfolio-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            
            <div className="project-image-box">
              <span className="project-category-badge">{project.categoryLabel}</span>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-img"
              />
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <Code size={16} /> Ver Código
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <ExternalLink size={16} /> Demo En Vivo
                  </a>
                )}
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
