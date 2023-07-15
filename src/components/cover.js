import "../styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ExampleDoc from "./time.pdf";
import Typed from "typed.js";
import MyComponent from "./typed";

export default function Cover() {
  // var typed = new Typed("#typed", {
  //   strings: ["Fullstack Web-Developer", "Machine Learning Expert"],
  //   typeSpeed: 50,
  //   backSpeed: 40,
  //   backDelay: 1800,
  //   smartBackspace: !0,
  //   loop: !0,
  //   showCursor: !0,
  //   contentType: null,
  // });
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="particles-js">


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
        </div>
      </div>
      <a className="down" href="#about" data-scroll>
        <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
      </a>

    </div >
  );
}
