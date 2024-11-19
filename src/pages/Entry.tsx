/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useMemo } from "react";
import LinkedInImg from "../assets/LinkedIn";
import GitImg from "../assets/Github";
import ResumeImg from "../assets/Resume";
import Coin from '../assets/imgs/ECoin.png';
import BackgroundParticles from "../components/BackgroundParticles";

const Entry = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const cloudBackground = useMemo(() => {
    setPosition({x: 0, y: 0});
    return <BackgroundParticles/>
  }, [])

  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      //className = "entryBackground"
    >
      {cloudBackground}
      <div className="info">
        <h1 className="name">Everett White</h1>
        <h2 className="title">Frontend Engineer</h2>
        <div className="socials">
          <div>
            <div className="imgBox">
              <a
                href="https://www.linkedin.com/in/everett-white/"
                target="_blank"
                rel="noreferrer"
                aria-labelledby="linkedinLabel"
              >
                <LinkedInImg />
              </a>
            </div>
            <p id="linkedinLabel">LinkedIn</p>
          </div>
          <div>
            <div className="imgBox">
              <a
                href="https://github.com/MTEvrest"
                target="_blank"
                rel="noreferrer"
                aria-labelledby="githubLabel"
              >
                <GitImg />
              </a>
            </div>
            <p id="githubLabel">Github</p>
          </div>
          <div>
            <div className="imgBox">
              <a
                href="https://drive.google.com/file/d/1zYiK3Se7ToLRNfX8rrjvBOnVh9mbIjzY/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                aria-labelledby="resumeLabel"
              >
                <ResumeImg />
              </a>
            </div>
            <p id="resumeLabel">Resume</p>
          </div>
        </div>

        {  
          false &&
          <img
          style={{transform: `translate(${position.x}px, ${position.y}px)`, position: 'absolute', left: -32,
      top: -32,}} 
          src={Coin}
    />}
      </div>
    </div>
  );
};

export default Entry;
