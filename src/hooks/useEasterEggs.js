import { useEffect, useState, useCallback, useRef } from 'react';

export default function useEasterEggs() {
  const [devMode, setDevMode] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [nightOwl, setNightOwl] = useState(false);
  const konamiRef = useRef([]);
  const logoClickRef = useRef(0);

  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

  useEffect(() => {
    // Night owl check
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) setNightOwl(true);

    const handleKeyDown = (e) => {
      konamiRef.current.push(e.key);
      if (konamiRef.current.length > KONAMI.length) {
        konamiRef.current = konamiRef.current.slice(-KONAMI.length);
      }
      if (konamiRef.current.join(',') === KONAMI.join(',')) {
        setDevMode(prev => !prev);
        konamiRef.current = [];
      }
      if (e.key === 'Escape' && devMode) {
        setDevMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [devMode]);

  const handleLogoClick = useCallback(() => {
    logoClickRef.current += 1;
    if (logoClickRef.current >= 7) {
      setGlitch(true);
      logoClickRef.current = 0;
      setTimeout(() => setGlitch(false), 1500);
    }
    // Reset counter after 3 seconds of no clicks
    setTimeout(() => { logoClickRef.current = 0; }, 3000);
  }, []);

  return { devMode, setDevMode, glitch, nightOwl, handleLogoClick };
}
