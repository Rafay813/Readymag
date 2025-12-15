
// ============================================
// FILE: src/components/Leaderboard.jsx
// ============================================
import React from 'react';

const Leaderboard = ({ projects, activeProject, onHover, onClick }) => {
  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">Projects</h2>
      <div className="leaderboard-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`leaderboard-item ${activeProject === project.id ? 'active' : ''}`}
            onMouseEnter={() => onHover(project.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onClick(project.link)}
            style={{
              borderLeftColor: activeProject === project.id ? project.color : 'transparent'
            }}
          >
            <span className="position">P{index + 1}</span>
            <span className="project-name">{project.name}</span>
            <div 
              className="color-indicator"
              style={{ backgroundColor: project.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;