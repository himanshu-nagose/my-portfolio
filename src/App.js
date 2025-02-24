import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container text-center py-5 bg-dark text-white">
      {/* Header Section */}
      <motion.header className="mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-3 fw-bold gradient-text">Himanshu Nagose</h1>
        <p className="lead">Web Developer & DevOps Engineer</p>
        <motion.a href="https://github.com/himanshu-nagose" target="_blank" rel="noopener noreferrer"
          className="btn btn-primary btn-lg mt-3 shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Visit My GitHub
        </motion.a>
      </motion.header>

      {/* About Me Section */}
      <Section title="About Me" content="I'm a passionate Web Developer and DevOps Engineer skilled in building scalable applications, managing cloud deployments, and automating workflows." />

      {/* Projects Section */}
      <section className="mb-5">
        <h2 className="display-5 mb-4">Projects</h2>
        <div className="row">
          <ProjectCard title="Portfolio Website" link="https://github.com/himanshu-nagose/portfolio" description="A modern portfolio showcasing my skills and projects." />
          <ProjectCard title="DevOps Pipeline" link="https://github.com/himanshu-nagose/devops-pipeline" description="Automated CI/CD pipeline using GitHub Actions and Docker." />
          <ProjectCard title="Weather App" link="https://github.com/himanshu-nagose/weather-app" description="React-based weather app with live API integration." />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mb-5">
        <h2 className="display-5 mb-4">Connect with Me</h2>
        <div className="d-flex justify-content-center gap-3">
          <SocialIcon link="https://linkedin.com/in/himanshu-nagose" icon="🔗" platform="LinkedIn" />
          <SocialIcon link="https://twitter.com/himanshu_nagose" icon="🐦" platform="Twitter" />
          <SocialIcon link="https://github.com/himanshu-nagose" icon="💻" platform="GitHub" />
        </div>
      </section>

      {/* Resume Download Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="display-5 mb-3">Download My Resume</h2>
        <a href="/resume.pdf" download className="btn btn-success btn-lg shadow" whileHover={{ scale: 1.1 }}>
          Download Resume
        </a>
      </motion.section>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <motion.section className="mb-5"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="display-5 mb-3">{title}</h2>
      <p className="fs-5">{content}</p>
    </motion.section>
  );
}

function ProjectCard({ title, link, description }) {
  return (
    <motion.div className="col-md-4 mb-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card h-100 shadow-lg">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ link, icon, platform }) {
  return (
    <motion.a href={link} target="_blank" rel="noopener noreferrer"
      className="btn btn-outline-secondary"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon} {platform}
    </motion.a>
  );
}

export default App;
