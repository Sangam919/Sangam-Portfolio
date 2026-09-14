import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCheckCircle, FaAward, FaBrain, FaDatabase, FaServer, FaCode } from 'react-icons/fa';
import { skillCategories } from '../data/portfolio';

const SkillConstellation = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and skills based on tab and search
  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter(cat => activeTab === 'all' || cat.id === activeTab)
      .map(cat => {
        if (!searchQuery.trim()) return cat;
        const matchingSkills = cat.skills.filter(s =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.experience.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...cat, skills: matchingSkills };
      })
      .filter(cat => cat.skills.length > 0);
  }, [activeTab, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        <div className="section-line" />
        <p className="section-desc">
          Enterprise data pipelines, cloud-native lakehouses, machine learning &amp; high-performance software
        </p>
      </div>

      {/* Engineering Highlights Banner */}
      <motion.div
        className="skills-highlight-banner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="highlight-pill glass-card">
          <span className="hl-icon">⚡</span>
          <div className="hl-info">
            <strong>Production ETL</strong>
            <span>PySpark &amp; Azure Databricks</span>
          </div>
        </div>
        <div className="highlight-pill glass-card">
          <span className="hl-icon">🛡️</span>
          <div className="hl-info">
            <strong>Medallion Lakehouse</strong>
            <span>Delta Lake &amp; ADLS Gen2</span>
          </div>
        </div>
        <div className="highlight-pill glass-card">
          <span className="hl-icon">🧠</span>
          <div className="hl-info">
            <strong>Algorithm Mastery</strong>
            <span>250+ LeetCode Solved</span>
          </div>
        </div>
        <div className="highlight-pill glass-card">
          <span className="hl-icon">☁️</span>
          <div className="hl-info">
            <strong>Cloud Platform</strong>
            <span>Azure Data Factory Orchestration</span>
          </div>
        </div>
      </motion.div>

      {/* Control Bar: Tabs & Search Filter */}
      <div className="skills-control-bar">
        <div className="skills-tabs">
          <button
            className={`skills-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Stack <span className="tab-badge">{totalSkillCount}</span>
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              style={{ '--tab-accent': cat.color }}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span>{cat.name.split(' ')[0]}</span>
              <span className="tab-badge">{cat.skills.length}</span>
            </button>
          ))}
        </div>

        <div className="skills-search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search technologies (e.g. PySpark, Azure, Python)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="skills-search-input"
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Skills Category Showcase */}
      <div className="skills-grid-showcase">
        <AnimatePresence>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                className="skill-category-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                style={{ '--category-color': cat.color }}
              >
                <div className="category-header">
                  <div className="category-title-group">
                    <span className="category-icon-wrapper" style={{ borderColor: cat.color + '40', background: cat.color + '15' }}>
                      {cat.icon}
                    </span>
                    <div>
                      <h3 className="category-name">{cat.name}</h3>
                      <p className="category-desc">{cat.description}</p>
                    </div>
                  </div>
                  <span className="category-count-badge" style={{ color: cat.color, borderColor: cat.color + '40' }}>
                    {cat.skills.length} Tools
                  </span>
                </div>

                <div className="category-skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="skill-item-card"
                      style={{ '--skill-accent': cat.color }}
                    >
                      <div className="skill-item-top">
                        <span className="skill-item-name">{skill.name}</span>
                        <span className={`skill-tag-badge tag-${skill.tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                          {skill.tag}
                        </span>
                      </div>

                      {/* Proficiency bar */}
                      <div className="skill-meter-wrap">
                        <div className="skill-meter-track">
                          <motion.div
                            className="skill-meter-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 + sIdx * 0.05 }}
                            style={{
                              background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})`
                            }}
                          />
                        </div>
                        <span className="skill-meter-pct">{skill.level}%</span>
                      </div>

                      <p className="skill-exp-text">{skill.experience}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="no-skills-found glass-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No technologies found matching &ldquo;{searchQuery}&rdquo;</p>
              <button className="btn btn-outline btn-sm" onClick={() => { setSearchQuery(''); setActiveTab('all'); }}>
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillConstellation;
