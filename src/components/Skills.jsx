import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiGraphql, SiExpress,
  SiDocker, SiGit, SiFirebase, SiFigma, SiTailwindcss,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Express', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Figma', icon: <SiFigma /> },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The tools and technologies I work with daily
          </motion.p>
        </div>

        <div className="skills-grid" ref={ref}>
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
            >
              <h3 className="category-title">{cat.title}</h3>
              <div className="category-skills">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + catIdx * 0.15 + skillIdx * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
