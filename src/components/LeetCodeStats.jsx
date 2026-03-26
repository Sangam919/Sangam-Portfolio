import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // using alfa-leetcode-api or a free alternative
    const fetchStats = async () => {
      try {
        let statsData = null;
        
        // Try Primary API
        try {
          const response = await fetch('https://alfa-leetcode-api.onrender.com/Sangam919/solved');
          if (response.ok) {
            const data = await response.json();
            if (data && typeof data.solvedProblem === 'number') {
              statsData = data;
            }
          }
        } catch (e) {
          console.warn("Primary API failed...");
        }

        // Try Fallback API if primary failed
        if (!statsData) {
          try {
            const backupRes = await fetch('https://leetcode-stats-api.herokuapp.com/Sangam919');
            if (backupRes.ok) {
              const bgData = await backupRes.json();
              if (bgData.status === "success") {
                statsData = {
                  solvedProblem: bgData.totalSolved,
                  easySolved: bgData.easySolved,
                  mediumSolved: bgData.mediumSolved,
                  hardSolved: bgData.hardSolved,
                  totalEasy: bgData.totalEasy || 933,
                  totalMedium: bgData.totalMedium || 2030,
                  totalHard: bgData.totalHard || 916
                };
              }
            }
          } catch(e) {
             console.warn("Secondary API failed...");
          }
        }

        if (statsData) {
          setStats(statsData);
        } else {
          throw new Error('Both public LeetCode APIs failed');
        }

      } catch (error) {
        console.warn("LeetCode APIs rate-limited. Using up-to-date offline fallback.");
        setStats({ 
          solvedProblem: 251, 
          easySolved: 94, 
          mediumSolved: 141, 
          hardSolved: 16, 
          totalEasy: 933, 
          totalMedium: 2030, 
          totalHard: 916 
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return null;

  return (
    <section id="stats" className="leetcode-section">
      <div className="section-header">
        <h2>Coding <span className="highlight">Profile</span></h2>
        <div className="underline"></div>
      </div>

      <motion.div 
        className="leetcode-card glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="lc-header">
          <SiLeetcode className="lc-logo" />
          <div className="lc-info">
            <div className="lc-live-badge"><span className="pulse"></span> Real-time Solved</div>
            <h3>LeetCode Progress</h3>
            <a href="https://leetcode.com/u/Sangam919/" target="_blank" rel="noopener noreferrer">leetcode.com/Sangam919</a>
          </div>
          <div className="lc-total">
             <span className="count">{stats?.solvedProblem || 0}</span>
             <span className="label">Solved</span>
          </div>
        </div>

        <div className="lc-rings">
          <div className="ring-container easy">
            <svg viewBox="0 0 36 36" className="circular-chart easy-color">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray={`${(stats?.easySolved / stats?.totalEasy) * 100}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="ring-text">
              <span className="diff">Easy</span>
              <span className="num">{stats?.easySolved}</span>
            </div>
          </div>
          
          <div className="ring-container medium">
            <svg viewBox="0 0 36 36" className="circular-chart medium-color">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray={`${(stats?.mediumSolved / stats?.totalMedium) * 100}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="ring-text">
              <span className="diff">Medium</span>
              <span className="num">{stats?.mediumSolved}</span>
            </div>
          </div>
          
          <div className="ring-container hard">
            <svg viewBox="0 0 36 36" className="circular-chart hard-color">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray={`${((stats?.hardSolved || 1) / (stats?.totalHard || 1)) * 100}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="ring-text">
              <span className="diff">Hard</span>
              <span className="num">{stats?.hardSolved || 0}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LeetCodeStats;
