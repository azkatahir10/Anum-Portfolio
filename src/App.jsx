import React, { useEffect, useState } from 'react';
import './App.css';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    // Intersection Observer for section detection
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          entry.target.classList.add('section-visible');
        }
      });
    }, observerOptions);

    // Animation observer
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
      animationObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach(section => {
        sectionObserver.unobserve(section);
        animationObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Education />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;