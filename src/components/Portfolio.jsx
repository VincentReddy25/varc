import React from 'react';

const projects = [
  { 
    title: 'Modern Villa', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071' 
  },
  { 
    title: 'Skyline Plaza', 
    category: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070' 
  },
  { 
    title: 'Urban Loft', 
    category: 'Renovation', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070' 
  },
  { 
    title: 'Corporate HQ', 
    category: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069' 
  },
  { 
    title: 'Luxury Estate', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070' 
  },
  { 
    title: 'Modern Retail', 
    category: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070' 
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio" style={{ padding: '100px 0', background: '#0a0a0a' }}>
      <div className="container">
        <div className="section-title reveal">
          <h2>Featured Projects</h2>
          <div className="accent"></div>
        </div>
        <div className="portfolio-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item reveal" style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              height: '300px',
              cursor: 'pointer'
            }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
              />
              <div className="portfolio-overlay" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                padding: '2rem',
                transform: 'translateY(20px)',
                opacity: '0',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: '600' }}>{project.category}</span>
                <h3 style={{ margin: '0.5rem 0 0' }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
