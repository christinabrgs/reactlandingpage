import React from "react";
import "../../App.css";
import Footer from "../footer";
import Explorepit from '../../images/explorepit.svg'
import Explorepittwo from '../../images/explorepittwo.svg'
import Explorepitthree from '../../images/explorepitthree.svg'


function caseStudy() {
  return (
    <>
      <div className="resume">
        <h1 className="services">CASE STUDIES</h1>
      </div>
      <div className="projects_headline" style={{display: 'flex', flexDirection: 'column', padding: 0}}> 
        <h1> EXPLORE PIT </h1>
        <hr/>
        <h2> Website . Designs </h2>
       </div>
      <div style={{margin: 'auto', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 100, marginBottom: 100}}>
      <img style={{width: '27%', height: '100%', margin: 50}} src={Explorepit} alt='Case Study Image' />
      <img style={{width: '27%', height: '100%', margin: 50}} src={Explorepittwo} alt='Case Study Image' />
      <img style={{width: '27%', height: '100%', margin: 50}} src={Explorepitthree} alt='Case Study Image' />
        </div>
      <Footer />
    </>
  );
}

export default caseStudy;
