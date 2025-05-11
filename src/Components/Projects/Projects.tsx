import React from 'react';
import './Projects.css';
import gif2 from '../../assets/gif.gif';
import { projectList, type Project } from './ProjectData';

const Projects: React.FC = () => {
  return (
    <div className='projects'>
      <img src={gif2} alt="background gif" className='projects-bg' />
      <h2 className='projects-title'>My Some Projects</h2>
      <div className="projects-grid">
        {projectList.map((project: Project, idx: number) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target='_blank' rel='noopener noreferrer'>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
