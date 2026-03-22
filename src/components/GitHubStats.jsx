import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const GitHubStats = () => {
  const username = "Sangam919";
  
  // Cache-busting timestamp to force the browser to load live, updated stats
  const [timestamp] = useState(new Date().getTime());

  // Classic GitHub Green/Grey themes
  const statsCards = [
    {
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=github_dark&hide_border=true&bg_color=0d1117&title_color=2ea44f&icon_color=2ea44f&text_color=94a3b8&cache_seconds=1800&v=${timestamp}`,
      alt: "GitHub General Stats"
    },
    {
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=github_dark&hide_border=true&bg_color=0d1117&title_color=2ea44f&text_color=94a3b8&cache_seconds=1800&v=${timestamp}`,
      alt: "Top Languages"
    },
    {
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=github_dark&hide_border=true&background=0d1117&stroke=2ea44f&ring=2ea44f&fire=2ea44f&currStreakLabel=2ea44f&v=${timestamp}`,
      alt: "GitHub Streak Stats"
    }
  ];

  return (
    <section id="github" className="github-section">
      <div className="section-header">
        <motion.div 
          className="gh-live-badge"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="pulse"></span> Live GitHub Sync
        </motion.div>
        <h2>GitHub <span className="highlight-green">Activity</span></h2>
        <div className="underline green-underline"></div>
        <p className="section-subtitle">Real-time repository insights and coding activity</p>
      </div>

      <div className="gh-container-v2">
        <motion.div 
          className="gh-cards-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {statsCards.map((card, idx) => (
            <div key={idx} className="gh-card-wrapper glass-panel">
              <img src={card.url} alt={card.alt} className="gh-stats-img" />
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="gh-graph-v2 glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="gh-graph-header">
            <h3>Contribution Graph</h3>
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="gh-link-green">
              View Profile <FaExternalLinkAlt />
            </a>
          </div>
          <div className="gh-graph-img-container">
            <img 
              src={`https://ghchart.rshah.org/2ea44f/${username}?v=${timestamp}`} 
              alt="GitHub Contributions" 
              className="gh-chart-img-v2"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStats;
