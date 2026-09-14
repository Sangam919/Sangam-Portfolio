import { motion } from 'framer-motion';
import { personal, aboutCards } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <motion.div
          className="about-avatar-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="hologram-avatar-card glass-card">
            <div className="hologram-glow-effect" />
            <div className="avatar-img-container">
              <img
                src={personal.techAvatar}
                alt="Sangam Srivastav 3D Tech Avatar"
                className="hologram-avatar-img"
              />
              <div className="hologram-scanline-overlay" />
              <div className="hologram-status-chip">
                <span className="hologram-pulse-dot" />
                <span>AI &amp; Data Engineer Avatar</span>
              </div>
            </div>

            <div className="avatar-meta">
              <div className="avatar-tag-row">
                <span className="tech-pill">Azure &bull; Databricks</span>
                <span className="tech-pill">PySpark</span>
                <span className="tech-pill">GenAI</span>
              </div>
              <p className="avatar-tagline">
                Architecting intelligent data lakes &amp; production ML
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-intro">{personal.bio}</p>
          <p className="about-detail">
            Currently pursuing <strong>B.Tech in Computer Science and Engineering</strong> at{' '}
            <span className="text-accent">Lovely Professional University</span>{' '}
            (Class of 2027), with production-level internship experience at{' '}
            <span className="text-accent">Celebal Technologies</span> (Databricks, PySpark, ADLS) and{' '}
            <span className="text-accent">SSH Softtech Solution</span>.
          </p>
          <p className="about-detail">
            Passionate about architecting end-to-end Medallion data lakes, low-latency streaming pipelines, and productionizing intelligent machine learning workflows that create tangible business value.
          </p>
          <div className="about-status">
            <span className="status-dot" />
            <span>Targeting Data Engineering, Cloud Platform &amp; AI/ML Roles</span>
          </div>
        </motion.div>
      </div>

      <div className="about-cards-row">
        <div className="about-cards">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              className="about-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(34, 211, 238, 0.3)' }}
            >
              <span className="about-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
