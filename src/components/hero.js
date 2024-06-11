import React from "react";
import '../App.css'
import { Button } from "./button";
import './hero.css'
// import '../../public/videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <div className="hero-heading">
                {/* <div className="hero_one">
                <img className='hero_img' src='Frame3.png' alt='Travel Image' />
                </div> */}
                <div className="hero_two">
                <h1 className="heading">CBTALIA DESIGNS</h1>
                <p>Web Solutions Tailored to Your Vision</p>
                {/* <div className="hero-btns">
                    <Button 
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                    <Button 
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        WATCH TRAILER <i className="far fa-play-circle" />
                    </Button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection