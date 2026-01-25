import React from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const Education = () => {
  return (
    <section id="education" className="section section-dark">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">Education</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Academic background in Computer Science and Data Science
          </p>
        </div>

        <div className="education-simple-grid">
          {anumData.education.map((edu, index) => (
            <div key={index} className="education-simple-card animate-in">
              <div className="education-simple-header">
                <div className="education-simple-period">{edu.period}</div>
                <div className="education-simple-icon">🎓</div>
                <h3 className="education-simple-degree">{edu.degree}</h3>
                <div className="education-simple-institution">{edu.institution}</div>
                <div className="education-simple-location">{edu.location}</div>
              </div>
              
              <div className="education-simple-highlights">
                <h4>Key Highlights</h4>
                <div className="education-simple-highlights-list">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="education-simple-highlight">
                      <span className="education-simple-highlight-icon">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-simple-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .education-simple-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          width: 100%;
        }

        .education-simple-card:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .education-simple-header {
          margin-bottom: 30px;
          position: relative;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .education-simple-period {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 15px;
          background: rgba(108, 99, 255, 0.1);
          padding: 8px 20px;
          border-radius: 50px;
          display: inline-block;
        }

        .education-simple-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .education-simple-degree {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: white;
          line-height: 1.3;
        }

        .education-simple-institution {
          color: var(--primary-color);
          font-size: 1.1rem;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .education-simple-location {
          color: var(--gray-color);
          font-size: 0.95rem;
        }

        .education-simple-highlights h4 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .education-simple-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .education-simple-highlight {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--gray-color);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .education-simple-highlight-icon {
          color: var(--accent-color);
          font-weight: bold;
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .education-simple-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .education-simple-card {
            padding: 30px 25px;
          }

          .education-simple-degree {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;