import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Por favor, completa todos los campos requeridos.'
      });
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Por favor, ingresa un correo electrónico válido.'
      });
      return;
    }

    // Simulate sending message
    setStatus({
      submitted: true,
      success: true,
      message: '¡Gracias! Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.'
    });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="section-title">¿Hablamos? <span>Contáctame</span></h2>
        <p className="section-subtitle">
          Si tienes alguna propuesta laboral, duda o proyecto en mente, no dudes en escribirme.
        </p>
      </div>

      <div className="contact-layout">
        
        {/* Left Side: Contact Information cards */}
        <div className="contact-info-panel">
          
          <div className="contact-card">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <div className="contact-card-details">
              <h4>Email</h4>
              <a href="mailto:agustinmanteiga@gmail.com">agustinmanteiga@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <Phone size={22} />
            </div>
            <div className="contact-card-details">
              <h4>Teléfono</h4>
              <p>+54 9 11 1234-5678</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <MapPin size={22} />
            </div>
            <div className="contact-card-details">
              <h4>Ubicación</h4>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

          <div className="contact-socials">
            <h3 className="socials-title">Mis Redes Sociales</h3>
            <div className="socials-grid">
              <a href="https://github.com/feghi0" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side: Form Panel */}
        <div className="contact-form-panel">
          {status.submitted && (
            <div className={`form-alert ${status.success ? 'form-alert-success' : 'form-alert-error'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre Completo *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo Electrónico *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                placeholder="¿Sobre qué es el mensaje?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje *</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Hola Agustín, me gustaría hablar contigo sobre..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary contact-submit-btn">
              <Send size={18} /> Enviar Mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
