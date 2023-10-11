import React from "react";
import '../../App.css'
import HeroSection from "../hero";
import Cards from "../Cards";
import Footer from "../footer";

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home