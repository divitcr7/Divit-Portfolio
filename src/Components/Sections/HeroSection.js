import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import DraggableSnakeGame from "../DraggableSnakeGame";
import DivitCV from "../assets/Divit_CV.pdf";

export default function HeroSection() {
  return (
    <div className="MySection justify-content-center" id="profile">
      <div className=" heroSection  text-center">
        <div className="row align-items-center justify-content-between ">
          <div className="col-md-6 text-start">
            <span className="subTitle"> Hi, I am</span>
            <h1 className="Title"> Divit Patidar</h1>
            <h2 className="subTitleBottom">{">"} Software Developer </h2>
            <div className="codeHero mt-5">
              <SyntaxHighlighter language="javascript" style={dracula}>
                // complete/skip the snake game to continue website,
              </SyntaxHighlighter>
              <SyntaxHighlighter language="javascript" style={dracula}>
                // Use arrow keys to control the snake!
              </SyntaxHighlighter>

              <SyntaxHighlighter
                className="mt-2"
                language="javascript"
                style={dracula}
              >
                const githubLink = "https://github.com/divitcr7"
              </SyntaxHighlighter>
            </div>
            <div className="myLinks gap-3 d-flex mt-5">
              <a
                href={DivitCV}
                target="_blank"
                rel="noopener noreferrer"
                className="btn solidBtn solidBig"
              >
                _resume <i className="bi bi-file-earmark-person-fill"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/divit-patidar/"
                className="btn solidBtn solidBig"
              >
                _linkedIn <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-end gameToe justify-content-center d-flex">
            <DraggableSnakeGame />
          </div>
        </div>
      </div>
    </div>
  );
}
