import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import generateClouds from "../helpers/cloudGenerator";
//Game theme throughout website
//Take insipration from
//https://aakash-sharma.netlify.app/
//https://ashleighsimonelli.co.uk/
//https://www.adamalston.com/

//First based has a light blue sky like backgroun with ts-particle effect simluating clouds
//Name
//Socials
//Job status
//big enticing fun looking enter button
 
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

  const particlesLoaded = (container: Container | undefined) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoplay: true,
      background: {
        color: {
          value: "#448EE4",
        },
        opacity: 0.85,
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
      emitters: generateClouds(),
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        //@ts-ignore
        options={options}
      />
    );
  }
    return (
        <div>
            <h1>WIP Website of Everett</h1>
        </div>
    );
};
 
export default Home;