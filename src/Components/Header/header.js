import React from "react";
// import DivitCV from "../assets/Divit_CV.pdf";
const DivitCV = "#"; // Placeholder - replace with actual resume URL
export default function Header() {
  const triggerCommandPalette = () => {
    // Trigger the keyboard event for Ctrl+K
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  return (
    <div className="main_header">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand text-color-white" href="/">
            Divit_yaar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="firstBar navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#profile"
                >
                  _profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about-me">
                  _about_me
                </a>
              </li>
            </ul>

            <ul className=" navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link active command-palette-trigger"
                  onClick={triggerCommandPalette}
                  title="Open Command Palette (Ctrl+K)"
                >
                  <i className="bi bi-command"></i>
                  _cmd
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href={DivitCV}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  _resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
