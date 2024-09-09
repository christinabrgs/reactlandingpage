import React from 'react'
import './footer.css'
import { Button } from './button'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
                <div class='social-media-wrap'>
                    <div class='social-icons'>
                    <Link
                            class='social-icon-link facebook'
                            to='https://calendly.com/christina-brgs/'
                            target='_blank'
                            aria-label='Calendar'
                        >
                            <i class='fa-solid fa-calendar-days' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='https://github.com/christinabrgs/'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i class='fab fa-github' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='https://www.linkedin.com/in/christinatburgos/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div class='social-icons'>
                    <small class='website-rights'>All rights reserved @2024 Cbtalia. </small>
                        
                    </div>
                </div>
        </div>
    )
}

export default Footer