import React from "react";
export default function Footer() {
  return (
    <div className="main_footer">
      <footer className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <p className="Footer-brand" href="/">
            find me in:
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul className="firstBar navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/divit-patidar/">
                <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
            <ul className=" navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/divitcr7">
                  @divitcr7 <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
