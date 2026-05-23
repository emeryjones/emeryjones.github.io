import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Open Source Contributor'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Animated grid background */}
      <div className="hero-grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${(i + 1) * 5}%` }} />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${(i + 1) * 5}%` }} />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="greeting-line" />
            Hello, I'm
          </motion.p>

          <h1 className="hero-name">
            Emery <span className="name-accent">Jones</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            I craft elegant, performant, and user-centric digital experiences.
            Passionate about turning complex problems into simple, beautiful solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-neon primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work
            </a>
            <a href="#contact" className="btn-neon secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/emeryjones" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:emery@example.com" className="social-link" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <HiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
