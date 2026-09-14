import { useState, useEffect, Suspense, lazy } from 'react';
import { useScroll } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import MouseGlow from './components/MouseGlow';
import SoundToggle from './components/SoundToggle';
import Terminal from './components/Terminal';
import DevModeOverlay from './components/DevModeOverlay';
import Hero from './sections/Hero';
import About from './sections/About';
import DataPipeline from './sections/DataPipeline';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import SkillConstellation from './sections/SkillConstellation';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import DevActivity from './sections/DevActivity';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import useSoundEngine from './hooks/useSoundEngine';
import useEasterEggs from './hooks/useEasterEggs';
import WebGLFallback from './3d/WebGLFallback';

import ResumeModal from './components/ResumeModal';

// Lazy load 3D scene
const DataCore = lazy(() => import('./3d/DataCore'));

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const soundEngine = useSoundEngine();
  const { devMode, glitch, nightOwl, handleLogoClick } = useEasterEggs();
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch { setWebglSupported(false); }

    // Terminal shortcut (backtick)
    const handleKey = (e) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
        soundEngine.play('terminalOpen');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [soundEngine]);

  // Track scroll for 3D scene
  useEffect(() => {
    return scrollYProgress.on('change', (v) => setScrollValue(v));
  }, [scrollYProgress]);

  return (
    <div className={`app ${glitch ? 'glitch-effect' : ''}`}>
      <Preloader />

      {/* 3D Background */}
      {webglSupported ? (
        <Suspense fallback={<WebGLFallback />}>
          <DataCore scrollProgress={scrollValue} />
        </Suspense>
      ) : (
        <WebGLFallback />
      )}

      <MouseGlow />
      <ScrollProgress />
      <BackToTop />
      <SoundToggle muted={soundEngine.muted} onToggle={soundEngine.toggle} />
      <DevModeOverlay active={devMode} />

      <Navbar
        onOpenResume={(e) => {
          if (e) e.preventDefault();
          setResumeOpen(true);
        }}
        onLogoClick={handleLogoClick}
        soundEngine={soundEngine}
      />

      <main className="main-content">
        <Hero nightOwl={nightOwl} />
        <About />
        <DataPipeline />
        <Experience />
        <Projects />
        <SkillConstellation />
        <Certifications />
        <Education />
        <DevActivity />
        <Contact />
      </main>

      <Footer />

      {/* Terminal toggle button */}
      <button
        className="terminal-trigger"
        onClick={() => { setTerminalOpen(true); soundEngine.play('terminalOpen'); }}
        aria-label="Open terminal"
        title="Open terminal (press ` key)"
      >
        <span>&gt;_</span>
      </button>

      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        soundEngine={soundEngine}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {nightOwl && (
        <div className="night-owl-badge" title="Late night coding session? Same.">
          🦉
        </div>
      )}
    </div>
  );
}

export default App;
