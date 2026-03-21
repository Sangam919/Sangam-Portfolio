import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Solved 250+ problems on Leetcode",
      desc: "Ranked in the Top 10% globally with a focus on advanced algorithms and data structures.",
      icon: <FaAward color="#F6B21B" />,
      date: "Ongoing"
    },
    {
      title: "Gear-Up Hackathon",
      desc: "Secured a position in the Top 50 teams at the SIH Intra-University Level among 200+ teams.",
      icon: <FaTrophy color="#C0C0C0" />,
      date: "2024"
    },
    {
      title: "3rd Runner-up, Concoction 2024",
      desc: "Tech Fusion by Upgrad Campus. Won cash prize for building a data-driven AI solution.",
      icon: <FaTrophy color="#CD7F32" />,
      date: "2024"
    }
  ];

  const certificates = [
    {
      title: "Ciperthon 2.0",
      issuer: "Cipherschools",
      icon: <FaCertificate />,
      status: "Verified",
      color: "#06b6d4",
      link: "/certificates/Ciperthon 2.0.jpg"
    },
    {
      title: "AI for Beginners",
      issuer: "HP Foundation",
      icon: <FaCertificate />,
      status: "Verified",
      color: "#8b5cf6",
      link: "/certificates/AI for Beginners hp life.pdf"
    },
    {
      title: "Data Engineer Intern",
      issuer: "Celebal Technologies",
      icon: <FaCertificate />,
      status: "Verified",
      color: "#3b82f6",
      link: "/certificates/Celebal Certificate.pdf"
    },
    {
        title: "NPTEL Cloud",
        issuer: "IIT Kharagpur",
        icon: <FaCertificate />,
        status: "Acquired",
        color: "#10b981",
        link: "/certificates/Nptel Cloud Computing.pdf"
    },
    {
        title: "Generative AI",
        issuer: "Udemy",
        icon: <FaCertificate />,
        status: "Certified",
        color: "#f59e0b",
        link: "/certificates/Build Generative Al Apps Udemy.pdf"
    },
    {
        title: "Responsive Web",
        issuer: "FreeCodeCamp",
        icon: <FaCertificate />,
        status: "Verified",
        color: "#ffffff",
        link: "/certificates/Responsive design free code camp.pdf"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <h2 className="section-title">Recognition & <span className="highlight-text-v3">Certifications</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">Milestones achieved along my technical journey</p>
      </div>

      <div className="achievements-v3-container">
        {/* Top: Core Achievements (Small Grid) */}
        <div className="achievements-grid-v3">
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              className="achievement-card-v3 glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="ach-icon-v3">
                 {item.icon}
              </div>
              <div className="ach-content-v3">
                <span className="ach-date-v3">{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Certifications (Compact Grid / Matrix) */}
        <div className="certificates-section-v3">
          <h3 className="certificates-title-v3">
            <FaCertificate /> Professional Certifications
          </h3>
          <div className="certificates-matrix-v3">
            {certificates.map((cert, idx) => (
              <motion.a 
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-matrix-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: `0 10px 20px rgba(0,0,0,0.4)` }}
                style={{ borderLeftColor: cert.color }}
              >
                <div className="cert-matrix-content">
                  <div className="cert-matrix-icon" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="cert-matrix-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
                <div className="cert-matrix-hover">
                   <span>View Credential <FaExternalLinkAlt size={12} /></span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
