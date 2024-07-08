import React from "react";
import "./projects.css";
import Avatar from "../images/react.png";

export function Projects() {
  return (

    <div className="contain">

    <div className="portfolio-container">
      <div className="portfolio-column">
        <div className="project">
          <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}} > Avatar React </h3>
            <p> design </p>
          </div>
        </div>
        <div className="project">
        <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>
        <div className="project">
        <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>
      </div>



      <div className="portfolio-column">
        <div className="project">
        <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>

        <div className="project">
             <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React</h3>
            <p> design </p>
          </div>
        </div>

        <div className="project">
             <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>
      </div>




      <div className="portfolio-column">
        <div className="project">
             <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>

        <div className="project">
             <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>

        <div className="project">
             <div class="image-container">
            <img src={Avatar} />
          </div>
          <div class="text-container">
            <h3 style={{paddingTop: 15}}> Avatar React </h3>
            <p> design </p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
