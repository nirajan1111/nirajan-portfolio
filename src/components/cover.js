import "../styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ExampleDoc from "./time.pdf";
import Typed from "typed.js";
import MyComponent from "./typed";

export default function Cover() {
 
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="particles-js">

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
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
            color: {
              value: "b4d5dc",
            },
            links: {
              color: "#ffffff",
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
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
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
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />


      <a a
        id="js-download"
        className="download"
        href="https://drive.google.com/file/d/1Lz0m8eZIeG7KRce9CpPdTUpVbX7a6euf/view?usp=drive_link"
        target="_blank"
      ></a>

      <div className="header">
        <h1>
          <span className="site-title">NIRAJAN SAH</span>
          <div className="site-description">
            <MyComponent />
          </div>
        </h1>

        <div className="header-links">
          <a className="link" href="#about" data-scroll>
            About Me
          </a>
          <a className="link" href="#skills" data-scroll>
            Skills
          </a>
          <a className="link" href="#project" data-scroll>
          Project
        </a>
        </div>
      </div>
      <a className="down" href="#about" data-scroll>
        <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
      </a>

    </div >
  );
}
