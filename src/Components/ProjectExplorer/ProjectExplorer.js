import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./ProjectExplorer.css";

const projectDetails = {
  "Storybook-Design-System": {
    name: "Storybook Design System",
    description:
      "A comprehensive UI Library with 15+ reusable hooks, featuring synced Figma design tokens to Storybook MDX docs, which halved designer-engineer hand-off time. Built as a scalable component library for modern web applications.",
    techStack: ["React.js", "TypeScript", "Storybook", "Figma", "MDX"],
    githubUrl: null,
    liveDemo:
      "https://benchmark-design-system.netlify.app/?path=/docs/forms-formcontainer--docs",
    structure: [
      { name: "README.md", type: "file" },
      { name: "package.json", type: "file" },
      { name: "tsconfig.json", type: "file" },
      {
        name: ".storybook",
        type: "folder",
        children: [
          { name: "main.js", type: "file" },
          { name: "preview.js", type: "file" },
          { name: "manager.js", type: "file" },
        ],
      },
      {
        name: "src",
        type: "folder",
        children: [
          { name: "components", type: "folder" },
          { name: "hooks", type: "folder" },
          { name: "tokens", type: "folder" },
          { name: "stories", type: "folder" },
          { name: "utils", type: "folder" },
        ],
      },
      {
        name: "design-tokens",
        type: "folder",
        children: [
          { name: "colors.json", type: "file" },
          { name: "typography.json", type: "file" },
          { name: "spacing.json", type: "file" },
        ],
      },
    ],
    stats: { stars: 28, forks: 8, language: "TypeScript" },
  },
  "Trackify-": {
    name: "Trackify",
    description:
      "A comprehensive tracking application for managing projects, tasks, and productivity metrics.",
    techStack: ["React", "Redux", "Chart.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/divitcr7/Trackify-",
    liveDemo: null,
    structure: [
      { name: "README.md", type: "file" },
      { name: "package.json", type: "file" },
      {
        name: "client",
        type: "folder",
        children: [
          { name: "src", type: "folder" },
          { name: "public", type: "folder" },
        ],
      },
      {
        name: "server",
        type: "folder",
        children: [
          { name: "routes", type: "folder" },
          { name: "models", type: "folder" },
          { name: "config", type: "folder" },
        ],
      },
    ],
    stats: { stars: 20, forks: 12, language: "JavaScript" },
  },
  "Stegano-LLM": {
    name: "Stegano-LLM",
    description:
      "An innovative steganography tool powered by Large Language Models for secure data hiding.",
    techStack: ["Python", "TensorFlow", "Flask", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/divitcr7/Stegano-LLM",
    liveDemo: null,
    structure: [
      { name: "README.md", type: "file" },
      { name: "requirements.txt", type: "file" },
      {
        name: "src",
        type: "folder",
        children: [
          { name: "models", type: "folder" },
          { name: "utils", type: "folder" },
          { name: "api", type: "folder" },
          { name: "main.py", type: "file" },
        ],
      },
      { name: "tests", type: "folder" },
      { name: "data", type: "folder" },
    ],
    stats: { stars: 25, forks: 10, language: "Python" },
  },
};

const FileIcon = ({ type, name }) => {
  if (type === "folder") return <i className="bi bi-folder text-warning"></i>;

  const extension = name.split(".").pop();
  switch (extension) {
    case "js":
      return <i className="bi bi-filetype-js text-warning"></i>;
    case "json":
      return <i className="bi bi-filetype-json text-info"></i>;
    case "md":
      return <i className="bi bi-markdown text-light"></i>;
    case "py":
      return <i className="bi bi-filetype-py text-primary"></i>;
    case "txt":
      return <i className="bi bi-filetype-txt text-secondary"></i>;
    default:
      return <i className="bi bi-file-earmark text-light"></i>;
  }
};

const FileTree = ({ items, level = 0 }) => {
  return (
    <div className="file-tree">
      {items.map((item, index) => (
        <div
          key={index}
          className="file-tree-item"
          style={{ paddingLeft: `${level * 20 + 10}px` }}
        >
          <div className="file-tree-content">
            <FileIcon type={item.type} name={item.name} />
            <span className="file-name">{item.name}</span>
          </div>
          {item.children && (
            <FileTree items={item.children} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
};

export default function ProjectExplorer({ isOpen, onClose, projectKey }) {
  if (!isOpen || !projectKey) return null;

  const project = projectDetails[projectKey];
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="project-explorer-overlay" onClick={handleOverlayClick}>
      <AnimatePresence>
        <motion.div
          className="project-explorer-modal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-explorer-header">
            <div className="project-explorer-title">
              <i className="bi bi-folder-open"></i>
              <span>{project.name}</span>
            </div>
            <button className="project-explorer-close" onClick={onClose}>
              <i className="bi bi-x"></i>
            </button>
          </div>

          <div className="project-explorer-content">
            <div className="project-explorer-sidebar">
              <div className="explorer-section">
                <h4>Explorer</h4>
                <FileTree items={project.structure} />
              </div>
            </div>

            <div className="project-explorer-main">
              <div className="project-details">
                <div className="project-stats">
                  <div className="stat-item">
                    <i className="bi bi-star"></i>
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-diagram-3"></i>
                    <span>{project.stats.forks}</span>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-code-slash"></i>
                    <span>{project.stats.language}</span>
                  </div>
                </div>

                <div className="project-description">
                  <h3>About</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-tech-stack">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack-items">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-readme">
                  <h3>README.md</h3>
                  <SyntaxHighlighter
                    language="markdown"
                    style={dracula}
                    customStyle={{
                      background: "var(--border)",
                      border: "1px solid var(--border)",
                      borderRadius: "4px",
                    }}
                  >
                    {`# ${project.name}

${project.description}

## Technologies Used
${project.techStack.map((tech) => `- ${tech}`).join("\n")}

## Getting Started
\`\`\`bash
npm install
npm start
\`\`\`

## Features
- Modern architecture
- Responsive design
- Security focused
- Performance optimized`}
                  </SyntaxHighlighter>
                </div>

                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn solidBtn"
                    >
                      <i className="bi bi-github"></i>
                      View on GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        project.githubUrl ? "btn outlinebtn" : "btn solidBtn"
                      }
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
