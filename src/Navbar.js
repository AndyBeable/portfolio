import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.ScrollLink;

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              AB
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  href='#about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='#work' className='nav-links' onClick={closeMobileMenu}>
                  Work
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
