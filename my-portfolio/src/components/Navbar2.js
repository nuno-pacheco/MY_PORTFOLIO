import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar2() {
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
                <Link
                  to="/aboutme"
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                <strong>About Me</strong>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to="/aboutmywork"
                  className='nav-links' 
                  onClick={closeMobileMenu}
                >
                <strong>About my Work</strong>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar2;