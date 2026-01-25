import React from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    linkedin: 'www.linkedin.com/in/anum-tahir18',
    github: 'https://github.com/anumtahir',
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923330480733';
    const message = 'Hello Anum! I came across your portfolio and wanted to connect.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main animate-in">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="logo-gradient">Anum</span>
                <span className="logo-light">Tahir</span>
              </a>
              <p className="footer-tagline">
                Transforming data into intelligent solutions through AI and cloud innovation.
              </p>
              
              {/* Social Icons Section */}
              <div className="footer-social">
                <h4>Connect With Me</h4>
                <div className="social-icons">
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon linkedin"
                    aria-label="LinkedIn"
                  >
                    <svg className="social-svg" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon github"
                    aria-label="GitHub"
                  >
                    <svg className="social-svg" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>


                  <button 
                    onClick={handleWhatsAppClick}
                    className="social-icon whatsapp"
                    aria-label="WhatsApp"
                  >
                    <svg className="social-svg" viewBox="0 0 24 24">
                      <path d="M20.11 3.89C17.89 1.7 15.07.66 12.04.66c-6.36 0-11.54 5.17-11.54 11.54 0 2.04.53 4.04 1.54 5.8L.66 23.34l5.48-1.82c1.62.88 3.41 1.34 5.22 1.34 6.36 0 11.54-5.17 11.54-11.54 0-3.03-1.16-5.89-3.24-8.03zm-8.07 16.28c-1.45 0-2.87-.39-4.1-1.14l-.3-.18-3.12.82.83-3.04-.2-.31c-.85-1.28-1.3-2.75-1.3-4.29 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.42 3.63 2.42 5.82 0 4.54-3.7 8.24-8.24 8.24zm4.54-6.17c-.25-.13-1.47-.72-1.69-.8-.23-.08-.39-.13-.56.13-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.5-.41-.42-.56-.43-.14-.01-.3-.01-.46-.01-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <div className="link-list">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#experience">Experience</a>
                  <a href="#services">Services</a>
                  <a href="#projects">Projects</a>
                  <a href="#education">Education</a>
                  <a href="#tech">Skills</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>

              <div className="link-group">
                <h4>Expertise</h4>
                <div className="link-list">
                  <span>AI & ML Solutions</span>
                  <span>Data Analytics</span>
                  <span>Azure Cloud</span>
                  <span>Automation</span>
                  <span>Data Visualization</span>
                  <span>Predictive Modeling</span>
                </div>
              </div>

              <div className="link-group">
                <h4>Quick Links</h4>
                <div className="link-list">
                  <a href="#contact">Get in Touch</a>
                  <a href="#projects">View Projects</a>
                  <a href="#experience">Work Experience</a>
                  <a href="#services">My Services</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom animate-in">
            <div className="copyright">
              © {currentYear} {anumData.personal.name}. All rights reserved.
            </div>
            
            <div className="footer-actions">
              <a href="#contact" className="action-link">
                <span className="action-icon">✉️</span>
                Contact Me
              </a>
              <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="top-icon">↑</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: ${theme.colors.darker};
          color: white;
          padding: 80px 0 40px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: ${theme.colors.gradient};
        }

        .footer-content {
          position: relative;
          z-index: 2;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          font-family: 'Poppins', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 20px;
        }

        .logo-gradient {
          background: ${theme.colors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-light {
          color: ${theme.colors.light};
        }

        .footer-tagline {
          color: ${theme.colors.gray};
          line-height: 1.7;
          font-size: 1.05rem;
          margin-bottom: 30px;
        }

        /* Social Icons Styles */
        .footer-social {
          margin-top: 30px;
        }

        .footer-social h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .social-svg {
          width: 24px;
          height: 24px;
          fill: white;
          transition: transform 0.3s ease;
        }

        .social-icon:hover .social-svg {
          transform: scale(1.2);
        }

        .linkedin:hover {
          background: #0077b5;
          border-color: #0077b5;
        }

        .github:hover {
          background: #333;
          border-color: #333;
        }

        .email:hover {
          background: #ea4335;
          border-color: #ea4335;
        }

        .whatsapp:hover {
          background: #25d366;
          border-color: #25d366;
        }

        .whatsapp-number {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(37, 211, 102, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(37, 211, 102, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .whatsapp-number:hover {
          background: rgba(37, 211, 102, 0.2);
          transform: translateX(5px);
        }

        .whatsapp-label {
          color: ${theme.colors.gray};
          font-size: 0.9rem;
        }

        .phone-number {
          color: #25d366;
          font-weight: 600;
          font-size: 1rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .link-group h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 25px;
          color: white;
        }

        .link-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .link-list a,
        .link-list span {
          color: ${theme.colors.gray};
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .link-list a:hover {
          color: ${theme.colors.primary};
          transform: translateX(5px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .copyright {
          color: ${theme.colors.gray};
          font-size: 0.95rem;
        }

        .footer-actions {
          display: flex;
          gap: 20px;
        }

        .action-link,
        .back-to-top {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 25px;
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .action-link:hover,
        .back-to-top:hover {
          background: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(108, 99, 255, 0.3);
        }

        .action-icon,
        .top-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-main {
            padding-bottom: 40px;
            margin-bottom: 40px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }

          .whatsapp-number {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-actions {
            flex-direction: column;
            width: 100%;
          }

          .action-link,
          .back-to-top {
            justify-content: center;
          }

          .social-icon {
            width: 45px;
            height: 45px;
          }

          .social-svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;