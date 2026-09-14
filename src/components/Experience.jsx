import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experience } from '../data/portfolio';

const Experience = () => {
  const experiences = experience.map(e => ({
    title: e.title,
    company: e.company,
    date: e.date,
    points: e.points,
    techInfo: e.tech
  }));

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>Professional <span className="highlight">Journey</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">My professional work experience and internships</p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="exp-card glass-panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="exp-glow"></div>
            <div className="exp-content">
              <div className="exp-header">
                <div className="exp-icon-box">
                  <FaBriefcase />
                </div>
                <div className="exp-info">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="exp-date">
                  <FaCalendarAlt /> {exp.date}
                </div>
              </div>
              
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
              <div className="exp-tech-row">
                {exp.techInfo.map((tech, i) => (
                  <span key={i} className="exp-tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
