/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import LinkedInImg from "../assets/LinkedIn";
import GitImg from "../assets/Github";
import ResumeImg from "../assets/Resume";
 
const Home = () => {
    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      autoplay: true,
      background: {
        color: {
          value: "#448EE4",
        },
        opacity: 0.85,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 60,
      particles: {
        attract: {
          enable: true,
          distance: 30,
        },
        color: {
          value: "#ffffff",
        },
        move:{
          angle: 0.5,
          enable: true,
          random: true,
          straight: false,
          //direction: "left",
          drift: {max: -0.3, min: -0.33},
          outModes: "destroy",
          speed: 0.01,
          vibrate: true,
        },
        number: {
          value: 0,
        },
        opacity: {
          value: 1
        },
        size: {
          value: { min: 20, max: 60 },
        },
      },
      emitters: {
        direct: "left",
        size: {
          width: 0,
          height: 5
        },
        position: {
          x: 102,
        },
        rate: {
          quantity: {min: 10, max: 50},
        },
        life: {
          count: 0,
          duration: 0.1,
          delay: {min: 1, max: 3}
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div>
        <Particles
          id="tsparticles"
          className="particles"
          // @ts-ignore
          options={options}
        />
        <div className="info">
          <h1 className="name">Everett White</h1>
          <h2 className="title">Software Engineer</h2>
          <div className="socials">
            <div className="imgBox">
              <a href="https://www.linkedin.com/in/everett-white/" target="_blank" rel="noreferrer">
                <LinkedInImg/>
              </a>
            </div>
            <div className="imgBox">
              <a href="https://github.com/MTEvrest" target="_blank" rel="noreferrer">
                <GitImg/>
              </a>
            </div>
            <div className="imgBox">
              <a href="https://drive.google.com/file/d/1zYiK3Se7ToLRNfX8rrjvBOnVh9mbIjzY/view?usp=sharing" target="_blank" rel="noreferrer"> 
                <ResumeImg/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
    return (
        <div>
            <h1>WIP Website of Everett</h1>
        </div>
    );
};
 
export default Home;