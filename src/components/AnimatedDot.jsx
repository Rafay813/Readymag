// FILE: src/components/AnimatedDot.jsx
// ============================================
import React from 'react';

const AnimatedDot = ({ project, isActive, onHover, delay, trackPath }) => {
  return (
    <g
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: 'pointer' }}
    >
      {/* Main dot */}
      <circle
        r="8"
        fill={isActive ? project.color : '#FFFFFF'}
        opacity={isActive ? 1 : 0.7}
        style={{
          filter: isActive ? `drop-shadow(0 0 8px ${project.color})` : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <animateMotion
          dur="20s"
          repeatCount="indefinite"
          path={trackPath}
          begin={`${delay}s`}
        />
      </circle>
      
      {/* Outer glow ring when active */}
      {isActive && (
        <circle
          r="12"
          fill="none"
          stroke={project.color}
          strokeWidth="2"
          opacity="0.5"
        >
          <animateMotion
            dur="20s"
            repeatCount="indefinite"
            path={trackPath}
            begin={`${delay}s`}
          />
        </circle>
      )}
    </g>
  );
};

export default AnimatedDot;