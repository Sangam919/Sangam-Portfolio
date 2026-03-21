import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Celebal Technologies",
      date: "June 2025 - August 2025",
      points: [
        "Developed scalable data pipelines using Apache Spark on Databricks integrated with Azure Data Lake Storage Gen2.",
        "Designed and optimized ETL workflows for distributed data processing.",
        "Processed large CSV datasets in Spark and joined transactional with product data to create analytical datasets.",
        "Improved performance using partitioning, caching, and schema optimization."
      ],
      techInfo: ["Python", "PySpark", "Apache Spark", "ADLS Gen2", "Azure Databricks"]
    },
    {
      title: "Full Stack Intern",
      company: "SSH Softtech Solution",
      date: "May 2024 - July 2024",
      points: [
        "Contributed to developing solution-oriented web applications aligned with business requirements.",
        "Developed and enhanced frontend components using HTML, CSS, and JavaScript.",
        "Integrated backend APIs with frontend to enable dynamic data rendering.",
        "Worked on client-server data flow and handled JSON-based request/response.",
        "Assisted in backend logic integration and database operations (CRUD, validation)."
      ],
      techInfo: ["HTML", "CSS", "JavaScript", "Backend API Integration", "JSON", "AI/ML APIs"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2>Professional <span className="highlight">Journey</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">My professional work experience and internships</p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="exp-card glass-panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="exp-glow"></div>
            <div className="exp-content">
              <div className="exp-header">
                <div className="exp-icon-box">
                  <FaBriefcase />
                </div>
                <div className="exp-info">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="exp-date">
                  <FaCalendarAlt /> {exp.date}
                </div>
              </div>
              
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
              <div className="exp-tech-row">
                {exp.techInfo.map((tech, i) => (
                  <span key={i} className="exp-tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
