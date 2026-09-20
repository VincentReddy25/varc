import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title reveal">
          <h2>Let's Build Together</h2>
          <div className="accent"></div>
        </div>
        <div className="contact-content-centered">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <p className="contact-intro">Ready to start your next project? Get in touch with <strong>VIKRAM VADDI</strong> today.</p>
            <p className="contact-title">FOUNDER & MANAGING DIRECTOR (CIVIL ENGINEER)</p>
            <p className="contact-experience">10+ YEARS OF EXPERIENCE</p>
            <br />
            <p><i className="fas fa-envelope"></i> <a href="mailto:varc.construction25@gmail.com">varc.construction25@gmail.com</a></p>
            <p><i className="fas fa-phone"></i> <a href="tel:+919550243121">+91 9550243121</a></p>
            <p><i className="fas fa-map-marker-alt"></i> D.No : 10-57-82, Indra Nagar, Kalyanamandapam Road, Kavali, S.P.S.R Nellore, 524201.</p>
            <div className="socials">
              <a href="https://www.instagram.com/varc.22/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/vikram-vaddi-9a14891b0/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="map-container reveal">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.9406507362872!2d79.984543!3d14.9078045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7b7b722f7293%3A0xf955589a197f6a24!2sCVCORP%20Kavali%20Branch!5e0!3m2!1sen!2sin!4v1777883740979!5m2!1sen!2sin" 
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
