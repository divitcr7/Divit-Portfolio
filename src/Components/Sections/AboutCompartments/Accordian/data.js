import React from "react";
import skills from "../../../assets/Skills.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
import four from "../../../assets/4.png";
import five from "../../../assets/5.png";
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

const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div className="text-white" id="bio">
        <p>
          Hi, I'm a Software Engineer. I break things until they work.
        </p>
        <p>
          Fluent in Python, JavaScript, and apologizing to QA.
        </p>
        <p>
          My hobbies include:
        </p>
        <p>
          Writing "temporary" code that survives five years.
        </p>
        <p>
          Naming variables like foo, bar, and whyGodWhy.
        </p>
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
          <span className="small text-white">
            Aug 23 - Dec 24 (Texas, USA)
          </span>
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
            <div style={{ color: "#ccc", fontWeight: "400", fontSize: "16px", marginTop: "5px" }}>
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
            <div style={{ color: "#ccc", fontWeight: "400", fontSize: "16px", marginTop: "5px" }}>
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
            <div style={{ color: "#ccc", fontWeight: "400", fontSize: "16px", marginTop: "5px" }}>
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
            <ProjectImage
              src={two}
              alt="Advanced Banking Architecture"
              style={{ width: "90%", height: "auto", padding: "0 2px" }}
              projectKey="Advanced-Banking-Architecture---eBanking"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a
            href="https://github.com/divitcr7/Advanced-Banking-Architecture---eBanking"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <ProjectImage
              src={three}
              alt="Health Appointment Architecture"
              style={{ width: "90%", height: "auto", padding: "0 2px" }}
              projectKey="Health-Appointment-Architecture"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a
            href="https://github.com/divitcr7/Health-Appointment-Architecture"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <ProjectImage
              src={four}
              alt="Trackify"
              style={{ width: "90%", height: "auto", padding: "0 2px" }}
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
            <ProjectImage
              src={five}
              alt="Stegano-LLM"
              style={{ width: "90%", height: "auto", padding: "0 2px" }}
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
