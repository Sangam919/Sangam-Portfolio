import { motion } from 'framer-motion';
import { FaServer, FaRobot, FaCloud, FaStream } from 'react-icons/fa';

const CurrentlyLearning = () => {
  const learningSkills = [
    {
      title: "Distributed Systems & System Design",
      desc: "Deep-diving into high-level design patterns, CAP theorem, and building fault-tolerant systems for product-company interviews.",
      progress: 70,
      icon: <FaServer style={{ color: '#ffbd2e' }} />,
      color: "#8b5cf6"
    },
    {
      title: "RAG Pipelines & AI Data Platforms",
      desc: "Building enterprise automation using Retrieval-Augmented Generation, DBT transformations, and Databricks AI pipelines.",
      progress: 65,
      icon: <FaRobot style={{ color: '#ff5f56' }} />,
      color: "#8b5cf6"
    },
    {
      title: "Advanced Azure Cloud Architecture",
      desc: "Mastering Azure Synapse, Data Factory, Event Hubs, and cloud-native data engineering at enterprise scale.",
      progress: 60,
      icon: <FaCloud style={{ color: '#00c8ff' }} />,
      color: "#06b6d4"
    },
    {
      title: "Advanced Spark & Streaming",
      desc: "Building real-time streaming pipelines with Spark Structured Streaming and learning Delta Lake for ACID transactions.",
      progress: 55,
      icon: <FaStream style={{ color: '#27c93f' }} />,
      color: "#27c93f"
    }
  ];

  return (
    <section id="learning" className="learning-section">
      <div className="section-header">
        <h2>Currently <span className="highlight">Learning</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">Always growing — skills I'm actively developing right now</p>
      </div>

      <div className="learning-grid">
        {learningSkills.map((skill, idx) => (
          <motion.div 
            key={idx}
            className="learning-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ borderLeft: `4px solid ${skill.color}` }}
          >
            <div className="learning-card-header">
              <div className="learning-icon-box">
                {skill.icon}
              </div>
              <div className="active-badge">
                <span className="dot-v2 green"></span> ACTIVE
              </div>
            </div>

            <div className="learning-content">
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>

            <div className="learning-progress-container">
              <div className="progress-info">
                <span>Progress</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="progress-bar-bg">
                <motion.div 
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ background: skill.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;
