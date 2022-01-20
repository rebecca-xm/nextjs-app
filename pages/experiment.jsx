import DefaultLayout from "../Layout";
import styles from "../styles/experiment.module.scss";
import Particles from "react-tsparticles";
import { useState } from "react";

export default function Experiment() {
    const [speed, setSpeed] = useState(5);
    const [opacity, setOpacity] = useState(0.5);
    const [size, setSize] = useState(5);
    const [shape, setShape] = useState("circle");

    return (
        <DefaultLayout>
            <div className={styles.panel}>
                <label>Speed</label>
                <input
                    type="range"
                    name=""
                    id=""
                    onChange={(e) => setSpeed(e.target.value / 10)}
                />
                <label>Opacity</label>
                <input
                    type="range"
                    name=""
                    id=""
                    onChange={(e) => setOpacity(e.target.value / 100)}
                />
                <label>Size</label>
                <input
                    type="range"
                    name=""
                    id=""
                    onChange={(e) => setSize(e.target.value / 5)}
                />
                <label>Shape</label>
                <select
                    type="range"
                    name=""
                    id=""
                    onChange={(e) => setShape(e.target.value)}
                >
                    <option value='square'>square</option>
                    <option value='circle'>circle</option>
                    <option value='star'>star</option>
                    <option value='triangle'>triangle</option>
                    <option value='polygon'>polygon</option>
                </select>
            </div>

            <Particles
                options={{
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        "color": {
                            "value":
                                ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                        },
                        links: {
                            "color": {
                                "value":
                                    ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                            },
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: speed,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: opacity,
                        },
                        shape: {
                            type: shape,
                        },
                        size: {
                            random: true,
                            value: size,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </DefaultLayout>
    )
}