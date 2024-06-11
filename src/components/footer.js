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
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fa-solid fa-calendar-days' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-github' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div class='social-icons'>
                    <small class='website-rights'>All rights reserved @2023 Cbtalia. </small>
                        
                    </div>
                </div>
        </div>
    )
}

export default Footer