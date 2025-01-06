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
       <h2> Designed. Branded. Developed </h2>
      </div>
     <div className="case-study-orientation" style={{margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginTop: 100, marginBottom: 100}}>
     <img style={{height: '100%', margin: 'auto'}} src={Explorepit} alt='Case Study' />
     <img style={{height: '100%', margin: 'auto', borderStyle: 'none'}} src={Explorepittwo} alt='Case Study' />
     <img style={{height: '100%', margin: 'auto'}} src={Explorepitthree} alt='Case Study' />
       </div>
     <Footer />
   </>
 );
}


export default caseStudy;







