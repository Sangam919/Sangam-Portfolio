import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiApachespark, SiDatabricks, SiPandas, SiNumpy, SiScikitlearn, SiStreamlit } from 'react-icons/si';

const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
      { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'JavaScript', icon: <span className="js-icon">JS</span> },
      { name: 'SQL', icon: <FaDatabase color="#336791" /> },
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'React', icon: <FaReact color="#61DAFB" /> },
      { name: 'HTML/CSS', icon: <FaHtml5 color="#E34F26" /> },
    ]
  },
  {
    category: "Data Science & Big Data",
    skills: [
      { name: 'Apache Spark', icon: <SiApachespark color="#E25A1C" /> },
       { name: 'PySpark', icon: <span style={{color: "#E25A1C", fontWeight: "bold", fontSize: "1.2rem", border: "2px solid #E25A1C", padding: "2px 5px", borderRadius: "5px"}}>PS</span> },
      { name: 'Databricks', icon: <SiDatabricks color="#FF3621" /> },
      { name: 'Pandas', icon: <SiPandas color="#150458" /> },
      { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn color="#F7931E" /> },
      { name: 'Azure Data Lake', icon: <FaDatabase color="#0078D4" /> },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: 'Power BI', icon: <span style={{color: "#F2C811", fontWeight: "bold"}}>PBI</span> },
      { name: 'Tableau', icon: <span style={{color: "#E97627", fontWeight: "bold"}}>TB</span> },
      { name: 'Streamlit', icon: <SiStreamlit color="#FF4B4B" /> },
      { name: 'GPT/Llama API', icon: <span>🤖</span> },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>My <span className="highlight">Toolbox</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">The technologies and tools I've mastered to bring ideas to life</p>
      </div>

      <div className="skills-container">
        {skillsData.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card glass-panel"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
                    borderColor: 'rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
