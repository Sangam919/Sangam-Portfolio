import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { personal } from '../data/portfolio';

const Contact = () => {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.target);
    formData.append('access_key', personal.web3formsKey);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setResult('Message sent successfully!');
        event.target.reset();
        setTimeout(() => { setStatus('idle'); setResult(''); }, 5000);
      } else {
        setStatus('error');
        setResult(data.message || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Build Something <span className="gradient-text">Intelligent</span>
        </motion.h2>
        <div className="section-line" />
        <p className="section-desc">
          Open to opportunities in Data Engineering, AI/ML, and Software Engineering.
        </p>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-card glass-card">
            <FaLinkedin className="contact-link-icon" style={{ color: '#0077B5' }} />
            <div>
              <h4>LinkedIn</h4>
              <span>Let's connect</span>
            </div>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-link-card glass-card">
            <FaGithub className="contact-link-icon" />
            <div>
              <h4>GitHub</h4>
              <span>View my code</span>
            </div>
          </a>
          <a href={`mailto:${personal.email}`} className="contact-link-card glass-card">
            <FaEnvelope className="contact-link-icon" style={{ color: '#22d3ee' }} />
            <div>
              <h4>Email</h4>
              <span>{personal.email}</span>
            </div>
          </a>
          <a href={personal.resumePath} download className="contact-link-card glass-card">
            <FaDownload className="contact-link-icon" style={{ color: '#8b5cf6' }} />
            <div>
              <h4>Resume</h4>
              <span>Download PDF</span>
            </div>
          </a>
        </motion.div>

        <motion.form
          className="contact-form glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <input type="text" name="name" required placeholder="Your Name" id="contact-name" aria-label="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" name="email" required placeholder="Your Email" id="contact-email" aria-label="Your Email" />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" required placeholder="Your Message" id="contact-message" aria-label="Your Message" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'idle' && <><FaPaperPlane /> Send Message</>}
            {status === 'sending' && <><FaSpinner className="spin" /> Sending...</>}
            {status === 'success' && <><FaCheckCircle /> Sent!</>}
            {status === 'error' && <><FaPaperPlane /> Retry</>}
          </button>
          {result && <p className={`form-result ${status}`}>{result}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
