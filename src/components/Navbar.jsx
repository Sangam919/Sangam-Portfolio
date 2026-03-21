import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

const Navbar = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section based on scroll position
      const sections = NAV_LINKS.map(link => document.getElementById(link.toLowerCase()));
      let currentSection = 'Home';
      sections.forEach(sec => {
        if (sec) {
          const sectionTop = sec.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = sec.getAttribute('id');
          }
        }
      });
      setActiveSection(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleScrollToSection('Home')}>
          <div className="logo-box">
             <svg viewBox="0 0 100 100" className="logo-svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logo-grad)" strokeWidth="6" />
                <path d="M35 70 C 35 70, 30 55, 50 50 C 70 45, 65 30, 65 30" fill="none" stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" />
                <defs>
                   <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#06b6d4'}} />
                      <stop offset="100%" style={{stopColor: '#8b5cf6'}} />
                   </linearGradient>
                </defs>
             </svg>
          </div>
          <span className="logo-name">SANGAM</span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {NAV_LINKS.map(link => (
            <motion.a
              key={link}
              onClick={() => handleScrollToSection(link)}
              className={`nav-link ${activeSection === link ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.a>
          ))}
          <a href="/resume.pdf" onClick={onOpenResume} className="nav-resume-btn">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-only nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link}
                className="mobile-nav-link"
                onClick={() => handleScrollToSection(link)}
              >
                {link}
              </a>
            ))}
            <a href="/resume.pdf" onClick={onOpenResume} className="mobile-resume-btn">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
