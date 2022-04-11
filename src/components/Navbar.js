import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useWindowScroll } from 'react-use';



function Navbar() {

  const { y: pageYOffset } = useWindowScroll();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior:'smooth'});

  const aboutSection = useRef(null);

  const goToAboutSection = () => window.scrollTo({ top: 900, behavior: 'smooth'});

  const goToServices = () => window.scrollTo({ top: 1750, behavior: 'smooth'});

  const goToTestimonials = () => window.scrollTo({ top: 3600, behavior: 'smooth'});

  const goToContact = () => window.scrollTo({ top: 5000, behavior: 'smooth'});

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            McGovern Finance Solutions
            <p> <i> MCGFS </i> </p>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}   onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                to='/'
                onClick={closeMobileMenu}
                onClick={goToAboutSection}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                onClick={goToServices}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                onClick={goToTestimonials}

              >
                Testimonials
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                onClick={goToContact}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
