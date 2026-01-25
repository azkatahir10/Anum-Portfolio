import React from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const Experience = () => {
  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">Professional Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="experience-timeline">
          {anumData.experience.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-circle"></div>
                {index < anumData.experience.length - 1 && (
                  <div className="marker-line"></div>
                )}
              </div>

              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                
                <div className="experience-card">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-location">{exp.location}</div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-points">
                    <h4>Key Responsibilities</h4>
                    <ul>
                      {exp.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.tools && (
                    <div className="experience-tools">
                      <h4>Tools & Skills</h4>
                      <div className="tools-list">
                        {exp.tools.map((tool, idx) => (
                          <span key={idx} className="tool-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          gap: 30px;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-marker {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${theme.colors.gradient};
          border: 4px solid ${theme.colors.darker};
          z-index: 2;
          position: relative;
        }

        .marker-line {
          position: absolute;
          top: 20px;
          bottom: -60px;
          width: 2px;
          background: ${theme.colors.primary}40;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-period {
          color: ${theme.colors.primary};
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 15px;
          background: rgba(108, 99, 255, 0.1);
          padding: 5px 15px;
          border-radius: 50px;
          display: inline-block;
          border: 1px solid rgba(108, 99, 255, 0.3);
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .experience-card:hover {
          border-color: ${theme.colors.primary};
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.08);
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: ${theme.colors.gradient};
        }

        .experience-header {
          margin-bottom: 20px;
        }

        .experience-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: white;
        }

        .experience-company {
          color: ${theme.colors.primary};
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .experience-location {
          color: ${theme.colors.gray};
          font-size: 0.9rem;
        }

        .experience-description {
          color: ${theme.colors.gray};
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 1rem;
        }

        .experience-points {
          margin-bottom: 25px;
        }

        .experience-points h4 {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .experience-points ul {
          list-style: none;
          padding-left: 0;
        }

        .experience-points li {
          color: ${theme.colors.gray};
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
          line-height: 1.6;
        }

        .experience-points li::before {
          content: '▸';
          color: ${theme.colors.primary};
          position: absolute;
          left: 0;
        }

        .experience-tools {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .experience-tools h4 {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .tools-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tool-tag {
          background: rgba(108, 99, 255, 0.15);
          color: ${theme.colors.primary};
          padding: 6px 15px;
          border-radius: 50px;
          font-size: 0.85rem;
          border: 1px solid rgba(108, 99, 255, 0.3);
          transition: all 0.3s ease;
        }

        .tool-tag:hover {
          background: ${theme.colors.primary};
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            gap: 15px;
          }

          .timeline-marker {
            flex-direction: row;
            align-items: center;
          }

          .marker-line {
            position: relative;
            top: 0;
            bottom: 0;
            left: 10px;
            width: calc(100% - 20px);
            height: 2px;
          }

          .experience-card {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;