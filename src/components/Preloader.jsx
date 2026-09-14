import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['DATA', 'AI', 'CLOUD', 'SYSTEMS'];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => {
        if (prev >= words.length - 1) {
          clearInterval(wordInterval);
          setReady(true);
          setTimeout(() => setLoading(false), 600);
          return prev;
        }
        return prev + 1;
      });
    }, 350);

    // Safety fallback — never block more than 3s
    const safety = setTimeout(() => setLoading(false), 3000);
    return () => { clearInterval(wordInterval); clearTimeout(safety); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <div className="preloader-content">
            <motion.div
              className="preloader-init"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="preloader-label">INITIALIZING</span>
              <div className="preloader-dots">
                <span className="dot-anim" />
                <span className="dot-anim" />
                <span className="dot-anim" />
              </div>
            </motion.div>

            <div className="preloader-words">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className={`preloader-word ${i <= currentWord ? 'active' : ''}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={i <= currentWord ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <span className="pw-prefix">&gt;</span> {word}
                </motion.span>
              ))}
            </div>

            <AnimatePresence>
              {ready && (
                <motion.span
                  className="preloader-ready"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  SYSTEM READY
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
