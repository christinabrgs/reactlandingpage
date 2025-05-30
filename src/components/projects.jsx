import React from "react";
import "./projects.css";
import Explore from "../images/pitposter.png";
import Vnt from "../images/VNT.png";
import Grounded from "../images/grounded.png";
import Community from "../images/community.png";
import WorkoutAi from "../images/workoutapp.png";
import CoachedMockup from "../images/coached.jpg";
import { Link } from "react-router-dom";

export function Projects() {
  const handleProjectClick = (type, link) => {
    if (type === 'external') {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Internal navigation handled by Link component
      console.log(`Navigate to: ${link}`);
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-subtitle">A showcase of my recent work in web development, mobile apps, and design</p>
        </div>
        
        <div className="projects-grid">
          <Link to="/coached" className="project-card">
            <div className="project-image-wrapper">
              <img src={CoachedMockup} alt="Coached" className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Coached</h3>
              <p className="project-description">ReactNative Mobile App with Google Firebase, UI Design</p>
            </div>
          </Link>

          <Link to="/explore" className="project-card">
            <div className="project-image-wrapper">
              <img src={Explore} alt="Explore PIT" className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Explore PIT</h3>
              <p className="project-description">Web Development, Design, Branding</p>
            </div>
          </Link>

          <a 
            href="https://demo-day-vhdj.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={WorkoutAi} alt="Workout AI App" className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Workout AI App</h3>
              <p className="project-description">Fullstack App - Open AI, JS, Node, Tailwind CSS</p>
            </div>
          </a>

          <a 
            href="https://community-catalyst-z5za.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={Community} alt="Community Catalyst" className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Community Catalyst</h3>
              <p className="project-description">Fullstack App - JS, Node</p>
            </div>
          </a>

          <a 
            href="https://www.figma.com/design/G389jkPP6MbCHy0YCvUiFG/VNT?node-id=0-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={Vnt} alt="VNT" className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">VNT</h3>
              <p className="project-description">Mobile App Design</p>
            </div>
          </a>

          <a 
            href="https://www.figma.com/design/b58rE33Gavzzfulf1znnpJ/Yoga-App?node-id=0-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img src={Grounded} alt="Grounded" className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">Grounded</h3>
              <p className="project-description">Mobile App Design</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}