import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">
            Sangam <span className="highlight-gradient">Srivastav</span>
          </h1>
          
          <div className="hero-roles">
            <span className="i-am">I am a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Data Engineer', 2000,
                'ML Enthusiast', 2000,
                'Problem Solver', 2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <p className="hero-tagline">
            Building scalable data pipelines, intelligent AI integrations, and responsive full-stack applications to solve real-world problems. Let's create something brilliant together.
          </p>

          <div className="hero-actions">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.button
              onClick={onOpenResume}
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'transparent', cursor: 'pointer' }}
            >
              View Resume
            </motion.button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Sangam919" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/sangamsri" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://leetcode.com/u/Sangam919/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a href="mailto:sangamsri555@gmail.com"><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="blobs"></div>
          {/* using fallback avatar icon for profile picture initially */}
          <div className="profile-img-placeholder">
             <img src="/profile.jpg" alt="Sangam Srivastav" className="profile-img" />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="mouse-icon">
          <span className="wheel"></span>
        </span>
        <span className="arrow-down">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
