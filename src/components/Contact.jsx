import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! Your message has been sent. We will get back to you soon.');
      e.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title reveal">
          <h2>Let's Build Together</h2>
          <div className="accent"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <p>Ready to start your next project? Get in touch with <strong>Vikram Vaddi</strong> today.</p>
            <br />
            <p><i className="fas fa-envelope color-primary" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> vikram@gmail.com</p>
            <p><i className="fas fa-phone color-primary" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> +91 8555975196</p>
            <div className="socials">
              <a href="https://www.instagram.com/varc.22/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Project Details" required></textarea>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="map-container reveal">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30842.53956806145!2d79.99236599999999!3d14.91939725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7bf12c1e4b15%3A0xf45f8db6d9c4ed6f!2sKavali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1777620729053!5m2!1sen!2sin" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="V-Arc Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
