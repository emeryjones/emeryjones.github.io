import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'TechVanguard',
    location: 'San Francisco, CA (Hybrid)',
    period: '2024 - Present',
    description: 'Leading a team of 4 developers to architect and build a next-gen cloud orchestration dashboard. Optimizing frontend state management and API responsiveness.',
    highlights: [
      'Engineered real-time monitoring dashboard with Next.js, WebSockets, and D3.js, reducing load times by 35%.',
      'Architected robust microservices using Node.js and TypeScript, deploying on AWS ECS via Terraform.',
      'Established CI/CD pipelines with GitHub Actions, improving deployment speed and test coverage to 92%.'
    ],
    color: 'var(--neon-cyan)',
    glow: 'var(--glow-cyan)'
  },
  {
    role: 'Full-Stack Developer',
    company: 'QuantumFlow',
    location: 'Boston, MA (Remote)',
    period: '2022 - 2024',
    description: 'Developed and maintained scalable SaaS web applications. Built high-traffic RESTful APIs and modern responsive client-side interfaces.',
    highlights: [
      'Designed database schemas and optimized queries in PostgreSQL, resolving critical bottlenecks in high-volume transaction endpoints.',
      'Developed pixel-perfect interactive client features using React, Tailwind CSS, and Framer Motion.',
      'Containerized development and production environments with Docker, ensuring environment parity across teams.'
    ],
    color: 'var(--neon-purple)',
    glow: 'var(--glow-purple)'
  },
  {
    role: 'Frontend Engineer',
    company: 'AppForge Studios',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Collaborated with UI/UX designers to translate complex Figma prototypes into interactive, highly responsive component libraries.',
    highlights: [
      'Created custom reusable React components that decreased UI engineering time-to-market by 25%.',
      'Refactored legacy vanilla JS dashboards into modern component structures, improving lighthouse scores from 50 to 95+.',
      'Ensured full accessibility (WCAG AA compliance) across all main consumer-facing products.'
    ],
    color: 'var(--neon-magenta)',
    glow: 'var(--glow-magenta)'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A timeline of my professional journey in software engineering
          </motion.p>
        </div>

        <div className="timeline-container" ref={ref}>
          {/* Vertical timeline line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              {/* Timeline marker node */}
              <div
                className="timeline-node"
                style={{
                  borderColor: exp.color,
                  boxShadow: exp.glow,
                  background: 'var(--bg-primary)'
                }}
              >
                <FiBriefcase style={{ color: exp.color }} />
              </div>

              {/* Glassmorphism content card */}
              <div className={`timeline-card glass-card ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="card-header">
                  <div className="role-company">
                    <h3>{exp.role}</h3>
                    <h4>
                      <span className="company-name" style={{ color: exp.color }}>
                        {exp.company}
                      </span>
                    </h4>
                  </div>
                  <div className="meta-info">
                    <span className="info-item">
                      <FiCalendar /> {exp.period}
                    </span>
                    <span className="info-item">
                      <FiMapPin /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="card-description">{exp.description}</p>

                <ul className="card-highlights">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>
                      <span className="bullet" style={{ background: exp.color, boxShadow: exp.glow }}></span>
                      <span className="highlight-text">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
