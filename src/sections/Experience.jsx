import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const domainIcons = { data: '📊', ai: '🧠', software: '💻', leadership: '🏛️' };
const domainColors = { data: '#22d3ee', ai: '#8b5cf6', software: '#3b82f6', leadership: '#f59e0b' };

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional <span className="gradient-text">Journey</span>
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="timeline-marker" style={{ borderColor: domainColors[exp.domain] }}>
              <span>{domainIcons[exp.domain]}</span>
            </div>

            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-company-row">
                    <h4 className="timeline-company">{exp.company}</h4>
                    {exp.type && <span className="timeline-type-badge">{exp.type}</span>}
                    {exp.location && <span className="timeline-location">&bull; {exp.location}</span>}
                  </div>
                </div>
                {exp.date && <span className="timeline-date">{exp.date}</span>}
              </div>

              <ul className="timeline-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.tech.map((t, j) => (
                  <span key={j} className="tech-pill" style={{ borderColor: domainColors[exp.domain] + '40' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <div className="timeline-line" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Experience;
