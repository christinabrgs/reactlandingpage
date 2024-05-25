import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Styled } from 'styled-components'
import { Button } from './button'
import './navbar.css'

function Navbar() {

    const [click, setclick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setclick(!click)

    const closeMobileMenu = () => setclick(false)

    const ShowButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect  (() => {
        ShowButton()
    }, [])

    window.addEventListener('resize', ShowButton)

    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        CBTALIA 
                        {/* <i style={{ display: 'inline' }} className='fab fa-typo3' onClick={closeMobileMenu}></i> */}
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar