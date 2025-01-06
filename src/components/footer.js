import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                    <Link
                            className='social-icon-link facebook'
                            to='https://calendly.com/christina-brgs/'
                            target='_blank'
                            aria-label='Calendar'
                        >
                            <i className='fa-solid fa-calendar-days' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='https://github.com/christinabrgs/'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className='fab fa-github' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='https://www.linkedin.com/in/christinatburgos/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div className='social-icons'>
                    <small className='website-rights'>All rights reserved @2025 Cbtalia. </small>
                        
                    </div>
                </div>
        </div>
    )
}

export default Footer