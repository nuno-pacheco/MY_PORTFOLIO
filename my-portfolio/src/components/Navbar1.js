import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from "react-scroll";


function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <strong>Home</strong>
                </Link>
              </li>
              <li className='nav-item'>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy="true"
                  smoth={true}
                  offset={-70}
                  duration={1000} 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                <strong>About Me</strong>
                </ScrollLink>
              </li>
              <li className='nav-item'>
                <ScrollLink
                  activeClass="active"
                  to="skills"
                  spy="true"
                  smoth={true}
                  offset={-70}
                  duration={1000} 
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                <strong>About my Work</strong>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;