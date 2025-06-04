import "./styles.css";
import "./mobStyles.css";
import React, { useState, useEffect } from 'react';

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Pages/Home";
import CommandPalette from "./Components/CommandPalette/CommandPalette";
import ProjectExplorer from "./Components/ProjectExplorer/ProjectExplorer";
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isProjectExplorerOpen, setIsProjectExplorerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Command Palette (Ctrl+K or Cmd+K)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }

      // Navigation shortcuts (1-5)
      if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const shortcuts = {
          '1': () => scrollToTab('bio'),
          '2': () => scrollToTab('education'),
          '3': () => scrollToTab('skills'),
          '4': () => scrollToTab('experience'),
          '5': () => scrollToTab('projects')
        };
        if (shortcuts[e.key]) {
          e.preventDefault();
          shortcuts[e.key]();
        }
      }

      // Escape to scroll to top
      if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const scrollToTab = (tabName) => {
      // First scroll to about section
      const aboutSection = document.getElementById('about-me');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        
        // Then activate the tab after a short delay
        setTimeout(() => {
          const buttons = document.querySelectorAll('.list-group-item');
          buttons.forEach(button => {
            if (button.textContent.toLowerCase().includes(tabName)) {
              button.click();
            }
          });
        }, 500);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openProjectExplorer = (projectKey) => {
    setSelectedProject(projectKey);
    setIsProjectExplorerOpen(true);
  };

  const closeProjectExplorer = () => {
    setIsProjectExplorerOpen(false);
    setSelectedProject(null);
  };

  // Make project explorer function globally available
  useEffect(() => {
    window.openProjectExplorer = openProjectExplorer;
    return () => {
      delete window.openProjectExplorer;
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="BodyContainer">
        <Header />
        <Home />
        <Footer />
        
        {/* Enhanced Features */}
        <ThemeToggle />
        
        <CommandPalette 
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
        
        <ProjectExplorer
          isOpen={isProjectExplorerOpen}
          onClose={closeProjectExplorer}
          projectKey={selectedProject}
        />
        
        {/* Keyboard shortcuts indicator */}
        <div className="keyboard-shortcuts-hint">
          <span>Press <kbd>Ctrl+K</kbd> for commands, <kbd>1-5</kbd> for navigation, <kbd>Esc</kbd> to top</span>
        </div>
      </div>
    </ThemeProvider>
  );
}
