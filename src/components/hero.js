import React from "react";
import '../App.css'
import { Button } from "./button";
import './hero.css'
// import '../../public/videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div className="hero-heading">
                <h1 className="">ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
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
    )
}

export default HeroSection