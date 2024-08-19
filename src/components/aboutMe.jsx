import React from 'react'
import CardItem from './CardItem'
import '../components/aboutMe.css'
import Collage from '../images/collage.png'

function AboutMe () {
    return (
        <div className='about-container'>
            <div className='about-section'>
                <div className="about-me">
                <h1 style={{color: '#FFB07A'}}>ABOUT ME</h1>
                <p style={{color: 'black'}}> As a dedicated software developer, I am passionate about utilizing technology to improve the lives of others. I am committed to leveraging my experience in both IT and UX to excel in my work. </p>
                </div>
            </div>
            <div className='about-section'>
                <img className='about-picture' src={Collage} />
            </div>
        </div>

    )
}

export default AboutMe