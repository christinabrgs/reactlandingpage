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
                <div className="hero_one">
                <img className='hero_img' src='Frame3.png' alt='Travel Image' />
                </div>
                <div className="hero_two">
                <h1 className="">CTB SOLUTIONS & CONSULTANCY</h1>
                <p>As a dedicated software developer, I am passionate about utilizing technology to improve the lives of others. I am committed to leveraging my experience in both IT and UX to excel in what I do.</p>
                <br></br>
                <div className="hero-btns">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection