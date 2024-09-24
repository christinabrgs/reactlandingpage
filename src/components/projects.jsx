import React from "react";
import "./projects.css";
import Avatar from "../images/react.png";
import Vnt from "../images/VNT.png";
import Grounded from "../images/grounded.png";
import Community from "../images/community.png";
import WorkoutAi from "../images/workout.png";
import CoachedMockup from "../images/coachedmockup.png" 

export function Projects() {
  return (
    <div className="contain">
      <div className="portfolio-container">
        <div className="portfolio-column">

        <div className="project">
            <div class="image-container">
              <img src={CoachedMockup} />
            </div>
            <div class="text-container">
              <h3 style={{ paddingTop: 25 }}> Coached </h3>
              <h4> ReactNative App with Google Firebase, UI Design </h4>
            </div>
          </div>

          <div className="project">
            <div class="image-container">
              <a
                href="https://www.figma.com/design/G389jkPP6MbCHy0YCvUiFG/VNT?node-id=0-1"
                target="_blank"
              >
                <img src={Vnt} alt="vnt app design" />
              </a>
            </div>
            <div class="text-container">
              <h3 style={{ paddingTop: 25 }}> VNT </h3>
              <h4> Mobile App Design </h4>
            </div>
          </div>

          <div className="project">
            <div class="image-container">
              <a href="https://demo-day-vhdj.onrender.com/" target="_blank">
                <img src={WorkoutAi} alt="workout ai web app" />
              </a>
            </div>
            <div class="text-container">
              <h3 style={{ paddingTop: 25 }}> Workout AI App </h3>
              <h4> Fullstack App - Open Ai, JS, Node, Tailwind CSS </h4>
            </div>
          </div>
          
        </div>



        <div className="portfolio-column">
        <div className="project">
            <div class="image-container">
              <img src={Avatar} />
            </div>
            <div class="text-container">
              <h3 style={{ paddingTop: 25 }}> Explore PIT </h3>
              <h4> Web Development, Design, Branding </h4>
            </div>
          </div>

          <div className="project">
            <div class="image-container">
              <a
                href="https://www.figma.com/design/b58rE33Gavzzfulf1znnpJ/Yoga-App?node-id=0-1"
                target="_blank"
              >
                <img src={Grounded} />
              </a>
            </div>
            <div class="text-container">
              <h3 style={{ paddingTop: 25 }}> Grounded </h3>
              <h4> Mobile App Design </h4>
            </div>
          </div>

          <div className="project">
            <div class="image-container">
              <a
                href="https://community-catalyst-z5za.onrender.com/"
                target="_blank"
              >
                <img src={Community} alt="community catalyst web app" />
              </a>
            </div>
            <div class="text-container">
              <h3 style={{ paddingTop: 25 }}>Community Catalyst</h3>
              <h4> Fullstack App - Js, Node </h4>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
