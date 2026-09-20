import React from 'react';

const services = [
  { icon: 'fas fa-home', title: 'Residential Construction', desc: 'Creating beautiful, functional homes tailored to your lifestyle and needs.' },
  { icon: 'fas fa-city', title: 'Commercial Construction', desc: 'Developing state-of-the-art commercial spaces that drive business success.' },
  { icon: 'fas fa-hammer', title: 'Renovations and Remodeling', desc: 'Transforming existing spaces with modern designs and superior craftsmanship.' },
  { icon: 'fas fa-tasks', title: 'Project Management', desc: 'Expert oversight ensuring projects are completed on time and within budget.' },
  { icon: 'fas fa-pencil-ruler', title: 'Design-Build Services', desc: 'Integrated design and construction services for a seamless project journey.' },
  { icon: 'fas fa-tools', title: 'Custom Home Building', desc: 'Building unique homes from the ground up, customized to your vision.' },
  { icon: 'fas fa-leaf', title: 'Green Building', desc: 'Sustainable construction practices for an eco-friendly future.' },
  { icon: 'fas fa-couch', title: 'Interior Works', desc: 'Premium interior finishing, woodwork, and aesthetic enhancements.' }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title reveal">
          <h2>Our Expertise</h2>
          <div className="accent"></div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
