import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain, FaCloud } from 'react-icons/fa';

const Projects = () => {
  const [projectData, setProjectData] = useState({});

  const featuredProjects = [
    {
      id: "glioma",
      repo: "Sangam919/Gliomo-Grading-Brain-Tumor-LGG-GBM-Analysis",
      githubUrl: "https://github.com/Sangam919/Gliomo-Grading-Brain-Tumor-LGG-GBM-Analysis.git",
      title: "🧠 Glioma Grading Analysis",
      description: "Advanced clinical and genetic mutation analysis to study glioma grade patterns. Built high-accuracy ML models to classify brain tumors with extensive data preprocessing and feature engineering. 🧬",
      icon: <FaBrain />,
      color: "#06b6d4",
      tags: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      id: "azure",
      repo: "Sangam919/Azure-Transaction-Analytics-Platform",
      githubUrl: "https://github.com/Sangam919/Azure-Transaction-Analytics-Platform.git",
      title: "☁️ Azure Transaction Platform",
      description: "Scalable multi-layered data architecture for financial analytics. Implemented intelligent Lakehouse patterns using Azure Data Factory and Databricks. 💎",
      icon: <FaCloud />,
      color: "#8b5cf6",
      tags: ["Azure", "Databricks", "ADF"]
    },
    {
      id: "voice",
      repo: "Sangam919/AI-Voice-Assistant",
      githubUrl: "https://github.com/Sangam919/AI-Voice-Assistant.git",
      title: "🎙️ AI Voice Assistant",
      description: "Intelligent conversational assistant with real-time AI-powered voice and text interactions. Features neural text-to-speech pipelines and seamless language understanding. 🚀",
      icon: <FaRocket />,
      color: "#ec4899",
      tags: ["Python", "AI / LLM", "NLP"]
    }
  ];

  useEffect(() => {
    const fetchRepoData = async () => {
      const updatedData = {};
      for (const project of featuredProjects) {
        try {
          const response = await fetch(`https://api.github.com/repos/${project.repo}`);
          if (response.ok) {
            const data = await response.json();
            updatedData[project.id] = {
              language: data.language,
              // We'll prioritize our hardcoded githubUrl, but use API's as fallback
              githubUrl: project.githubUrl,
              // Only set demoUrl if it's explicitly set in github and NOT just the repo URL
              demoUrl: data.homepage && data.homepage !== "" && !data.homepage.includes('github.com') ? data.homepage : null
            };
          }
        } catch (error) {
          console.error(`Error fetching data for ${project.repo}:`, error);
        }
      }
      setProjectData(updatedData);
    };

    fetchRepoData();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <motion.span 
          className="gh-live-badge"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="pulse"></span> Live GitHub Sync
        </motion.span>
        <h2>Featured <span className="highlight">Projects</span> 🚀</h2>
        <div className="underline"></div>
        <p className="section-subtitle">A showcase of my premium technical builds and solutions</p>
      </div>

      <div className="projects-grid-v3">
        {featuredProjects.map((project, idx) => {
          const apiData = projectData[project.id];
          const primaryGitLink = project.githubUrl;
          const language = apiData?.language || project.tags[0];
          
          return (
            <motion.div 
              key={idx}
              className="project-card-v3"
              style={{ '--project-color': project.color }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Visual Side */}
              <div className="project-visual">
                <div className="project-visual-glow"></div>
                <div className="project-icon-large">
                  {project.icon}
                </div>
              </div>
              
              {/* Content Side */}
              <div className="project-info-v3">
                <div className="project-header-v3">
                  <h3>{project.title}</h3>
                </div>
                
                <p className="project-desc-v3">{project.description}</p>
                
                <div className="project-tech-v3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-pill-v3">
                      <FaCode style={{ color: project.color }} /> {tag}
                    </span>
                  ))}
                  {apiData?.language && !project.tags.includes(apiData.language) && (
                    <span className="tech-pill-v3">
                      <FaCode style={{ color: project.color }} /> {apiData.language}
                    </span>
                  )}
                </div>
                
                <div className="project-links-v3">
                  <a href={primaryGitLink} target="_blank" rel="noopener noreferrer" className="project-link-v3 link-primary">
                    <FaGithub /> View Code
                  </a>
                  {apiData?.demoUrl && (
                    <a href={apiData.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link-v3 link-secondary">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
