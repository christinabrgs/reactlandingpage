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
              I'm passionate about transforming ideas into reality through thoughtful design and development. 
              I combine technical expertise with a user-centered approach to create meaningful experiences. 
              With a background in IT and UX, I bring a unique perspective that enables me to build creative yet effective solutions.{" "}
              <br /><br />
              Outside of work, you’ll find me savoring a good cup of coffee, pushing my limits in the gym (deadlift PR: 285, bench PR: 145), 
              or exploring my artistic side. I’m always eager to learn—staying ahead of the curve by experimenting with new technologies and building personal projects to sharpen my skills.          
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
