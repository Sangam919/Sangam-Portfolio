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
      title: "Ciperthon 2.0 Certificate",
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
      title: "Data Engineering Intern Cert",
      issuer: "Celebal Technologies",
      icon: <FaCertificate />,
      status: "Verified",
      color: "#3b82f6",
      link: "/certificates/Celebal Certificate.pdf"
    },
    {
        title: "NPTEL Cloud Computing",
        issuer: "IIT Kharagpur",
        icon: <FaCertificate />,
        status: "Acquired",
        color: "#10b981",
        link: "/certificates/Nptel Cloud Computing.pdf"
    },
    {
        title: "Build Generative AI Apps",
        issuer: "Udemy Professional",
        icon: <FaCertificate />,
        status: "Certified",
        color: "#f59e0b",
        link: "/certificates/Build Generative Al Apps Udemy.pdf"
    },
    {
        title: "Responsive Web Design",
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

      <div className="achievements-layout">
        {/* Core Achievements Column */}
        <div className="achievements-main">
          <h3 className="sub-section-title"><FaTrophy /> Key Milestones</h3>
          <div className="achievements-grid-v2">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                className="achievement-card-v2 glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="ach-icon-box" style={{ background: `rgba(255, 255, 255, 0.05)` }}>
                   {item.icon}
                </div>
                <div className="ach-content-v2">
                  <span className="ach-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Sidebar / Panel */}
        <div className="certificates-column">
          <h3 className="sub-section-title"><FaCertificate /> Certifications</h3>
          <div className="certificates-grid-v2">
            {certificates.map((cert, idx) => (
              <motion.a 
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card-v2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                whileHover={{ x: 10 }}
                style={{ textDecoration: 'none' }}
              >
                <div className="cert-status-tag" style={{ color: cert.color }}>{cert.status}</div>
                <div className="cert-main">
                  <div className="cert-icon-v2" style={{ color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div className="cert-info-v2">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
                <div className="cert-footer-v2">
                   <span className="cert-verify">Official Credential <FaExternalLinkAlt size={10} /></span>
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
