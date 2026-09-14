import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { educationData } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <div className="section-line" />
      </div>

      <motion.div
        className="education-card glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="edu-icon">
          <FaGraduationCap />
        </div>
        <div className="edu-info">
          <h3>{educationData.school}</h3>
          <p className="edu-degree">{educationData.degree}</p>
          <div className="edu-meta">
            <span>{educationData.date}</span>
            <span className="edu-separator">•</span>
            <span className="edu-expected">{educationData.expected}</span>
            <span className="edu-separator">•</span>
            <span>{educationData.cgpa}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
