import React from "react";
import '../../App.css'
import HeroSection from "../hero";
import Services from "../services";
import Footer from "../footer";
import AboutMe from "../aboutMe"
import CaseStudies from "../caseStudies";

function Home() {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Services />
            <CaseStudies />
            <Footer />
        </>
    )
}

export default Home