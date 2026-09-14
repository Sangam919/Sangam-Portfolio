import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { projects } from '../data/portfolio';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal glass-card"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close"><FaTimes /></button>
        {project.image && (
          <div className="modal-hero-img-wrap">
            <img src={project.image} alt={project.title} className="modal-hero-img" />
            <div className="modal-img-gradient" />
          </div>
        )}
        <div className="modal-header" style={{ borderLeftColor: project.color }}>
          <div>
            <span className="modal-category" style={{ color: project.color }}>{project.category || 'Engineering Project'}</span>
            <h2>{project.title}</h2>
          </div>
          {project.badge && <span className="featured-badge">{project.badge}</span>}
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <h4>Problem &amp; Context</h4>
            <p>{project.problem}</p>
          </div>
          <div className="modal-section">
            <h4>Engineering Approach</h4>
            <p>{project.approach}</p>
          </div>
          <div className="modal-section">
            <h4>Architecture Pipeline</h4>
            <div className="architecture-flow">
              {project.architectureFlow.map((step, i) => (
                <div key={i} className="arch-step">
                  <span className="arch-node" style={{ borderColor: project.color }}>{step}</span>
                  {i < project.architectureFlow.length - 1 && (
                    <span className="arch-arrow">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <h4>Tech Stack</h4>
            <div className="modal-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-pill" style={{ borderColor: project.color + '40' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub /> View Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <div className="section-line" />
        <p className="section-desc">Production-grade data pipelines, AI models &amp; scalable cloud architectures</p>
      </div>

      {/* Sequenced featured projects showcase */}
      <div className="projects-showcase">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            className={`project-featured-card glass-card ${i % 2 === 1 ? 'reverse-layout' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            style={{ '--project-color': project.color, cursor: 'pointer' }}
          >
            <div className="featured-media">
              {project.image ? (
                <div className="featured-img-frame">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featured-project-img"
                  />
                  <div className="featured-img-overlay" />
                </div>
              ) : (
                <div className="featured-gradient" />
              )}
              <div className="featured-badges">
                {project.badge && (
                  <span className="project-type-badge">{project.badge}</span>
                )}
                {project.demo ? (
                  <span className="featured-live-badge">🟢 Live</span>
                ) : (
                  <span className="featured-arch-badge">⚡ Architecture</span>
                )}
              </div>
            </div>

            <div className="featured-info">
              <div className="featured-header-row">
                <span className="project-seq-num">0{i + 1}</span>
                <span className="project-category-tag" style={{ color: project.color, borderColor: project.color + '40' }}>
                  {project.category}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p className="featured-desc">{project.description}</p>
              
              <div className="featured-flow-preview">
                <span className="flow-title">Flow:</span>
                <div className="flow-tag-list">
                  {project.architectureFlow.slice(0, 4).map((step, k) => (
                    <span key={k} className="flow-step-tag">
                      {step} {k < 3 ? '→' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="featured-tech">
                {project.tech.map((t, j) => (
                  <span key={j} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="featured-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    onClick={e => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                <span className="details-click-hint">Architecture Details &rarr;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects grid */}
      {others.length > 0 && (
        <div className="projects-grid">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -6 }}
              style={{ '--project-color': project.color, cursor: 'pointer' }}
            >
              <div className="card-top-accent" style={{ background: project.color }} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tech">
                {project.tech.slice(0, 4).map((t, j) => (
                  <span key={j} className="tech-pill-sm">{t}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
              <span className="card-expand-hint">Click to explore →</span>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
