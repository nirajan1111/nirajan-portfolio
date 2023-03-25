// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function App() {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

//   return (
//     <>
//       <div className="container my-3">
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           loaded={particlesLoaded}
//           options={{
//             background: {
//               color: {
//                 value: "#0d47a1",
//               },
//             },
//             fpsLimit: 120,
//             interactivity: {
//               events: {
//                 onClick: {
//                   enable: true,
//                   mode: "push",
//                 },
//                 onHover: {
//                   enable: true,
//                   mode: "repulse",
//                 },
//                 resize: true,
//               },
//               modes: {
//                 push: {
//                   quantity: 4,
//                 },
//                 repulse: {
//                   distance: 200,
//                   duration: 0.4,
//                 },
//               },
//             },
//             particles: {
//               color: {
//                 value: "#ffffff",
//               },
//               links: {
//                 color: "#ffffff",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1,
//               },
//               collisions: {
//                 enable: true,
//               },
//               move: {
//                 directions: "none",
//                 enable: true,
//                 outModes: {
//                   default: "bounce",
//                 },
//                 random: false,
//                 speed: 6,
//                 straight: false,
//               },
//               number: {
//                 density: {
//                   enable: true,
//                   area: 800,
//                 },
//                 value: 80,
//               },
//               opacity: {
//                 value: 0.5,
//               },
//               shape: {
//                 type: "circle",
//               },
//               size: {
//                 value: { min: 1, max: 5 },
//               },
//             },
//             detectRetina: true,
//           }}
//         >
//           <div className="title"> My portfolio is on the way</div>
//         </Particles>
//       </div>
//       <div>dfhdsjfh</div>
//     </>
//   );
// }

// import React from "react";
// import ParticleBackground from "./components/ParticleBackground";

// export default function App() {
//   return (
//     <div>
//       <ParticleBackground />
//     </div>
//   );
// }
import React from "react";
import "./styles.css";
import Cover from "./components/cover";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Cover />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
