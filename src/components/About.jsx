import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiZap, FiHeart } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiCode size={24} />, label: 'Years of Experience', value: '5+' },
  { icon: <FiLayers size={24} />, label: 'Projects Completed', value: '30+' },
  { icon: <FiZap size={24} />, label: 'Technologies', value: '20+' },
  { icon: <FiHeart size={24} />, label: 'Happy Clients', value: '15+' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A glimpse into who I am and what drives me
          </motion.p>
        </div>

        <div className="about-grid" ref={ref}>
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-image-frame">
              <div className="about-avatar">
                <span className="avatar-text">EJ</span>
              </div>
              <div className="image-border-glow" />
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="about-text">
              <p>
                I'm a passionate Full-Stack Developer with a knack for crafting seamless digital
                experiences. With expertise spanning both frontend and backend technologies, I
                bridge the gap between beautiful design and robust functionality.
              </p>
              <p>
                My journey in software development started with a curiosity for how things work
                and evolved into a career building scalable web applications. I thrive on challenges
                that push me to learn and grow, and I believe great software is born from the
                intersection of clean code and thoughtful design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or diving into the latest industry trends.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="highlight-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-value">{item.value}</div>
                  <div className="highlight-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
