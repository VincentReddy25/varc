import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <img 
            src="/src/assets/logo.jpg" 
            alt="V-Arc Logo" 
            style={{ height: '40px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span className="logo-text">V-ARC <span>CONSTRUCTION</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
        <a href="#contact" className="btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get a Quote</a>
      </div>
    </nav>
  );
};

export default Navbar;
