import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Styled } from 'styled-components'
import { Button } from './button'
import './navbar.css'
import Logo from '../images/Frame8.png'

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


    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }



    return (
        <>
            <nav className={navbarClasses.join(' ')}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='logo' src={Logo} alt="company logo" />
                        {/* <i style={{ display: 'inline' }} className='fab fa-typo3' onClick={closeMobileMenu}></i> */}
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}> </i>
                    </div>

                    <div className="links-container">
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href="/SOFTWAREDEVELOPMENT.pdf" target="_blank" rel="noreferrer" download="Christina-Resume.pdf" className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button className='nav-links' buttonStyle='btn--outline'>Contact</Button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar