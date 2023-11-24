import {React} from "react";
import "./styles.css";
import Cover from "./components/cover";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/Project";
import Footer from "./components/footer";
import Project from './components/config/Projects.json'

export default function App() {

  return (
    <div className="App">
      <Cover />
      <About />
      <Skills />
      <Projects resumeProjects={Project.projects} resumeBasicInfo={Project.basic_info} />
      <Footer />
      
    </div>
  );
}
