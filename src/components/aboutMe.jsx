import React from "react";
import "../components/aboutMe.css";
import Collage from "../images/collage.jpg";
import Bunny from "../images/measbunny.jpg";
import useIntersectionObserver from "../hooks/useIsVisible";

function AboutMe() {
  const { isVisible, domRef } = useIntersectionObserver();


  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <div className="about-container fade-in-content">
        <div className="about-section">
          <div className="about-me">
            <h1 style={{ color: "#FFB07A" }}>ABOUT ME</h1>
            <p style={{ color: "#3e5780", fontStyle: "italic", fontSize: '1rem' }}>
              {" "}
              I’m passionate about turning ideas into reality through thoughtful design and development. 
              With experience in full-stack app development and a keen eye for design, I blend technical skill with a user-focused approach to craft meaningful experiences. 
              My background in IT and UX provides me with a unique perspective that drives creative and effective solutions.{" "}
              <br /><br />
              Outside of work, you'll find me savoring a warm cup of coffee, breaking personal records at the gym (deadlift PR 285, bench PR 145), or exploring my artistic side. 
              I'm also passionate about staying ahead of the curve—learning new technologies and building personal apps to sharpen my skills and push my limits.          
              </p>
          </div>
        </div>
        <div className="about-section">
          <img className="about-picture" src={Collage} alt='me' />
          <img className="mobile-picture" src={Bunny} alt='me-mobile' />

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
