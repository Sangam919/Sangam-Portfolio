import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional <span className="gradient-text">Certifications</span>
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            style={{ '--cert-color': cert.color }}
          >
            <div className="cert-accent" style={{ background: cert.color }} />
            <div className="cert-content">
              <FaCertificate className="cert-icon" style={{ color: cert.color }} />
              <div>
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                View Credential <FaExternalLinkAlt size={10} />
              </a>
            ) : (
              <span className="cert-link cert-pending">Credential on file</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
