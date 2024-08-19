import React from "react";
import '../App.css'
import { Button } from "./button";
import './hero.css'
import Logo from '../images/cbtalia.png'
import Logo2 from '../images/Frame4.png'
import PictureOfMe from '../images/Vector.jpg'

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
                    <div className="two_content">
                        <h2 style={{ fontSize: 32, color: '#ffaf7a' }}>Hello, I'm Christina</h2>
                        <h1 style={{ lineHeight: 1.2, color: 'white' }}> I'm a UI Designer and Developer</h1>
                        <div className="hero-btns">
                            <Button
                                className='btns'
                                buttonStyle='btn---outline'
                                buttonSize='btn--large'>
                                Contact
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection