import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personal } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{personal.name}</h3>
          <p>Data Engineer | AI & Automation | Cloud Data Platforms</p>
        </div>
        <div className="footer-socials">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${personal.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {personal.name}. Engineered with precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
