import React from "react";
import '../App.css'
import { Button } from "./button";
import './hero.css'
import Logo from '../images/cbtalia.png'
import Logo2 from '../images/Frame4.png'
import PictureOfMe from '../images/portfolioimage.png'

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <div className="hero-heading">
                <div className="hero_one">
                <img className='hero_img' src={PictureOfMe} alt='Travel Image' />
                </div>
                <div className="hero_two">

                    {/* <div className="heading-container">
                        <div class="overflow-hidden">
                            <h1 className="heading drop-in">CBTALIA</h1>
                        </div>
                        <div class="overflow-hidden">
                        
                        </div>
                        <div class="overflow-hidden">
                        <h1 className="heading drop-in-2">DESIGNS</h1>
                        </div>
                    </div> */}
                    
                    <p>Web Solutions Tailored to Your Vision</p>

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