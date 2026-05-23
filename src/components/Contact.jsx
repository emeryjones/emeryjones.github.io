import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a project in mind, want to collaborate, or just say hello? Drop a message!
          </motion.p>
        </div>

        <div className="contact-grid" ref={ref}>
          {/* Left panel: Info & Socials */}
          <motion.div
            className="contact-info-panel glass-card"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p className="info-desc">
              I am currently open to new opportunities, freelance work, or interesting open-source collaborations. Reach out to me directly or use the contact form.
            </p>

            <div className="info-details">
              <div className="info-row">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-text">
                  <span>Email</span>
                  <a href="mailto:emeryjones.dev@gmail.com">emeryjones.dev@gmail.com</a>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-text">
                  <span>Location</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <FiMessageSquare />
                </div>
                <div className="info-text">
                  <span>Availability</span>
                  <span>Open for Opportunities</span>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                <a
                  href="https://github.com/emeryjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com/in/emeryjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="mailto:emeryjones.dev@gmail.com"
                  className="social-btn"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right panel: Contact Form */}
          <motion.div
            className="contact-form-panel glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Emery, I'd love to chat about a new project..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-neon primary btn-submit ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
