import React from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-main slide-left">
            <div className="about-card">
              <div className="about-image">
                {/* Replaced placeholder with actual image */}
                <div className="image-container">
                  <img 
                    src="public/anum.jpg" 
                    alt={anumData.personal.name}
                    className="profile-image"
                  />
                </div>
              </div>
              
              <div className="about-info">
                <h3 className="about-name">{anumData.personal.name}</h3>
                <p className="about-title">{anumData.personal.title}</p>
                <div className="about-location">
                  <span className="location-icon">📍</span>
                  {anumData.personal.location}
                </div>
                
                <div className="about-description">
                  <p>{anumData.personal.description}</p>
                </div>
                
                <div className="certifications">
                  <h4>Certifications</h4>
                  <div className="certs-grid">
                    {anumData.personal.certifications.map((cert, index) => (
                      <div key={index} className="cert-badge">
                        <span className="cert-icon">🏆</span>
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details slide-right">
            <div className="details-card">
              <h3 className="details-title">Professional Summary</h3>
              <div className="summary-list">
                {anumData.summary.map((item, index) => (
                  <div key={index} className="summary-item">
                    <span className="summary-icon">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-section">
              <h3>Languages & Interests</h3>
              <div className="languages">
                {anumData.personal.languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-proficiency">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
              
              <div className="interests">
                {anumData.personal.interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .about-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(108, 99, 255, 0.15);
        }

        .about-image {
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
        }

        .image-container {
          width: 220px;
          height: 220px;
          position: relative;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 6px solid white;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease;
        }

        .profile-image:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 50px rgba(108, 99, 255, 0.25);
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
          border-radius: 50%;
          z-index: -1;
          opacity: 0.6;
        }

        .about-name {
          font-family: 'Poppins', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: ${theme.colors.dark};
          text-align: center;
        }

        .about-title {
          color: ${theme.colors.primary};
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-align: center;
        }

        .about-location {
          display: flex;
          align-items: center;
          gap: 10px;
          color: ${theme.colors.gray};
          margin-bottom: 25px;
          font-size: 1rem;
          justify-content: center;
        }

        .location-icon {
          font-size: 1.2rem;
        }

        .about-description {
          color: ${theme.colors.gray};
          line-height: 1.8;
          margin-bottom: 30px;
          font-size: 1.05rem;
        }

        .certifications h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 20px;
          color: ${theme.colors.dark};
        }

        .certs-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .cert-badge {
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);
          border-left: 4px solid ${theme.colors.primary};
          padding: 15px 20px;
          border-radius: 0 10px 10px 0;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .cert-badge:hover {
          transform: translateX(5px);
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.15) 0%, rgba(74, 144, 226, 0.15) 100%);
        }

        .cert-icon {
          font-size: 1.5rem;
        }

        .details-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }

        .details-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 30px;
          color: ${theme.colors.dark};
          position: relative;
          padding-bottom: 15px;
        }

        .details-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: ${theme.colors.gradient};
          border-radius: 2px;
        }

        .summary-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .summary-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .summary-icon {
          color: ${theme.colors.success};
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .summary-item span:last-child {
          color: ${theme.colors.gray};
          line-height: 1.6;
        }

        .interests-section {
          background: ${theme.colors.gradientDark};
          border-radius: 20px;
          padding: 40px;
          color: white;
        }

        .interests-section h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 25px;
        }

        .languages {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .language-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .language-name {
          font-weight: 500;
        }

        .language-proficiency {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .interests {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .interest-tag {
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .interest-tag:hover {
          background: ${theme.colors.primary};
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-card,
          .details-card,
          .interests-section {
            padding: 30px 20px;
          }

          .image-container {
            width: 180px;
            height: 180px;
          }

          .about-name {
            font-size: 1.8rem;
          }

          .about-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
