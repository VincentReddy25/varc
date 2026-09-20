import React from 'react';

const features = [
  { icon: 'fas fa-map-marked-alt', title: 'Delivering Excellence', desc: 'Consistent, premium quality across all locations.' },
  { icon: 'fas fa-calendar-check', title: 'Years of Experience', desc: 'Proven track record of successful project delivery.' },
  { icon: 'fas fa-hammer', title: 'Expert Craftsmanship', desc: 'Uncompromising attention to detail in every build.' },
  { icon: 'fas fa-clock', title: 'On-Time Completion', desc: 'Strict adherence to project timelines and milestones.' },
  { icon: 'fas fa-tags', title: 'Competitive Pricing', desc: 'Transparent and value-driven cost management.' },
  { icon: 'fas fa-cubes', title: 'High-Quality Materials', desc: 'Sourcing only the best materials for durability.' },
  { icon: 'fas fa-hard-hat', title: 'Safety First', desc: 'Rigorous safety protocols on all our sites.' },
  { icon: 'fas fa-smile', title: 'Customer Satisfaction', desc: 'Your vision and satisfaction are our top priorities.' },
  { icon: 'fas fa-lightbulb', title: 'Innovative Solutions', desc: 'Modern approaches to complex construction challenges.' },
  { icon: 'fas fa-comments', title: 'Transparent Communication', desc: 'Keeping you informed at every step of the process.' },
  { icon: 'fas fa-leaf', title: 'Sustainable Practices', desc: 'Eco-friendly building methods for a greener future.' },
  { icon: 'fas fa-handshake', title: 'Comprehensive Support', desc: 'From initial consultation to final handover.' }
];

const About = () => {
  return (
    <section id="about" className="features">
      <div className="container">
        <div className="section-title reveal">
          <h2>Why Choose Us?</h2>
          <div className="accent spaced"></div>
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
