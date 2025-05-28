import React from "react";
import "../../App.css";
import Footer from "../footer";
import Coachone from '../../images/COACH 1.svg'
import Coachtwo from '../../images/COACH 2.svg'
import Coachthree from '../../images/COACH 3.svg'




function Coached() {
  return (
    <>
      <div className="resume">
        <h1 className="services">CASE STUDIES</h1>
      </div>
      <div className="projects_headline" style={{ display: 'flex', flexDirection: 'column' }}>
        <h1> Coached </h1>
        <hr style={{  width: '50%', margin: 'auto' }} />
        <h2> Mobile App Development. 
          <a href="https://www.figma.com/design/VsNK1IFg2EU7932WO1PEzM/Coached-Screen-Shots-%2F-Redesign?node-id=0-1&t=0EyiRs0N7T2rtuZb-1">
            <i> Designs.</i>
          </a>
        </h2>
      </div>
      <div className="case-study-orientation" style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginTop: 100, marginBottom: 100 }}>
        <img style={{ height: '100%', margin: 'auto' }} src={Coachone} alt='Case Study' />
        <img style={{ height: '100%', margin: 'auto', borderStyle: 'none' }} src={Coachtwo} alt='Case Study' />
        <img style={{ height: '100%', margin: 'auto' }} src={Coachthree} alt='Case Study' />
      </div>
      <Footer />
    </>
  );
}


export default Coached;