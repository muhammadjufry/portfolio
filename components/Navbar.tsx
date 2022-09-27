import React, { useState, useEffect } from 'react';

type Props = {};

export default function Navbar({}: Props) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = (e: any) => {
    let destination = e.target.hash;
    let elementDestination = document.querySelector(destination);
    window.scrollTo({
      top: elementDestination.offsetTop - 180,
      behavior: 'smooth',
    });
    setMenuToggle(!menuToggle);
    e.preventDefault();
  };
  return (
    <nav className="animate__animated animate__fadeInDown">
      <div className="nav-content">
        <a href="#" className="logo">
          Muhammad
        </a>
        <ul className={menuToggle ? 'active' : ''}>
          <li onClick={(e) => handleClick(e)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#about">About</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#resume">Resume</a>
          </li>
          <li onClick={(e) => handleClick(e)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menuToggle" onClick={() => setMenuToggle(!menuToggle)}>
          <img
            src="/images/icons/bars.svg"
            className={!menuToggle ? 'bars active' : 'bars'}
            width="26"
            height="26"
            alt="barsIcon"
          />
          <img
            src="/images/icons/cross.svg"
            className={!menuToggle ? 'cross' : 'cross active'}
            alt="crossIcon"
            width="26"
            height="26"
          />
        </div>
      </div>
    </nav>
  );
}
