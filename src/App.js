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
