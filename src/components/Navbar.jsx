import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personal } from '../data/portfolio';

const Navbar = ({ onOpenResume, onLogoClick, soundEngine }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => document.getElementById(l.toLowerCase()));
      let current = 'Home';
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 150) {
          current = sec.id;
        }
      });
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    soundEngine?.play('click');
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => { scrollTo('Home'); onLogoClick?.(); }} role="button" tabIndex={0} aria-label="Home">
          <span className="logo-mark">S</span>
          <span className="logo-name">SANGAM</span>
        </div>

        <div className="nav-links desktop-only">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link ${activeSection === link ? 'active' : ''}`}
              onMouseEnter={() => soundEngine?.play('hover')}
            >
              {link}
            </button>
          ))}
          <a
            href={personal.resumePath}
            download
            className="nav-resume-btn"
            onClick={(e) => { onOpenResume?.(e); }}
            onMouseEnter={() => soundEngine?.play('hover')}
          >
            Resume
          </a>
        </div>

        <button className="mobile-only nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map(link => (
              <button key={link} className="mobile-nav-link" onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}
            <a href={personal.resumePath} download className="mobile-resume-btn">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
