import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CommandPalette.css";
import DivitCV from "../assets/Divit_CV.pdf";

const commands = [
  {
    id: "bio",
    label: "Go to Bio",
    action: () => scrollToSection("bio"),
    icon: "bi-person",
  },
  {
    id: "education",
    label: "Go to Education",
    action: () => scrollToSection("education"),
    icon: "bi-mortarboard",
  },
  {
    id: "skills",
    label: "Go to Skills",
    action: () => scrollToSection("skills"),
    icon: "bi-gear",
  },
  {
    id: "experience",
    label: "Go to Experience",
    action: () => scrollToSection("experience"),
    icon: "bi-briefcase",
  },
  {
    id: "projects",
    label: "Go to Projects",
    action: () => scrollToSection("projects"),
    icon: "bi-folder",
  },
  {
    id: "game",
    label: "Open Snake Game",
    action: () => scrollToSection("profile"),
    icon: "bi-controller",
  },
  {
    id: "resume",
    label: "View Resume",
    action: () => window.open(DivitCV, "_blank"),
    icon: "bi-file-earmark-person",
  },
  {
    id: "github",
    label: "View GitHub",
    action: () => window.open("https://github.com/divitcr7"),
    icon: "bi-github",
  },
  {
    id: "linkedin",
    label: "View LinkedIn",
    action: () => window.open("https://www.linkedin.com/in/divit-patidar/"),
    icon: "bi-linkedin",
  },
  {
    id: "top",
    label: "Scroll to Top",
    action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    icon: "bi-arrow-up",
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    // If element doesn't exist, try scrolling to the accordion tab
    const buttons = document.querySelectorAll(".accordion-button, .nav-link");
    buttons.forEach((button) => {
      if (button.textContent.toLowerCase().includes(sectionId)) {
        button.click();
      }
    });
  }
};

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filteredCommands.length - 1 : prev - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
        break;
      case "Escape":
        onClose();
        break;
    }
  };

  const handleCommandClick = (command) => {
    command.action();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <AnimatePresence>
        <motion.div
          className="command-palette"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="command-palette-header">
            <i className="bi bi-search"></i>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="command-palette-input"
            />
            <span className="command-palette-shortcut">Ctrl+K</span>
          </div>

          <div className="command-palette-results">
            {filteredCommands.length === 0 ? (
              <div className="command-palette-no-results">
                No commands found
              </div>
            ) : (
              filteredCommands.map((command, index) => (
                <div
                  key={command.id}
                  className={`command-palette-item ${
                    index === selectedIndex ? "selected" : ""
                  }`}
                  onClick={() => handleCommandClick(command)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <i className={`bi ${command.icon}`}></i>
                  <span>{command.label}</span>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
