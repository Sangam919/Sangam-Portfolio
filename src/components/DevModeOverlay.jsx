import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DevModeOverlay = ({ active }) => {
  const [fps, setFps] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);
  const [viewport, setViewport] = useState('');

  useEffect(() => {
    if (!active) return;

    let frames = 0;
    let lastTime = performance.now();
    let raf;

    const tick = () => {
      frames++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frames);
        frames = 0;
        lastTime = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onScroll = () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      setScrollPct(pct);
    };
    const onResize = () => setViewport(`${window.innerWidth}×${window.innerHeight}`);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onResize();
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="dev-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden="true"
        >
          <div className="dev-hud">
            <span className="dev-label">DEV MODE</span>
            <span>FPS: {fps}</span>
            <span>Scroll: {scrollPct}%</span>
            <span>Viewport: {viewport}</span>
            <span>React 18 + Three.js + Vite</span>
            <span className="dev-hint">ESC to close | ↑↑↓↓←→←→BA to toggle</span>
          </div>
          <div className="dev-scanlines" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevModeOverlay;
