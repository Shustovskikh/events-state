import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt="project" />
      ))}
    </div>
  );
}

export default ProjectList;
