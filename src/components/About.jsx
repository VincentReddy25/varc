import React from 'react';

const features = [
  { icon: 'fas fa-award', title: 'Quality', desc: 'Expert craftsmanship in every detail.' },
  { icon: 'fas fa-lightbulb', title: 'Innovative', desc: 'Modern solutions for complex builds.' },
  { icon: 'fas fa-shield-halved', title: 'Reliable', desc: 'On-time completion and safety first.' },
  { icon: 'fas fa-users', title: 'Customer First', desc: 'Your satisfaction is our ultimate goal.' }
];

const About = () => {
  return (
    <section id="about" className="features">
      <div className="container">
        <div className="section-title reveal">
          <h2>Why Choose Us?</h2>
          <div className="accent"></div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item reveal">
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
