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
          As a Software Engineer, I've worked at various companies where i
          learnt & crafted software that's not just stashed away.
        </p>
        <p>
          * Hire me! I'm not just fluent in coding , but also in the art of
          turning coffee into code *
        </p>
        <p>Open Source? I'm building one Right Now!!!</p>
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
            Aug 23 => Dec 24 (Texas, USA)
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
          <span className="small text-white">Jul 19 => Mar 23</span>
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
                title="Benchmark Insurance Group of Texas"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Benchmark Insurance Group of Texas
              </a>
              <span style={{ color: "#ccc", fontWeight: "400" }}>
                {" "}
                • Software Developer
              </span>
            </h3>
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

        {/* Circle.ooo */}
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
                href="https://circle.ooo"
                title="Circle.ooo"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Circle.ooo
              </a>
              <span style={{ color: "#ccc", fontWeight: "400" }}>
                {" "}
                • AI Software Developer
              </span>
            </h3>
            <span
              style={{
                color: "#aaa",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              📅 10-Feb-2025 – 04-Mar-2025
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
                OpenStax – Rice University
              </a>
              <span style={{ color: "#ccc", fontWeight: "400" }}>
                {" "}
                • Graduate Software Engineering Intern
              </span>
            </h3>
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

        {/* EiqServices LLC */}
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
                href="https://eiqservices.com"
                title="EiqServices LLC (Eiq Digital)"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                EiqServices LLC (Eiq Digital)
              </a>
              <span style={{ color: "#ccc", fontWeight: "400" }}>
                {" "}
                • Software Engineer
              </span>
            </h3>
            <span
              style={{
                color: "#aaa",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              📅 29-May-2024 – 15-Aug-2024
            </span>
          </div>
        </div>

        {/* Rice University */}
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
                href="https://rice.edu"
                title="Rice University"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Rice University
              </a>
              <span style={{ color: "#ccc", fontWeight: "400" }}>
                {" "}
                • Research & Developer
              </span>
            </h3>
            <span
              style={{
                color: "#aaa",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              📅 10/2023 – 02/2024
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
                title="Footsteps LLC (Amazon DSP)"
                style={{
                  color: "#3bc0a5",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Footsteps LLC (Amazon DSP)
              </a>
              <span style={{ color: "#ccc", fontWeight: "400" }}>
                {" "}
                • Software Engineer
              </span>
            </h3>
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
    id: 7,
    title: "GitHub Stats",
    content: (
      <div
        id="github-stats"
        style={{ width: "100%", color: "white", fontFamily: "monospace" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h4 style={{ color: "#eecda3", marginBottom: "15px" }}>
            📊 GitHub Statistics
          </h4>

          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>📁 Repositories:</span>
              <span style={{ color: "#ff8c00" }}>33</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>⭐ Stars Earned:</span>
              <span style={{ color: "#ff8c00" }}>3</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>🍴 Forks:</span>
              <span style={{ color: "#ff8c00" }}>1</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>👥 Followers:</span>
              <span style={{ color: "#ff8c00" }}>14</span>
            </div>
          </div>

          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <h5 style={{ color: "#eecda3", marginBottom: "10px" }}>
              💻 Languages
            </h5>
            <div style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>TypeScript</span>
                <span style={{ color: "#3178c6" }}>8 repos</span>
              </div>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>JavaScript</span>
                <span style={{ color: "#f1e05a" }}>6 repos</span>
              </div>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Python</span>
                <span style={{ color: "#3572a5" }}>2 repos</span>
              </div>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>CSS</span>
                <span style={{ color: "#563d7c" }}>3 repos</span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <div style={{ fontSize: "12px", color: "#888" }}>
              💡 "Developer since 2019"
            </div>
          </div>

          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <a
              href="https://github.com/divitcr7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#eecda3",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              🔗 View Full GitHub Profile
            </a>
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
