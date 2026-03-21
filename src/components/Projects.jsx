import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Glioma grading clinical and mutation features",
      date: "Feb 2025 - Mar 2025",
      description: "Performed EDA on clinical and genetic mutation features to study glioma grade patterns. Built machine learning models to classify benign LGG and malignant GBM brain tumors to reduce clinical screening costs through data-driven pre-diagnosis.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Logistic Regression", "KNN"],
      github: "https://github.com/Sangam919",
      demo: "#"
    },
    {
      title: "AI Voice Assistant Intelligent UI",
      date: "Aug 2024 - Oct 2024",
      description: "Developed an intelligent assistant capable of interacting through voice and text with real-time AI-powered responses. Implemented speech-to-text and neural text-to-speech pipelines. Integrated OpenAI APIs and DALL-E.",
      technologies: ["Python", "SpeechRecognition", "NLP", "OpenAI API", "DALL-E", "Neural TTS"],
      github: "https://github.com/Sangam919",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Featured <span className="highlight">Projects</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">A showcase of problems I've solved through code</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <FaGithub /> View Source
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-icon outline">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
