import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TicTacToe from "../TikTok";

export default function HeroSection() {
  return (
    <div className="MySection justify-content-center" id="profile">
      <div className=" heroSection  text-center">
        <div className="row align-items-center justify-content-between ">
          <div className="col-md-6 text-start">
            <span className="subTitle"> Hi, I am</span>
            <h1 className="Title"> Divit Patidar</h1>
            <h2 className="subTitleBottom">{">"} Software Engineer</h2>
            <div className="codeHero mt-5">
              <SyntaxHighlighter language="javascript" style={dracula}>
                // complete/skip the game to continue website,
              </SyntaxHighlighter>
              <SyntaxHighlighter language="javascript" style={dracula}>
                // I'd Suggest play a little?
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
                href={
                  "https://docs.google.com/document/d/1XFflapJKAkUJK-GXP4_XW4pOZ37cabFFFdAYJRTMA18/edit?usp=sharing"
                }
                className="btn solidBtn solidBig"
              >
                _resume <i className="bi bi-file-earmark-person-fill"></i>
              </a>
              <a
                href={
                  "https://www.figma.com/proto/exOf5kS8Qfa8JNzRrsIG73/Divit---Design-Portfolio?type=design&node-id=1-2&t=yt4Z4O5349KpPmbh-1&scaling=min-zoom&page-id=0%3A1"
                }
                className="btn solidBtn solidBig"
              >
                _figma <i className="bi bi-file-earmark-person-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/divit-patidar-software-engineer/"
                className="btn solidBtn solidBig"
              >
                _linkedIn <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-end gameToe justify-content-center d-flex">
            <TicTacToe></TicTacToe>
          </div>
        </div>
      </div>
    </div>
  );
}
