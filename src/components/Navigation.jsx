import React, { useState, useEffect } from 'react';
import { theme } from '../theme';

const Navigation = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'tech', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`navigation ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}
      style={{ 
        backgroundColor: scrolled ? theme.colors.darker + 'f0' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none'
      }}
    >
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="logo-gradient">Anum</span>
          <span className="logo-light">Tahir</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="nav-text">{item.label}</span>
              <span className="nav-indicator"></span>
            </a>
          ))}
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navigation.scrolled {
          padding: 15px 0;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
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

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          color: ${theme.colors.light};
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s ease;
          opacity: 0.9;
        }

        .nav-link:hover {
          color: ${theme.colors.primary};
          opacity: 1;
        }

        .nav-link.active {
          color: ${theme.colors.primary};
          opacity: 1;
        }

        .nav-link.active .nav-indicator {
          width: 100%;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: ${theme.colors.gradient};
          transition: width 0.3s ease;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: ${theme.colors.light};
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          top: 8px;
        }

        .hamburger span:nth-child(3) {
          top: 16px;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 8px;
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 8px;
        }

        @media (max-width: 1024px) {
          .mobile-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 400px;
            height: 100vh;
            background: ${theme.colors.darker};
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
          }

          .navigation.mobile-open .nav-links {
            right: 0;
          }

          .nav-link {
            font-size: 1.2rem;
            opacity: 0.8;
          }

          .nav-link:hover {
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;