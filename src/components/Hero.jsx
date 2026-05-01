import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content reveal">
          <h1>Building <span>Dreams</span>.<br />Crafting Excellence.</h1>
          <p>Elegance in every detail. From blueprint to reality, we deliver quality, innovation, and reliability.</p>
          <div className="cta-group">
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })} 
              className="btn"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
