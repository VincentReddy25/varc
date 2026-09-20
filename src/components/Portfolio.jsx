import React, { useState, useEffect } from 'react';

// Import project images
import project1 from '../assets/projects/1.jpeg';
import project2 from '../assets/projects/2.jpeg';
import project3 from '../assets/projects/3.jpeg';
import project4 from '../assets/projects/4.jpeg';
import project5 from '../assets/projects/5.jpeg';
import project6 from '../assets/projects/6.jpeg';
import project7 from '../assets/projects/7.jpeg';
import project8 from '../assets/projects/8.jpeg';
import project9 from '../assets/projects/9.jpeg';
import project10 from '../assets/projects/10.jpeg';
import project11 from '../assets/projects/11.jpeg';

// Fallback local images
const localProjects = [
  { image: project1 },
  { image: project2 },
  { image: project3 },
  { image: project4 },
  { image: project5 },
  { image: project6 },
  { image: project7 },
  { image: project8 },
  { image: project9 },
  { image: project10 },
  { image: project11 }
];

// Google Drive Folder ID: 1KztLZjzs4wkBh9Sa8rkuaWpZhmPJfbNz
// To make this dynamic, you'll need to deploy a Google Apps Script.
// Replace this with your deployed Google Apps Script URL.
const GDRIVE_SCRIPT_URL = ""; 

const Portfolio = () => {
  const [projects, setProjects] = useState(localProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDriveImages = async () => {
      if (!GDRIVE_SCRIPT_URL) return;
      
      setIsLoading(true);
      try {
        const response = await fetch(GDRIVE_SCRIPT_URL);
        const data = await response.json();
        
        // Map Google Drive file IDs to direct view URLs
        const driveProjects = data.map(file => ({
          image: `https://lh3.googleusercontent.com/d/${file.id}=s1600`
        }));
        
        if (driveProjects.length > 0) {
          setProjects(driveProjects);
        }
      } catch (error) {
        console.error("Error fetching images from Google Drive:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDriveImages();
  }, []);

  const visibleProjects = projects.slice(0, 8);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title reveal">
          <h2>Featured Projects</h2>
          <div className="accent"></div>
        </div>
        <div className="portfolio-grid">
          {isLoading ? (
            <div className="loading-projects">Loading projects...</div>
          ) : (
            visibleProjects.map((project, index) => (
              <div key={index} className="portfolio-item reveal">
                <img 
                  src={project.image} 
                  alt={`Project ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>
        
        {projects.length > 8 && (
          <div className="view-more-container reveal">
            <button className="btn view-more-btn" onClick={() => setIsModalOpen(true)}>
              View More Projects
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
            <h2 className="modal-title">All Projects</h2>
            <div className="modal-grid">
              {projects.map((project, index) => (
                <div key={`modal-${index}`} className="portfolio-item">
                  <img 
                    src={project.image} 
                    alt={`Project ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
