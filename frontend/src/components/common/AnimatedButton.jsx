import React, { useState } from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ text, onClick, className = '', disabled = false }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    if (disabled) return;
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    
    if (onClick) onClick(e);
  };

  return (
    <button
      className={`animated-button ${className} ${isAnimating ? 'animate' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="button-text">{text}</span>
      <span className="button-overlay"></span>
      <span className="button-icon">→</span>
    </button>
  );
};

export default AnimatedButton; // Default export