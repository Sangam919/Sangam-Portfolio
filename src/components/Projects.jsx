import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain, FaCloud, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const [projectData, setProjectData] = useState({});

  const featuredProjects = [
    {
      id: "glioma",
      repo: "Sangam919/Gliomo-Grading-Brain-Tumor-LGG-GBM-Analysis",
      title: "🧠 Glioma Grading Analysis",
      date: "Feb 2025 - Mar 2025",
      description: "Advanced clinical and genetic mutation analysis to study glioma grade patterns. Built high-accuracy ML models to classify brain tumors. 🧬",
      icon: <FaBrain />,
      color: "#06b6d4"
    },
    {
      id: "azure",
      repo: "Sangam919/Azure-Transaction-Analytics-Platform",
      title: "☁️ Azure Transaction Platform",
      date: "Oct 2024 - Dec 2024",
      description: "Scalable multi-layered data architecture for financial analytics. Implemented Lakehouse patterns using ADF and Databricks. 💎",
      icon: <FaCloud />,
      color: "#8b5cf6"
    },
    {
      id: "voice",
      repo: "Sangam919/AI-Voice-Assistant",
      title: "🎙️ AI Voice Assistant",
      date: "Aug 2024 - Oct 2024",
      description: "Intelligent assistant with real-time AI-powered voice and text interactions. Features neural text-to-speech pipelines. 🚀",
      icon: <FaRocket />,
      color: "#ec4899"
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
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language,
              githubUrl: data.html_url,
              demoUrl: data.homepage || data.html_url
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
        <p className="section-subtitle">Real-time repository data fetched directly from GitHub API</p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project, idx) => {
          const apiData = projectData[project.id];
          
          return (
            <motion.div 
              key={idx}
              className="project-card-v2 glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-card-glow" style={{ background: `radial-gradient(circle at top right, ${project.color}15, transparent)` }}></div>
              
              <div className="project-content-v2">
                <div className="project-icon-top" style={{ color: project.color }}>
                  {project.icon}
                </div>
                
                <div className="project-header-v2">
                  <h3>{project.title}</h3>
                  <div className="project-meta-v2">
                    <span className="project-date-v2">{project.date}</span>
                    {apiData && (
                      <div className="project-stats-v2">
                        <span><FaStar /> {apiData.stars}</span>
                        <span><FaCodeBranch /> {apiData.forks}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="project-desc-v2">{project.description}</p>
                
                <div className="project-tech-v2">
                  <span className="tech-tag">
                    <FaCode /> {apiData?.language || "Loading..."}
                  </span>
                  <span className="tech-tag">
                    <FaCode /> GitHub Repo
                  </span>
                </div>
                
                <div className="project-links-v2">
                  <a href={apiData?.githubUrl || "#"} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    <FaGithub /> Repo
                  </a>
                  <a href={apiData?.demoUrl || "#"} target="_blank" rel="noopener noreferrer" className="project-link-btn highlight">
                    <FaExternalLinkAlt /> Demo
                  </a>
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
