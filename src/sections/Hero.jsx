import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personal } from '../data/portfolio';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="hero-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {personal.role}
          </motion.span>

          <h1 className="hero-name">
            <span className="hero-name-first">SANGAM</span>
            <span className="hero-name-last">SRIVASTAV</span>
          </h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            className="hero-headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {personal.headline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={personal.resumePath} download className="btn btn-outline" onClick={onOpenResume}>
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-profile-container"
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-profile-glow" />
          <div className="profile-card glass-card">
            <div className="profile-img-container">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="profile-img"
              />
              <div className="profile-gradient-overlay" />
              <div className="profile-status-chip">
                <span className="status-dot" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            <div className="profile-meta">
              <h3 className="profile-meta-name">{personal.name}</h3>
              <p className="profile-meta-role">Data Engineer &bull; AI / ML</p>

            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
