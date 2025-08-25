import React from "react";
import skills from "../../../assets/Skills.png";
import "./data.css";

const CustomImage = ({ src, alt, style }) => (
  <img src={src} alt={alt} style={style} />
);

const ProjectImage = ({ src, alt, style, projectKey }) => (
  <img
    src={src}
    alt={alt}
    style={{ ...style, cursor: "pointer" }}
    onClick={() =>
      window.openProjectExplorer && window.openProjectExplorer(projectKey)
    }
    title="Click to explore project"
  />
);

const CustomProjectCard = ({
  title,
  subtitle,
  gradient,
  icon,
  projectKey,
  style,
}) => (
  <div
    style={{
      ...style,
      background: gradient,
      width: "100%",
      height: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#e2e8f0",
      textAlign: "center",
      fontFamily: "'Fira Code', monospace",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
    }}
    onClick={() =>
      window.openProjectExplorer && window.openProjectExplorer(projectKey)
    }
    title="Click to explore project"
  >
    <div style={{ fontSize: "36px", marginBottom: "12px", opacity: "0.8" }}>
      {icon}
    </div>
    <h3
      style={{
        margin: "0 0 6px 0",
        fontSize: "18px",
        fontWeight: "500",
        fontFamily: "'Fira Code', monospace",
        color: "#f1f5f9",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        margin: "0",
        fontSize: "10px",
        opacity: "0.7",
        lineHeight: "1.3",
        padding: "0 10px",
        fontFamily: "'Fira Code', monospace",
        color: "#cbd5e1",
      }}
    >
      {subtitle}
    </p>
  </div>
);

const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div className="text-white" id="bio">
        <p>Hi, I'm a Software Engineer. I break things until they work.</p>
        <p>Fluent in Python, JavaScript, and apologizing to QA.</p>
        <p>My hobbies include:</p>
        <p>Writing "temporary" code that survives five years.</p>
        <p>Naming variables like foo, bar, and whyGodWhy.</p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Education",
    content: (
      <div className="experience gap-3 d-flex row" id="education">
        <div className="d-flex row gap-2">
          <h3 style={{ color: "white", transition: "color 0.3s ease-in-out" }}>
            <a
              href="rice.edu"
              title="Rice University"
              style={{ color: "#eecda3" }}
            >
              Rice University
            </a>{" "}
            - Masters Computer Science
          </h3>
          <span className="small text-white">Aug 23 - Dec 24 (Texas, USA)</span>
        </div>
        <div className="d-flex row gap-2">
          <h3 style={{ color: "white", transition: "color 0.3s ease-in-out" }}>
            <a
              href="gitam.edu"
              title="GITAM University"
              style={{ color: "#eecda3" }}
            >
              GITAM University
            </a>{" "}
            - BTech Computer Science
          </h3>
          <span className="small text-white">Jul 19 - Mar 23</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Skills",
    content: (
      <div className="d-flex justify-content-center" id="skills">
        <CustomImage
          src={skills}
          alt="Skills"
          style={{ width: "105%", height: "auto" }}
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "experience",
    content: (
      <div className="experience" id="experience" style={{ padding: "10px 0" }}>
        {/* Benchmark Insurance Group of Texas */}
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(59, 192, 165, 0.3)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3
              style={{
                color: "white",
                margin: "0",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              <a
                href="https://benchmarkinsurance.com/"
                title="Benchmark Insurance Group"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Benchmark Insurance Group
              </a>
            </h3>
            <div
              style={{
                color: "#ccc",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "5px",
              }}
            >
              Software Developer
            </div>
            <span
              style={{
                color: "#aaa",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              📅 17-Feb-2025 – Present
            </span>
          </div>
        </div>

        {/* OpenStax – Rice University */}
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(59, 192, 165, 0.3)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3
              style={{
                color: "white",
                margin: "0",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              <a
                href="https://openstax.org"
                title="OpenStax – Rice University"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                OpenStax
              </a>
            </h3>
            <div
              style={{
                color: "#ccc",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "5px",
              }}
            >
              Graduate Software Engineering Intern
            </div>
            <span
              style={{
                color: "#aaa",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              📅 1-June-2024 – 1-Sept-2024
            </span>
          </div>
        </div>

        {/* Footsteps LLC */}
        <div
          style={{
            marginBottom: "10px",
            padding: "15px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(59, 192, 165, 0.3)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3
              style={{
                color: "white",
                margin: "0",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              <a
                href="https://logistics.amazon.com/"
                title="Amazon [Footsteps]"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Amazon [Footsteps]
              </a>
            </h3>
            <div
              style={{
                color: "#ccc",
                fontWeight: "400",
                fontSize: "16px",
                marginTop: "5px",
              }}
            >
              Software Engineer
            </div>
            <span
              style={{
                color: "#aaa",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              📅 06/2022 – 07/2023
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Projects",
    content: (
      <div className="row" id="projects" style={{ marginTop: "20px" }}>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <CustomProjectCard
              title="Pick-A-Pad"
              subtitle="Rice University Project with JLL • Next.js, Node.js, PostgreSQL"
              gradient="linear-gradient(135deg, #1e293b 0%, #334155 100%)"
              icon="🏢"
              projectKey="Pick-A-Pad"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a
            href="https://pick-a-pad.com"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-globe"></i> Visit Live Site
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <CustomProjectCard
              title="Storybook Design System"
              subtitle="UI Library with 15+ Hooks • React.js, TypeScript, Storybook"
              gradient="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
              icon="📚"
              projectKey="Storybook-Design-System"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a
            href="https://benchmark-design-system.netlify.app/?path=/docs/forms-formcontainer--docs"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-globe"></i> View Live Docs
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <CustomProjectCard
              title="Trackify"
              subtitle="Project Management App • React, Redux, Chart.js, Express, PostgreSQL"
              gradient="linear-gradient(135deg, #111827 0%, #1f2937 100%)"
              icon="📊"
              projectKey="Trackify-"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a
            href="https://github.com/divitcr7/Trackify-"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <CustomProjectCard
              title="Stegano-LLM"
              subtitle="AI-Powered Steganography Tool • Python, TensorFlow, Flask, OpenCV, NumPy"
              gradient="linear-gradient(135deg, #0c1426 0%, #1e293b 100%)"
              icon="🤖"
              projectKey="Stegano-LLM"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a
            href="https://github.com/divitcr7/Stegano-LLM"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
      </div>
    ),
  },
];

export default data;
