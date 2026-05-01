import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Homeowner",
      comment: "V-Arc Construction turned our dream home into a reality. Their attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5
    },
    {
      id: 2,
      name: "Sneha Reddy",
      role: "Architect",
      comment: "As an architect, I'm very particular about execution. Vikram and his team delivered flawlessly on a very complex structural design.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Commercial Developer",
      comment: "Professional, timely, and transparent. They handled our office complex project with extreme efficiency. Highly recommended!",
      rating: 5
    }
  ];

  // Duplicate reviews to create a seamless loop
  const allReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-title reveal">
        <h2>Client Testimonials</h2>
        <div className="accent"></div>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-track">
          {allReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} className="testimonial-card">
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="comment">"{review.comment}"</p>
              <div className="client-info">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
