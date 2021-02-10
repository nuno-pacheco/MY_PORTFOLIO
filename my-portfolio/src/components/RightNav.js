import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(255, 195, 11, 0.9);
    color: #fff;
    position: fixed;
    z-index: 1;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 40vh;
    width: 50vw;
    margin-top: -1vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>

        <li className="nav__link"><Link to="/">Home</Link></li>
        <li className="nav__link"><Link to="/aboutme">About Me</Link></li>
        <li className="nav__link"><Link to="/aboutmywork">About my Work</Link></li>

    </Ul>
  )
}

export default RightNav