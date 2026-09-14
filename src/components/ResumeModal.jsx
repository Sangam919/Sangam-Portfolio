import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaExternalLinkAlt, FaPrint, FaBriefcase, FaGraduationCap, FaTools, FaTrophy, FaRocket } from 'react-icons/fa';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeData = {
    name: "Sangam Srivastav",
    role: "Data Engineer & AI / ML Developer",
    summary: "Dedicated Data Engineer and AI Developer with hands-on experience in building scalable ETL pipelines (PySpark/Databricks) and intelligent AI-driven applications. Passionate about solving complex problems through data-driven architectures and production-grade ML systems.",
    contact: {
      email: "sangamsri555@gmail.com",
      phone: "+91 9198880100",
      linkedin: "linkedin.com/in/sangamsri",
      github: "github.com/Sangam919",
      location: "Jalandhar, Punjab, India",
    },
    education: [
      {
        school: "Lovely Professional University",
        degree: "B.Tech in Computer Science and Engineering",
        date: "2023 - 2027",
        details: "Focusing on Distributed Systems, Cloud Computing, and AI/ML. Current CGPA: 7.69"
      }
    ],
    experience: [
      {
        title: "Chief Operating Officer (Student Organization)",
        company: "Zenvest LPU (Part-time · On-site)",
        date: "Jan 2024 - Present",
        points: [
          "Led day-to-day operations, managed cross-functional teams, and planned technical events and student engagement initiatives.",
          "Collaborated with leadership to streamline organizational processes, oversee project delivery, and build campus partnerships.",
          "Strengthened leadership, strategic planning, project management, and stakeholder management skills."
        ]
      },
      {
        title: "AI Engineer Intern",
        company: "Infosys Springboard (Internship)",
        date: "Feb 2026 - Apr 2026",
        points: [
          "Contributed to developing an Azure-Based Demand Forecasting & Capacity Optimization System.",
          "Leveraged ML techniques for demand forecasting, including data preprocessing, feature engineering, model training, and evaluation.",
          "Gained hands-on experience with Microsoft Azure, predictive analytics, cloud technologies, and end-to-end AI/ML development."
        ]
      },
      {
        title: "Data Engineer Intern",
        company: "Celebal Technologies (Internship)",
        date: "Jun 2025 - Aug 2025",
        points: [
          "Developed data processing and transformation workflows using Python, SQL, and Apache Spark on large-scale datasets.",
          "Configured Apache Airflow DAGs for workflow orchestration and automated data pipeline execution.",
          "Integrated Azure Data Services for cloud-based data ingestion and created analytical dashboards in Power BI.",
          "Strengthened production skills in ETL/ELT pipelines, distributed processing, and cloud data architecture."
        ]
      },
      {
        title: "Full Stack Intern (ML)",
        company: "SSH SOFTTECH SOLUTION (Internship)",
        date: "May 2024 - Jul 2024",
        points: [
          "Developed full-stack web applications using React.js, Node.js, Express.js, and REST APIs with MySQL and MongoDB.",
          "Engineered Python machine learning modules with Pandas, NumPy, and Scikit-learn for automated data analysis.",
          "Collaborated across Agile development cycles spanning testing, debugging, and continuous deployment."
        ]
      }
    ],
    projects: [
      {
        title: "Azure Transaction Analytics Platform",
        desc: "Designed a production-grade Delta Lake architecture (Bronze to Gold) for processing financial transactions using ADF, Databricks, and ADLS Gen2.",
        tech: ["Azure", "PySpark", "Data Factory", "Databricks", "Delta Lake"],
        link: "https://github.com/Sangam919/Azure-Transaction-Analytics-Platform",
        demo: "https://tinyurl.com/ycyv7xd8"
      },
      {
        title: "Glioma Brain Tumor Classification",
        desc: "Developed a predictive model to classify LGG and GBM tumors using genetic & clinical mutation features. Achieved high accuracy through feature engineering and ensemble learning.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        link: "https://github.com/Sangam919/Gliomo-Grading-Brain-Tumor-LGG-GBM-Analysis"
      },
      {
        title: "Intelligent AI Voice Assistant",
        desc: "Built a fully autonomous voice assistant integrating OpenAI's GPT-4, DALL-E 3, and neural TTS pipelines for natural human-AI interaction.",
        tech: ["Python", "OpenAI APIs", "Neural TTS", "SpeechRecognition"],
        link: "https://github.com/Sangam919/AI-Voice-Assistant"
      }
    ],
    skills: {
      "Data Stack": ["Apache Spark", "Databricks", "Azure Cloud", "SQL", "ETL", "PySpark", "ADLS Gen2"],
      "AI & Frameworks": ["Machine Learning", "NLP", "LLMs", "Scikit-learn", "Pandas", "Streamlit"],
      "Core Languages": ["Python", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"]
    },
    achievements: [
      "Top 50 in Intra-University Gear-Up Hackathon (SIH Level)",
      "3rd Runner-up in Concoction 2024 Tech Hackathon",
      "Solved 250+ Problems on LeetCode (Top 10%)",
      "Celebal Technologies: Data Engineer Intern Certification",
      "IIT Kharagpur: NPTEL Cloud Computing Certificate",
      "Udemy: Build Generative AI Apps Certification",
      "FreeCodeCamp: Responsive Web Design Certification",
      "HP Foundation: AI for Beginners Certificate"
    ]
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="resume-modal-container"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 70, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Professional Actions Bar */}
            <div className="resume-floating-actions">
               <button onClick={handlePrint} className="action-circle-btn" title="Print Resume">
                  <FaPrint />
               </button>
               <a href="/resume.pdf" download className="action-circle-btn download" title="Download Original">
                  <FaDownload />
               </a>
               <button onClick={onClose} className="action-circle-btn close" title="Close View">
                  <FaTimes />
               </button>
            </div>

            <div className="resume-layout">
              {/* Header: Identity & Contact Area */}
              <header className="resume-header-v3">
                <div className="header-top-ribbon"></div>
                <div className="header-main-info">
                  <div className="name-and-title">
                    <motion.h1 
                      initial={{ x: -20, opacity: 0 }} 
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {resumeData.name}
                    </motion.h1>
                    <motion.p 
                      className="prof-title"
                      initial={{ x: -20, opacity: 0 }} 
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {resumeData.role}
                    </motion.p>
                  </div>
                  <div className="quick-contact">
                    <div className="contact-item"><FaEnvelope /> {resumeData.contact.email}</div>
                    <div className="contact-item"><FaPhone /> {resumeData.contact.phone}</div>
                    <div className="contact-item"><FaMapMarkerAlt /> {resumeData.contact.location}</div>
                  </div>
                </div>
                <div className="resume-summary-box">
                  <p>{resumeData.summary}</p>
                </div>
              </header>

              <div className="resume-content-columns">
                {/* Main Content: Experience & Projects */}
                <main className="resume-main-v3">
                  <section className="resume-block-v3">
                    <h2 className="section-title-v3"><FaBriefcase /> Experience</h2>
                    <div className="timeline-items">
                      {resumeData.experience.map((exp, i) => (
                        <div key={i} className="timeline-entry">
                          <div className="entry-point"></div>
                          <div className="entry-head">
                            <h3>{exp.title}</h3>
                            <span className="entry-location">{exp.company}</span>
                            <span className="entry-span">{exp.date}</span>
                          </div>
                          <ul className="bullet-points">
                            {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="resume-block-v3">
                    <h2 className="section-title-v3"><FaRocket /> Featured Projects</h2>
                    <div className="project-items-v3">
                      {resumeData.projects.map((proj, i) => (
                        <div key={i} className="project-card-v3">
                          <div className="proj-header-v3">
                            <h3>{proj.title}</h3>
                            {proj.link && (
                              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link-v3" title="View Source">
                                <FaGithub /> Source
                              </a>
                            )}
                            {proj.demo && (
                                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-link-v3 demo" title="Live Demo">
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            )}
                          </div>
                          <p>{proj.desc}</p>
                          <div className="project-tags-v3">
                            {proj.tech.map((t, j) => <span key={j} className="proj-tag">{t}</span>)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </main>

                {/* Sidebar: Skills, Education, Achievements */}
                <aside className="resume-sidebar-v3">
                  <section className="resume-block-v3 colored">
                    <h2 className="section-title-v3"><FaTools /> Core Skills</h2>
                    {Object.entries(resumeData.skills).map(([cat, skills], i) => (
                      <div key={i} className="sidebar-skill-group">
                        <h4>{cat}</h4>
                        <div className="skill-pills-v3">
                          {skills.map((s, j) => <span key={j} className="skill-badge">{s}</span>)}
                        </div>
                      </div>
                    ))}
                  </section>

                  <section className="resume-block-v3">
                    <h2 className="section-title-v3"><FaGraduationCap /> Education</h2>
                    {resumeData.education.map((edu, i) => (
                      <div key={i} className="sidebar-edu-item">
                        <h4>{edu.school}</h4>
                        <p className="edu-degree">{edu.degree}</p>
                        <p className="edu-meta">{edu.date}</p>
                        <p className="edu-desc">{edu.details}</p>
                      </div>
                    ))}
                  </section>

                  <section className="resume-block-v3">
                    <h2 className="section-title-v3"><FaTrophy /> Recognition</h2>
                    <ul className="awards-list">
                      {resumeData.achievements.map((ach, i) => (
                        <li key={i}>
                          <span className="award-text">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="resume-block-v3 sidebar-links">
                     <h2 className="section-title-v3"><FaExternalLinkAlt /> Connect</h2>
                     <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                        <FaLinkedin /> {resumeData.contact.linkedin}
                     </a>
                     <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                        <FaGithub /> {resumeData.contact.github}
                     </a>
                  </section>
                </aside>
              </div>
            </div>

            <footer className="resume-v3-footer">
              <p>Ready to collaborate? Let's build something exceptional.</p>
              <div className="footer-btns">
                 <a href="/resume.pdf" download className="btn btn-primary footer-dl-btn">
                   <FaDownload /> Download Original PDF
                 </a>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
