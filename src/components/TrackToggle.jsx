import React from 'react';

const TrackToggle = ({ currentTrack, onToggle }) => {
  return (
    <div className="track-toggle">
      <button
        className={`toggle-btn ${currentTrack === 'cota' ? 'active' : ''}`}
        onClick={() => onToggle('cota')}
      >
        COTA
      </button>
      <button
        className={`toggle-btn ${currentTrack === 'indianapolis' ? 'active' : ''}`}
        onClick={() => onToggle('indianapolis')}
      >
        Indianapolis
      </button>
    </div>
  );
};

export default TrackToggle;