import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'CloudSync Dashboard',
    description: 'A real-time analytics dashboard for cloud infrastructure monitoring with live data visualization, alerting, and team collaboration features.',
    tech: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'AWS'],
    image: null,
    gradient: 'linear-gradient(135deg, #0a2a3c, #0d3d56)',
    github: '#',
    live: '#',
  },
  {
    title: 'Nexus Commerce',
    description: 'Full-stack e-commerce platform with AI-powered product recommendations, Stripe payments, inventory management, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    image: null,
    gradient: 'linear-gradient(135deg, #1a0a2e, #2d1b4e)',
    github: '#',
    live: '#',
  },
  {
    title: 'DevFlow CLI',
    description: 'Command-line tool for automating development workflows—scaffolding projects, managing environments, and deploying with a single command.',
    tech: ['Python', 'Click', 'Docker', 'GitHub Actions'],
    image: null,
    gradient: 'linear-gradient(135deg, #0a1a0a, #1a2e1a)',
    github: '#',
    live: '#',
  },
  {
    title: 'Pulse Social',
    description: 'Real-time social media platform with live messaging, content feeds, notification system, and rich media sharing capabilities.',
    tech: ['React', 'Firebase', 'Tailwind', 'WebRTC'],
    image: null,
    gradient: 'linear-gradient(135deg, #2a0a1a, #3d1a2d)',
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A selection of projects I've built and contributed to
          </motion.p>
        </div>

        <div className="projects-grid" ref={ref}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-preview" style={{ background: project.gradient }}>
                <div className="preview-content">
                  <div className="preview-window">
                    <div className="window-dots">
                      <span /><span /><span />
                    </div>
                    <div className="window-code">
                      <span className="code-line"><span className="code-keyword">const</span> {project.title.replace(/\s/g, '').toLowerCase()} = {'{'}</span>
                      <span className="code-line">  <span className="code-prop">status</span>: <span className="code-string">"production"</span>,</span>
                      <span className="code-line">  <span className="code-prop">users</span>: <span className="code-number">10_000</span>+</span>
                      <span className="code-line">{'}'};</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label="GitHub">
                    <FiGithub size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="project-link" aria-label="Live Demo">
                    <FiExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
