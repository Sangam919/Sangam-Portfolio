import { FaGithub, FaLinkedin, FaEnvelope, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Sangam Srivastav</h2>
          <p>Full Stack Developer & Data Engineer</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/Sangam919" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sangamsri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:sangamsri555@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://leetcode.com/u/Sangam919/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sangam Srivastav. Built with React & Vite.</p>
        <div className="visitor-badge">
           <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSangam919&countColor=%2306b6d4&style=flat" alt="Visitor Counter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
