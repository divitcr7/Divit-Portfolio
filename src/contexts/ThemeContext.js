import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Terminal-style flicker effect
    setTimeout(() => {
      setIsDark(!isDark);
      setIsTransitioning(false);
    }, 200);
  };

  useEffect(() => {
    // Apply theme classes to body
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
    
    if (isTransitioning) {
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 200);
    }
  }, [isDark, isTransitioning]);

  const value = {
    isDark,
    toggleTheme,
    isTransitioning
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 