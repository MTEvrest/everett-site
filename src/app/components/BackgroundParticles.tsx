"use client"

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
//import GitImg from "../assets/Github";

const BackgroundParticles = () => {

    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
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
            color: {
                value: "#ffffff",
            },
            move: {
                enable: true,
                straight: true,
                direction: "left",
                outModes: "destroy",
                speed: {max: 1, min: 0.5},
            },
            number: {
                value: 0,
            },
            opacity: {
                value: 1,
            },
            shape:{
                type: "images",
                options: {
                    images: {
                        src: "/assets/cloud1.svg",
                        width: 210,
                        height: 297,
                    }
                }
            },
            size: {
                value: {min: 100, max: 300},
            },
        },
        emitters: [
            {
                direction: "left",
                size: {
                    width: 0,
                    height: 5,
                },
                position: {
                    x: 105,
                },
                rate: {
                    quantity: 1,
                },
                life: {
                    count: 0,
                    duration: 0.1,
                    delay: { min: 3, max: 6 },
                },
            },
        ],
        detectRetina: true,
    }), []);
    
    return (   
        init ?
        <Particles
            id="tsparticles"
            className="particles"
            // @ts-expect-error - TSParticles not fully compatiable with typescript
            options={options}
        />
        :
        <h1>Loading</h1> 
    )
}

export default BackgroundParticles