import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // You can replace these with real recommendations later
  const testimonials = [
    {
      id: 1,
      name: "Mentor @ Celebal Tech",
      role: "Senior Data Engineer",
      text: "Sangam showed exceptional dedication during his internship. He quickly grasped complex Databricks pipelines and consistently delivered optimized code. His problem-solving abilities are a huge asset.",
      image: "https://ui-avatars.com/api/?name=Mentor+CT&background=0A0F1C&color=06b6d4"
    },
    {
      id: 2,
      name: "Project Lead @ SSH Softtech",
      role: "Full Stack Developer",
      text: "A highly motivated intern who didn't just write code, but worked to understand the business requirements. Sangam is adapting, communicative, and ready for full-time challenges.",
      image: "https://ui-avatars.com/api/?name=Lead+SSH&background=0A0F1C&color=8b5cf6"
    },
    {
      id: 3,
      name: "Hackathon Teammate",
      role: "LPU Student",
      text: "Working with Sangam under pressure during the Gear-Up Hackathon was amazing. He handles backend logic flawlessly and has an eye for aesthetic UI implementation.",
      image: "https://ui-avatars.com/api/?name=Team+Mate&background=0A0F1C&color=f1f5f9"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>What People <span className="highlight">Say</span></h2>
        <div className="underline"></div>
      </div>

      <div className="carousel-container">
        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="carousel-content glass-panel">
          <FaQuoteLeft className="quote-icon" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="testimonial-card"
            >
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <div className="testimonial-author">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                <div className="author-info">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <span>{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
