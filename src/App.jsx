import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import LeetCodeStats from './components/LeetCodeStats';
import GitHubStats from './components/GitHubStats';
import Achievements from './components/Achievements';
import CurrentlyLearning from './components/CurrentlyLearning';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollProgress from './components/ScrollProgress';
import MouseGlow from './components/MouseGlow';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = (e) => {
    if (e) e.preventDefault();
    setIsResumeOpen(true);
  };

  const closeResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <>
      <Preloader />
      <MouseGlow />
      <ScrollProgress />
      <BackToTop />
      <Navbar onOpenResume={openResume} />

      <main className="main-content">
        <Hero onOpenResume={openResume} />
        <About />
        <Skills />
        <CurrentlyLearning />
        <Experience />
        <Projects />
        <LeetCodeStats />
        <GitHubStats />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
      
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </>
  );
}

export default App;
