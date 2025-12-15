// ============================================
// FILE: src/App.jsx
// ============================================
import React, { useState } from 'react';
import Racetrack from './components/Racetrack';
import Leaderboard from './components/Leaderboard';
import GifViewer from './components/GifViewer';
import TrackToggle from './components/TrackToggle';
import { tracks } from './data/tracks';
import { projects } from './data/projects';
import './index.css';

const App = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState('cota');

  const currentTrack = tracks[selectedTrack];
  const displayProject = hoveredProject 
    ? projects.find(p => p.id === hoveredProject)
    : null;

  const handleProjectClick = (link) => {
    // Navigate to project page
    window.location.href = link;
  };

  return (
    <div className="app-container">
      <div className="track-section">
        <div className="track-header">
          <h1>Portfolio Racing</h1>
          <div className="track-name">{currentTrack.name}</div>
        </div>
        
        <Racetrack
          track={currentTrack}
          projects={projects}
          activeProject={hoveredProject}
          onHover={setHoveredProject}
        />

        <TrackToggle
          currentTrack={selectedTrack}
          onToggle={setSelectedTrack}
        />
      </div>

      <Leaderboard
        projects={projects}
        activeProject={hoveredProject}
        onHover={setHoveredProject}
        onClick={handleProjectClick}
      />

      {displayProject && <GifViewer project={displayProject} />}
    </div>
  );
};

export default App;