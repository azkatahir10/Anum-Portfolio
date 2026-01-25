import React, { useState } from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', ...new Set(anumData.projects.map(p => p.category))];
  
  const filteredProjects = activeFilter === 'all' 
    ? anumData.projects 
    : anumData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">Projects</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Innovative solutions combining AI, ML, and data science
          </p>
        </div>

        <div className="projects-filters animate-in">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <div className="project-title-wrapper">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-subtitle">{project.subtitle}</div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <div className="features-grid">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-technologies">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: white;
          border: 2px solid #e2e8f0;
          padding: 10px 25px;
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          color: ${theme.colors.gray};
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: ${theme.colors.gradient};
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 20px rgba(108, 99, 255, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(108, 99, 255, 0.15);
        }

        .project-card:hover .project-hover-effect {
          opacity: 1;
        }

        .project-header {
          background: ${theme.colors.gradientDark};
          color: white;
          padding: 30px;
          position: relative;
          overflow: hidden;
        }

        .project-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${theme.colors.gradient};
          opacity: 0.7;
        }

        .project-category {
          position: relative;
          z-index: 2;
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 6px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .project-title-wrapper {
          position: relative;
          z-index: 2;
        }

        .project-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .project-subtitle {
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .project-content {
          padding: 30px;
        }

        .project-description {
          color: ${theme.colors.gray};
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .project-features {
          margin-bottom: 30px;
        }

        .project-features h4,
        .project-technologies h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: ${theme.colors.dark};
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .feature-icon {
          color: ${theme.colors.success};
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-item span:last-child {
          color: ${theme.colors.gray};
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);
          color: ${theme.colors.primary};
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(108, 99, 255, 0.2);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: ${theme.colors.primary};
          color: white;
          transform: translateY(-2px);
        }

        .project-hover-effect {
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
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .project-header,
          .project-content {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;