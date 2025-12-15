import React from 'react';
import AnimatedDot from './AnimatedDot';

const Racetrack = ({ track, projects, activeProject, onHover }) => {
  return (
    <svg 
      viewBox={track.viewBox} 
      className="racetrack-svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Track outline background */}
      <path
        d={track.path}
        fill="none"
        stroke="#333333"
        strokeWidth="40"
        opacity="0.3"
      />
      
      {/* Track center line with dashes */}
      <path
        d={track.path}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        opacity="0.6"
        strokeDasharray="20,10"
      />
      
      {/* Animated dots for each project */}
      {projects.map((project, index) => (
        <AnimatedDot
          key={project.id}
          project={project}
          isActive={activeProject === project.id}
          onHover={onHover}
          delay={index * 3.33}
          trackPath={track.path}
        />
      ))}
    </svg>
  );
};

export default Racetrack;
