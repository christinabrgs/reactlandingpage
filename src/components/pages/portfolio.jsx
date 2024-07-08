import React from "react";
import "../../App.css";
import Footer from "../footer";
import { Projects } from "../projects";

function Portfolio() {
  return (
    <>
      <div className="resume">
        <h1 className="services">PORTFOLIO</h1>
      </div>
      <Projects />
      <Footer />
    </>
  );
}

export default Portfolio;
