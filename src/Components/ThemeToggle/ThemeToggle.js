import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { isDark, toggleTheme, isTransitioning } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isTransitioning ? 'transitioning' : ''}`}
      onClick={toggleTheme}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="terminal-prompt">$</span>
      <span className="toggle-command">
        toggle_theme --{isDark ? 'light' : 'dark'}
      </span>
      <span className="toggle-icon">
        <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon'}`}></i>
      </span>
    </button>
  );
} 