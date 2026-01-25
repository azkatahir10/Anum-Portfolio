import React from 'react';
import { theme } from '../theme';

const Services = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI & ML Solutions',
      description: 'Design and deploy machine learning models for predictive analytics, computer vision, and natural language processing.',
      features: ['Predictive Modeling', 'Computer Vision', 'NLP', 'Model Deployment'],
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #4A90E2 100%)'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights through comprehensive analysis, visualization, and reporting.',
      features: ['Data Visualization', 'Dashboard Creation', 'Statistical Analysis', 'ETL Pipelines'],
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #36D399 100%)'
    },
    {
      icon: '☁️',
      title: 'Azure Cloud',
      description: 'End-to-end cloud solutions on Microsoft Azure including data pipelines, ML deployment, and automation.',
      features: ['Azure ML', 'Databricks', 'Data Factory', 'Cloud Architecture'],
      gradient: 'linear-gradient(135deg, #36D399 0%, #FFB347 100%)'
    },
    {
      icon: '🔄',
      title: 'Automation',
      description: 'Automate repetitive tasks and processes using Python scripts, ETL workflows, and intelligent systems.',
      features: ['Process Automation', 'Workflow Design', 'Script Development', 'System Integration'],
      gradient: 'linear-gradient(135deg, #FFB347 0%, #FF6584 100%)'
    }
  ];

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Professional services tailored to your data and AI needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon" style={{ background: service.gradient }}>
                <span>{service.icon}</span>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              
              <a href="#contact" className="service-link">
                Learn More
                <span className="link-arrow">→</span>
              </a>
              
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 40px 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: ${theme.colors.primary};
          box-shadow: 0 20px 40px rgba(108, 99, 255, 0.2);
        }

        .service-card:hover .service-hover-effect {
          opacity: 1;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 25px;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: ${theme.colors.light};
        }

        .service-description {
          color: ${theme.colors.gray};
          margin-bottom: 25px;
          line-height: 1.7;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .feature-tag {
          background: rgba(108, 99, 255, 0.1);
          color: ${theme.colors.primary};
          padding: 6px 15px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(108, 99, 255, 0.2);
          transition: all 0.3s ease;
        }

        .service-card:hover .feature-tag {
          background: rgba(108, 99, 255, 0.2);
          border-color: ${theme.colors.primary};
        }

        .service-link {
          color: ${theme.colors.primary};
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.3s ease;
        }

        .service-card:hover .service-link {
          gap: 12px;
        }

        .link-arrow {
          transition: transform 0.3s ease;
        }

        .service-card:hover .link-arrow {
          transform: translateX(5px);
        }

        .service-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: ${theme.colors.gradient};
          opacity: 0;
          transition: opacity 0.3s ease;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;