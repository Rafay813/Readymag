import React from 'react';

const GifViewer = ({ project }) => {
  if (!project) return null;

  return (
    <div className="gif-viewer">
      <img 
        src={project.gif} 
        alt={project.name}
        className="project-gif"
      />
      <div className="gif-label">{project.name}</div>
    </div>
  );
};

export default GifViewer;