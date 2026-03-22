import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader-premium"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div
            className="pl-logo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="pl-logo-icon">
              <svg viewBox="0 0 100 100" className="pl-svg">
                <defs>
                   <linearGradient id="pl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0ea5e9'}} />
                      <stop offset="100%" style={{stopColor: '#8b5cf6'}} />
                   </linearGradient>
                   <filter id="pl-glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                         <feMergeNode in="coloredBlur"/>
                         <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                   </filter>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#pl-grad)" strokeWidth="6" strokeLinecap="round" filter="url(#pl-glow)" />
                <path d="M40 60 C 40 60, 35 45, 50 50 C 65 55, 60 40, 60 40" fill="none" stroke="url(#pl-grad)" strokeWidth="8" strokeLinecap="round" filter="url(#pl-glow)" />
              </svg>
            </div>
            
            <motion.div 
               className="pl-logo-text"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.6 }}
            >
               SANGAM
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

