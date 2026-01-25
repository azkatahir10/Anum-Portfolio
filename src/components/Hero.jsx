import React from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-gradient"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span>Microsoft Certified</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🎯</span>
              <span>AI/ML Specialist</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{anumData.personal.name.split(' ')[0]}</span>
            <br />
            <span className="title-line">
              <span className="gradient-text">Data Scientist</span> & 
              <span className="gradient-text"> AI Engineer</span>
            </span>
          </h1>
          
          <p className="hero-description">
            Dual Microsoft Certified Professional specializing in Azure Cloud, 
            Machine Learning, and AI-driven analytics. Creating scalable, 
            intelligent solutions that drive business innovation.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Contact Me</span>
              <span className="btn-icon">✉️</span>
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Microsoft Certifications</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Project Success</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card">
            <div className="card-content">
              <div className="tech-icons">
                <div className="tech-icon">🐍</div>
                <div className="tech-icon">☁️</div>
                <div className="tech-icon">🧠</div>
                <div className="tech-icon">📊</div>
              </div>
              <div className="code-snippet">
                <div className="code-line"># AI Engineering Portfolio</div>
                <div className="code-line">name = "{anumData.personal.name}"</div>
                <div className="code-line">title = "{anumData.personal.title}"</div>
                <div className="code-line">certifications = {anumData.personal.certifications.length}</div>
                <div className="code-line">skills = ["Azure", "ML", "Python", "Data Science"]</div>
              </div>
            </div>
            <div className="card-floating-elements">
              <div className="floating-element element-1">Azure</div>
              <div className="floating-element element-2">ML</div>
              <div className="floating-element element-3">AI</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${theme.colors.darker};
          color: ${theme.colors.light};
          padding: 100px 0 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color) 0%, transparent 70%);
          filter: blur(40px);
          opacity: 0.2;
        }

        .bg-circle-1 {
          --color: ${theme.colors.primary};
          width: 500px;
          height: 500px;
          top: -100px;
          right: -100px;
          animation: float 20s infinite ease-in-out;
        }

        .bg-circle-2 {
          --color: ${theme.colors.secondary};
          width: 400px;
          height: 400px;
          bottom: -50px;
          left: -50px;
          animation: float 25s infinite ease-in-out reverse;
        }

        .bg-circle-3 {
          --color: ${theme.colors.accent};
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 15s infinite ease-in-out;
        }

        .bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(108, 99, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-badges {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .badge:hover {
          background: ${theme.colors.primary};
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(108, 99, 255, 0.3);
        }

        .badge-icon {
          font-size: 1.1rem;
        }

        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 30px;
        }

        .highlight {
          color: ${theme.colors.primary};
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: ${theme.colors.accent}30;
          z-index: -1;
          border-radius: 4px;
        }

        .gradient-text {
          background: ${theme.colors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .title-line {
          display: block;
          margin-top: 10px;
        }

        .hero-description {
          font-size: 1.2rem;
          color: ${theme.colors.gray};
          margin-bottom: 40px;
          line-height: 1.8;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: ${theme.colors.gradient};
          color: white;
          box-shadow: 0 10px 30px rgba(108, 99, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(108, 99, 255, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: ${theme.colors.light};
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: ${theme.colors.primary};
          transform: translateY(-3px);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 40px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat {
          text-align: center;
          flex: 1;
        }

        .stat-number {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: ${theme.colors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: ${theme.colors.gray};
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        .hero-visual {
          position: relative;
        }

        .visual-card {
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(108, 99, 255, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          max-width: 400px;
          margin: 0 auto;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .tech-icons {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          justify-content: center;
        }

        .tech-icon {
          width: 60px;
          height: 60px;
          background: rgba(108, 99, 255, 0.15);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          transition: all 0.3s ease;
        }

        .tech-icon:hover {
          background: rgba(108, 99, 255, 0.3);
          transform: translateY(-5px) scale(1.1);
        }

        .code-snippet {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.8;
          color: white;
        }

        .code-line {
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .card-floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          background: rgba(108, 99, 255, 0.1);
          color: ${theme.colors.primary};
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(108, 99, 255, 0.3);
          animation: float 10s infinite ease-in-out;
        }

        .element-1 {
          top: 20px;
          left: 20px;
          animation-delay: 0s;
        }

        .element-2 {
          top: 20px;
          right: 20px;
          animation-delay: 0.3s;
        }

        .element-3 {
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 0.6s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: ${theme.colors.gray};
          z-index: 2;
          animation: fadeIn 1s ease 1s forwards;
          opacity: 0;
        }

        .mouse {
          width: 30px;
          height: 50px;
          border: 2px solid ${theme.colors.gray};
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 10px;
        }

        .wheel {
          width: 4px;
          height: 10px;
          background: ${theme.colors.primary};
          border-radius: 2px;
          animation: scroll 2s infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-description {
            margin: 0 auto 40px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 30px;
          }

          .visual-card {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 80px 0 60px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .hero-stats {
            flex-direction: column;
            gap: 30px;
          }

          .stat-divider {
            width: 100px;
            height: 1px;
          }

          .visual-card {
            padding: 30px 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-badges {
            justify-content: center;
          }

          .badge {
            padding: 8px 16px;
            font-size: 0.85rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .tech-icons {
            gap: 15px;
          }

          .tech-icon {
            width: 50px;
            height: 50px;
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;