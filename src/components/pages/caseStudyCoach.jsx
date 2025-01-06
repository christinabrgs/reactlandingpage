import React from "react";
import "../../App.css";
import Footer from "../footer";
import Coachone from '../../images/coachedcs.svg'
import Coachtwo from '../../images/coachedcstwo.svg'




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
     <div className="case-study-orientation case-two"  style={{margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginTop: 100, marginBottom: 100}}>
     <img style={{height: '100%', margin: 'auto'}} src={Coachone} alt='Case Study' />
     <img style={{height: '100%', margin: 'auto', borderStyle: 'none'}} src={Coachtwo} alt='Case Study' />
       </div>
     <Footer />
   </>
 );
}


export default caseStudy;