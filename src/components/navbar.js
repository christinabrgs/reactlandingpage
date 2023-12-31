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
                        TRVL <i style={{ display: 'inline' }} className='fab fa-typo3' onClick={closeMobileMenu}></i>
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
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
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