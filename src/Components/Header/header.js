import React from "react";
export default function Header() {
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
                <a
                  className="nav-link active"
                  href={
                    "https://docs.google.com/document/d/1XFflapJKAkUJK-GXP4_XW4pOZ37cabFFFdAYJRTMA18/edit?usp=sharing"
                  }
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
