import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container text-center py-5">
      {/* Header Section */}
      <header className="mb-5">
        <h1 className="display-4">Himanshu Nagose</h1>
        <p className="lead">Web Developer & DevOps Engineer</p>
        <a href="https://github.com/himanshu-nagose" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
          Visit My GitHub
        </a>
      </header>

      {/* About Me Section */}
      <section className="mb-5">
        <h2 className="h3">About Me</h2>
        <p>
          Passionate about building scalable applications and automating workflows using React, Docker, and CI/CD pipelines.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-5">
        <h2 className="h3">Projects</h2>
        <div className="row">
          <ProjectCard title="Portfolio Website" link="https://github.com/himanshu-nagose/portfolio" description="Personal portfolio showcasing my skills and projects." />
          <ProjectCard title="DevOps Pipeline" link="https://github.com/himanshu-nagose/devops-pipeline" description="Automated CI/CD pipeline using GitHub Actions and Docker." />
          <ProjectCard title="Weather App" link="https://github.com/himanshu-nagose/weather-app" description="Simple weather application using React and API integration." />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mb-5">
        <h2 className="h3">Connect with Me</h2>
        <div className="d-flex justify-content-center gap-3">
          <SocialIcon link="https://linkedin.com/in/himanshu-nagose" icon="🔗" platform="LinkedIn" />
          <SocialIcon link="https://twitter.com/himanshu_nagose" icon="🐦" platform="Twitter" />
          <SocialIcon link="https://github.com/himanshu-nagose" icon="💻" platform="GitHub" />
        </div>
      </section>

      {/* Resume Download Section */}
      <section>
        <h2 className="h3">Download My Resume</h2>
        <a href="/resume.pdf" download className="btn btn-success mt-3">
          Download Resume
        </a>
      </section>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, link, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

// Social Media Icon Component
function SocialIcon({ link, icon, platform }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
      {icon} {platform}
    </a>
  );
}

export default App;
