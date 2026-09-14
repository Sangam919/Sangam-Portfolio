import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personal } from '../data/portfolio';

const DevActivity = () => {
  const [lcStats, setLcStats] = useState(null);
  const username = 'Sangam919';

  useEffect(() => {
    const fetchLC = async () => {
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.solvedProblem === 'number') {
            setLcStats(data);
            return;
          }
        }
      } catch { /* fallback */ }
      // Offline fallback
      setLcStats({
        solvedProblem: 251, easySolved: 94, mediumSolved: 141, hardSolved: 16,
        totalEasy: 933, totalMedium: 2030, totalHard: 916,
      });
    };
    fetchLC();
  }, []);

  const Ring = ({ solved, total, label, color }) => {
    const pct = total > 0 ? (solved / total) * 100 : 0;
    return (
      <div className="lc-ring">
        <svg viewBox="0 0 36 36" className="ring-svg">
          <path className="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path
            className="ring-fill"
            strokeDasharray={`${pct}, 100`}
            stroke={color}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="ring-label">
          <span className="ring-num">{solved}</span>
          <span className="ring-text">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="activity" className="devactivity-section">
      <div className="section-header">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Developer <span className="gradient-text">Activity</span>
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="devactivity-grid">
        {/* GitHub */}
        <motion.div
          className="devactivity-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="da-header">
            <FaGithub className="da-icon" />
            <h3>GitHub</h3>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="da-link">
              View Profile <FaExternalLinkAlt size={10} />
            </a>
          </div>
          <div className="gh-chart-container">
            <img
              src={`https://ghchart.rshah.org/22d3ee/${username}`}
              alt="GitHub Contributions"
              className="gh-chart"
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </motion.div>

        {/* LeetCode */}
        <motion.div
          className="devactivity-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="da-header">
            <SiLeetcode className="da-icon" style={{ color: '#f59e0b' }} />
            <h3>LeetCode</h3>
            <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className="da-link">
              View Profile <FaExternalLinkAlt size={10} />
            </a>
          </div>
          {lcStats && (
            <div className="lc-stats">
              <div className="lc-total">
                <span className="lc-count">{lcStats.solvedProblem}</span>
                <span className="lc-label">Problems Solved</span>
              </div>
              <div className="lc-rings">
                <Ring solved={lcStats.easySolved} total={lcStats.totalEasy} label="Easy" color="#22c55e" />
                <Ring solved={lcStats.mediumSolved} total={lcStats.totalMedium} label="Medium" color="#f59e0b" />
                <Ring solved={lcStats.hardSolved} total={lcStats.totalHard} label="Hard" color="#ef4444" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DevActivity;
