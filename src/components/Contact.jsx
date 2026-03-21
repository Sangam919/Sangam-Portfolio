import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    // To receive emails to sangamsri555@gmail.com, 
    // This key is linked to your email via Web3Forms (verified for sangamsri555@gmail.com)
    formData.append("access_key", "73b624f1-6284-4841-8f55-70335805470b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => {
          setStatus("idle");
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Get In <span className="highlight">Touch</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">Let's build something amazing together</p>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-info glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Contact Information</h3>
          <p className="contact-desc">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:sangamsri555@gmail.com">sangamsri555@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919198880100">+91 9198880100</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <span>India</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          
          <div className="form-group">
            <input type="email" id="email" name="email" required placeholder="Your Email" />
          </div>
          
          <div className="form-group">
            <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`btn btn-primary submit-btn ${status === 'sending' ? 'loading' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'idle' && <>Send Message <FaPaperPlane className="send-icon" /></>}
            {status === 'sending' && <>Sending... <FaSpinner className="spinner-icon rotate" /></>}
            {status === 'success' && <>Sent! <FaCheckCircle className="send-icon" /></>}
            {status === 'error' && <>Retry <FaPaperPlane className="send-icon" /></>}
          </button>

          {result && (
            <motion.p 
              className={`form-result ${status}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {result}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
